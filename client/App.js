import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './app/screen/home.page';

const Stack = createStackNavigator();

function App(){

  return(

      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>

  )
}

export default App