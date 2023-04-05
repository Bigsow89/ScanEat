import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';
import HomeScreen from './HomeScreen';
import Scanner from './Scanner';
import Search from './Search';
import Profile from './Profile';
const Tab = createBottomTabNavigator();

export default function AppNav() {
  return (
    // <NavigationContainer independent={true}>

    <>
      <SafeAreaView style={[styles.AndroidSafeArea, styles.bg]}>
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#c9d7ae',
            tabBarHideOnKeyboard: true,
            tabBarInactiveTintColor: '#ffffff',
            tabBarStyle: {
              backgroundColor: '#0c8079',
              height: 60,
            },
          }}>
          <Tab.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarIcon: (props) => (
                <Icon
                  name='home'
                  type='feather'
                  color={props.color}
                />
              ),
            }}
          />
          <Tab.Screen
            name='Scanner'
            component={Scanner}
            options={{
              headerShown: false,
              tabBarIcon: (props) => (
                <Icon
                  name='maximize'
                  type='feather'
                  color={props.color}
                />
              ),
            }}
          />
          <Tab.Screen
            name='Search'
            component={Search}
            options={{
              headerShown: false,
              tabBarIcon: (props) => (
                <Icon
                  name='search'
                  type='feather'
                  color={props.color}
                />
              ),
            }}
          />
          <Tab.Screen
            name='profile'
            component={Profile}
            options={{
              headerShown: false,
              tabBarIcon: (props) => (
                <Icon
                  name='user'
                  type='feather'
                  color={props.color}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
      <StatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    justifyContent: 'flex-end',
  },
  bg: {
    backgroundColor: '#eef2e6',
  },
});
