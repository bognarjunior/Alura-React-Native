import {StyleSheet, Text, FlatList, View, Image} from 'react-native';
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
    return (
      <>
        <Top title={detailProducer} image={topImage} height={150} />
        <View style={styles.content}>
          <View style={styles.logo}>
            <Image source={image} style={styles.producerImage} />
            <Text style={styles.producer}>{name}</Text>
          </View>
          <Text style={styles.baskets}>{titleBaskets}</Text>
        </View>
      </>
    );
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
  content: {
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
