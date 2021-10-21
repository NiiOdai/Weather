import React from "react";
import {StyleSheet, View,Text,TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
// import {Lorem} from 'react-native-lorem-ipsum';

const MyComponent = () => <Lorem />
export default function Home(params) {
  return (
    <View style={[styles.container, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "column" 
      }]}>
          <Text style={styles.bold}> Weather<Text style={{color:'orange'}}>News</Text></Text>
          <Text style={{color:'orange',fontSize:40}}> &Feed</Text>
          <Text>Lo</Text>         
      
          <TouchableOpacity style={styles.button}>
              <Text style={{fontSize:20}}>
                  Get Start
              </Text>
          </TouchableOpacity>
          </View>
      
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:"center",
      justifyContent:"flex-end",
      padding: 20,
      backgroundColor:'#212252',
    },
    bold:{
        fontWeight:"bold",
        fontSize:40,
    },
    button:{
        backgroundColor:'orange',
        padding:10,
        paddingHorizontal:50,
        borderRadius:10,
        
    }
  });
 