import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import BottomNav from './Navigation/BottomNav'
import FlipLogo from './Components/FlipLogo'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const App = () => {

  const linking = {
    prefixes: ['FlipKart://Clone'],
    config: {
      screens: {
        FlipLogo: '',
        BottomNav: 'BottomNav',
      },
    },
  }
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="FlipLogo">
        <Stack.Screen
          name="FlipLogo"
          component={FlipLogo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomNav"
          component={BottomNav}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App


