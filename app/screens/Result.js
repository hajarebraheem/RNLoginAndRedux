import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, Text, StyleSheet } from 'react-native'
import Test from './Test'

const Result = (props) => {
  const Stack = createNativeStackNavigator()
  console.log(props.location.state.props.typing)
  console.log("test");
    return (
        <View style={styles.container}>
            <Text>You Typed "{props.typing}"</Text>
        </View>
        // <NavigationContainer>
        //   <Stack.Navigator initialRouteName="Test">
        //     <Stack.Screen name="Test" component={Test} />
        //   </Stack.Navigator>
        // </NavigationContainer>
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