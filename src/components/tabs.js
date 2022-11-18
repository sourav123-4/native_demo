import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Home from './Home';
import Account from './Account';
import wishlist from './wishlist';
import Bag from './Bag';
const Tab = createBottomTabNavigator();

function Tabs({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === 'Ajio') {
            iconName = 'home';
            size = focused ? 22 : 20;
            color = focused ? 'black' : 'grey'
          } else if (route.name === 'Account') {
            iconName = 'user';
            size = focused ? 22 : 20;
            color = focused ? 'black' : 'grey'
          } else if (route.name === 'Wishlist') {
            iconName = 'heart';
            size = focused ? 22 : 20;
            color = focused ? 'black' : 'grey'
          } else if (route.name === 'Bag') {
            iconName = 'shopping-bag';
            size = focused ? 22 : 20;
            color = focused ? 'black' : 'grey'
          }
          return (
            <FontAwesome5 name={iconName} size={size} color={color} />
          )
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingTop: 10,
          width: '100%'
        }
      })}
    >
      <Tab.Screen
        name='Ajio'
        component={Home}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Wishlist'
        component={wishlist} options={{ headerShown: false }} />
      <Tab.Screen
        name='Bag'
        component={Bag} options={{ headerShown: false }} />
      <Tab.Screen
        options={{ headerShown: false }}
        name='Account'
        component={Account} />
    </Tab.Navigator>
  )
}

export default Tabs