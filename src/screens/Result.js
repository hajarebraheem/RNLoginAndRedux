import React, { useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loggout } from '../actions'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import colors from '../colors-config/colors'

const Result = ({ navigation, route }) => {
  const typed = useSelector(state => state.pass)
  const dispatch = useDispatch()
  let date = new Date().toDateString()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => dispatch(loggout(navigation))}>
          <Text style={styles.logout}>Logout</Text>
        </Pressable>
      )
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.noteContainer}>
        <Text style={styles.noteText}>"{typed.value}"</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 120,
    paddingHorizontal: 30
  },
  date: {
    marginBottom: 10,
    color: colors.lightBlue,
  },
  noteContainer: {
    borderRadius: 3,
    height: 100,
    padding: 15,
    textAlignVertical: 'top',
    borderTopWidth: 1,
    borderTopColor: colors.lighterBlue
  },
  noteText: {
    fontStyle: 'italic',
    fontSize: 25,
    color: colors.blue
  },
  logout: {
    color: colors.yellow,
    fontSize: 18
  }
})

export default Result