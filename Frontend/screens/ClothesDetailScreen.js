import React from 'react';
import { StyleSheet, Text, View, Image, Linking, ScrollView, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-ratings';
import { useCart } from '../context';

const ClothesDetailScreen = ({ route }) => {
  const { name, url, image, stars, total_reviews, price_string, asin } = route.params.item;


  const { addItemToCart } = useCart();

  const handlePress = () => {
    addItemToCart(route.params.item);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.detailsContainer}>
          <Text style={styles.modelName}>{name}</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.price}>{price_string}</Text>
            <View style={styles.ratingContainer}>
              <Rating readonly={true} imageSize={20} showRating={false} startingValue={stars} style={{marginTop:20}}/>
              <Text style={styles.reviews}>{total_reviews}</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => Linking.openURL(url)} style={styles.buyButton}>
              <Text style={styles.buttonText}>Buy Now</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress} style={styles.cartButton}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    resizeMode: 'contain'
  },
  detailsContainer: {
    alignItems: 'center',
  },
  modelName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems:'center',
    width:"90%"
  },
  ratingContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    alignItems:'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    flexWrap: 'wrap',
    marginTop: 20,
    gap: 30
  },
  buyButton: {
    backgroundColor: '#FF9900',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  cartButton: {
    backgroundColor: '#0066c0',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviews: {
    fontSize: 20,
    
  },
  price: {
    fontSize: 20,
    color:'red',
    fontWeight:"600"
  },
  rating: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default ClothesDetailScreen;
