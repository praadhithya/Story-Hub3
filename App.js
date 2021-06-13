import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';


export default class App extends React.Component {
  render(){
    return (       
   <SafeAreaProvider>
     <AppContainer/>   
    </SafeAreaProvider> 
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Write_Story: {screen: WriteStoryScreen},
  Read_Story: {screen: ReadStoryScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Write_Story"){
        return(
          <Image
          source={require("./PRO+C70+Images/write.png")}
          style={{width:30, height:30}}
        />
        )

      }
      else if(routeName === "Read_Story"){
        return(
          <Image
          source={require("./PRO+C70+Images/read.png")}
          style={{width:30, height:30}}
        />)

      }
    }
  })
}
);

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
