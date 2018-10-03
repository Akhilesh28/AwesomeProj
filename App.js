/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image} from 'react-native';
import HomePage from './HomePage';
import Introduction from './Introduction';
import ListIndex from './ListIndex';
import {createStackNavigator} from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class App extends React.Component{
  render(){
    return <MainApp />; 
  }
}

// const CustomeDrawerComponents = (props) => (
//   <SafeAreaView style={{flex: 1}}>
//     <View style={{height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
//       <Image source={require('./assets/logo1.png')} style={{height: 120, width:120, borderRadius: 60}}/>
//     </View>
//     <ScrollView>
//       <DrawerItems {...props} />
//     </ScrollView>
//   </SafeAreaView>
// )

const MainApp = createStackNavigator({
  Home: HomePage,
  ListIndex: ListIndex,
  Introduction: Introduction
}, {
  initialRoute: "Home",
  transitionConfig: getSlideFromRightTransition
});

export default App;