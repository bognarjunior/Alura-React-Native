import {Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import Text from '../../../components/Text';

import imageTop from './../../../assets/top.png';
const width = Dimensions.get('screen').width;

const Top = ({title}) => {
  return (
    <>
      <Image source={imageTop} style={styles.top} />
      <Text style={styles.title}>{title}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  top: {
    width: '100%',
    height: (578 / 768) * width,
  },
  title: {
    top: 44,
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    padding: 16,
  },
});

export default Top;
