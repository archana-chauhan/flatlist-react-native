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


export default class ListScreen extends Component {



    // constructor(props) {
    //   super(props);
    // }
  
    static navigationOptions = {
      header: null
    };
  
  constructor(props) {
      super(props);
    this.getListCall= this.getListCall.bind(this);
    this.GetListItem = this.GetListItem.bind(this);
        this.state = { 
        JSONResult: "",
      }
    }
  
     componentDidMount(){
      this.getListCall();
    }
  
    getListCall(){
      var that = this;
      var url = "http://192.168.1.102/itemlist.json";
      console.log("-----------url:"+url);
  
       fetch(url,{method: 'GET'}).then(function (response) {
          return response.json();
          }).then(function (result) { 
  
             if(result.status.response === "success"){
  
                  that.setState({ 
                JSONResult: result.data,
                });
           
              }
             // console.log(result.data_list);
          }).catch(function (error) {
            console.log("-------- error ------- "+error);
           alert("result:"+error)
       });
  
    }
  
    GetListItem (name) {
     
    Alert.alert(name);
   
    }
  
    ItemSeparatorLine = () => {
      return (
        <View
          style={{
            height: .5,
            width: "100%",
            backgroundColor: "#111a0b",
          }}
        />
      );
    }
   
  
  
  
    render() {
  
      return ( 
  
          <View style={styles.container}>
  
          <FlatList columnWrapperStyle={styles.row} 
         
            data={ this.state.JSONResult.product_list }
            
            // ItemSeparatorComponent = {this.ItemSeparatorLine}
   
            renderItem={({item}) => 
            <TouchableOpacity activeOpacity={0.9} onPress={() => this.props.navigation.navigate('Single')}>
             <View style={styles.container} >
                
               <View style={styles.single}>
  
                <View style={{flex: 1, width: 80}}>              
                   <Text style={styles.featured}>Featured</Text>
                  </View>
  
               <Image 
              source={{ uri: item.p_imageurl }} 
               indicator={ProgressBar} 
               
                 style={{
                  width: 190, 
                    height: 190, 
                      alignItems: 'center',
                      justifyContent: 'center',
              }}
              />
  
  
            <Text style={styles.rate}  >₹ {item.p_price}</Text>
            <Text style={styles.title}  >{item.p_title}</Text>
  
             
             <View style={styles.locationContainer}>
  
             <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Map_marker_font_awesome.svg/768px-Map_marker_font_awesome.svg.png'}} 
              
              indicator={ProgressBar} 
               
                 style={{
                  width: 20, 
                    height: 20, 
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: 10,
                      marginBottom: 14
  
              }}
              
              />
            <Text style={styles.location}  >{item.p_location}</Text>
  
             </View>
  
               </View>
  
              </View>
              </TouchableOpacity>
  
           }
             numColumns={2}
            keyExtractor={(item, index) => index}
            
           />
        </View>  
   
      );
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
  