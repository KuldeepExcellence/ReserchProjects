import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MainScreen() {
    const { logout } = useContext(AuthContext);
    // const { logout, userInfo } = useContext(AuthContext);
    // console.log("userdetails = " + userInfo)
    // console.log(userInfo.userdetail[0].username)
    console.log("hello")


    return (
        <View>
            <Text>This is main screen </Text>
            {/* <Text>You are Logged in as {userInfo.userdetail[0].username} sir </Text> */}
            <TouchableOpacity onPress={logout} >
                <Text > Logout </Text>
            </TouchableOpacity>
        </View>
    )
}