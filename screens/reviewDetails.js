import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';
import globalStyles from '../styles/globalStyles';

function ShowStars({star}){
  var starImages = [];
  for(let i= 0; i<star; i++){
      starImages.push(<Image  style={styles.stars} source={require('../assets/img/star.jpg')}/>)    
  }
  return <View style={styles.starImages}>{starImages}</View>
}


export default function ReviewDetails({navigation}) {
    // const pressHandler = () =>{
    //     navigation.goBack();
    // }
    

  return (
    <ImageBackground source={require('../assets/img/bgImg.png')} style={globalStyles.container}>
      <Text>Review Details Screen</Text>
      <Text>{navigation.getParam('title')}</Text> 
      <Text>{navigation.getParam('body')}</Text>
      <ShowStars star={navigation.getParam('rating')}/>
      {/* <Text>{navigation.getParam('rating')}</Text> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  starImages:{
     flexDirection:'row' 
  },
  stars: {
    width: 50,
    height: 50,
  },
  
});