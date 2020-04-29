import React from 'react';
import {ScrollView,Text, Image,View, StyleSheet, TouchableOpacity } from 'react-native' 
import map from "../assets/wallworld.jpg"
const Route = (props) => {
  return (
    <ScrollView style={styles.root}>
    	<Image source={map} style={{width:"100%",height:250}}/>
    	<View style={styles.content}>
    		<Text style={styles.title}>Home-to-Work</Text>
    		<View style={styles.meta}>
    			<Text style={styles.metaText}>Route Length : 60km</Text>
    			<Text style={styles.metaText}>Probable Duration: 1h </Text>
    			<Text style={styles.metaText}>Probable petrol consumpsion: 4 litres</Text>
    			<Text style={styles.metaText}>Total cost: 	18 000 UZS</Text>
    			<Text style={styles.metaText}>Costs for you: 3 600 UZS</Text>
    		</View>
    		<Text style={styles.groupInfo}>Group 4</Text>
    		<View style={styles.groupMember}>
    			<Text style={styles.groupMemberName}>1. You</Text>
    			<Text style={styles.gm}>+998 98 001 0220</Text>
    			<Text style={styles.gm}>Nexia</Text>
    			<Text style={styles.gm}>10X088EA</Text>
    		</View>
    		<View style={styles.groupMember}>
    			<Text style={styles.groupMemberName}>2. Anvar Sharipov</Text>
    			<Text style={styles.gm}>+998 90 812 5934</Text>
    			<Text style={styles.gm}>Nexia</Text>
    			<Text style={styles.gm}>10D998SS</Text>
    		</View>	
    		<View style={styles.groupMember}>
    			<Text style={styles.groupMemberName}>3. Hasanboy Do'stmatov</Text>
    			<Text style={styles.gm}>+998 91 800 7777</Text>
    			<Text style={styles.gm}>Nexia-2</Text>
    			<Text style={styles.gm}>10X334QA</Text>
    		</View>	
    		<View style={styles.groupMember}>
    			<Text style={styles.groupMemberName}>4. Zafar Hoshimov</Text>
    			<Text style={styles.gm}>+998 90 777 0221</Text>
    			<Text style={styles.gm}>Nexia-3</Text>
    			<Text style={styles.gm}>10C212AA</Text>
    		</View>	
    		<View style={styles.groupMember}>
    			<Text style={styles.groupMemberName}>5. Ignatiy Nesterov</Text>
    			<Text style={styles.gm}>+998 97 879 8989</Text>
    			<Text style={styles.gm}>Spark</Text>
    			<Text style={styles.gm}>10W454WA</Text>
    		</View>
    		<TouchableOpacity style={styles.change}>
    			<Text style={styles.changeText}>Change Group</Text>
    		</TouchableOpacity>
    	</View>	
    </ScrollView>
  )
}

const styles=StyleSheet.create({
	root:{
		backgroundColor:"#17a2b8"
	},
	content:{
		backgroundColor:"#fff",
		marginLeft:10,
		marginRight:10,
		marginTop:-30,
		borderRadius:10,
		padding:15,
		marginBottom:-10,
		paddingBottom:10
	},
	meta:{
		marginBottom:20
	},
	metaText:{
		fontSize:16
	},
	title:{
		color:"#17a2b8",
		fontSize:30,
		marginBottom:20
	},
	groupInfo:{
		color:"#17a2b8",
		fontSize:25,
		marginBottom:20
	},
	groupMember:{
		marginBottom:14
	},
	groupMemberName:{
		fontSize:16,
		
	},
	gm:{
		fontSize:16,
		marginLeft:19
	},
	change:{
		backgroundColor:"#dc3545",
		padding:20,
		alignItems:"center",
		marginLeft:-15,
		marginRight:-15,
		marginTop:30
	},
	changeText:{
		fontSize:18,
		color:"white",
	}
})
export default Route;