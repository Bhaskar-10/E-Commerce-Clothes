import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


const renderCart = ({item, props}) => {
    
    const { navigation, handleAddItem,handleRemoveItem, handleDeleteItem } = props
    const handlePress = () => {
        navigation.navigate('ClothesDetail', { item });
    }

    

    return (
        <TouchableOpacity onPress={handlePress}>
            <View>
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
                <View style={styles.itemQuantity}>
                    <TouchableOpacity onPress={()=>handleAddItem(item)}>
                        <Text style={styles.buyButton}>Add</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>Quantity : {item.quantity}</Text>
                    <TouchableOpacity onPress={()=>handleRemoveItem(item)}>
                        <Text style={styles.cartButton}>Remove</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleDeleteItem(item)}>
                        <MaterialIcons name="delete" size={24} color="red"/>
                    </TouchableOpacity>
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
    },
    itemQuantity: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        padding: 10,
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
    buyButton: {
        backgroundColor: '#FF9900',
        paddingVertical: 5,
        paddingHorizontal: 30,
        borderRadius: 5,
        color: "white"
    },
    cartButton: {
        backgroundColor: '#0066c0',
        paddingVertical: 5,
        paddingHorizontal: 30,
        borderRadius: 5,
        color: "white"
    },
    quantity: {
        fontSize: 16,
        fontWeight: "bold",
    },
    deleteButton:{

    }
});

export default renderCart;
