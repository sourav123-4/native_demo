import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../firebase";
const Example = ({ navigation }) => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const login = async () => {
    // navigation.navigate('Drawer')
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (user) navigation.navigate('Drawer')
    } catch (e) {
      console.log("error is:- ", e);
    }
  };
  return <Center w="100%">
    <Box safeArea p="2" py="8" w="90%" maxW="290">
      <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
        Welcome
      </Heading>
      <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
        Sign in to continue!
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email ID</FormControl.Label>
          <Input onChangeText={(val) => setEmail(val)} />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input onChangeText={(val) => setPassword(val)} type="password" />
          <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
            Forget Password?
          </Link>
        </FormControl>
        <Button mt="2" colorScheme="indigo" onPress={login}>
          Sign in
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
            I'm a new user.{" "}
          </Text>
          <Link _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} to={{ screen: 'SignUp' }} onPress={() => navigation.navigate('SignUp')}>
            Sign Up
          </Link>
        </HStack>
      </VStack>
    </Box>
  </Center>;
};

export default ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example navigation={navigation} />
      </Center>
    </NativeBaseProvider>
  );
};
