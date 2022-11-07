// import React, { useContext } from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import { AuthContext } from "../../context/AuthContext";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Button, Center, useToast, NativeBaseProvider } from 'native-base';


// function Test() {
//     const toast = useToast();

//     return <NativeBaseProvider>
//         <Center>
//             <Button onPress={() => toast.show({
//                 title: "Hello world",
//                 placement: "bottom"
//             })}>
//                 Bottom
//             </Button>
//         </Center>
//     </NativeBaseProvider>
// }


// export default function MainScreen() {
//     const { logout, userInfo } = useContext(AuthContext);
//     console.log("userdetails = " + userInfo)
//     // console.log(userInfo.userdetail[0].username)
//     console.log("hello")

//     return (
//         <View>
//             <Text>This is main screen </Text>
//             {/* <Text>You are Logged in as {userInfo.userdetail[0].username} sir </Text> */}
//             <TouchableOpacity onPress={logout} >
//                 <Text > Logout </Text>
//             </TouchableOpacity>
//             <Test></Test>
//         </View>
//     )
// }
import React from "react";
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box, useToast, Center } from "native-base";
import { Button } from "native-base";

const Example = () => {
    const toast = useToast();
    return <Center>
        <Button onPress={() => toast.show({
            description: "Hello world"
        })}>
            Show Toast
        </Button>
    </Center>;
};

export default function App() {
    // 2. Use at the root of your app
    return (
        <NativeBaseProvider>
            <Example></Example>
        </NativeBaseProvider>
    );
}




