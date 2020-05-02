import React,{useState} from 'react';
import {  View, Text, StyleSheet, TouchableOpacity, Image,ScrollView , TextInput} from 'react-native'
import Map from "./Map"
const Car = (props) => {
  const [start, changeStart]=useState({
                                latitude: 40.902190,
                                longitude: 69.355313
                              })
  const [finish, changeFinish]=useState({
                                latitude: 40.902190,
                                longitude: 69.355313
                              })
    
  return (
    <ScrollView style={styles.root}>
      <View>
        <TextInput placeholder="Car Number" style={styles.input}/>
        <TextInput placeholder="Model" style={styles.input}/> 
        <TextInput placeholder="Year of Production: YYYY" style={styles.input}/> 
        <TextInput placeholder="color" style={styles.input}/> 
       </View>
      <TouchableOpacity  style={styles.addCar} onPress={() => props.navigation.navigate("Cars")}>
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
  
  
  root:{
    backgroundColor:'#3DA2E5',
    padding:20
  },
  imgContainer:{
    alignItems:"center",
    marginBottom:10
  },
  img:{
    width:undefined,
    height:undefined,
    
  },
  brand:{
    fontSize:30,
    color:'white',
    textAlign:'center',
    marginBottom:20
  },
  title:{
     fontSize:24,
    color:'white',
    textAlign:'center',
    marginBottom:20
  },
  input:{
    borderBottomWidth:1,
    borderBottomColor:"white",
    marginBottom:25,
    color:"white",
  },
  buttonContainer:{
    alignItems:"center",
    marginTop:20,
  },
  signButton:{
    backgroundColor:"purple",
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:15,
    paddingRight:15,
    borderRadius:30
  },
  signText:{
    color:"white",
    fontSize:20
  },
  or:{
    flexDirection:"row",
    width:"100%",
    marginTop:30,
    alignItems:"center"
  },
  whiteBottom:{
    flex:1,
    marginTop:0,
    backgroundColor:"white",
    height:1
  },
  orText:{
    color:"white",
    marginLeft:30,
    marginRight:30,
    fontSize:20,
    paddingBottom:5
  },
  signUp:{
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"center",
    marginTop:20,
    marginBottom:70
  },
  inline:{
    fontSize:18,
    color:"white"
  }, 
  signUpText:{
    fontSize:18,
    color:"white",
    
    borderBottomWidth:1,
    borderBottomColor:"white"
  }
})

export default Car;