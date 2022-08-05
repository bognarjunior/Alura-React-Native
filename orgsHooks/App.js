import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
