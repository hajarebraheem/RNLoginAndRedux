import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../actions'
import { View, StyleSheet, Button, TextInput, SafeAreaView } from 'react-native'

const Login = ({ navigation, route }) => {
  const [user, setUser] = useState({})
  const dispatch = useDispatch()

  const handleChange = (name, value) => {
    setUser({ ...user, [name]: value })
  }

  const onSubmit = () => {
    if (user.username && user.password) {
      dispatch(login(user))
      navigation.navigate({
        name: "Typing",
        params: { post: user },
        merge: true
      })
    }


    // if (user.password !== user.password_confirm) {
    //   console.log("not match");
    //   // setOpen(true)
    //   // setMessage("Password And Its Confirmation Did Not Match!")
    // }
    // else {
    //   // dispatch(signup(user))
    //   navigation.navigate({
    //     name: "Typing",
    //     params: { post: user },
    //     merge: true
    //   })
    // }
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <TextInput
        placeholder="First Name"
        autoCapitalize="none"
        onChangeText={value => handleChange('fname', value)}
      />
      <TextInput
        placeholder="Last Name"
        autoCapitalize="none"
        onChangeText={value => handleChange('lname', value)}
      /> */}
      <TextInput
        placeholder="Username"
        autoCapitalize="none"
        onChangeText={value => handleChange('username', value)}
      />
      {/* <TextInput
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={value => handleChange('email', value)}
      /> */}
      <TextInput
        placeholder="Password"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={value => handleChange('password', value)}
      />
      {/* <TextInput
        placeholder="Password Confirmation"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={value => handleChange('password_confirm', value)}
      /> */}
      <Button title='Login' onPress={onSubmit} />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login