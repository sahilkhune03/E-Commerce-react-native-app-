import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import ChocolateScreen from './screens/ChocolateScreen';
import ChocolateDetailScreen from './screens/ChocolateDetailScreen';
import CartScreen from './screens/CartScreen';
// import Login from './screens/Login';
// import Register from './screens/Register';
import CartIcon from './components/CartIcon';
import { CartProvider } from './context';
import { useCart } from './context';
import { MaterialIcons } from '@expo/vector-icons';
// import StackNavigator from "./navigation/StackNavigator";
// import LoginScreen from './screens/Login';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const ChocolateStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chocolate" component={ChocolateScreen} />
      <Stack.Screen name="ChocolateDetail" component={ChocolateDetailScreen} />
      {/* <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="register" component={Register} /> */}
    </Stack.Navigator>
  );
};

function Tabs() {
  const {cartItems} = useCart()
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="chocolate" component={ChocolateStack} options={{ headerShown: false,tabBarIcon: ({ color, size }) => <MaterialIcons name="Chocolate" size={24} color="black" />, }} />
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
