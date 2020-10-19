import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screen/login.page';

const Stack = createStackNavigator();

const GuardRoute = ({ component: Component, ...rest }) => {
    const checkToken = false;
    AsyncStorage.getItem('loginToken', (error, result) => {
      if (result === 'ekekekeke') {
        checkToken = true;
      }
      else{
        checkToken = false;
      }
    });

    return(
        <Stack.Screen {...rest} render={(props) => (
            checkToken ? Component={...props} :
            Component={Login}
        )} />
    )
}

export default GuardRoute;