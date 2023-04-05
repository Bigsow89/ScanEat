import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import AppNav from '../screens/AppNav';
import axios from 'axios';
import { useLogin } from '../Context/LoginProvider';
import UserAvatar from 'react-native-user-avatar';
import Scanner from '../screens/Scanner';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import {client} from './api/client';

const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {


 
  
  const { setIsLoggedIn, user } = useLogin();
 

 /*  useEffect(() => {
    axios
      .get('http://192.168.191.159:8000/auth/loggedin-user')
      .then(res => {
        console.log(res.data);
        setIsLoggedin(true);
      })
      .catch(err => {
        console.log(err);
      });
  }, []); */

  
  const handleLogout =  () => {
    try{
      axios.post('http://192.168.191.159:8000/auth/logout', {})
  

      .then(res => {
       setIsLoggedIn(false);
      
    })
  //console.log(profile.name)
      
    }catch{
      (error) => {
        console.error(error)
    }
    
  };
}
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
            <Text style={{fontSize:16, fontWeight:'bold'}}>{user.name}</Text>
           
          </View>
          <UserAvatar
            size={60}
            name={user.name}
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
        onPress={handleLogout}
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