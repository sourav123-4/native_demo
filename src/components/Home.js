import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Input, Center, NativeBaseProvider, HStack, ScrollView } from "native-base";
import { FlatList, Text, View, useWindowDimensions, StyleSheet, Image } from "react-native";
import SignUp from "./SignUp";
import Login from "./Login";
const Drawer = createDrawerNavigator();
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
  }} placeholder="Search by Products,brands.." />;
};

const Home = () => {
    const {width} = useWindowDimensions();
    const data = [
        {
            id:1,
            title: 'hlw sir',
            description: 'yes what u want sir',
            image:'https://images.app.goo.gl/RuQaQMRAtsZGZqfN8'
        },
        {
            id:2,
            title: 'hlw sir 1',
            description: 'yes what u want sir 1',
            image:'https://images.app.goo.gl/RuQaQMRAtsZGZqfN8'
        },
        {
            id:3,
            title: 'hlw sir 2',
            description: 'yes what u want sir 2',
            image:'https://images.app.goo.gl/RuQaQMRAtsZGZqfN8'
        },
        {
            id:4,
            title: 'hlw sir 3',
            description: 'yes what u want sir 3',
            image:'https://images.app.goo.gl/RuQaQMRAtsZGZqfN8'
        },
        {
            id:5,
            title: 'hlw sir 4',
            description: 'yes what u want sir 4',
            image:'https://images.app.goo.gl/RuQaQMRAtsZGZqfN8'
        },
    ]
    return (
        <NativeBaseProvider>
        <Center flex={0.2} px="3">
            <Example />
            <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                <HStack space={1} justifyContent="center" >
                <Center h="20" w="20" bg="primary.300" rounded="md" shadow={3} />
                <Center h="20" w="20" bg="primary.400" rounded="md" shadow={3} />
                <Center h="20" w="20" bg="primary.500" rounded="md" shadow={3} />
                <Center h="20" w="20" bg="primary.600" rounded="md" shadow={3} />
                <Center h="20" w="20" bg="primary.700" rounded="md" shadow={3} />
                <Center h="20" w="20" bg="primary.800" rounded="md" shadow={3} />
                <Center h="20" w="20" bg="primary.900" rounded="md" shadow={3} />
                <Center h="20" w="20" bg="primary.800" rounded="md" shadow={3} />
                <Center h="20" w="20" bg="primary.700" rounded="md" shadow={3} />
                </HStack>
            </ScrollView>
            <FlatList 
                data={data}
                renderItem={({item}) => (
                    <View style={[styles.container, {width}]}>
                        <Image style={styles.image} source={{uri:'https://images.app.goo.gl/RuQaQMRAtsZGZqfN8'}}/>
                        {/* <Text>{item.title}</Text> */}
                    </View>
                    )} 
                horizontal 
                showsHorizontalScrollIndicator 
                pagingEnabled
                bounces={false}
            />
            
        </Center>
        </NativeBaseProvider>
    );
};
export default Home;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        // width:'100%'
    }
})