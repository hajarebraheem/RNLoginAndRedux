import React, { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const Result = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Logout" />
      ),
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <Text>You Typed "{route.params?.post.typing}"</Text>
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