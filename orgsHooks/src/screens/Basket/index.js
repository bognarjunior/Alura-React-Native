import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Top from './components/Top';
import Details from './components/Details';
import Item from './components/Item';
import Text from '../../components/Text';
import useTexts from '../../hooks/useTexts';
import {useRoute} from '@react-navigation/native';

export default function Basket() {
  const route = useRoute();
  const {topBasket, titleItems} = useTexts();
  const {detail, items, producer} = route.params;
  const renderHeader = () => (
    <>
      <Top title={topBasket} />
      <View style={styles.wrapper}>
        <Details {...detail} producer={producer} />
        <Text style={styles.title}>{titleItems}</Text>
      </View>
    </>
  );

  return (
    <>
      <FlatList
        data={items}
        renderItem={Item}
        keyExtractor={({name}) => name}
        ListHeaderComponent={renderHeader}
      />
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
});
