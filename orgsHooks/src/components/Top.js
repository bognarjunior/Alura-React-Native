import React from 'react';
import {Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

import Text from './Text';

import Gradient from '../assets/gradient.svg';
import top from '../assets/top.png';
import Back from '../assets/voltar.svg';

const width = Dimensions.get('screen').width;
const HEIGTH = 270;

export default function Topo({title, image = top, height = HEIGTH}) {
  const styles = funcStyles(height);
  return (
    <>
      <Image source={image} style={styles.topo} />
      <Gradient
        width={width}
        height={(130 / 360) * width}
        style={styles.gradient}
      />
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={() => {}} style={styles.botaoVoltar}>
        <Back color="white" style={styles.voltar} />
      </TouchableOpacity>
    </>
  );
}

const funcStyles = height =>
  StyleSheet.create({
    topo: {
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
    botaoVoltar: {
      position: 'absolute',
      padding: 17,
    },
    backButtom: {
      width: 24,
      height: 24,
    },
  });
