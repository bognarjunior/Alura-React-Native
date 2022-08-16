import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Top from './components/Top'
import Details from './components/Details'
import Item from './components/Item'
import TextApp from '../../components/TextApp'

export default function Basket({ top, detail, items}) {
  const renderHeader = () => (
    <>
      <Top {...top} />
      <View style={styles.wrapper}>
        <Details {...detail} />
        <TextApp style={styles.title}>{items.title}</TextApp>
      </View>
    </>
  );

  return (
    <>
      <FlatList 
        data={items.list} 
        renderItem={Item}
        keyExtractor={({name}) => name}
        ListHeaderComponent={renderHeader}
      />
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32
  },
})