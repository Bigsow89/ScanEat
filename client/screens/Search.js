import React from 'react';
import { VStack, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, Divider, Heading } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet,  Image ,SafeAreaView, StatusBar} from 'react-native';

const Search = () => {
  return <VStack my="4" space={5} w="100%" maxW="300px" divider={<Box px="2">
     <Divider />
        </Box>}>
        <VStack w="100%" space={5} alignSelf="center">
          <Center/>
        
        <Input placeholder="Search" variant="rounded" width="100%" borderRadius="20" py="2" 
        px="2" InputLeftElement={<Icon ml="2" size="5" color="gray.400" as={<Ionicons name="ios-search" />} />} />
      </VStack>
      </VStack>;
};

    export default () => {
        return (
          <>
          <NativeBaseProvider >
          <VStack space={4} alignItems="center">
        
               <Search/>  
         
               </VStack>    
               <SafeAreaView style={[styles.container, styles.AndroidSafeArea]}>
               <Image
        source={require('../assets/empty-home-page.png')}
        style={styles.image}
      />          
      </SafeAreaView> 
          </NativeBaseProvider>
          </>
        );
    };





const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 260,
    height: 260,
    opacity: 0.7,
  },
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});