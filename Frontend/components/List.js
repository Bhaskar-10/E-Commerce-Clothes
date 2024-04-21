import React from "react";
import { StyleSheet, View, FlatList } from "react-native";


const List = (props) => {
    const { data, navigation } = props;
    

    return (
        <View style={styles.listContainer}>
            <FlatList
                data={data}
                renderItem={({ item }) => props.renderElement({ item, props })}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        display: "flex",
        flexDirection: "column",
    },
});

export default List;
