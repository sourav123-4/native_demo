import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Avatar, NativeBaseProvider } from "native-base";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SignUp from './SignUp';
import Login from './Login';
const Stack = createNativeStackNavigator();

const AccountDetails = ({ navigation }) => {
    return (<View style={styles.body}>
        <View style={styles.container}>
            <View style={styles.icon}>
                <Text style={styles.iconName}>SM</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.name}>Sourav</Text>
                <Text style={styles.email}>souravmahanty12@gmail.com</Text>
                <Text style={styles.phoneNo}>7384750135</Text>
            </View>
            <View style={styles.edit}>
                <Text style={{ color: 'blue' }}>Edit</Text>
            </View>
        </View>
    </View>)
}
function Account() {
    return (
        <Stack.Navigator initialRouteName='AccountDetails'>
            <Stack.Screen
                name='AccountDetails'
                component={AccountDetails}
                options={{
                    headerShown: false
                }} />
        </Stack.Navigator>
    )
}

export default Account;

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    container: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#D1D1D1',
        alignItems: 'center',
        alignContent: 'center',
        padding: 20
    },
    icon: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        height: '70%',
        borderRadius: 60,
    },
    iconName: {
        fontSize: 25,
        color: 'white',
        fontWeight: '800',
    },
    details: {
        padding: 1
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    email: {
        fontStyle: 'italic',
        fontWeight: '600'
    },
    edit: {
        padding: 2
    },
    phoneNo: {
        color: 'blue'
    },
    text: {
        fontSize: 15,
        fontWeight: '400',
        color: 'white'
    }
})