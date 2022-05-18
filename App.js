import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])
  

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        <View>
          <Text>unstream</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
