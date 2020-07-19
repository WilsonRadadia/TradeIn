import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, TouchableHighlight, TouchableOpacity } from 'react-native';


class Dashboard extends Component {

  static navigationOptions = {


    title: 'Report',
    
  };

  onClickListener = (viewId) => {
    this.props.navigation.navigate(viewId);
  }

  render() {
    return (
      

      <View style={styles.container}>

        <View style={styles.center}>
          <TouchableOpacity style={styles.icon} activeOpacity={0.5} onPress={() =>
            this.props.navigation.navigate('Jan',{month:1})
          } ><Text style={styles.baseText}>January</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.center}>
        <TouchableOpacity style={styles.icon} activeOpacity={0.5} onPress={() =>
            this.props.navigation.navigate('Jan',{month:2})
          } ><Text style={styles.baseText}>Feuary</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.center}>
        <TouchableOpacity style={styles.icon} activeOpacity={0.5} onPress={() =>
            this.props.navigation.navigate('Jan',{month:3})
          } ><Text style={styles.baseText}>March</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.center}>
        <TouchableOpacity style={styles.icon} activeOpacity={0.5} onPress={() =>
            this.props.navigation.navigate('Jan',{month:4})
          } ><Text style={styles.baseText}>April</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.center}>
        <TouchableOpacity style={styles.icon} activeOpacity={0.5} onPress={() =>
            this.props.navigation.navigate('Jan',{month:5})
          } ><Text style={styles.baseText}>May</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.center}>
        <TouchableOpacity style={styles.icon} activeOpacity={0.5} onPress={() =>
            this.props.navigation.navigate('Jan',{month:6})
          } ><Text style={styles.baseText}>Jun</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.center}>
        <TouchableOpacity style={styles.icon} activeOpacity={0.5} onPress={() =>
            this.props.navigation.navigate('Jan',{month:7})
          } ><Text style={styles.baseText}>July</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.center}>
        <TouchableOpacity style={styles.icon} activeOpacity={0.5} onPress={() =>
            this.props.navigation.navigate('Jan',{month:8})
          } ><Text style={styles.baseText}>August</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.center}>
        <TouchableOpacity style={styles.icon} activeOpacity={0.5} onPress={() =>
            this.props.navigation.navigate('Jan',{month:9})
          } ><Text style={styles.baseText}>September</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.center}>
        <TouchableOpacity style={styles.icon} activeOpacity={0.5} onPress={() =>
            this.props.navigation.navigate('Jan',{month:10})
          } ><Text style={styles.baseText}>October</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.center}>
        <TouchableOpacity style={styles.icon} activeOpacity={0.5} onPress={() =>
            this.props.navigation.navigate('Jan',{month:11})
          } ><Text style={styles.baseText}>November</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.center}>
        <TouchableOpacity style={styles.icon} activeOpacity={0.5} onPress={() =>
            this.props.navigation.navigate('Jan',{month:12})
          } ><Text style={styles.baseText}>December</Text>
          </TouchableOpacity>

        </View>
        

      </View>
    );
  }
}

export default Dashboard;


const styles = StyleSheet.create({

  title: {

    fontSize: 20,
    textAlign: 'left',
    margin: '0%',

    marginBottom: '0%',
  },

  container: {

    flex: 1,
    backgroundColor: '#ecf0f1',
  },

  icon: {
    flexDirection: 'row',
    marginLeft: '3.5%',
    alignItems: 'center',
    backgroundColor: '#ff8913',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 150,
    borderRadius: 25,
    margin: 5,
  },



  baseText: {
    fontSize: 20,
    marginLeft: 31,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },


  center1: {

    marginLeft: 10,
    marginTop: '15%',
    //justifyContent:'center',
    flexDirection: 'row',
    justifyContent:'center'
  },
  center: {

    marginLeft: 10,
    marginTop: '2%',
    //justifyContent:'center',
    flexDirection: 'row',
    marginLeft:'3.5%',
    justifyContent:'center'
  },

  inputIcon: {
    width: 100,
    height: 100,
    marginLeft: 15,
    justifyContent: 'center'
  },


  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    width: 90,
    height: 90,
    borderRadius: 20,
  },


});
