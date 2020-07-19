import React from 'react';  
import { StyleSheet, View, Text, Button } from 'react-native';  
  
export default class ProfileScreen extends React.Component {  
    static navigationOptions = {  
        title: 'Profile',  
        headerStyle: {  
            backgroundColor: '#f4511e',  
        },  
        //headerTintColor: '#0ff',  
        headerTitleStyle: {  
            fontWeight: 'bold',  
        },  
    };


    constructor(props) {
        super(props);
        this.state = {
          product_id:'',
          quantity:'',
        }
      }


    addtocart = () => {
    
        return fetch('http://192.168.43.161/Ninelight/Insertuser.php',
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
           
          })
        }).then((response) => response.json())
        .then((responseJson) => {
          Alert.alert(responseJson);
        }).catch((error) => {
          console.error(error);
        });
      }
    
    


    render() {  
      {/*Using the navigation prop we can get the 
            value passed from the previous screen*/}  
      const { navigation } = this.props;  
      const user_name = navigation.getParam('userName', 'NO-User');  
      return (  
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>    
              <Text style={styles.textStyle}>Quantity: {(user_name)}</Text>   
              <View style={styles.buttonStyle}>  
              <Button  
                  title="Go back"  
                  onPress={() => this.addtocart}  
              />  
              </View>  
          </View>  
      );  
  }  
}  
const styles = StyleSheet.create({  
  textStyle: {  
      fontSize: 23,  
      textAlign: 'center',  
      color: 'black',  
  },  

  buttonStyle:{  
      width: "53%",  
      marginTop: 50,  
      backgroundColor: "black",  
  }  
});  