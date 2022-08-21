import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Text from '../../../components/Text';

export default function Basket({detail, items, producer}) {
  const navigation = useNavigation();
  const {name, image, description, price} = detail;

  console.log(detail)
  console.log(items)
  console.log(producer)
  return (
    <TouchableOpacity style={styles.basket} onPress={() => {}}>
      <View style={styles.content}>
        <Image source={image} style={styles.image} />
        <View style={styles.text}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  basket: {
    paddingHorizontal: 16,
  },
  content: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
  },
  image: {
    width: 62,
    height: 62,
    borderRadius: 6,
  },
  text: {
    flex: 1,
    marginLeft: 8,
  },
  name: {
    color: '#464646',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  description: {
    color: '#A3A3A3',
    fontSize: 14,
    lineHeight: 22,
  },
  price: {
    color: '#2A9F85',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    marginTop: 4,
  },
});
