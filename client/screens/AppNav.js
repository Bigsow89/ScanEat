import { StyleSheet, Text, View, SafeAreaView ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import ProductDetail from "../components/ProductDetail";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import HomeScreen from "./HomeScreen";
import Scanner from "./Scanner";
import Search from "./Search";
import Profile from "./Profile";
import Settings from "./Settings";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const SearchStack = createStackNavigator();
const HistoryStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
function SearchStackNavigator() {
  return (

    
 

   


    <SearchStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#eef2e6",
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
        },
      }}
    >
      <SearchStack.Screen name="Search" component={Search} />
      <SearchStack.Screen name="ProductDetail" component={ProductDetail} />
      
    </SearchStack.Navigator>
  );
}
/* function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
} */

/* function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
} */

function HistoryStackNavigator() {
  return (

      <HistoryStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#eef2e6",
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
        },
      }}
    >
      <HistoryStack.Screen name="Home" component={HomeScreen} />
      <HistoryStack.Screen name="ProductDetail" component={ProductDetail} />
      
    </HistoryStack.Navigator>
  );
}





export default function AppNav() {
  return (
    <>
   <NavigationContainer independent={true}>
      <SafeAreaView style={[styles.AndroidSafeArea, styles.bg]}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#c9d7ae",
            tabBarHideOnKeyboard: true,
            tabBarInactiveTintColor: "#ffffff",
            tabBarStyle: {
              backgroundColor: "#0c8079",
              height: 60,
            },
          }}
        >
          <Tab.Screen

            name='HomeScreen'

            component={HistoryStackNavigator}
            options={{
              headerShown: false,
              tabBarIcon: (props) => (
                <Icon name="home" type="feather" color={props.color} />
              ),
            }}
          />
          <Tab.Screen
            name="Scanner"
            component={Scanner}
            options={{
              headerShown: false,
              tabBarIcon: (props) => (
                <Icon name="maximize" type="feather" color={props.color} />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchStackNavigator}
            options={{
              headerShown: false,
              tabBarIcon: (props) => (
                <Icon name="search" type="feather" color={props.color} />
              ),
            }}
          />

          {/*  <Tab.Screen
            name="profile"
            component={Profile}
            options={{
              headerShown: false,
              tabBarIcon: (props) => (
                <Icon name="user" type="feather" color={props.color} />
              ),
            }}
            />
            {() => (
              <SettingsStack.Navigator>
                <SettingsStack.Screen
                  name="Settings"
                  component={Settings}
                />
                <SettingsStack.Screen name="Profile" component={Profile} />
              </SettingsStack.Navigator>
            )}  */}

          <Tab.Screen name="Profil"  options={{
              headerShown: false,
              tabBarIcon: (props) => (
                <Icon name="user" type="feather" color={props.color} />
              ),
            }}>
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen
                name="Profile"
                component={Profile}
              />
              <SettingsStack.Screen name="Settings" component={Settings} />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
     
     
          
          
        </Tab.Navigator>
        
      </SafeAreaView>

      <StatusBar style='auto' />
      </NavigationContainer>


    </>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    justifyContent: "flex-end",
  },
  bg: {
    backgroundColor: "#eef2e6",
  },
});
