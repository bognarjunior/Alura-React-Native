import React from 'react';
import {Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

import Text from './Text';

import Gradient from '../assets/gradient.svg';
import top from '../assets/top.png';
import Back from '../assets/voltar.svg';

const width = Dimensions.get('screen').width;
const HEIGHT_DEFAULT = 270;

export default function Top({title, image = top, height = HEIGHT_DEFAULT}) {
  const styles = funcStyles(height);
  return (
    <>
      <Image source={image} style={styles.top} />
      <Gradient
        width={width}
        height={(130 / 360) * width}
        style={styles.gradient}
      />
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={() => {}} style={styles.backButton}>
        <Back color="white" style={styles.backSVG} />
      </TouchableOpacity>
    </>
  );
}

const funcStyles = height =>
  StyleSheet.create({
    top: {
      width: '100%',
      height: height,
    },
    gradient: {
      position: 'absolute',
    },
    title: {
      width: '100%',
      position: 'absolute',
      textAlign: 'center',
      fontSize: 16,
      lineHeight: 26,
      color: 'white',
      fontWeight: 'bold',
      padding: 16,
    },
    backButton: {
      position: 'absolute',
      padding: 17,
    },
    backSVG: {
      width: 24,
      height: 24,
    },
  });
