import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CartIcon = ({ count }) => {
  return (
    <View style={{ position: 'relative' }}>
      <MaterialIcons name="shopping-cart" size={24} color="black" />
      {count > 0 && (
        <View
          style={{
            position: 'absolute',
            top: -5,
            right: -10,
            backgroundColor: 'red',
            borderRadius: 10,
            paddingVertical: 2,
            paddingHorizontal: 6,
          }}
        >
          <Text style={{ color: 'white', fontSize: 12 }}>{count}</Text>
        </View>
      )}
    </View>
  );
};

export default CartIcon;
