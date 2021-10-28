import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions';
// eslint-disable-next-line import/imports-first
import { Formik } from 'formik';
// eslint-disable-next-line import/imports-first
import * as Yup from 'yup';
import {
  View,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
  Text,
// eslint-disable-next-line import/imports-first
} from 'react-native';
import colors from '../colors-config/colors';

const Login = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  return (
    <View style={styles.container}>
      {route.params.auth.status === 'logged out' ? (
        <View>
          <View style={styles.headerContainer}>
            <View>
              <Text style={styles.headerText}>Welcome Back!</Text>
              <Text style={[styles.headerText, styles.grayText]}>
                Login to continue.
              </Text>
            </View>

            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                // eslint-disable-next-line global-require
                source={require('../images/drawing.png')}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Formik
              initialValues={{ username: '', password: '' }}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
                if (values.username && values.password) {
                  dispatch(login(values));
                  navigation.navigate({
                    name: 'Typing',
                    merge: true,
                    params: route.params
                  });
                }
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <View>
                  <TextInput
                    name="username"
                    placeholder="Username"
                    autoCapitalize="none"
                    placeholderTextColor={colors.lighterBlue}
                    selectionColor={colors.yellow}
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                    style={styles.input}
                  />
                  {errors.username && (
                    <Text style={{ fontSize: 12, color: 'red' }}>
                      {errors.username}
                    </Text>
                  )}

                  <TextInput
                    name="password"
                    placeholder="Password"
                    autoCapitalize="none"
                    placeholderTextColor={colors.lighterBlue}
                    selectionColor={colors.yellow}
                    onChangeText={handleChange('password')}
                    secureTextEntry
                    onBlur={handleBlur('password')}
                    value={values.password}
                    style={styles.input}
                  />
                  {errors.password && (
                    <Text style={{ fontSize: 12, color: 'red' }}>
                      {errors.password}
                    </Text>
                  )}

                  <Pressable onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                  </Pressable>
                </View>
              )}
            </Formik>
          </View>
        </View>
      ) : (
        navigation.navigate({
          name: 'Typing',
          merge: true,
          params: route.params
        })
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
  },
  headerContainer: {
    paddingTop: 160,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  grayText: {
    color: colors.lighterBlue,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  logo: {
    width: 150,
    height: 150,
  },
  inputContainer: {
    paddingTop: 40,
  },
  input: {
    height: 35,
    borderBottomColor: colors.lighterBlue,
    borderBottomWidth: 1,
    marginTop: 20,
    color: colors.black,
  },
  button: {
    backgroundColor: colors.blue,
    borderRadius: 3,
    marginTop: 30,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    lineHeight: 35,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Login;
