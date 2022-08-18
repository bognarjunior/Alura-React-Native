import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Producers from '../screens/Producers';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();
const ProducersRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeStack" component={Home} />
      <Stack.Screen name="Producer" component={Producers} />
    </Stack.Navigator>
  );
};

export default ProducersRoutes;
