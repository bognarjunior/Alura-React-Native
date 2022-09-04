import React from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';

import useTexts from '../../hooks/useTexts';

import Back from '../../assets/voltar.svg';
import success from '../../assets/success.png';

export default function Resumo() {
  const navigation = useNavigation();
  const route = useRoute();

  const {
    messageBuy,
    topPurchase,
    titlePurchase,
    buttonHomePurchase,
    buttonProducerPurchase,
  } = useTexts();

  const purchase = route.params.purchase;
  const message = messageBuy?.replace('$NOME', purchase.name);

  return (
    <View style={styles.screen}>
      <View style={styles.top}>
        <TouchableOpacity
          style={styles.topBack}
          onPress={() => navigation.goBack()}>
          <Back />
        </TouchableOpacity>

        <Text style={styles.topText}>{topPurchase}</Text>
      </View>

      <View style={styles.content}>
        <Image source={success} style={styles.success} />

        <View style={styles.texts}>
          <Text style={styles.title}>{titlePurchase}</Text>
          <Text style={styles.message}>{message}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.popToTop()}>
            <Text style={styles.textButton}>{buttonHomePurchase}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.buttonProducer]}
            onPress={() => navigation.pop(2)}>
            <Text style={[styles.textButton, styles.textButtonProducer]}>
              {buttonProducerPurchase}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  top: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    height: 58,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    paddingVertical: 16,
    paddingHorizontal: 40,
  },
  topText: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  topBack: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 16,
    top: 17,
  },
  content: {
    zIndex: 0,
  },
  success: {
    width: '100%',
    height: undefined,
    aspectRatio: 360 / 351,
  },
  texts: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  message: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 6,
  },
  textButton: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
  },
  buttonProducer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ECECEC',
  },
  textButtonProducer: {
    color: '#464646',
  },
});
