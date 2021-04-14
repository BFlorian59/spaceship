import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, StarShipScreen } from '../screen';
import React from 'react';
import { AppRoute } from './AppRoute';
import TermsScreen from '../screen/TermsScreen';
const Stack = createStackNavigator();


function MyStack() {
  return (
     
        <Stack.Navigator  mode={'modal'} initialRouteName={AppRoute.LOGIN_SCREEN}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Terms" component={TermsScreen}/>
            <Stack.Screen name="Starship" component={StarShipScreen} />
        </Stack.Navigator>
   
  );
}

export default MyStack;