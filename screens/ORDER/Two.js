import React from 'react';  
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';  
  
export default class HomeScreen extends React.Component {  
  
    constructor(props) {   
        super(props);  
        this.state = {  
            quantity:'',
            username: '',  
        };  
    }  
    static navigationOptions = {  
        title: 'Description',  
        headerStyle: {  
            backgroundColor: '#f4511e',  
        },  
  
        headerTitleStyle: {  
            fontWeight: 'bold',  
        },  
    };  
  
    render() {  
        const { navigation } = this.props;  
      const product_name = navigation.getParam('product_Name', 'Nothing');
       
        return (  

            <View style={styles.container}> 
            
            <View style={styles.containers}>
            <Text style={styles.paragraph}>
            {(product_name)}
              
            </Text>
            </View>

        <View style={styles.cont1}>
        <Text>
          Weight:
        </Text>

        <Text>
          Price:
        </Text>

        <Text>
          Description:
        </Text>

        <Text>
          Type:
        </Text>
        </View>
 
            <View style={styles.cont}><Text>Product Quantity:</Text></View>
            <TextInput  
        value={this.state.quantity}  maxLength={4}
        onChangeText={quantity => this.setState({ quantity })}  
        keyboardType = 'numeric'  
        style={styles.textInput}  
        />  
        <View style={styles.buttonStyle}>  
            <Button  
        title="Submit"  
        // color="#00B0FF"  
        onPress={() =>  
        this.props.navigation.navigate('Three', {  
            userName: this.state.quantity,  
        })  
    }  
        />  
        </View>  
        </View>  
    );  
    } 
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        backgroundColor: '#fff',  
        alignItems: 'center',  
        padding: 16,  
    },  

    textInput: {  
        height: '10%',
        width: "25%",
        color:"red",
        borderColor: "gray",
        borderWidth: 1,
        fontSize:20,  
    },  

    buttonStyle:{  
        width: "70%",  
        marginTop: 50,  
        backgroundColor: "grey",
    },

    cont: {
      marginRight:'70%',
      marginTop: '20%',
      height:'10%',
    },

    cont1: {
    flex: 1,
    marginTop:'10%',
    marginRight:'75%',
    height: '50%',
    },

    containers: {
        flex: 1,
        justifyContent: 'center',
        marginTop:'10%',
    },

    paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});  