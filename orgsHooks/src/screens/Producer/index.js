import {StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import Basket from './components/Basket';

const Producer = () => {
  const route = useRoute();
  const {name, image, baskets} = route.params;
  console.log(baskets);
  const renderItem = ({item}) => {
    return (
      <Basket
        {...item}
        producer={{
          name,
          image,
        }}
      />
    );
  };
  /* "baskets": [{"detail": [Object], "itens": [Array]}, {"detail": [Object], "itens": [Array]}],
   "distance": "124", "id": 5, "image": 10, "name": "Potager", "stars": 3} */

  return <FlatList data={baskets} renderItem={renderItem} />;
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#ffffff',
  },
  conteudo: {
    paddingHorizontal: 16,
  },
  logo: {
    flexDirection: 'row',
  },
  producerImage: {
    width: 62,
    height: 62,
    marginTop: -23,
    borderRadius: 6,
  },
  producer: {
    color: '#464646',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  baskets: {
    color: '#464646',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginTop: 32,
  },
});

export default Producer;
