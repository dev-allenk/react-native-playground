import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DestinationSearchScreen from '../screens/DestinationSearch'
import SCREENS from './path'
import HomeTabNavigator from './HomeTabNavigator'
import GuestsScreen from '../screens/Guests'

const Stack = createStackNavigator()

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREENS.home}
          component={HomeTabNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={SCREENS.destinationSearch}
          component={DestinationSearchScreen}
        />

        <Stack.Screen name={SCREENS.guests} component={GuestsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
