import React from 'react'
import LoginPage from '../Screens/login'
import { View, Text } from 'react-native'
import Signup from '../Screens/signup'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()


const Router = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"LoginPage"} component={LoginPage} options={{
          headerShown: false
        }} />
        <Stack.Screen name={"Signup"} component={Signup} options={{
          headerShown: false
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
