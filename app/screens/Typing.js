import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { View, Text, StyleSheet, Button, TextInput, SafeAreaView } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import Logout from '../helper/Logout'
import Result from './Result'

const Typing = () => {
  const [typing, setTyping] = useState()
  const history = useHistory()
  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: 'onBlur' })

  const onSubmit = (data) => {
    console.log(`${data.name} from Typing.js`)
    setTyping(data)
    console.log(typing)
    history.push('/result', <Result typing={typing}/>)
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            iconName="person"
            iconType="MaterialIcons"
            placeholder="Type Something To Pass it To The Next Screen"
            value={value}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
          />
        )}
      />
      <Button title='Submit' onPress={handleSubmit(onSubmit)} />
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

export default Typing




// import { useSelector } from 'react-redux'

// const login = useSelector(state => state.auth)