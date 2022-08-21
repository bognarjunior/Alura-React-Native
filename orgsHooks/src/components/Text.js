import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function Index({children, style}) {
  let custonStyle = styles.text;
  if (style?.fontWeight === 'bold') {
    custonStyle = styles.textBold;
  }

  return <Text style={[style, custonStyle]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    // fontFamily: 'MontserratRegular',
    fontWeight: 'normal',
  },
  textBold: {
    // fontFamily: 'MontserratBold',
    fontWeight: 'bold',
  },
});
