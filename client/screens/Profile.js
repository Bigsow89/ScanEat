import React from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Platform,
  Share,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Arrow from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import UserAvatar from 'react-native-user-avatar';
import AuthNav from './AuthNav';
import LoginScreen from './LoginScreen/LoginScreen';
import { useNavigation } from '@react-navigation/native';


export default function Profile() {
  const navigation = useNavigation();
  const onLogOutPressed = () => {
    navigation.navigate('Login');
  };
  onShare = () => {
    let text =
      "Hello, I just installed this App for scanning products if they include insects or not. I found it so helpful. I'm going to start using it in my daily life. ";
    if (Platform.OS === 'android') text = text.concat('https://www.google.com');
    else text = text.concat('https://www.google.com');
    Share.share(
      {
        subect: 'ScanEat',
        Title: 'ScanEat',
        message: text,
        url: 'https://www.google.com',
      },
      {
        dialogTitle: 'Please share it !',
        excludedActivityTypes: [],
      }
    );
  };
  return (
    <View style={[styles.AndroidSafeArea, styles.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            padding: 10,
            width: '100%',
            backgroundColor: '#0c8079',
            height: 150,
          }}>
          <TouchableOpacity>
            <Arrow
              name='ios-arrow-undo-outline'
              size={30}
              color='white'
            />

            <View></View>
            <View></View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          {/* <Image source={profileImage} style={{width:140, height:140, borderRadius:100, marginTop:-70}}/> */}
          <UserAvatar
            size={100}
            name='Ahmad Chamas'
            style={{
              width: 140,
              height: 140,
              borderRadius: 100,
              marginTop: -70,
              backgroundColor: '#A4BE7B',
            }}
          />
        </TouchableOpacity>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 10 }}>
            Ahmad Chamas
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'grey',
              marginBottom: 15,
            }}>
            Email@gmail.com
          </Text>
        </View>

        <TouchableOpacity style={styles.buttonIcons}>
          <Icon
            name='favorite-border'
            size={25}
            color='#0c8079'
            paddingTop={3}
          />
          <Text style={{ padding: 5 }}>Your Favoraite</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonIcons}
          onPress={this.onShare}>
          <IconFeather
            name='share-2'
            size={25}
            color='#0c8079'
          />
          <Text style={{ padding: 5 }}>Tell your Friend</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonIcons}>
          <IconSimpleLineIcons
            name='user-following'
            size={25}
            color='#0c8079'
          />
          <Text style={{ padding: 5 }}>Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonIcons}>
          <IconFeather
            name='settings'
            size={25}
            color='#0c8079'
          />
          <Text style={{ padding: 5 }}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonIcons}
          onPress={onLogOutPressed}>
          <SimpleLineIcons
            name='logout'
            size={25}
            color='#0c8079'
          />
          <Text style={{ padding: 5, fontWeight: 'bold' }}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2e6',
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
    elevation: 15,
    marginBottom: 15,
  },
});
