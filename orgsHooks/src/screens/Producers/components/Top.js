import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import logo from './../../../assets/logo.png';
import useTexts from '../../../hooks/useTexts';

export default function Top({bestProducers}) {
  const {welcome, subtitle, subtitleBestProducers} = useTexts();

  return (
    <>
      <View style={styles.wrapper}>
        <Image source={logo} style={styles.image} />
        <Text style={styles.welcomeText}>{bestProducers ? '' : welcome}</Text>
        <Text style={styles.subtitle}>
          {bestProducers ? subtitleBestProducers : subtitle}
        </Text>
      </View>
    </>
  );
}
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
    color: '#464646',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3',
  },
});
