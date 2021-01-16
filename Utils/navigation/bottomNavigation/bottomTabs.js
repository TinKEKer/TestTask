import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Home} from '../../../Components/Home';
import {ProfileComponent} from "../../../Components/Profile";
import {AuthProtectedScreen} from './authProtectedScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NewsComponent} from "../../../Components/News";

const Tab = createMaterialBottomTabNavigator();

export const BottomTabNavigation =()=>{
    return (
        <Tab.Navigator
            activeColor="rgb(255,255,255)"
            shifting={true}
        >

            <Tab.Screen name="Home"
                        component={Home}
                        options={{
                tabBarLabel: 'Home', tabBarColor:'purple',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="News" component={NewsComponent}  options={{
                tabBarLabel: 'News',
                tabBarColor:'#049ec6',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="newspaper-variant-outline" color={color} size={26} />
                )}} />
            <Tab.Screen name="Profile" options={{
                tabBarLabel: 'Profile',
                tabBarColor:'#9066ef',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="face-profile" color={color} size={26} />
                )}}>
                {(props)=><AuthProtectedScreen {...props} name={'Profile'}>
                    <ProfileComponent/>
                </AuthProtectedScreen>}
            </Tab.Screen>
        </Tab.Navigator>
    );
}
