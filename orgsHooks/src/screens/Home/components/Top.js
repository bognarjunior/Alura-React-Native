import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import logo from './../../../assets/logo.png';
import {getTop} from '../../../services/loadData';

class Top extends React.Component {
  state = {
    top: {
      welcome: '',
      subtitle: '',
    },
  };
  updateTop() {
    const data = getTop();
    this.setState({top: data});
  }
  componentDidMount() {
    this.updateTop();
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <Image source={logo} style={styles.image} />
        <Text style={styles.welcomeText}>{this.state.top.welcome}</Text>
        <Text style={styles.subtitle}>{this.state.top.subtitle}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  image: {
    width: 70,
    height: 28,
  },
  welcomeText: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3',
  },
});

export default Top;
