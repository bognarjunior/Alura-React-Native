import {StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import Basket from './components/Basket';
import Top from '../../components/Top';
import topImage from './../../assets/producers/top.png';
import useTexts from '../../hooks/useTexts';
const Producer = () => {
  const route = useRoute();
  const {detailProducer, titleBaskets} = useTexts();
  const {name, image, baskets} = route.params;
  const TopApp = () => {
    return <Top title={detailProducer} image={topImage} height={150} />;
  };

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

  return (
    <FlatList
      ListHeaderComponent={TopApp}
      data={baskets}
      renderItem={renderItem}
      style={styles.list}
    />
  );
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
