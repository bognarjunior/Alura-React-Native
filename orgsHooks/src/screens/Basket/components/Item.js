import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import TextApp from '../../../components/TextApp'

const Item = ({item: {name, image}}) => {
  return (
    <View style={styles.item}>
      <Image source={image} style={styles.image}/>
      <TextApp style={styles.name}>{name}</TextApp>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: "center",
  },
  image: {
    width: 46,
    height: 46
  }, 
  name: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    color: "#464646"
  }
})

export default Item