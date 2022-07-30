import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import logo from './../../../../assets/logo.png'
import TextApp from './../../../components/Text'

const Details = () => {
  return (
    <View style={styles.wrapper}>
      <TextApp style={styles.name}>Cesta de verduras</TextApp>
      <View style={styles.wrapperFarm}>
        <Image source={logo} style={styles.imageFarm}/>
        <TextApp style={styles.nameFarm}>Jenny Jack Farm</TextApp>
      </View>
      <TextApp style={styles.description}>
        Uma cesta com produtos selecionados cuidadosamente da fazenda direto para a sua cozinha.
      </TextApp>
      <TextApp style={styles.price}>R$ 40,00</TextApp>
    </View>
  )
}

const styles = StyleSheet.create({
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

export default Details