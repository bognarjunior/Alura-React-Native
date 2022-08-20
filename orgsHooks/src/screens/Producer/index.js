import {View, Text} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const Producer = () => {
  const route = useRoute();
  console.log(route.params);
  return (
    <View>
      <Text>Producer</Text>
    </View>
  );
};

export default Producer;
