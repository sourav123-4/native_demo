import * as React from "react";
import { Text } from "react-native";
import { Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider } from "native-base";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../firebase";
const Example = ({ navigation }) => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const sendDataToFirebase = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) navigation.navigate('LogIn')
    } catch (e) {
      console.log("eroror is:- ", e);
    }
  };

  return <Center w="100%">
    <Box safeArea p="2" w="90%" maxW="290" py="8">
      <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
        Welcome
      </Heading>
      <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
        Sign up to continue!
      </Heading>
      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input onChangeText={(val) => setEmail(val)} />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input onChangeText={(val) => setPassword(val)} type="password" />
        </FormControl>
        <FormControl>
          <FormControl.Label>Confirm Password</FormControl.Label>
          <Input type="password" />
        </FormControl>
        <Button mt="2" colorScheme="indigo" onPress={sendDataToFirebase}>
          Sign up
        </Button>
        <Text>{email}</Text>
        <Text>{password}</Text>
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
