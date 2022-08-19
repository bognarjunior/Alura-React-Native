import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Producer from '../screens/Producer';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();
const ProducersRoutes = ({Component = Home}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeStack" component={Component} />
      <Stack.Screen name="Producer" component={Producer} />
    </Stack.Navigator>
  );
};

export default ProducersRoutes;
