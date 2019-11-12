import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  FlatList,
  Alert,
  Button,
  TouchableOpacity,
} from 'react-native';



import Image  from 'react-native-image-progress';
import ProgressBar from 'react-native-progress';
import { createAppContainer } from 'react-navigation';  
import {createStackNavigator} from 'react-navigation-stack'



export default class Single extends React.Component {  

    state = {
        data: ''
     }
     componentDidMount = () => {
        fetch('http://192.168.1.102/single.json', {
           method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
           console.log(responseJson);
           this.setState({
              data: responseJson
           })
        })
        .catch((error) => {
           console.error(error);
        });
     }
    
    static navigationOptions = {
      header: null
    };
    
    _onPressButton() {  
        Alert.alert('You tapped the button!')  
    } 

    render() {  
  
      
        return (  
            
            <View>

<ScrollView>
  <View style={{marginBottom: 50}}> 
  
  
  
  <Image source={{ uri: this.state.data.p_imageurl }}   
    resizeMode="contain" 
  indicator={ProgressBar} 
   
     style={{
      width: '100%', 
        height: 200, 
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30,
          marginBottom: 14,
          
  
  }}
  
  
  />
  
    <Text style={styles.rate_single}>₹ {this.state.data.p_price}</Text> 
    <Text style={styles.title_single}>{this.state.data.p_title}</Text> 
  
    <View style={styles.locationContainer}>
  
      <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Map_marker_font_awesome.svg/768px-Map_marker_font_awesome.svg.png'}} 
      
      indicator={ProgressBar} 
        
          style={{
          width: 15, 
            height: 15, 
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 10,
              marginBottom: 14,
              marginTop: 2
  
      }}
      
      />
      <Text style={styles.location_single}>{this.state.data.p_location}</Text>
  
      <Text>   |   </Text>
      <Text style={styles.date}>22 Oct</Text>
      </View>
  
      <View style={styles.separator}>
  
        </View>
  
      <View style={styles.descriptionContainer}>
  
        <Text style={styles.descriptionText}>Description</Text>
  
        <Text style={styles.description}> {this.state.data.p_desc} </Text>
  </View>
  
                
  </View>
  
          </ScrollView>


        
        <View style={styles.buttonContainer}>
            <TouchableOpacity  onPress={this._onPressButton}>
                <View style={styles.button}>
                     <Text style={styles.buttonText}>Chat</Text>

                </View>

            </TouchableOpacity>
        
        </View>


            </View>
  
    );  
    }  
  } 


  
const styles = StyleSheet.create({
    container: {
      
      backgroundColor: '#FFFFFF',
    },

    buttonContainer: {  
        width: '100%',
        position: 'absolute',
        bottom:0,
        left:0, 
    },  
    button: {  
        width: '100%', 
        alignItems: 'center', 
        backgroundColor: '#194C9A'  
    },  
    buttonText: {  
        padding: 10,  
        color: 'white',  
        fontSize: 18  
    },  
  
    rate: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#2d3436',
      paddingLeft: 14,
      marginTop: 14
  
  
    },
  
    rate_single: {
      fontSize: 17,
      fontWeight: 'bold',
      color: '#2d3436',
      paddingLeft: 10,
      marginTop: 14
  
  
    },
  
    descriptionText: {
      fontSize: 17,
      fontWeight: 'bold',
      color: '#2d3436',
      paddingLeft: 10,
      marginTop: 14,
  
  
    },
  
    description: {
      fontSize: 14,
      fontWeight: 'normal',
      color: '#777777',
      paddingLeft: 10,
      marginTop: 10,
      marginBottom: 20,
      marginRight: 10
  
  
    },
  
    separator: {
  
      height: 4,
      width: '100%',
      backgroundColor: '#cccccc'
  
    },
  
  
    title_single: {
      fontSize: 17,
      fontWeight: 'normal',
      color: '#000000',
      padding: 10,
      paddingTop: 5
  
    },
  
  
    locationContainer: {
      flexDirection: 'row',
  
    },
  
    title: {
  
      fontSize: 15,
      fontWeight: 'normal',
      color: '#2d3436',
      paddingLeft: 14,
      marginTop: 5,
      marginBottom: 15
  
    },
  
    featured: {
  
      fontSize: 12,
      fontWeight: 'normal',
      color: '#2d3436',
      paddingLeft: 14,
      color: 'white',
      padding: 4,
      borderRadius: 1,
      backgroundColor: 'orange'
  
    },
    location: {
  
      fontSize: 12,
      fontWeight: 'normal',
      color: '#2d3436',
      paddingLeft: 5,
      paddingTop: 2
  
    },
  
    location_single: {
  
      fontSize: 13,
      fontWeight: 'normal',
      color: '#555555',
      paddingLeft: 5,
      textTransform: 'uppercase'
  
    },
  
    date: {
  
      flex: 1,
      alignItems: 'flex-end',
      fontSize: 13,
      fontWeight: 'normal',
      color: '#555555',
      textTransform: 'uppercase'
  
    },
  
    row: {
      flex: 1,
      justifyContent: "space-around"
  },
  
    single : {
      borderWidth: 1,
      margin: 5,
      borderColor: '#cccccc',
      borderRadius: 2,
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
    },
    
  });