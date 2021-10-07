import React, { useState, useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { typed } from '../actions'
import { View, Text, StyleSheet, Button, TextInput, SafeAreaView } from 'react-native'

const Typing = ({ navigation, route }) => {
  const [typing, setTyping] = useState('')
  const login = useSelector(state => state.auth)
  const dispatch = useDispatch()
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Logout" />
      ),
    })
  }, [navigation])

  const handleChange = (name, value) => {
    setTyping({ typing, [name]: value })
  }

  const onSubmit = () => {
    dispatch(typed(typing))
    navigation.navigate({
      name: "Result",
      params: { post: typing },
      merge: true
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hi {route.params?.post.username}</Text>
      <Text>{login.value? "succeed": "failed"} </Text>
          <TextInput
            placeholder="Type Something To Pass it To The Next Screen"
            autoCapitalize="none"
            onChangeText={value => handleChange('typing', value)}
          />
      <Button title='Done' onPress={onSubmit} />
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