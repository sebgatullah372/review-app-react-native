import { createStackNavigator } from 'react-navigation-stack'
// import {createAppContainer} from 'react-navigation';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';


const screens = {
    
     About:  {
         screen: About,
        //  navigationOptions:{
        //     title : "About Review Center"
        //  }
        navigationOptions: ({navigation}) =>{
            return {
                headerTitle: () =><Header navigation={navigation}/>,
                
            }
        }
      
     },
 
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'coral'
        }
    }
});

// export default createAppContainer(AboutStack);
export default AboutStack;