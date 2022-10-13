import react from "react";
import { View, Text, Button } from "react-native";


export default function LoginScreen({ navigation }) {
    return (
        <View>
            <Text>hello world this is my login screen </Text>
            <Button
                title="Login"
                onPress={() => navigation.navigate("MealsCategories")}
            />
        </View>
    )
}

