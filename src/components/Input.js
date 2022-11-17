import React from 'react';
import { Input, NativeBaseProvider } from "native-base";
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
const Example = () => {
    return <Input shadow={2} _light={{
        bg: "coolGray.100",
        _hover: {
            bg: "coolGray.200"
        },
        _focus: {
            bg: "coolGray.200:alpha.70"
        }
    }} _dark={{
        bg: "coolGray.800",
        _hover: {
            bg: "coolGray.900"
        },
        _focus: {
            bg: "coolGray.900:alpha.70"
        }
    }} placeholder="Search by Products,brands.." autoFocus={true} width={'80%'} />;
};
const InputPage = ({ navigation }) => {
    return (
        <NativeBaseProvider>
            <SafeAreaView style={Styles.body}>
                <FontAwesome5Icon size={20} name='arrow-left' onPress={() => navigation.goBack()} />
                <Example />
                <FontAwesome5Icon size={20} name='searchengin' />
            </SafeAreaView>
        </NativeBaseProvider>
    )
}

export default InputPage
const Styles = StyleSheet.create({
    body: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 30
    }
}) 