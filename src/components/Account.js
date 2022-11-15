import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Avatar, NativeBaseProvider } from "native-base";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SignUp from './SignUp';
import Login from './Login';
const Stack = createNativeStackNavigator();
function Account({navigation}) {
    const onHandlePress = ()=>{
        navigation.navigate('Login')
    }
  return (
    <View style={styles.body}>
         {/* <Stack.Navigator>
          <Stack.Screen 
            name='SignUp' 
            component={SignUp}
            options={{ title: 'Ajio' }}/>
        </Stack.Navigator> */}
        <View style={styles.container}>
            <View style={styles.icon}>
                <FontAwesome5 name='user' size={20} color='#fff'/>
            </View>
            <Pressable style={styles.pressablebutton} onPress={onHandlePress}>
                <Text style={styles.text}>Sign in / Join</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
    body:{
        flex:1,
    },
    container:{
        flex:0.2,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#D1D1D1',
        alignItems:'center',
        padding:20
    },
    icon:{
        flex:0.2,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black',
        height:'50%',
        borderRadius:60,
    },
    pressablebutton:{
        flex:0.6,
        alignContent:'center',
        backgroundColor:'black',
        padding:12,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    },
    text:{
        fontSize:15,
        fontWeight:'400',
        color:'white'
    }
})