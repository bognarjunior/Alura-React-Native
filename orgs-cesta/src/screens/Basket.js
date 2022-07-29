import { Image, StyleSheet, Dimensions, View } from 'react-native'
import React from 'react'
import imageTop from './../../assets/topo.png'
import logo from './../../assets/logo.png'
import TextApp from '../components/Text'
const width = Dimensions.get("screen").width;

export default function Basket() {
  return (
    <>
      <Image source={imageTop} style={style.top}/>
      <TextApp style={style.title}>Detalhe da Cesta</TextApp>
      <View style={style.wrapper}>
        <TextApp style={style.name}>Cesta de verduras</TextApp>
        <View style={style.wrapperFarm}>
          <Image source={logo} style={style.imageFarm}/>
          <TextApp style={style.nameFarm}>Jenny Jack Farm</TextApp>
        </View>
        <TextApp style={style.description}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda direto para a sua cozinha.
        </TextApp>
        <TextApp style={style.price}>R$ 40,00</TextApp>
      </View>
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
  },
  wrapper: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  name: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontWeight: "bold",
  },
  wrapperFarm: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imageFarm: {
    width: 32,
    height: 32,
  },
  nameFarm: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  description: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26
  },
  price: {
    color: "#2A9F85",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
    marginTop: 8,
  }
}) 