import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import List from '../components/List';
import axios from 'axios';
import renderClothes from '../components/renderClothes';

const ClothesScreen = (props) => {


  const [itemData, setItemData] = useState([])
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.BACKEND_URL}/api/products`);
        const info = response.data;
        setFilteredData(info);
        setItemData(info)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query == '') {
      setFilteredData(itemData)
    }
    else {
      const filtered = itemData.filter(laptop =>
        laptop.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }
    
  };

  return (
    <View>
      <TextInput
        style={styles.search}
        placeholder="Search Clothes..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <List data={filteredData} navigation={props.navigation} renderElement={renderClothes} />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    width: "85%",
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 10,
    backgroundColor: '#ccc'
  }
});

export default ClothesScreen;
