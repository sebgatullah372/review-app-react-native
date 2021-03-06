import { createStackNavigator } from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';

const screens = {
    
     Home:  {
         screen: Home,
        //  navigationOptions:{
        //      title : "Movie Review Center"
            
        //  }
        navigationOptions: ({navigation}) =>{
            return {
                headerTitle: () =><Header navigation={navigation}/>,
                
            }
        }
      
     },
     ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions:{
            title: "Review Details"
         }
     
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'coral'
        }
    }
});

// export default createAppContainer(HomeStack);
export default HomeStack;