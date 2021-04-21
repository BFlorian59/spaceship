import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, StarShipScreen } from '../screen';
import React from 'react';
import './AppRoute';
import TermsScreen from '../screen/TermsScreen';
import StarshipsFeedScreen from '../screen/StarShipScreen';
import { AppRoute } from './AppRoute';
const Stack = createStackNavigator();


export default function MyStack() {
  return (
     
        <Stack.Navigator >

            <Stack.Screen name={AppRoute.LOGIN_SCREEN} component={LoginScreen}/>
            <Stack.Screen name={AppRoute.STARSHIP_SCREEN} component={StarshipsFeedScreen} />
            <Stack.Screen name={AppRoute.TERMS_SCREEN} component={TermsScreen}/>
        </Stack.Navigator>
   
  );
}

