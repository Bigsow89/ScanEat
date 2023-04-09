import React, {useState, useEffect }from 'react';
import { StyleSheet, StatusBar, Text,  ScrollView, TouchableOpacity, View, Platform } from 'react-native';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons' 
import AntDesign from 'react-native-vector-icons/AntDesign'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import UserAvatar from 'react-native-user-avatar';
import { useLogin } from '../Context/LoginProvider';
import axios from 'axios';

export default function Settings() {
  const [users, setUsers] = useState({
    username: "",
  })
  const { setIsLoggedIn,  user } = useLogin();
 
  useEffect(() => {
  
    axios
      .get(`http://192.168.191.159:8000/auth/loggedin-user`)
      
        .then(res => {
          setUsers(res.data);
         //setIsLoggedin(true);
        })
        .catch(err => {
          console.log(err);
        });
      }, []);  


      const handleChange = (e) => {
        const { name, value } = e.target;
    
        setUsers({ ...users, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .put(
            `http://192.168.191.159:8000/api/users/${_id}`,
            pokemon
          )
          .then((res) => navigate(`/users/${id}`))
          .catch((e) => console.log(e));
      };

  return (
    <View style={styles.AndroidSafeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding:10, width:"100%", backgroundColor: '#0c8079', height: 150 }}>
   
      </View>
      <TouchableOpacity style={{alignItems:'center'}}>
      
        <UserAvatar size={100} name={users.name} style={{width:140, height:140, borderRadius:100, marginTop:-70, backgroundColor:'#A4BE7B'}}/>
        </TouchableOpacity>
        <View style={{alignItems:'center'}}>
        <Text style={{fontSize:25, fontWeight: 'bold', padding: 10}}>{users.name}</Text>
        <Text style={{fontSize:15, fontWeight: 'bold', color: 'grey', marginBottom: 15}}>{users.email}</Text>
        </View>

      <TouchableOpacity style={styles.buttonIcons} >
      <AntDesign name="profile" size={25} color="#0c8079" paddingTop={3}/>
    <Text style={{padding: 5}}>Change username</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.buttonIcons} onPress={this.onShare}>
      <MaterialIcons name="alternate-email" size={25} color="#0c8079" />
    <Text style={{padding: 5}}>Change email</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonIcons}>
      <IconSimpleLineIcons name="user-following" size={25} color="#0c8079" />
    <Text style={{padding: 5}}>Reset Password</Text>
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