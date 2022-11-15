import { useEffect, useState } from 'react';
// import Flex from './flex';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import Login from './src/components/Login';
import SignUp from './src/components/SignUp';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useDrawerStatus } from '@react-navigation/drawer';
import {  NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable,StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Home from './src/components/Home';
import Account from './src/components/Account';
import wishlist from './src/components/wishlist';
import Bag from './src/components/Bag';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
function ScreenA({navigation}){
  const onPressHandler =()=>{
    if(useDrawerStatus === 'open'){
      navigation.closeDrawer();
    }else{
      navigation.openDrawer();
    }
  }
  return <View style={style.body}>
    <Pressable onPress={onPressHandler} style={style.PressableButton}>
    <Text>Click Me To Enter Screen B</Text>
    </Pressable>
  </View>
}

const Tabs = ()=>(
  <Tab.Navigator
          screenOptions = {({ route }) =>({
            tabBarIcon: ({ focused, size, color})=>{
              let iconName;
              if(route.name === 'Home'){
                iconName='home';
                size = focused ? 25 : 20;
                color = focused ? 'black' : 'grey'
              }else if(route.name === 'Account'){
                iconName='user';
                size = focused ? 25 : 20;
                color = focused ? 'black' : 'grey'
              }else if(route.name === 'Wishlist'){
                iconName='heart';
                size = focused ? 25 : 20;
                color = focused ? 'black' : 'grey'
              }else if(route.name === 'Bag'){
                iconName='shopping-bag';
                size = focused ? 25 : 20;
                color = focused ? 'black' : 'grey'
              }
              return (
                <FontAwesome5 name={iconName} size={size} color={color}/>
              )
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle:{
              paddingTop:10,
              width:'100%'
            }
          })}
        >
        <Tab.Screen
          name='Home'
          component={Home}>
        </Tab.Screen>
        <Tab.Screen 
          name='Wishlist'
          component={wishlist} />
        <Tab.Screen 
          name='Bag'
          component={Bag} />
        <Tab.Screen 
          options={{ headerTitle:'My Account'}}
          name='Account'
          component={Account} />
      </Tab.Navigator>
)

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        {/* <Stack.Navigator >
          <Stack.Screen 
            name='Home' 
            component={Home}
            options={{ title: 'Ajio' }}/>
          <Stack.Screen 
            name='Screen_B'
            component={ScreenB}/>
        </Stack.Navigator> */}
        <Drawer.Navigator>
          <Drawer.Screen name='Ajio' component={Tabs} />
        </Drawer.Navigator>
      </NavigationContainer>
   </Provider>
  );
}

const style = StyleSheet.create({
  body:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  PressableButton:{
    backgroundColor:"#008855",
    padding:10,
    borderRadius:10
  }
})