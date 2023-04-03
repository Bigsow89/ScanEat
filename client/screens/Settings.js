import React from 'react';
import { StyleSheet, StatusBar, Text, Image, SafeAreaView, ScrollView, TouchableOpacity, View, Platform, Share } from 'react-native';
import profileImage from '../assets/profile1.jpg';

import Icon from 'react-native-vector-icons/MaterialIcons'
import IconFeather from 'react-native-vector-icons/Feather' 
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons' 
import Arrow from 'react-native-vector-icons/Ionicons' 
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import UserAvatar from 'react-native-user-avatar';

export default function Settings() {

  
  return (
    <View style={styles.AndroidSafeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding:10, width:"100%", backgroundColor: '#0c8079', height: 150 }}>
     <TouchableOpacity>
        <Arrow name="ios-arrow-undo-outline" size={30} color="white"/>

        <View></View>
        <View></View>
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={{alignItems:'center'}}>
      
        <UserAvatar size={100} name="Ahmad Chamas" style={{width:140, height:140, borderRadius:100, marginTop:-70, backgroundColor:'#A4BE7B'}}/>
        </TouchableOpacity>
        <View style={{alignItems:'center'}}>
        <Text style={{fontSize:25, fontWeight: 'bold', padding: 10}}>Ahmad Chamas</Text>
        <Text style={{fontSize:15, fontWeight: 'bold', color: 'grey', marginBottom: 15}}>Email@gmail.com</Text>
        </View>

      <TouchableOpacity style={styles.buttonIcons} >
      <Icon name="favorite-border" size={25} color="#0c8079" paddingTop={3}/>
    <Text style={{padding: 5}}>Username</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.buttonIcons} onPress={this.onShare}>
      <IconFeather name="share-2" size={25} color="#0c8079" />
    <Text style={{padding: 5}}>Email</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonIcons}>
      <IconSimpleLineIcons name="user-following" size={25} color="#0c8079" />
    <Text style={{padding: 5}}>Password</Text>
    </TouchableOpacity>
   
      </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  buttonIcons: {
    
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '90%',
    padding: 15,
    paddingBottom: 22,
    borderRadius: 10,
    shadowOpacity: 80,
    elevation:15,
    marginBottom: 15,
    
  }
});