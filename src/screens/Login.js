import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions'
import { View, StyleSheet, Pressable, TextInput, Image, Text } from 'react-native'
import colors from '../colors-config/colors'

const Login = ({ navigation, route }) => {
  const [user, setUser] = useState({})
  const dispatch = useDispatch()
  const loggedin = useSelector(state => state.auth)

  const handleChange = (name, value) => {
    setUser({ ...user, [name]: value })
  }

  const onSubmit = () => {
    if (user.username && user.password) {
      dispatch(login(user))
      navigation.navigate({
        name: "Typing",
        merge: true
      })
    }
  }

  return (
    <View style={styles.container}>
      {loggedin.status === "logged out" ?
        <>
          <View style={styles.headerContainer}>
            <View >
              <Text style={styles.headerText}>Welcome Back!</Text>
              <Text style={[styles.headerText, styles.grayText]}>Login to continue.</Text>
            </View>

            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require('../images/drawing.png')}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Username"
              autoCapitalize="none"
              style={styles.input}
              placeholderTextColor={colors.lighterBlue}
              selectionColor={colors.yellow}
              onChangeText={value => handleChange('username', value)}
            />

            <TextInput
              placeholder="Password"
              autoCapitalize="none"
              style={styles.input}
              placeholderTextColor={colors.lighterBlue}
              selectionColor={colors.yellow}
              secureTextEntry={true}
              onChangeText={value => handleChange('password', value)}
            />

            <Pressable
              style={styles.button}
              onPress={onSubmit} >
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
          </View>
        </>
        :
        navigation.navigate({
          name: "Typing",
          merge: true
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30
  },
  headerContainer: {
    paddingTop: 160,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  grayText: {
    color: colors.lighterBlue
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
  },
  logo: {
    width: 150,
    height: 150
  },
  inputContainer: {
    paddingTop: 40,
  },
  input: {
    height: 35,
    borderBottomColor: colors.lighterBlue,
    borderBottomWidth: 1,
    marginBottom: 20,
    color: colors.lighterBlue,
    color: colors.black
  },
  button: {
    backgroundColor: colors.blue,
    borderRadius: 3,
    marginTop: 30
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    lineHeight: 35,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

export default Login