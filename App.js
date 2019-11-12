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
  TouchableOpacity,
} from 'react-native';



import Image  from 'react-native-image-progress';
import ProgressBar from 'react-native-progress';
import { createAppContainer } from 'react-navigation';  
import {createStackNavigator} from 'react-navigation-stack'
import SingleScreen from './src/Single'
import ListScreen from './src/ListScreen'


const AppNavigator = createStackNavigator(  
  {  
      List: ListScreen,  
      Single: SingleScreen,
       
  },  
  {  
      initialRouteName: "List"  
  }  
);  

const AppContainer = createAppContainer(AppNavigator);  
export default class App extends React.Component {  
    render() {  
        return <AppContainer />;  
    }  
}  

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#FFFFFF',
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