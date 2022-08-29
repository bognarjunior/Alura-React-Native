import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProducersRoutes from './ProducersRoutes';
import BestProducersRoutes from './BestPrducerRoutes';

import Heart from '../assets/heart.svg';
import Home from '../assets/home.svg';

const Tab = createBottomTabNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarLabel: route.name === 'Home' ? 'Home' : 'Melhores Produtores',
          tabBarIcon: ({color}) => {
            const {name} = route;
            let Icon = Home;

            if (name === 'BestProducers') {
              Icon = Heart;
            }
            return <Icon color={color} />;
          },
          tabBarActiveTintColor: '#2A9F85',
          tabBarInactiveTintColor: '#C7C7C7',
        })}>
        <Tab.Screen name="Home" component={ProducersRoutes} />
        <Tab.Screen name="BestProducers" component={BestProducersRoutes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
