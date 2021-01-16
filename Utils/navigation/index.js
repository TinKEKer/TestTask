import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {BottomTabNavigation} from './bottomNavigation/bottomTabs';
import {createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator()
export const Navigation = ()=>{
   return(
       <NavigationContainer>
           <Stack.Navigator header={null} headerMode='none'>
           <Stack.Screen name={'Main'} component={BottomTabNavigation}/>
           </Stack.Navigator>
       </NavigationContainer>
       )
}
