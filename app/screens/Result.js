import React, { useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { View, Text, StyleSheet, Button } from 'react-native'

const Result = ({ navigation, route }) => {
  const typed = useSelector(state => state.pass)
  console.log(typed);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Logout" />
      ),
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <Text>You Typed ""</Text>
    </View>
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

export default Result