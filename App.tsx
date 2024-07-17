import React from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import OtpVerification from './Screens/OtpVerification';
import HomeScreen from './Screens/HomeScreen';
import OtpVerificationLogin from './Screens/OtpVerificationLogin';
import { Provider } from 'react-redux';
import appStore from './store/appStore';
function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={appStore}>
    <NavigationContainer>
      <Stack.Navigator>
      
      <Stack.Screen options={{
        headerShown:false
      }} name="SignIn" component={SignIn} />
      <Stack.Screen options={{
        headerShown:false
      }} name="SignUp" component={SignUp} />
      <Stack.Screen  name="OtpVerification" component={OtpVerification} />
      <Stack.Screen  name="OtpVerificationLogin" component={OtpVerificationLogin} />
      <Stack.Screen options={{
        headerShown:false
      }} name="Home" component={HomeScreen} />
      
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}


export default App;
