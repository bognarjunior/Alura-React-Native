import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import Card from './Card';
import Top from './Top';
import useProducers from '../../../hooks/useProducers';
import {useNavigation, useRoute} from '@react-navigation/native';
import useTexts from '../../../hooks/useTexts';

export default function ListProducers({bestProducers}) {
  const navigation = useNavigation();
  const route = useRoute();
  const name = route.params?.buy?.name;

  const [title, producers] = useProducers();
  const {messageBuy} = useTexts();
  const message = messageBuy?.replace('$NAME', name);

  const renderHeader = () => {
    return (
      <>
        <Top bestProducers={bestProducers} />
        {name && <Text style={styles.messageBuy}>{message}</Text>}
        <Text style={styles.title}>{title}</Text>
      </>
    );
  };

  return (
    <View>
      <FlatList
        data={producers}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <Card
            {...item}
            onPress={() => {
              navigation.navigate('Producer', item);
            }}
          />
        )}
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
  messageBuy: {
    backgroundColor: '#EAF5F3',
    padding: 16,
    color: '#464646',
    fontSize: 16,
    lineHeight: 26,
  },
});
