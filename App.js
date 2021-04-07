import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTintColor: "#ffffff",
        headerStyle: {
          backgroundColor: "#333399",
        }
      }}
      headerMode="float"
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Detail" component={DetailScreen} />
    </HomeStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTintColor: "#ffffff",
        headerStyle: {
          backgroundColor: "#333399",
        }
      }}
      headerMode="float"
    >
      <HomeStack.Screen name="Chat" component={ProfileScreen} />
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home';
              } else if (route.name === 'Notification') {
                iconName = focused
                  ? 'search'
                  : 'search';
              } else if (route.name === 'Profile') {
                iconName = focused
                  ? 'chat'
                  : 'chat';
              } else if (route.name === 'Settings') {
                iconName = focused
                  ? 'settings'
                  : 'settings';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          }
          )}
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
            activeBackgroundColor: 'white',
            inactiveBackgroundColor: 'white',
          }}
        >
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Notification" component={NotificationsScreen} />
          <Tab.Screen name="Profile" component={ProfileStackScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
