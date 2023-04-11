import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import client from '../components/api/client';
import { useLogin } from '../Context/LoginProvider';
import { isValidEmail, isValidObjField, updateError } from './utils/methods';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitButton from './FormSubmitButton';
import CustomButton from './CustomButton/CustomButton';
import SocialSignInButtons from './SocialSignInButtons/SocialSignInButtons';

const LoginForm = () => {
  const { setIsLoggedIn, setProfile } = useLogin();
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const { email, password } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError('Required all fields!', setError);

    if (!isValidEmail(email)) return updateError('Invalid email!', setError);

    if (!password.trim() || password.length < 8)
      return updateError('Password is too short!', setError);

    return true;
  };

  const submitForm = async () => {
    if (isValidForm()) {
      try {
        const res = await client.post('/auth/login', { ...userInfo });

        if (res.data.success) {
          setUserInfo({ email: '', password: '' });
          setProfile(res.data.user);
          setIsLoggedIn(true);
        }

       // console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <FormContainer>
      {error ? (
        <Text style={{ color: 'red', fontSize: 18, textAlign: 'center' }}>
          {error}
        </Text>
      ) : null}
      <FormInput
        value={email}
        onChangeText={(value) => handleOnChangeText(value, 'email')}
        label='Email'
        placeholder='example@email.com'
        autoCapitalize='none'
      />
      <FormInput
        value={password}
        onChangeText={(value) => handleOnChangeText(value, 'password')}
        label='Password'
        placeholder='********'
        autoCapitalize='none'
        secureTextEntry
      />

      <FormSubmitButton
        onPress={submitForm}
        title='Login'
      />
      <SocialSignInButtons />
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  forgotpassword: {
    alignSelf: 'flex-end',
  },
  signup: {
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default LoginForm;
