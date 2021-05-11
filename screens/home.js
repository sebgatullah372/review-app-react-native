import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import globalStyles from '../styles/globalStyles';

export default function Home({navigation}) {
    const pressHandler = () =>{
        navigation.navigate('ReviewDetails')
    }
  return (
    <View style={globalStyles.container}>
      <Text>Home Screen</Text>
      <Button title='go to review details screen' onPress={pressHandler}/>
    </View>
  );
}