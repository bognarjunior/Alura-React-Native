import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Text from '../../../components/Text';
import useTexts from '../../../hooks/useTexts';

const Details = ({name, logoFarm, nameFarm, description, price}) => {
  const navigation = useNavigation();
  const {buttonBuy} = useTexts();
  return (
    <>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.wrapperFarm}>
        <Image source={logoFarm} style={styles.imageFarm} />
        <Text style={styles.nameFarm}>{nameFarm}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('HomeStack', {
            buy: {name, timestamp: +new Date()},
          })
        }>
        <Text style={styles.textButton}>{buttonBuy}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 26,
    lineHeight: 42,
    color: '#464646',
    fontWeight: 'bold',
  },
  wrapperFarm: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  imageFarm: {
    width: 32,
    height: 32,
  },
  nameFarm: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  description: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: '#2A9F85',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    marginTop: 8,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 6,
  },
  textButton: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Details;
