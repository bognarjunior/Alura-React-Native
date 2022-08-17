import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Routes from './src/routes';

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Routes />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
