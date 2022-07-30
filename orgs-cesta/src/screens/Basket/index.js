import React from 'react'
import { StyleSheet, View } from 'react-native'
import Top from './components/Top'
import Details from './components/Details'

export default function Basket() {
  return (
    <>
      <Top />
      <View style={styles.wrapper}>
        <Details />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
})