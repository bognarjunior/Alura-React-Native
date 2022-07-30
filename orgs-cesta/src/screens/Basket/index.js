import React from 'react'
import { StyleSheet, View } from 'react-native'
import Top from './components/Top'
import Details from './components/Details'

export default function Basket({ top, detail}) {
  return (
    <>
      <Top {...top} />
      <View style={styles.wrapper}>
        <Details {...detail} />
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