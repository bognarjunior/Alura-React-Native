import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProducersRoutes from './ProducersRoutes';
import BestProducersRoutes from './BestPrducerRoutes';

const Tab = createBottomTabNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="Home" component={ProducersRoutes} />
        <Tab.Screen name="BestProducers" component={BestProducersRoutes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
