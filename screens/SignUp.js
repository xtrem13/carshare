import React from "react"
import {
  TextInput,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import logo from "../assets/carsharelogo.png"


const SignUp= (props) => {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.imgContainer}>
        <Image source={logo} stye={styles.img}/> 
      </View>
      <View>
        <Text style={styles.brand}>CAR SHARING</Text> 
        <Text style={styles.title}>Sign Up</Text> 
      </View>
      <View>
        <TextInput placeholder="Name" style={styles.input}/>
        <TextInput placeholder="Phone : 9X YYY ZZYY" style={styles.input}/>
        <TextInput placeholder="Licence Number" style={styles.input}/>
        <TextInput placeholder="Password" style={styles.input}/> 
        <TextInput placeholder="Experience in years" style={styles.input}/> 
        <TextInput placeholder="gender" style={styles.input}/> 
        <TextInput placeholder="Birth date: YYYY-MM-DD" style={styles.input}/> 
       
         
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.signButton}>
          <Text style={styles.signText}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.or}>
        <View style={styles.whiteBottom}></View>
        <Text style={styles.orText}>or</Text>
        <View style={styles.whiteBottom}></View>
      </View>
      <View style={styles.signUp}>
        <Text  style={styles.inline}>Have an account?</Text>
        <TouchableOpacity onPress={()=>props.auth.changeReg(true)}><Text style={styles.signUpText}> Sign in </Text></TouchableOpacity>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
});
export default SignUp