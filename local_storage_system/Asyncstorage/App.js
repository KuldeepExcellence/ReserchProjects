// sample code done for the async storage

import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, DeviceEventEmitter } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get("screen")


export default function App() {

  const [inputBoxValue, setInputBoxValue] = useState("");

  const [storageDataList, setStorageDataList] = useState("");
  const addItemToList = async () => {
    console.log(inputBoxValue)
    try {
      await AsyncStorage.setItem("name", inputBoxValue);
      alert("Data is Added")
      await getItemList();
    } catch (err) {
      console.log(err)
    }
  }
  const getItemList = async () => {
    try {
      const data = await AsyncStorage.getItem("name")
      setStorageDataList(data)
      alert("Data is Added")
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <View>
      <TextInput style={styles.inputBox}
        value={inputBoxValue}
        placeholder="Enter Name"
        onChangeText={value => setInputBoxValue(value)} ></TextInput>

      <TouchableOpacity style={styles.addButton} onPress={addItemToList}>
        <TextInput style={{ color: "white", fontSize: 20 }} >ADD</TextInput>
      </TouchableOpacity>

      <Text> Your Data is  {storageDataList} </Text>
    </View>
  )
}
const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
    },
    inputBox: {
      borderWidth: 2,
      borderColor: 'black',
      marginVertical: 10,
      marginHorizontal: 8,
    },
    addButton: {
      widht: width - 20,
      backgroundColor: "blue",
      alignItems: "center",
      padding: 5,
      marginHorizontal: 10
    }
  }
)
