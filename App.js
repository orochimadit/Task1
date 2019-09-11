/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text,View,StatusBar} from 'react-native';
import MenuUtama from './Component/MenuUtama';
import MenuGame from './Component/MenuGame';
import MenuBerita from './Component/MenuBerita';
import MenuHits from './Component/MenuHits';

const Header = ()=>{
  return(
    <View>
      <Text>Header </Text>
    </View>
  )
}
const Footer = ()=>{
  return(
    <View>
      <Text>Footer </Text>
    </View>
  )
}
class App extends Component{
  render(){
    return(
      <View>
        <StatusBar backgroundColor="green"/>
        <Header/>
        <MenuUtama/>
        <MenuGame/>
        <MenuBerita/>
        <MenuHits/>
        <Footer/>
      </View>
    );
  }
}

export default App;
