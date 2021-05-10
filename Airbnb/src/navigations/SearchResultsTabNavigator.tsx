import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchResultsScreen from '../screens/SearchResults'
import SearchResultsMapScreen from '../screens/SearchResultsMap'

const Tab = createMaterialTopTabNavigator()

export default function SearchResultsTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'list'} component={SearchResultsScreen} />
      <Tab.Screen name={'map'} component={SearchResultsMapScreen} />
    </Tab.Navigator>
  )
}
