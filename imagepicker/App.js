import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity, Image } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';

const App = () => {
    const [imagefront, setImagefront] = useState(null);

    // const [imageback, setImageback] = useState(null)

    const [showoption, setShowoption] = useState(false);

    const openOptionForFront = () => {
        setShowoption(true)
    }

    const openCameraFront = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: false,
        }).then(imagefront => {
            console.log(imagefront);
            setShowoption(false)
            setImagefront(imagefront.path)
        });
    }
    const openGalleryFront = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true
        }).then(imagefront => {
            console.log(imagefront);
            let formData = new FormData();
            let localUri = imagefront.path;
            console.log("local uri = " + localUri);
            let filename = localUri.split('/').pop();
            console.log("filename = " + filename);
            let match = /\.(\w+)$/.exec(filename);
            console.log("match = " + match);
            let type = match ? `image/${match[1]}` : `image`;
            console.log("type = " + type);
            formData.append('name', "kuldeep");
            formData.append('photo', { uri: localUri, name: filename, type });
            fetch('https://douryouweb.herokuapp.com/douryou-user/Add-new-douryou-logins/', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "multipart/form-data"
                },
                body: formData
            }).then((result) => {
                result.json().then((response) => {
                    console.log(response, "Response")
                })
            })
            console.log()
            setShowoption(false)
            setImagefront(imagefront.path)
        });
    }
    return (
        <View>
            <View style={styles.fieldTwo}>
                {/* <CustomLabel text={'Upload Document (Front)'} /> */}
                <View style={styles.cont}>
                    <Image source={{ uri: imagefront }} style={styles.imgCont} />
                    {imagefront ? (<TouchableOpacity style={styles.delBtnCont} onPress={() => setImagefront(null)}>
                        {/* <Image style={styles.delBtn} source={require('../../../screens/assets/cross.png')} />
                        <Text> click</Text> */}
                    </TouchableOpacity>) : (<TouchableOpacity onPress={() => openOptionForFront()}>
                        <Text>+</Text>
                    </TouchableOpacity>)}
                </View>
            </View>

            <Modal
                visible={showoption}
                onRequestClose={
                    () => setShowoption(false)
                }
                transparent
            >
                <View style={styles.optContView}>
                    <View style={styles.optCont}>
                        <View style={styles.optContTitle}>
                            <Text style={styles.optContTitleText} >Select Option</Text>
                        </View>
                        <TouchableOpacity onPress={() => openCameraFront()}>
                            <Text style={styles.textColor}> Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => openGalleryFront()} >
                            <Text style={styles.textColor}> Gallery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setShowoption(false)} >
                            <Text style={styles.textColor}> Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
export default App;
const styles = StyleSheet.create({
    container: {
        margintop: 5,
    }
})