import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SCREENS from './path'
import HomeScreen from '../screens/Home'
import SearchResultsTabNavigator from './SearchResultsTabNavigator'

const Stack = createStackNavigator()

export default function ExploreNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREENS.home}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={SCREENS.searchResults}
        component={SearchResultsTabNavigator}
      />
    </Stack.Navigator>
  )
}
