import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { AuthContext } from "../../context/AuthContext";

export default function Signup({ navigation }) {
    const { login } = useContext(AuthContext);

    const loginscren = () => {
        navigation.navigate("Login")

    }

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeUsername}
                value={username}
                placeholder="useless placeholder"

            />
            <TouchableOpacity style={{ margin: 20, backgroundColor: "#cbe67c", alignItems: "center" }} onPress={signup} >
                <Text style={{ fontSize: 30 }} > Signup  </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 20, backgroundColor: "#90c9f5", alignItems: "center" }} onPress={login} >
                <Text style={{ fontSize: 30 }} > Login </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
