import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../../context/AuthContext";
export default function MainScreen() {
    const { test, logout } = useContext(AuthContext);
    return (
        <View>
            <Text>This is main screen </Text>
            <TouchableOpacity onPress={logout} >
                <Text > Logout </Text>
            </TouchableOpacity>
        </View>
    )
}