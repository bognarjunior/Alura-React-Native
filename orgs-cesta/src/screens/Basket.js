import { Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import imageTop from './../../assets/topo.png'

const width = Dimensions.get("screen").width;

export default function Basket() {
  return (
    <>
      <Image source={imageTop} style={style.top}/>
      <Text style={style.title}>Detalhe da Cesta</Text>
    </>
  )
}

const style = StyleSheet.create({
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
  }
}) 