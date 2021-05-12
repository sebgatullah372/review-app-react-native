import React from 'react';
import {
    StyleSheet,
    Text,
    View,
  } from "react-native";
  import { MaterialIcons } from '@expo/vector-icons'; 

  export default function Header({navigation}){

       const pressHandler = () =>{
           navigation.openDrawer();
       }
      return (
          <View style={styles.header}>
              <MaterialIcons name="menu" size={24} color="white" style={styles.icon} onPress={pressHandler} />
              <View > 
                    <Text style={styles.headerText}>Movie Review Center</Text>
              </View>
          </View>
      )
  }

  const styles = StyleSheet.create({
      header:{
          flexDirection: 'row',
          backgroundColor: 'coral',
          alignItems: 'center',
          justifyContent: 'center'
      },
      headerText:{
          fontSize: 28,
          color: 'white'
      },
      icon:{
          position: 'absolute',
          left: 10
      }
  })