import React from 'react';
import {ScrollView, View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import routes from "./demoRoutes.js"
import RouteCard from "../Components/RouteCard.js"
const Home = (props) => {
  const	routeList=routes.map((item,index)=>{
    return(
    <TouchableOpacity onPress={()=>props.navigation.navigate("Route")} key={index}>
      <RouteCard title={item.title} id={item.groupId} size={item.groupSize}/>
    </TouchableOpacity>
    )
  })

  return (
    <>
    <ScrollView style={{backgroundColor:'white',paddingLeft:5, paddingRight:5,paddingTop:5}}>
    	{routeList}
    </ScrollView>
    <TouchableOpacity style={styles.addNew}>
      <Text style={styles.addNewText}>+</Text>
    </TouchableOpacity>
    </>
  )
}
const styles=StyleSheet.create({
	title:{
		fontSize:40,
		color:"red",
		margin:50
	},
  addNew:{
    position:"absolute",
   
    backgroundColor:"#28a745",
    
    padding:10,
    borderRadius:30,
    width:60,
    height:60,
   
    bottom:40,
    right:40
  },
  addNewText:{
   
    color:"white",
   
    fontSize:30,
    
    textAlign:"center",
    textAlignVertical:"center",
   
  }
})

export default Home;