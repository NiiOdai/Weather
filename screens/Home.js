import React from "react";
import {StyleSheet, View,Text,TouchableOpacity,Image } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import LoremIpsum from 'lorem-ipsum';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({navigation}) {
      return (
       
    <View style ={styles.main} >
     
        <View style={styles.image}>
     <Image
     style={{height:120,width:120}}
        source={require("../assets/cloudy-day.png")}
      /> 
      </View >
      <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#212252','transparent']}
        style={styles.background}
      />  
         
          <Text style={styles.bold}> Weather <Text style={{color:'orange'}}>News</Text></Text>
          <Text style={{color:'orange',fontSize:35,paddingBottom:10,}}> &Feed</Text>
          <Text style={styles.lorem}>Lorem ipsum dolor sit amet, consectetur </Text>
          <Text style={styles.lorem}>Vivamus bibendum ex a elit vulputate, ac sagittis </Text> 
          <Text style={styles.lorem}>um elit eros at tortor. Pelle</Text>         
         <View style={{paddingBottom:10,  padding: 10, }}>
          <TouchableOpacity style={styles.button}
          onPress= {() =>{
         navigation.navigate("Login")
        }}>
              <Text style={{fontSize:20}}>Get Start</Text>
          </TouchableOpacity>   
          </View>      
         </View>
         </View>
  );
      }
  const styles = StyleSheet.create({
    main:{
      flex:1,
      backgroundColor:'#212252', 
      padding: 10,  
    },
    container: {
      flex: 1,
      alignItems:"center",
      justifyContent:"flex-end",
      paddingBottom: 40,
        
    },
    image:{
      paddingTop: 100, 
        alignItems:'center',
        justifyContent:'center',
    },
    bold:{
        fontWeight:"bold",
        fontSize:40,
        color:'white',
        
    },
    lorem:{
      color:'white',
      // paddingBottom:5,
      justifyContent:'center',
      alignItems:'center',
      fontSize:14,
    },
    button:{
        backgroundColor:'orange',
        padding:8,
        paddingHorizontal:100,
        borderRadius:10,  
                    
    },   
  });

 