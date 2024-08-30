import React from 'react'

import ProductList from './screen/ProductList'
import ProductDetails from './screen/ProductDetails'



import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='ProductList'
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

