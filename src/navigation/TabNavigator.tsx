import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import theme from '../theme';
import {Platform, StyleSheet} from 'react-native';
// icons
import SearchIcon from '../assets/icons/SearchIcon';
import AppointmentIcon from '../assets/icons/AppointmentIcon';
import ChatTabIcon from '../assets/icons/ChatTabIcon';
import ProfileTabIcon from '../assets/icons/ProfileTabIcon';
// screens
import SearchScreen from '../screens/TabScreens/SearchScreen/SearchScreen';
import AppointmentScreen from '../screens/TabScreens/AppointmentScreen/AppointmentScreen';
import ChatScreen from '../screens/TabScreens/ChatScreen/ChatScreen';
import ProfileMenuScreen from '../screens/TabScreens/ProfileMenuScreen/ProfileMenuScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarHideOnKeyboard: true,
      tabBarStyle: styles.tabBarStyle,
      headerShown: false,
      tabBarActiveTintColor: theme.palette.primaryBrand[300],
      tabBarInactiveTintColor: theme.palette.gray[600],
    }}>
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarLabel: 'Поиск',
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarIcon: ({focused, color, size}) => (
          <SearchIcon
            color={
              focused
                ? theme.palette.primaryBrand[300]
                : theme.palette.gray[600]
            }
          />
        ),
      }}
    />
    <Tab.Screen
      name="Appointment"
      component={AppointmentScreen}
      options={{
        tabBarLabel: 'Записи',
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarIcon: ({focused, color, size}) => (
          <AppointmentIcon
            color={
              focused
                ? theme.palette.primaryBrand[300]
                : theme.palette.gray[600]
            }
          />
        ),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={ChatScreen}
      options={{
        tabBarLabel: 'Чаты',
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarIcon: ({focused, color, size}) => (
          <ChatTabIcon
            color={
              focused
                ? theme.palette.primaryBrand[300]
                : theme.palette.gray[600]
            }
          />
        ),
      }}
    />
    <Tab.Screen
      name="ProfileTab"
      component={ProfileMenuScreen}
      options={{
        tabBarLabel: 'Профиль',
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarIcon: ({focused, color, size}) => (
          <ProfileTabIcon
            color={
              focused
                ? theme.palette.primaryBrand[300]
                : theme.palette.gray[600]
            }
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  tabBarStyle: {
    height: Platform.OS === 'ios' ? 80 : 60,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.palette.white.base,
    borderTopWidth: 1,
    borderColor: theme.palette.gray[400],
    elevation: 0,
  },
  tabBarLabelStyle: {
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.08,
    textAlign: 'center',
  },
});

export default TabNavigator;
