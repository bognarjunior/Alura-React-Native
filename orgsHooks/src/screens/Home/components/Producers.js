import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getProducers} from '../../../services/loadData';

export default function Producers({top: Top}) {
  const [title, setTitle] = useState('');
  const [producers, setProducers] = useState([]);

  useEffect(() => {
    const data = getProducers();
    setTitle(data.title);
    setProducers(data.list);
  }, []);

  const renderHeader = () => {
    return (
      <>
        <Top />
        <Text style={styles.title}>{title}</Text>
      </>
    );
  };

  return (
    <View>
      <FlatList
        data={producers}
        keyExtractor={({id}) => id}
        renderItem={({item: {name}}) => <Text>{name}</Text>}
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
