import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from './android/app/src/Screens/SplashScreen';
import FirstScreen from './android/app/src/Screens/FirstScreen';
import SignInScreen from './android/app/src/Screens/SignInScreen';
import MapScreen from './android/app/src/Screens/MapScreen';
import FindFriendScreen from './android/app/src/Screens/FindFriendScreen';
import ChatScreen from './android/app/src/Screens/ChatScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="splash"  screenOptions={{headerShown:false}}>
     <Stack.Screen name='splash' component={SplashScreen} />
     <Stack.Screen name='first' component={FirstScreen} />
     <Stack.Screen name='sign-in' component={SignInScreen} />
     <Stack.Screen name='Map' component={MapScreen} />
     <Stack.Screen name='friend' component={FindFriendScreen} />
     <Stack.Screen name='chat' component={ChatScreen} options={{headerShown:true}} />
     </Stack.Navigator>
    </NavigationContainer>
  )
}