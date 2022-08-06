import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Stars from '../../../components/ListStars';

const Card = ({id, name, image, distance, stars}) => {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setSelected(!selected)}>
      <Image style={styles.image} source={image} accessibilityLabel={name} />
      <View style={styles.detail}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Stars qtd={stars} editable={selected} large={selected} />
        </View>
        <Text style={styles.distance}>{distance}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    //Android
    elevation: 4,
    //iOS
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  detail: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  name: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distance: {
    fontSize: 12,
    lineHeight: 19,
  },
});

export default Card;
