import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import logo from './../../../assets/logo.png';

const Top = () => {
  return (
    <View style={styles.wrapper}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.welcomeText}>Olá Bognar</Text>
      <Text style={styles.subtitle}>Encontre os melhores produtores</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  image: {
    width: 70,
    height: 28,
  },
  welcomeText: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Top;
