import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
const CarCard = (props) => {
 
  return (
  	<View style={styles.root}>
	    <View style={styles.titleWrap}>
	    	<Text style={styles.title}>{props.title}</Text>
	    </View>
	    <View style={styles.description}>
	    	<Text style={styles.size}>Number : {props.size}</Text>
		</View>
    </View>
   
  )
}
const styles=StyleSheet.create({
	root:{
		marginTop:5,
		marginBottom:5,
	},
	titleWrap:{
		backgroundColor:"#2B80C3",
		paddingTop:20,
		paddingBottom:20,
		paddingLeft:15,
		paddingRight:15,
		borderRadius:10
	},
	title:{
		color:"white",
		fontSize:27
	},
	description:{
		flexDirection:"row",
		backgroundColor:"#43CEE4",
		paddingTop:30,
		paddingBottom:10,
		paddingLeft:15,
		paddingRight:15,
		borderRadius:10,
		marginTop:-20,
		zIndex:-1,
		justifyContent:"space-between"
	},
	id:{
		color:"#fff",
		fontSize:17

	},
	size:{
		color:"#fff",
		fontSize:17
	}
})
export default CarCard;