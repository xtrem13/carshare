import 'react-native-gesture-handler'
import React, {useState} from 'react';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import {
  View,
  StyleSheet
} from 'react-native';

import SignIn from "./screens/SignIn.js"
import SignUp from "./screens/SignUp.js"
import Home from "./screens/Home.js"
import Route from "./screens/Route.js"


const App: () => React$Node = () => {
  const [login, changeAuth]=useState(false)
  const [registered, changeReg]=useState(true)
  console.log(login)
  const Stack=login?createStackNavigator():null
  const auth={
    login:login,
    changeAuth:changeAuth,
    registered:registered,
    changeReg:changeReg
  }
  
  return (
    <>
    {((login||registered)&&(!login))&&<SignIn auth={auth}/>}
    {(!(login||registered))&&<SignUp auth={auth}/>}
    
    {login&&
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{title:"All Routes"}}
        />
        <Stack.Screen 
          name="Route"
          component={Route}
          options={{title:"Route"}}
        />
        
      </Stack.Navigator>

    </NavigationContainer>
    }
    </>
    
  );
};

const styles = StyleSheet.create({
  
});

export default App;
