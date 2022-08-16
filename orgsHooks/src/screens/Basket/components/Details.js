import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import TextApp from '../../../components/TextApp'

const Details = ({name, logoFarm, nameFarm, description, price, buyButton}) => {
  return (
    <>
      <TextApp style={styles.name}>{name}</TextApp>
      <View style={styles.wrapperFarm}>
        <Image source={logoFarm} style={styles.imageFarm}/>
        <TextApp style={styles.nameFarm}>{nameFarm}</TextApp>
      </View>
      <TextApp style={styles.description}>{description}</TextApp>
      <TextApp style={styles.price}>{price}</TextApp>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <TextApp style={styles.textButton}>
          {buyButton}
        </TextApp>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
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
  },
  button: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textButton: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 26,
  }
}) 

export default Details