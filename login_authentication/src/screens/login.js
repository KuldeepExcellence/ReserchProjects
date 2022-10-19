import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../../context/AuthContext";

export default function Login({ navigation }) {
    const { login } = useContext(AuthContext);

    return (
        <View>
            <Text>This is Login Screen</Text>
            <TouchableOpacity onPress={login} >
                <Text > Login </Text>
            </TouchableOpacity>
        </View>
    )
}