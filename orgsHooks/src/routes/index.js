import React from 'react';

import BestProducers from './../screens/BestProducers';
import Home from './../screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="BestProducers" component={BestProducers} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
