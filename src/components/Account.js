import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet, Button } from 'react-native';
import { signOut } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
const Stack = createNativeStackNavigator();

const AccountDetails = ({ navigation }) => {
    const [data, setData] = useState([])
    const logOut = async () => {
        await signOut(auth);
        navigation.navigate('LogIn')
    };
    useEffect(() => {
        onAuthStateChanged(auth, (currentuser) => {
            setData(currentuser);
        });
    }, []);
    console.log("data", data?.email)
    return (<View style={styles.body}>
        <View style={styles.container}>
            <View style={styles.icon}>
                <Text style={styles.iconName}>SM</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.name}>Sourav</Text>
                <Text style={styles.email}>{data?.email}</Text>
                <Text style={styles.phoneNo}>7384750135</Text>
            </View>
            <View style={styles.edit}>
                <Text style={{ color: 'blue' }}>Edit</Text>
            </View>
        </View>
        <View style={styles.buttonView}>
            <Button style={styles.button} onPress={logOut} title='LogOut' />
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
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        height: '60%',
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
    },
    buttonView: {
        alignItems: 'center',
    },
    button: {
        color: 'white'
        // width: 300,
        // borderRadius: 18
    }
})