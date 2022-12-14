import React, { useContext } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from "./src/screens/signup";
import Login from "./src/screens/login";
import MainScreen from "./src/screens/mainscreen";
import { AuthContext, AuthProvider } from "./context/AuthContext";

//kuldeep shrama is working on this today . 

const Stack = createNativeStackNavigator();


function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="mainScreen" component={MainScreen}></Stack.Screen>
    </Stack.Navigator>

  )
}

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="signup" component={Signup}></Stack.Screen>
    </Stack.Navigator>
  )
}

function AppNav() {
  const { userToken } = useContext(AuthContext)
  return (
    <NavigationContainer>
      {userToken !== null ? <AppStack></AppStack> : <AuthStack></AuthStack>}
    </NavigationContainer>
  )
}


export default function App() {
  return (
    <>
      <AuthProvider>
        <AppNav></AppNav>
      </AuthProvider>
    </>
  )
}