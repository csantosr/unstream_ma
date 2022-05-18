import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen'
import LoginScreen from './src/containers/Login';
import StreamScreen from './src/containers/Stream';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Stream" component={StreamScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
