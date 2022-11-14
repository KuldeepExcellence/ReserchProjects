import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../config";
import axios from "axios";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [apiData, setApiData] = useState(null);
    const [accToken, setAccToken] = useState(null);
    const [refToken, setRefToken] = useState(null);
    const [userName, setUserName] = useState(null);

    
    const login = async (username = 'deepak', password = 'passwordofeatemate@123') => {
        setUserToken("ashu");
        console.log("login presed")
        AsyncStorage.setItem('userToken', 'ashu');


        let response = await fetch('https://eatmatesapi.herokuapp.com/api/user-existance/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": "prabh",
                "password": "passwordofeatemate@123"
            })
        }).then((result) => {
            result.json().then((response) => {
                console.log(response, "Response");
                setApiData(response);
                AsyncStorage.setItem("userInfo", JSON.stringify(response));

                console.log("referesh token = " + response.token.refresh)
                setRefToken(response.token.refresh);
                AsyncStorage.setItem("refereshToken", response.token.refresh);

                console.log("access token = " + response.token.access);
                setAccToken(response.token.access);
                AsyncStorage.setItem("userToken", response.token.access);
                setUserName(response.userdetail.username)

            })
            //console.log("data = " + apiData)

        }).catch((e) => {
            console.log(e)
        });
        // console.log(response);
        // console.log("hello")



    }
    const logout = () => {
        setUserToken(null);
        AsyncStorage.removeItem('userInfo')
        AsyncStorage.removeItem('refereshToken')
        AsyncStorage.removeItem('userToken')
        console.log("logout presed")
    }

    const isLoggedIn = async () => {
        try {
            let userInfo = await AsyncStorage.getItem('userInfo');
            let userToken = await AsyncStorage.getItem('userToken');
            userInfo = JSON.parse(userInfo);
            if (userInfo) {
                setUserToken(userToken);
                setUserInfo(userInfo);

            }
        } catch (e) {
            console.log(`isLogged in error ${e}`)
        }
    }
    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ login, logout, userToken, userInfo }}>
            {children}
        </AuthContext.Provider>
    );
}