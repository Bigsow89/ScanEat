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
          tabBarActiveTintColor: '#0c8079',
        }}>
        <Tab.Screen
          name='Home'
          component={Home}
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
          name='Profile'
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
