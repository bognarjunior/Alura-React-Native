import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Star from './Star';

export default function ListStars({
  qtd: oldQtd,
  editable = false,
  large = false,
}) {
  const [qtd, setQtd] = useState(oldQtd);

  const RenderStars = () => {
    const list = [];
    for (let i = 0; i < 5; i++) {
      list.push(
        <Star
          key={i}
          onpress={() => setQtd(i + 1)}
          disabled={!editable}
          fill={i < qtd}
          large={large}
        />,
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
