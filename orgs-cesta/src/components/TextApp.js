import { StyleSheet, Text } from 'react-native'
import React from 'react'

const TextApp = ({ children, style }) => {
  let stl = styles.text

  if( style?.fontWeight === 'bold') {
    stl = styles.textBold
  }

  return <Text style={[style, stl]}>{ children }</Text>
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal"
  },
  textBold: {
    fontFamily: "MontserratBold",
    fontWeight: "normal"
  }
});

export default TextApp

