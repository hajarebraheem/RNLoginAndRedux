import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { View, Text, StyleSheet, Button, TextInput, SafeAreaView } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import Typing from './Typing'

const Login = () => {
  const [user, setUser] = useState({})
  console.log(user)
  const history = useHistory()
  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: 'onBlur' })

  const goTyping = () =>{
    history.push('/typing', <Typing user={user}/>)
  }
  const onSubmit = (data) => {
    console.log(`${data} from Login.js`)
    console.log(data);
    setUser(data.username)
  }

  return (
    <SafeAreaView style={styles.container}>
      {!user ?
        <>
          <Controller
            control={control}
            name="username"
            render={({ field: { onChange, value, onBlur } }) => (
                <TextInput
                  iconName="person"
                  iconType="MaterialIcons"
                  placeholder="username"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value, onBlur } }) => (
              <TextInput
                iconName="password"
                iconType="MaterialIcons"
                placeholder="password"
                value={value}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
              />
            )}
          />
          <Button title='Submit' onPress={handleSubmit(onSubmit)} />
        </>
        :
        goTyping()}
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


// const Login = ({ navigation }) => {