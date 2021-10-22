import React from 'react';
import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Home from '../screens/home';
import About from '../screens/about';
import ReviewDetails from '../screens/reviewDetails';
import HomeNavigator from './HomeNavigation';


const Tab = createMaterialBottomTabNavigator();

const MainTab = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{
          backgroundColor: '#000',
          paddingBottom: Platform.OS === 'android' ? 48 : 0,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-home-sharp" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color }) => (
              <Ionicons name="information-circle" color={color} size={26} />
            ),
          }}
        />
 
      </Tab.Navigator>
    );
}

export default MainTab
