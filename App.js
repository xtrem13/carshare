import 'react-native-gesture-handler'
import React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

import {
  View,
  StyleSheet
} from 'react-native';
import SignIn from "./screens/SignIn.js"
import SignUp from "./screens/SignUp.js"


const App: () => React$Node = () => {
  const Stack=createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="SignIn"
          component={SignIn}
          options={{title:"Sign in"}}
        />
        <Stack.Screen 
          name="SignUp"
          component={SignUp}
          options={{title:"Sign Up"}}
        />
      </Stack.Navigator>

    </NavigationContainer>
    
    
  );
};

const styles = StyleSheet.create({
  
});

export default App;
