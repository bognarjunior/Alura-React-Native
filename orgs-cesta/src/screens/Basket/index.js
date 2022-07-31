import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Top from './components/Top'
import Details from './components/Details'
import Items from './components/Items'

export default function Basket({ top, detail, items}) {
  return (
    <ScrollView>
      <Top {...top} />
      <View style={styles.wrapper}>
        <Details {...detail} />
        <Items  {...items}/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
})