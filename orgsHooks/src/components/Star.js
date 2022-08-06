import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import star from './../assets/star.png';
import starGrey from './../assets/starGrey.png';

const Star = ({onpress, disabled = true, fill, large = false}) => {
  const getImage = () => (fill ? star : starGrey);
  const styles = stylesFunction(large);
  return (
    <TouchableOpacity onPress={onpress} disabled={disabled}>
      <Image source={getImage()} style={styles.image} />
    </TouchableOpacity>
  );
};

export default Star;

const stylesFunction = large =>
  StyleSheet.create({
    image: {
      width: large ? 36 : 12,
      height: large ? 36 : 12,
      marginRight: 2,
    },
  });
