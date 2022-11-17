import { View, Text, useWindowDimensions } from 'react-native';
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Tabs from './tabs';
const Drawer = createDrawerNavigator();

/***** CustomDrawerContent function *****/
function CustomDrawerContent(props) {
    const { width } = useWindowDimensions();

    return (
        <DrawerContentScrollView {...props}>
            <View>
                <View
                    style={
                        { width: width, height: width / 6 }
                    }>
                    <DrawerItem
                        style={{
                            position: 'absolute',
                            left: 0,
                            width: width,
                            height: width,
                        }}
                        label="Home"
                        labelStyle={{ color: '#609806' }}
                        onPress={() => {
                            props.navigation.navigate('Ajio');
                        }}
                        activeBackgroundColor='red'
                        pressColor="red"

                    />
                </View>
                <View
                    style={
                        { width: width, height: width / 6 }
                    }>
                    <DrawerItem
                        style={{
                            position: 'absolute',
                            left: 0,
                            width: width,
                            height: width,
                        }}
                        label="Wishlist"
                        pressColor="red"
                        activeBackgroundColor='red'
                        labelStyle={{ color: '#609806' }}
                        onPress={() => {
                            props.navigation.navigate('Wishlist');
                        }}
                    />
                </View>
                <View
                    style={
                        { width: width, height: width / 6 }
                    }>
                    <DrawerItem
                        style={{
                            position: 'absolute',
                            left: 0,
                            width: width,
                            height: width,
                        }}
                        label="Bag"
                        pressColor="red"
                        labelStyle={{ color: '#609806' }}
                        activeBackgroundColor='red'
                        onPress={() => {
                            props.navigation.navigate('Bag');
                        }}
                    />
                </View>
                <View
                    style={
                        { width: width, height: width / 6 }
                    }>
                    <DrawerItem
                        style={{
                            position: 'absolute',
                            left: 0,
                            width: width,
                            height: width,
                        }}
                        label="Account"
                        pressColor="red"
                        labelStyle={{ color: '#609806' }}
                        activeBackgroundColor='red'
                        onPress={() => {
                            props.navigation.navigate('Account');
                        }}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    );
}

const DrawerMain = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name='Home'
                component={Tabs}
                options={({ route }) => ({
                    headerTitle: () => {
                        return (<Text style={{ fontSize: 15, fontWeight: '800' }}>{route.name}</Text>)
                    }
                })}
            />
        </Drawer.Navigator>
    )
}

export default DrawerMain