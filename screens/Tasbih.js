import React, {Component} from 'react';
import {Text, StyleSheet, View,Button,TouchableHighlight,TouchableOpacity} from 'react-native';


class Dashboard extends Component {

  Counter = (num) => {
      num++;
    this.setState({number: num});
  }


   Reset = (num) => {
    num=0;
  this.setState({number: num});
}

  constructor(props)
  {
    super(props);

    this.state = { 
    isLoading: true,
    number:0,
  }
  }

  render() {
    return (
      
      <View style={styles.container}>

    <Text style={styles.title}>TASBIH</Text>
    
        <View style={styles.center1}>

          <TouchableOpacity style={styles.icon} activeOpacity={0.8} onPress={() =>this.Counter(this.state.number)}><Text style={styles.baseText}> 
          {(this.state.number)}</Text>
          </TouchableOpacity> 

          <TouchableOpacity style={styles.icon2} activeOpacity={0.8} onPress={() =>this.Reset(this.state.number)}><Text style={styles.baseText2}> 
          Reset</Text>
          </TouchableOpacity> 
                
         </View>
   
      </View>
    );
  }
}

export default Dashboard;


const styles = StyleSheet.create({

    title:{
      
    fontSize: 50,
    textAlign: 'center',
    marginTop: '20%',
    marginBottom: '0%',
  },

  container: {
    
    flex: 1,
    backgroundColor: '#ecf0f1',
  },

icon: {
    flexDirection: 'row',
    marginLeft:'0%',
    alignItems: 'center',
    backgroundColor: '#58d68d',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 145,
    width: 250,
    borderRadius: 25,
    margin: 0,
  },


  icon2: {
    flexDirection: 'row',
    marginTop:75,
    marginLeft:'25%',
    alignItems: 'center',
    backgroundColor: '#ff8913',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 30,
    width: 100,
    borderRadius: 25,
    margin: 5,
  },

 
 

  baseText: {
    fontSize:50,
    marginLeft: 50,
    marginRight:20,
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  },

  baseText2: {
    fontSize:20,
    marginLeft: 20,
    
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  },


  center1:{

    marginLeft:50,
    marginTop: '40%',
    //justifyContent:'center',
    
  },



 
  
 
});
