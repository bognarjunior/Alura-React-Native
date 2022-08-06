import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import star from './../assets/star.png';
import starGrey from './../assets/starGrey.png';

export default function Stars({qtd: oldQtd, editable = false, large = false}) {
  const [qtd, setQtd] = useState(oldQtd);
  const styles = stylesFunction(large);

  const getImage = index => {
    return index < qtd ? star : starGrey;
  };

  const RenderStars = () => {
    const list = [];
    for (let i = 0; i < 5; i++) {
      list.push(
        <TouchableOpacity
          key={i}
          onPress={() => setQtd(i + 1)}
          disabled={!editable}>
          <Image source={getImage(i)} style={styles.image} />
        </TouchableOpacity>,
      );
    }
    return list;
  };

  return (
    <View style={styles.container}>
      <RenderStars />
    </View>
  );
}

const stylesFunction = large =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    image: {
      width: large ? 36 : 12,
      height: large ? 36 : 12,
      marginRight: 2,
    },
  });
