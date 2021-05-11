import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import globalStyles from '../styles/globalStyles';

export default function ReviewDetails({navigation}) {
    const pressHandler = () =>{
        navigation.goBack();
    }
  return (
    <View style={globalStyles.container}>
      <Text>Review Details Screen</Text>
      <Button title='go to home screen' onPress={pressHandler}/>
    </View>
  );
}