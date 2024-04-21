import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const renderClothes = ({item, props}) => {
    const { navigation } = props
    const handlePress = () =>{
        navigation.navigate('ClothesDetail', {item});
    }
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.item}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.title} numberOfLines={3} ellipsizeMode="tail">
                        {item.name}
                    </Text>
                    <Text style={styles.price}>{item.price_string}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    imageContainer: {
        width: 100,
        height: 100,
        marginRight: 10,
        backgroundColor: "#f0f0f0",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    price: {
        fontSize: 14,
        color: "#007bff",
    },
});

export default renderClothes;
