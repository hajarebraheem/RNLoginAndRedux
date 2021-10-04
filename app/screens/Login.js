import React from 'react'
import { View, Text, StyleSheet, Button, TextInput, SafeAreaView } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

const Login = ({ navigation }) => {
    const {
        control,
        handleSubmit,
        formState: { errors, isValid }
      } = useForm({ mode: 'onBlur' })
    
      const onSubmit = data => console.log(data)
    
      return (
        <SafeAreaView style={styles.container}>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value, onBlur } }) => (
              <>
                <TextInput
                  iconName="person"
                  iconType="MaterialIcons"
                  placeholder="Enter your name here"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                />
                <TextInput
                  iconName="password"
                  iconType="MaterialIcons"
                  placeholder="Enter your name here"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                />
              </>
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
  
export default Login