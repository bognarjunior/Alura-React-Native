import React from 'react';
import BestProducers from './../screens/BestProducers';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProducersRoutes from './ProducersRoutes';

const Tab = createBottomTabNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={ProducersRoutes} />
        <Tab.Screen name="BestProducers" component={BestProducers} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
