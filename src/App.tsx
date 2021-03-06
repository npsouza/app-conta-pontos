import 'react-native-gesture-handler';
import 'react-native-get-random-values';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
