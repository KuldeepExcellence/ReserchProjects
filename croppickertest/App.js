// https://www.npmjs.com/package/react-native-check-box
//https://github.com/crazycodeboy/react-native-check-box/tree/master/examples
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, PermissionsAndroid } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import CheckBox from 'react-native-check-box'
const Camera = () => {
  const [cameraPhoto, setCameraPhoto] = useState();
  const [galleryPhoto, setGalleryPhoto] = useState();
  let options =
  {
    saveToPhotos: true,
    mediaType: "photo",
  }
  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options)
      setCameraPhoto(result.assets[0].uri)
    }
  };
  const openGallery = async () => {
    const result = await launchImageLibrary(options)
    setGalleryPhoto(result.assets[0].uri);
  };
  const [checked, setchecked] = useState(true);
  return (
    <View >
      <TouchableOpacity onPress={openCamera} >
        <Text> Open Camera </Text>
      </TouchableOpacity>
      <Image style={{ height: 100, width: 100 }} source={{ uri: cameraPhoto }}></Image>
      <TouchableOpacity onPress={openGallery} >
        <Text > Open Gallery </Text>
      </TouchableOpacity>
      <Image style={{ height: 100, width: 100 }} source={{ uri: galleryPhoto }}></Image>
      <CheckBox
        onClick={() => {
          setchecked(
            !checked

          )
        }}
        isChecked={checked}
        leftText={"CheckBox"}
      />
    </View>
  )
}
export default function App() {
  return (
    <View><Camera></Camera></View>
  )
}  