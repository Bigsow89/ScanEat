import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import Logo from '../../assets/logo2.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { height } = useWindowDimensions();

  const navigation = useNavigation();
  const onLoginPressed = () => {
    //Validate the user in backend
    navigation.navigate('AppNav');
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate('ResetPassword');
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.root}>
            <Image
              source={Logo}
              style={[styles.image, { height: height * 0.3 }]}
              resizeMode='contain'
            />

            <CustomInput
              placeholder='Email'
              value={email}
              setValue={setEmail}
            />
            <CustomInput
              placeholder='Password'
              value={password}
              setValue={setPassword}
              secureTextEntry={true}
            />

            <View style={styles.forgotpassword}>
              <CustomButton
                text='forgot password?'
                type='TERTIARY'
                onPress={onForgotPasswordPressed}
              />
            </View>

            <CustomButton
              text='LOGIN'
              type='PRIMARY'
              onPress={onLoginPressed}
            />

            <SocialSignInButtons />

            <View style={styles.signup}>
              <CustomButton
                text="Don't have an account? Sign up"
                type='TERTIARY'
                onPress={onSignUpPressed}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  image: {
    width: '40%',
    maxWidth: 500,
    maxHeight: 300,
    marginVertical: 20,
  },
  forgotpassword: {
    alignSelf: 'flex-end',
  },
  signup: {
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default LoginScreen;
