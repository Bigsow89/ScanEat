import React, { useContext, useEffect, useState } from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppForm from '../components/AppForm';
import { useLogin } from '../Context/LoginProvider';
import DrawerNavigator from './DrawerNaviagtor';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        component={AppForm}
        name='AppForm'
      />
      <Stack.Screen
        component={Profile}
        name='UserProfile'
      />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  const { isLoggedIn, setIsLoggedIn } = useLogin();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const userData = await AsyncStorage.getItem('@userData');

        if (userData) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.log('Error while getting login status:', error);
      } finally {
        setLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  const handleLogin = async () => {
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save user data to AsyncStorage
        await AsyncStorage.setItem('@userData', JSON.stringify(data.user));
        console.log('jjjjjjj', JSON.stringify(data.user));
        setIsLoggedIn(true);
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.log('Error logging in:', error);
      setError('Error logging in. Please try again.');
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('@userData');
      setIsLoggedIn(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <Text>Waiting</Text>; // or render a loading spinner
  }

  console.warn('isLoggedIn', isLoggedIn);
  return isLoggedIn ? (
    <DrawerNavigator handleLogout={handleLogout} />
  ) : (
    <StackNavigator handleLogin={handleLogin} />
  );
};

export default MainNavigator;

// import React, { useContext, useEffect, useState } from 'react';
// import { Text } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import AppForm from '../components/AppForm';
// import { useLogin } from '../Context/LoginProvider';
// import DrawerNavigator from './DrawerNaviagtor';
// import Profile from '../screens/Profile';

// const Stack = createStackNavigator();

// const StackNavigator = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen
//         component={AppForm}
//         name='AppForm'
//       />
//       <Stack.Screen
//         component={Profile}
//         name='UserProfile'
//       />
//     </Stack.Navigator>
//   );
// };

// const MainNavigator = () => {
//   const { isLoggedIn, setIsLoggedIn } = useLogin();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const checkLoginStatus = async () => {
//       try {
//         const loginStatus = await AsyncStorage.getItem('@storage_Key');
//         console.log('whaattt', loginStatus);

//         if (loginStatus === null) {
//           setIsLoggedIn(false);
//         } else {
//           setIsLoggedIn(true);
//         }
//       } catch (error) {
//         console.log('Error while getting login status:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkLoginStatus();
//   }, []);

//   /*   const handleLogin = async () => {
//     try {
//       await AsyncStorage.setItem('isLoggedIn', 'true');
//       setIsLoggedIn(true);
//     } catch (error) {
//       console.log(error);
//     }
//   }; */

//   const handleLogin = async (value) => {
//     try {
//       const jsonValue = JSON.stringify({ status: 'true' });
//       await AsyncStorage.setItem('@storage_Key', jsonValue);
//       setIsLoggedIn(true);
//     } catch (e) {
//       // saving error
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await AsyncStorage.setItem('isLoggedIn', 'false');
//       setIsLoggedIn(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   if (loading) {
//     return <Text>Waiting</Text>; // or render a loading spinner
//   }
//   console.warn('isLoggedIn', isLoggedIn);
//   return isLoggedIn ? (
//     <DrawerNavigator handleLogout={handleLogout} />
//   ) : (
//     <StackNavigator handleLogin={handleLogin} />
//   );
// };

// export default MainNavigator;

// // import React, { useContext, useEffect, useState } from 'react';
// // import { createStackNavigator } from '@react-navigation/stack';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import AppForm from '../components/AppForm';
// // import { useLogin } from '../Context/LoginProvider';
// // import DrawerNavigator from './DrawerNaviagtor';
// // import Profile from '../screens/Profile';
// // import StartScreen from '../screens/StartScreen';

// // const Stack = createStackNavigator();

// // const StackNavigator = () => {
// //   return (
// //     <Stack.Navigator screenOptions={{ headerShown: false }}>
// //       <Stack.Screen
// //         component={AppForm}
// //         name='AppForm'
// //       />

// //       <Stack.Screen
// //         component={Profile}
// //         name='UserProfile'
// //       />
// //     </Stack.Navigator>
// //   );
// // };

// // const MainNavigator = () => {
// //   const { isLoggedIn } = useLogin();
// //   const [loading, setLoading] = useState(true);
// //   useEffect(() => {
// //     const checkLoggedIn = async () => {
// //       try {
// //         const isLoggedInValue = await AsyncStorage.getItem('isLoggedIn');
// //         isLoggedIn(!!isLoggedInValue); // set isLoggedIn based on the value retrieved from AsyncStorage
// //       } catch (e) {
// //         console.log(e);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     checkLoggedIn();
// //   }, []);
// //   if (loading) {
// //     return null;
// //   }

// //   return isLoggedIn ? <DrawerNavigator /> : <StackNavigator />;
// // };
// // export default MainNavigator;

// import React, { useContext, useEffect, useState } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import AppForm from '../components/AppForm';
// import { useLogin } from '../Context/LoginProvider';
// import DrawerNavigator from './DrawerNaviagtor';
// import Profile from '../screens/Profile';
// import StartScreen from '../screens/StartScreen';

// const Stack = createStackNavigator();

// const StackNavigator = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen
//         component={AppForm}
//         name='AppForm'
//       />

//       <Stack.Screen
//         component={Profile}
//         name='UserProfile'
//       />
//     </Stack.Navigator>
//   );
// };

// const MainNavigator = () => {
//   const { isLoggedIn } = useLogin();
//   const [loading, setLoading] = useState(true);
//   const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

//   useEffect(() => {
//     const checkLoggedIn = async () => {
//       try {
//         const isLoggedInValue = await AsyncStorage.getItem('@storage_key');
//         setIsUserLoggedIn(!isLoggedInValue); // set isUserLoggedIn based on the value retrieved from AsyncStorage
//       } catch (e) {
//         console.log(e);
//       } finally {
//         setLoading(false);
//       }
//     };
//     checkLoggedIn();
//   }, []);

//   if (loading) {
//     return null;
//   }

//   return isUserLoggedIn ? <DrawerNavigator /> : <StackNavigator />;
// };

// export default MainNavigator;
