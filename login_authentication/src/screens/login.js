import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../../context/AuthContext";

export default function Login({ navigation }) {
    const { test, login } = useContext(AuthContext);
    return (
        <View>
            <Text>This is Login Screen</Text>
            <Text>{test}</Text>
            <TouchableOpacity onPress={login} >
                <Text > Login </Text>
            </TouchableOpacity>
        </View>
    )
}