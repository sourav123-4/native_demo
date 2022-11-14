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
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
function ScreenA({navigation}){
  const onPressHandler =()=>{
    // navigation.navigate('Screen_B')
    // navigation.openDrawer();
    if(useDrawerStatus === 'open'){
      navigation.closeDrawer();
    }else{
      navigation.openDrawer();
    }
    // navigation.toggleDrawer();
  }
  return <View style={style.body}>
    <Pressable onPress={onPressHandler} style={style.PressableButton}>
    <Text>Click Me To Enter Screen B</Text>
    </Pressable>
  </View>
}

function ScreenB({navigation}){
  const onHanlePress = ()=>{
    navigation.navigate('Screen_A')
  }
  return <View style={style.body}>
    <Text>Screen B</Text>
    <Pressable onPress={onHanlePress} style={style.PressableButton}>
    <Text style={style.text}>Go Back Screen A</Text>
    </Pressable>
  </View> 
}


export default function App() { 
  return (
    <Provider store={Store}>
      <Login/>
      {/* <SignUp/> */}
      {/* <NavigationContainer> */}
        {/* <Stack.Navigator>
          <Stack.Screen 
            name='Screen_A' 
            component={ScreenA}
            options={{ title: 'Overview' }}/>
            <Stack.Screen 
            name='Screen_B'
            component={ScreenB}/>
        </Stack.Navigator> */}
        {/* <Tab.Navigator
          screenOptions = {({ route }) =>({
            tabBarIcon: ({ focused, size, color})=>{
              let iconName;
              if(route.name === 'Screen_A'){
                iconName='google';
                size = focused ? 25 : 20;
              }else if(route.name === 'Screen_B'){
                iconName='user';
                size = focused ? 25 : 20;
              }
              return (
                <FontAwesome5 name={iconName} size={size}/>
              )
            },
            tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          })}
        >
        <Tab.Screen
          name='Screen_A' 
          component={ScreenA} />
        <Tab.Screen 
          name='Screen_B'
          component={ScreenB} />
      </Tab.Navigator> */}
        {/* <Drawer.Navigator initialRouteName='Screen_A'>
          <Drawer.Screen name='Screen_A' component={ScreenA} />
          <Drawer.Screen name='Screen_B' component={ScreenB} />
        </Drawer.Navigator>
      </NavigationContainer> */}
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