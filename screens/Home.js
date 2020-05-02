import React from 'react';
import {  View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import bg from "../assets/wallworld.jpg"
const Home = (props) => {
  

  return (
    <View style={{backgroundColor:"black",height:"100%"}}>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => props.navigation.navigate("AllRoutes")} >
        <Text style={styles.title}>
          My Routes
        </Text>
        </TouchableOpacity>
      </View>
       <View style={styles.card2}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Cars")} >
        <Text style={styles.title}>
          My Cars
        </Text>
        </TouchableOpacity>
      </View>
      <Image source={bg} style={styles.img}/>
    </View>
  )
}
const styles = StyleSheet.create({
  card:{
    
    width:"100%",
    backgroundColor:"#243adf",
    padding:30,
    margin:10,
    borderRadius:10
  },
  card2:{
    
    width:"100%",
    backgroundColor:"#237657",
    padding:30,
    margin:10,
    borderRadius:10
  },
  title:{
    fontSize:30,
    color:"white"
  },
  img:{
    width:"100%",
    zIndex:-1
  }
})

export default Home;