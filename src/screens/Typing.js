import React, { useState, useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { typed } from '../actions'
import { loggout } from '../actions'
import { View, Text, StyleSheet, TextInput, Image, Pressable } from 'react-native'
import colors from '../colors-config/colors'

const Typing = ({ navigation, route }) => {
  const [typing, setTyping] = useState('')
  const login = useSelector(state => state.auth)
  const dispatch = useDispatch()

  let flag = true

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => dispatch(loggout(navigation))}>
          <Text style={styles.logout}>Logout</Text>
        </Pressable>
      ),
    })
  }, [navigation])

  const handleChange = (name, value) => {
    setTyping(value)
  }

  typing? flag = false : flag = true

  const onSubmit = () => {
    dispatch(typed(typing))
    navigation.navigate({
      name: "Result",
      merge: true
    })
  }

  return (
    <View style={styles.container}>
      {login.value ?
        <>
          <View style={styles.header}>
            <Image
              style={styles.image}
              source={require('../images/idea.png')} />
            <View style={styles.insideHeader}>
              <Text style={styles.headerText}>Hello {login.value?.username}</Text>
              <Text>Write notes, ideas, todos, and save!</Text>
            </View>

          </View>

          <TextInput
            style={styles.input}
            placeholder="type ..."
            autoCapitalize="none"
            multiline={true}
            selectionColor={colors.yellow}
            onChangeText={value => handleChange('typing', value)}
          />

          <Pressable
            disabled={flag}
            style={typing? styles.save : styles.disable}
            onPress={onSubmit}>
            <Text style={styles.saveText}>Save</Text>
          </Pressable>
        </>
        :
        navigation.navigate({
          name: "Login",
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
  header: {
    paddingTop: 120,
    flexDirection: 'row',
    alignItems: 'center',
    width: 300
  },
  image: {
    height: 100,
    width: 100
  },
  insideHeader: {
    padding: 10,
    width: 200
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: colors.lighterBlue,
    borderRadius: 5,
    height: 250,
    marginTop: 20,
    padding: 15,
    textAlignVertical: 'top'
  },
  save: {
    alignItems: 'center',
    backgroundColor: colors.blue,
    borderRadius: 3,
    marginTop: 20,
    padding: 8
  },
  disable: {
    alignItems: 'center',
    backgroundColor: colors.lighterBlue,
    borderRadius: 3,
    marginTop: 20,
    padding: 8
  },
  saveText: {
    color: colors.white,
    fontSize: 18,
    lineHeight: 35,
    fontWeight: 'bold'
  },
  logout: {
    color: colors.yellow,
    fontSize: 18
  }
})

export default Typing