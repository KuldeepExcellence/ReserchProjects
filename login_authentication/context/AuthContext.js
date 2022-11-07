import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [apiData, setApiData] = useState(null);
    const [accToken, setAccToken] = useState(null);
    const [refToken, setRefToken] = useState(null);
    const [userName, setUserName] = useState(null);
    const login = async () => {
        setUserToken("ashu");
        console.log("login presed");
        AsyncStorage.setItem('userToken', "ashu");
        setIsLoading(true)

        let response = await fetch('https://douryou.herokuapp.com/douryou-user/user-login/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": "Hatim",
                "password": "DouRyouPassword@123@#12097"
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
        }).catch((e) => {
            console.log(e)
        });
    }
    const logout = () => {
        setUserToken(null);
        AsyncStorage.removeItem('userInfo')
        AsyncStorage.removeItem('refereshToken')
        AsyncStorage.removeItem('userToken')
        console.log("logout presed")
        setIsLoading(false)
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