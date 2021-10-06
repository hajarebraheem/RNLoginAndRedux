import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Test = (props) => {
    return (
        <View style={styles.container}>
            <Text>You Typed "{props.typing}"</Text>
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
  
export default Test