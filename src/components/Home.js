import React, { useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Center, NativeBaseProvider, HStack, ScrollView } from "native-base";
import { FlatList, Text, View, useWindowDimensions, StyleSheet, Image, Pressable } from "react-native";
import { useRef, useEffect } from "react";
import { faker } from '@faker-js/faker';
const Stack = createNativeStackNavigator();

const Home = ({ navigation }) => {
    const ref = useRef();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { width } = useWindowDimensions();
    const data = [
        {
            id: 1,
            title: 'hlw sir',
            description: 'yes what u want sir',
            image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13855576/2022/4/25/1d9760b4-c33e-4d72-a6af-8e81970fd0161650883622705USPoloAssnMenGreySolidSneakers1.jpg'
        },
        {
            id: 2,
            title: 'hlw sir 1',
            description: 'yes what u want sir 1',
            image: 'https://freepngimg.com/save/12846-dress-shirt-png-hd/480x480'
        },
        {
            id: 3,
            title: 'hlw sir 2',
            description: 'yes what u want sir 2',
            image: 'https://www.pngall.com/wp-content/uploads/5/Cotton-Pant-PNG-File-Download-Free.png'
        },
        {
            id: 4,
            title: 'hlw sir 3',
            description: 'yes what u want sir 3',
            image: 'https://4.imimg.com/data4/RU/VC/MY-11853389/men-s-jackets-500x500.jpg'
        },
        {
            id: 5,
            title: 'hlw sir 4',
            description: 'yes what u want sir 4',
            image: 'https://m.media-amazon.com/images/I/91Y6XOj82YL._UL1500_.jpg'
        },
        {
            id: 6,
            title: 'hlw sir 5',
            description: 'yes what u want sir 5',
            image: faker.image.fashion()
        },
    ]

    let currentSlide = 0;
    let intervalTime = 6000;
    const goToNextPage = () => {
        if (ref.current !== null) {
            if (currentSlide >= data.length - 1) currentSlide = -1;
            setSelectedIndex(currentSlide)
            ref.current.scrollToIndex({
                index: ++currentSlide,
                animated: true,
            });
        }
    };
    console.log("hello", currentSlide)
    useEffect(() => {
        setInterval(goToNextPage, intervalTime);
    }, []);
    return (
        <View>
            <ScrollView>
                <Center px="1">
                    <Pressable style={styles.inputBox} onPress={() => navigation.navigate('Input')}>
                        <Text>Search by Products,brands and name...</Text>
                    </Pressable>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <HStack justifyContent="center" style={{ backgroundColor: '#f8f8fa', padding: 6 }}>
                            <Image style={{ width: 80, height: 80, borderRadius: 5 }} source={{ uri: 'https://images-platform.99static.com/xOJdnGLjuoZ6KrlfXuUggZYqH-Q=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/85/85339/attachment_85339405' }} />
                            <Image
                                style={{ width: 80, height: 80, borderRadius: 50, marginLeft: 4 }}
                                source={{
                                    uri: 'https://5.imimg.com/data5/QP/WL/MY-654252/boys-shirt-500x500.jpg',
                                }}
                            />
                            <Image
                                style={{ width: 80, height: 80, borderRadius: 50, marginLeft: 4 }}
                                source={{
                                    uri: 'https://m.media-amazon.com/images/I/815s7TSTDeL._UL1500_.jpg',
                                }}
                            />
                            <Image
                                style={{ width: 80, height: 80, borderRadius: 50, marginLeft: 4 }}
                                source={{
                                    uri: 'https://media.kreeva.com/catalog/product/cache/00e31345e8751638854e32598b752715/s/a/saree-2-01.jpg',
                                }}
                            />
                            <Image
                                style={{ width: 80, height: 80, borderRadius: 50, marginLeft: 4 }}
                                source={{
                                    uri: 'https://suryasarees.com/wp-content/uploads/2021/09/house-of-surya-surya-sarees-product-category-bridal-lehenga-product-image-SE44814-bottle-green-georgette-three-piece-dress-1-1.jpg',
                                }}
                            />
                            <Image
                                style={{ width: 80, height: 80, borderRadius: 50, marginLeft: 4 }}
                                source={{
                                    uri: 'https://m.media-amazon.com/images/I/815s7TSTDeL._UL1500_.jpg',
                                }}
                            />
                            <Image
                                style={{ width: 80, height: 80, borderRadius: 50, margin: 4 }}
                                source={{
                                    uri: 'https://suryasarees.com/wp-content/uploads/2021/09/house-of-surya-surya-sarees-product-category-bridal-lehenga-product-image-SE44814-bottle-green-georgette-three-piece-dress-1-1.jpg',
                                }}
                            />
                        </HStack>
                    </ScrollView>
                </Center>
                <View style={{ width: '100%', height: 200, alignItems: 'center' }}>
                    <FlatList
                        ref={ref}
                        data={data}
                        renderItem={({ item }) => (
                            <View style={[styles.container, { width }]}>
                                <Image style={{ width: '100%', height: 200, resizeMode: 'contain' }} source={{ uri: item.image }} />
                            </View>
                        )}
                        keyExtractor={data => data.id}
                        horizontal
                        pagingEnabled
                        scrollEnabled
                        snapToAlignment="center"
                        scrollEventThrottle={16}
                        decelerationRate={"fast"}
                        showsHorizontalScrollIndicator={false}
                        persistentScrollbar={false}
                    />
                    <View style={styles.circleDiv}>
                        {data.map((image, i) => {
                            return <View key={image.image} style={[styles.whiteCircle, { opacity: i - 1 !== selectedIndex ? 0.3 : 1 }]} >

                            </View>
                        })}
                    </View>
                </View>
                <View>
                    <Text style={styles.firstHeader}>New Popular Brands</Text>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <View style={styles.popularBrand}>
                                <Image style={{ width: 150, height: 150, borderRadius: 10, marginLeft: 5 }} source={{ uri: item.image }} />
                            </View>
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        bounces={false} />
                </View>
                <View>
                    <Text style={styles.firstHeader}>New Popular Brands</Text>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <View style={[styles.container, { width }]}>
                                <Image style={{ width: '50%', height: 200 }} source={{ uri: item.image }} />
                            </View>
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        bounces={false} />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text style={styles.firstHeader}>New Popular Brands</Text>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <View style={[styles.container, { width }]}>
                                <Image style={{ width: '50%', height: 200 }} source={{ uri: item.image }} />
                            </View>
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        bounces={false} />
                </View>
            </ScrollView>
        </View>
    )
}
const Main = () => {
    return (
        <NativeBaseProvider>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NativeBaseProvider>
    );
};
export default Main;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox: {
        backgroundColor: '#e6e6fa',
        borderRadius: 10,
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 5
    },
    circleDiv: {
        position: "absolute",
        bottom: 5,
        height: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    whiteCircle: {
        width: 15,
        height: 2,
        borderRadius: 2,
        margin: 5,
        backgroundColor: '#fff'
    },
    firstHeader: {
        fontSize: 16,
        fontWeight: '700',
        margin: 10
    },
    popularBrand: {
        // flex: 1,
        // justifyContent: 'space-around'
        // borderRadius: 30,
        // borderWidth: 3,
        // borderColor: 'red'
    }
})