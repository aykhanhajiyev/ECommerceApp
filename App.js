import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';

import store from './store';
import { RootNav } from './navigation/RootNav';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <RootNav />
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
