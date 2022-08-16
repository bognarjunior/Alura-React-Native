import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import Card from './Card';
import Top from './Top';
import useProducers from '../../../hooks/useProducers';

export default function ListProducers({bestProducers}) {
  const [title, producers] = useProducers();
  const renderHeader = () => {
    return (
      <>
        <Top bestProducers={bestProducers} />
        <Text style={styles.title}>{title}</Text>
      </>
    );
  };

  return (
    <View>
      <FlatList
        data={producers}
        keyExtractor={({id}) => id}
        renderItem={({item}) => <Card {...item} />}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});