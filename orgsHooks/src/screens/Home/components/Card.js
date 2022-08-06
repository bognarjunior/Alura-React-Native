import {View, Text} from 'react-native';
import React from 'react';

const Card = ({id, name, image, distance, stars}) => {
  return (
    <View>
      <Text>{id}</Text>
      <Text>{name}</Text>
      <Text>{image}</Text>
      <Text>{distance}</Text>
      <Text>{stars}</Text>
    </View>
  );
};

export default Card;
