import React from 'react'
import LoginPage from '../Screens/login'
import Signup from '../Screens/signup'
import HomeScreen from '../Screens/HomeScreen'
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
        <Stack.Screen name={"HomeScreen"} component={HomeScreen} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
