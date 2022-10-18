import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
import { BASE_URL } from "../config";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [test, setTest] = useState("Kuldeep Sharma")
    const [userToken, setUserToken] = useState(null);
    const login = (username = 'deepak', password = 'passwordofeatemate@123') => {
        // axios.post(`${BASE_URL}/user-existance/`)

        setUserToken("ashu");
        console.log("login presed")
        AsyncStorage.setItem('userToken', 'ashu');

    }
    const logout = () => {
        setUserToken(null);
        AsyncStorage.removeItem('userToken')
        console.log("logout presed")
    }

    const isLoggedIn = async () => {
        try {
            let userToken = await AsyncStorage.getItem('userToken');
            setUserToken(userToken);
        } catch (e) {
            console.log(`isLogged in error ${e}`)
        }
    }

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ test, login, logout, userToken }}>
            {children}
        </AuthContext.Provider>
    );
}