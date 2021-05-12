import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import globalStyles from '../styles/globalStyles';

export default function ReviewDetails({navigation}) {
    // const pressHandler = () =>{
    //     navigation.goBack();
    // }
  return (
    <View style={globalStyles.container}>
      <Text>Review Details Screen</Text>
      <Text>{navigation.getParam('title')}</Text>
      <Text>{navigation.getParam('body')}</Text>
      <Text>{navigation.getParam('rating')}</Text>
    </View>
  );
}