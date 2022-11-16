import { TouchableOpacity } from 'react-native'
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
          title: 'Ajio',
          headerShown: false,
          headerLeft: ({ color, size, focused }) => {
            return (
              <TouchableOpacity >
                <FontAwesome5 name='bars' size={20} style={{ marginLeft: 20 }} />
              </TouchableOpacity>
            )
          }
        }}
      />
      <Tab.Screen
        name='Wishlist'
        component={wishlist} />
      <Tab.Screen
        name='Bag'
        component={Bag} />
      <Tab.Screen
        options={{ headerTitle: 'My Account' }}
        name='Account'
        component={Account} />
    </Tab.Navigator>
  )
}

export default Tabs