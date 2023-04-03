import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import AppNav from '../screens/AppNav';
import Home from './Home';
import Tasks from './Tasks';
import { useLogin } from '../Context/LoginProvider';
import UserAvatar from 'react-native-user-avatar';
import Scanner from '../screens/Scanner';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
const Drawer = createDrawerNavigator();

const CustomDrawer = props => {
  const { setIsLoggedIn, profile } = useLogin();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#f6f6f6',
            marginBottom: 20,
          }}
        >
          <View>
            <Text style={{fontSize:16, fontWeight:'bold'}}>{profile.name}</Text>
           
          </View>
          <UserAvatar
            size={60}
            name={profile.name}
            style={{
              width: 70,
              height: 70,
              borderRadius: 100,
             
              backgroundColor: '#A4BE7B',
            }}
          />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 50,
          backgroundColor: '#f6f6f6',
          padding: 20,
        }}
        onPress={() => setIsLoggedIn(false)}
      >
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitle: '',
      }}
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen component={AppNav} name='Home' />
      <Drawer.Screen component={Scanner} name='Scan product' />
      <Drawer.Screen component={Search} name='Search products' />
      <Drawer.Screen component={Profile} name='My Profile' />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;