import React,{useState} from 'react';
import {  View, Text, StyleSheet, TouchableOpacity, Image,ScrollView } from 'react-native'
import Map from "./Map"
const AddCar = (props) => {
  const [start, changeStart]=useState({
                                latitude: 40.902190,
                                longitude: 69.355313
                              })
  const [finish, changeFinish]=useState({
                                latitude: 40.902190,
                                longitude: 69.355313
                              })
    
  return (
    <ScrollView>
      <TextInput placeholder="Name of the route" style={styles.input}/>
      <Text>FROM</Text> 
      <Map coords={start} change={changeStart}/>
      <Text>TO</Text> 
      <Map coords={finish} change={changeFinish}/>
      <TextInput placeholder="Days in form 1,2,3" style={styles.input}/>
      <TextInput placeholder="Time in form 08:30" style={styles.input}/>
      <TextInput placeholder="Car Number" style={styles.input}/>
      <TouchableOpacity  style={styles.addCar} onPress={() => props.navigation.navigate("AllRoutes")}>
        <Text style={{color:"blue", fontSize:20}}>Create</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
const styles=StyleSheet.create({
	addCar:{
    backgroundColor:"yellow",
    width:"100%",
    padding:30,
    marginTop:10,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:30
  },
  addCar:{
    backgroundColor:"yellow",
    width:"100%",
    padding:30,
    marginTop:10,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:30
  },
  
  input:{
    borderBottomWidth:1,
    borderBottomColor:"white",
    marginBottom:25,
    color:"white",
  },
})

export default AddCar;