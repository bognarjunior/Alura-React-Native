import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import Text from '../../../components/Text'

const Item = ({item: {name, image}}) => {
  return (
    <View style={styles.item}>
      <Image source={image} style={styles.image}/>
      <Text style={styles.name}>{name}</Text>
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