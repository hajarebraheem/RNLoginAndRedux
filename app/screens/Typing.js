import React, { useState, useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Button, TextInput, SafeAreaView } from 'react-native'

const Typing = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Logout" />
      ),
    })
  }, [navigation])

  const [typing, setTyping] = useState('')

  const handleChange = (name, value) => {
    setTyping({ typing, [name]: value })
  }

  const onSubmit = () => {
    navigation.navigate({
      name: "Result",
      params: { post: typing },
      merge: true
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hi {route.params?.post.username}</Text>
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




// import { useSelector } from 'react-redux'

// const login = useSelector(state => state.auth)