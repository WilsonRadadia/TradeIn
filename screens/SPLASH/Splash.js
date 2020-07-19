import React, { Component } from 'react';
import {StyleSheet,Image,View} from 'react-native';

export default class App0 extends Component {
  constructor(props){
    super(props)
    this.state={timer:0}
    setInterval(()=>{
      this.setState({timer:this.state.timer + 1})
    },1000)
  }

  render() {

    return (
      <View style={styles.container}>

<Image source={require("./ic_launcher.png")} style={styles.welcome}/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  welcome: {
    
    marginTop:'43%',
    width:500,
    height:300,
    alignSelf:"center"
  },

});