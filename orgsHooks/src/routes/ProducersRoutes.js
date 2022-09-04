import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Producer from '../screens/Producer';
import Home from '../screens/Home';
import Basket from '../screens/Basket';
import Resume from '../screens/Resume';

const Stack = createNativeStackNavigator();
const ProducersRoutes = ({Component = Home}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeStack" component={Component} />
      <Stack.Screen name="Producer" component={Producer} />
      <Stack.Screen name="Basket" component={Basket} />
      <Stack.Screen name="Resume" component={Resume} />
    </Stack.Navigator>
  );
};

export default ProducersRoutes;
