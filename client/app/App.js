import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from './store/index'
import Home from './screen/home.page';
import Categories from './screen/categories.page';
import Article from './screen/article.page';
import Search from './screen/search.page';
import Member from './screen/member.page';
import CreateArticle from './screen/createArticle.page';
import Login from './screen/login.page';

const Stack = createStackNavigator();

function App(){

  return(
    <Provider store = {store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Categories" component={Categories}/>
            <Stack.Screen name="Article" component={Article}/>
            <Stack.Screen name="Search" component={Search}/>
            <Stack.Screen name="Member" component={Member}/>
            <Stack.Screen name="CreateArticle" component={CreateArticle}/>
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  )
}

export default App