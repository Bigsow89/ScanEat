import React, {useEffect, useState} from 'react';
import { StyleSheet, StatusBar, Text, Image, SafeAreaView, FlatList, TouchableOpacity,} from 'react-native';
//import client from '../../components/api/client'
//import { useLogin } from '../../Context/LoginProvider';
import axios from 'axios';
import {
  VStack,
  HStack,

  Spacer,
  NativeBaseProvider,


  Box,
 
} from "native-base"
import { useNavigation } from "@react-navigation/native";

const  Home = () => {
  const navigation = useNavigation();
  //const { setIsLoggedIn, setProfile } = useLogin();
const [history, setHistory] = useState([]);
    useEffect(() => {
    axios
      .get('http://192.168.191.159:8000/auth/loggedin-user')
      .then(res => {
        setHistory(res.data.history);
       //setIsLoggedin(true);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);  



  return (
   
    <SafeAreaView style={[styles.container, styles.AndroidSafeArea]}>
    {/*   <Image
        source={require('../../assets/empty-home-page.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Hey, wanna scan some items?</Text> */}
          <FlatList
          data={history}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ProductDetail", { productData: item })
              }
            >
              <Box
                style={{ width: 420 }}
                borderBottomWidth="1"
                _dark={{
                  borderColor: "muted.50",
                }}
                borderColor="muted.800"
                pl={["0", "4"]}
                pr={["0", "5"]}
                py="2"
              >
                <HStack space={[2, 3]} justifyContent="space-between">
                  <Image
                    source={{ uri: item.photos }}
                    style={{ width: 80, height: 80 }}
                    alt={item.productName}
                  />
                  <VStack>
                    <Text
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      bold
                    >
                      {item.productName}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                    >
                      {item.categoryName}
                    </Text>
                  </VStack>
                  <Spacer />
                  <Image
                    source={{ uri: item?.classificationPhoto[0] }}
                    style={{
                      width: 40,
                      height: 40,
                      alignSelf: "center",
                      marginRight: 22,
                    }}
                    alt={item.productName}
                  />
                </HStack>
              </Box>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
    </SafeAreaView>
  
  
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={[styles.container, styles.AndroidSafeArea]}>
        <Home />
        
      </SafeAreaView>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eef2e6',
  },
  image: {
    width: 240,
    height: 240,
    opacity: 0.7,
  },
  text: {
    fontSize: 24,
    paddingTop: 20,
    opacity: 0.5,
  },
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
