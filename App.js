import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './src/components/tabs';
import Login from './src/components/Login';
import SignUp from './src/components/SignUp';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LogIn'>
          <Stack.Screen name='LogIn' options={{ headerShown: false }} component={Login} />
          <Stack.Screen name='SignUp' options={{ headerShown: false }} component={SignUp} />
          <Stack.Screen name='Tabs' component={Tabs} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
