import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/components/SignUp';
import Login from './src/components/Login';
import Input from './src/components/Input';
import DrawerMain from './src/components/Drawer';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LogIn'>
          <Stack.Screen name='Drawer' component={DrawerMain} options={{ headerShown: false }} />
          <Stack.Screen
            name='SignUp'
            component={SignUp}
            options={{
              headerShown: false
            }} />
          <Stack.Screen
            name='LogIn'
            component={Login}
            options={{
              headerShown: false,
            }} />
          <Stack.Screen
            name='Input'
            component={Input}
            options={{
              headerShown: false,
              headerTitle: 'Search Bar'
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
