import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from './Card';
import Top from './Top';
import useProducers from '../../../hooks/useProducers';
import {useNavigation, useRoute} from '@react-navigation/native';
import useTexts from '../../../hooks/useTexts';

export default function ListProducers({bestProducers}) {
  const navigation = useNavigation();
  const route = useRoute();
  const name = route.params?.purchase?.name;
  const timestamp = route.params?.purchase?.timestamp;

  const [showMessage, setShowMessage] = useState(false);

  const [title, producers] = useProducers();

  const {messagePurchase} = useTexts();
  const message = messagePurchase?.replace('$NAME', name);

  useEffect(() => {
    setShowMessage(!!name);
    let timeout;

    if (name) {
      timeout = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
    return clearTimeout(timeout);
  }, [name, timestamp]);

  const renderHeader = () => {
    return (
      <>
        <Top bestProducers={bestProducers} />
        {showMessage && <Text style={styles.messageBuy}>{message}</Text>}
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
