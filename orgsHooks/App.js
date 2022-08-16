import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Producers from './src/screens/Producers';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <NavigationContainer>
        <Producers />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
