import React from 'react'
import { View, Text, StyleSheet, Button, TextInput, SafeAreaView } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { useSelector } from 'react-redux'
import Logout from '../helper/Logout'
import Login from './Login'

const Home = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: 'onBlur' })

  const login = useSelector(state => state.auth)

  const onSubmit = (data) => {
    console.log(data)
  }
  

  // const content =
  //   <div className="content">
  //     <h1>Welcome</h1>
  //     {login.value ?
  //       <>
  //         <Controller
  //           control={control}
  //           name="name"
  //           render={({ field: { onChange, value, onBlur } }) => (
  //             <TextInput
  //               iconName="person"
  //               iconType="MaterialIcons"
  //               placeholder="Write"
  //               value={value}
  //               onBlur={onBlur}
  //               onChangeText={value => onChange(value)}
  //             />
  //           )}
  //         />
  //         <Button title='Submit' onPress={handleSubmit(onSubmit)} />
  //       </>
  //       :
  //       ''}
  //     <Logout />
  //   </div>

  return (
    <SafeAreaView style={styles.container}>
      <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value, onBlur } }) => (
              <TextInput
                iconName="person"
                iconType="MaterialIcons"
                placeholder="Write"
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

export default Home