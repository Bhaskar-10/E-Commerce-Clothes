import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import ClothesScreen from './screens/ClothesScreen';
import ClothesDetailScreen from './screens/ClothesDetailScreen';
import CartScreen from './screens/CartScreen';
import CartIcon from './components/CartIcon';
import { CartProvider } from './context';
import { useCart } from './context';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const LaptopStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Clothes" component={ClothesScreen} />
      <Stack.Screen name="ClothesDetail" component={ClothesDetailScreen} />
    </Stack.Navigator>
  );
};

function Tabs() {
  const {cartItems} = useCart()
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Store" component={LaptopStack} options={{ headerShown: false,tabBarIcon: ({ color, size }) => <MaterialIcons name="store" size={24} color="black" />, }} />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: ({ color, size }) => <CartIcon count={cartItems.length} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Tabs />
    </CartProvider>
  );
}
