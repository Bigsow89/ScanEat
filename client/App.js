import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';
import Home from './screens/Home';
import Scanner from './screens/Scanner';
import Search from './screens/Search';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Icon
                name='home'
                type='feather'
              />
            ),
          }}
        />
        <Tab.Screen
          name='Scanner'
          component={Scanner}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Icon
                name='maximize'
                type='feather'
              />
            ),
          }}
        />
        <Tab.Screen
          name='Search'
          component={Search}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Icon
                name='search'
                type='feather'
              />
            ),
          }}
        />
        <Tab.Screen
          name='Profile'
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Icon
                name='user'
                type='feather'
              />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
