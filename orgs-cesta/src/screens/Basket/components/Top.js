import { Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import TextApp from '../../../components/Text'

import imageTop from './../../../../assets/topo.png'
const width = Dimensions.get("screen").width;

const Top = () => {
  return (
    <>
      <Image source={imageTop} style={styles.top}/>
      <TextApp style={styles.title}>Detalhe da Cesta</TextApp>
    </>
  )
}

const styles = StyleSheet.create({
  top: {
    width: "100%",
    height: 578 / 768 * width,
  },
  title: {
    top: 44,
    width: "100%",
    position: 'absolute',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
})

export default Top