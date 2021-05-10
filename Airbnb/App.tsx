/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import Router from './src/navigations/Router'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Router />
    </>
  )
}

export default App
