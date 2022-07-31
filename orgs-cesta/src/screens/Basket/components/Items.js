import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import TextApp from '../../../components/Text'

const Items = ({title, list}) => {
  return (
    <>
      <TextApp style={styles.title}>{title}</TextApp>
      {
        list.map(({name, image}) => {
          return <View key={name} style={styles.item}>
            <Image source={image} style={styles.image}/>
            <TextApp style={styles.name}>{name}</TextApp>
          </View>
        })
      }
    </>
  )
}


const styles = StyleSheet.create({
  title: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32
  },
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    alignItems: "center"
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

export default Items