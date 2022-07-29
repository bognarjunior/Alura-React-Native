import { Text, Image, StyleSheet, Dimensions, View } from 'react-native'
import React from 'react'
import imageTop from './../../assets/topo.png'
import logo from './../../assets/logo.png'

const width = Dimensions.get("screen").width;

export default function Basket() {
  return (
    <>
      <Image source={imageTop} style={style.top}/>
      <Text style={style.title}>Detalhe da Cesta</Text>
      <View style={style.wrapper}>
        <Text style={style.name}>Cesta de verduras</Text>
        <View style={style.wrapperFarm}>
          <Image source={logo} style={style.imageFarm}/>
          <Text style={style.nameFarm}>Jenny Jack Farm</Text>
        </View>
        <Text style={style.description}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para a sua cozinha.</Text>
        <Text style={style.price}>R$ 40,00</Text>
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
    fontFamily: "MontserratBold",
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
    fontFamily: "MontserratRegular",
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