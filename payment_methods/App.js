import React from "react";
import { View, Text, Button } from "react-native"


export default function App() {
  return (
    <View>
      <Text>Hello World</Text>
      <Button title={"Click ME"} onPress={() => { alert("this is test button for working") }}></Button>
    </View>
  )
}