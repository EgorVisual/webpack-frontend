import React from 'react';
import { useState } from 'react'
import authorization from "../../servicers/auth";
import { AuthContext } from "../../context";
import updateUser from "../../servicers/updateInfo";
import createUser from "../../servicers/createUser";

export default function AuthProvider({ children }) {
    let [user, setUser] = useState(null);

    let signIn = (userLogin, userPassword, callback) => {
        return authorization.signIn(setUser,userLogin, userPassword,() => {
            callback();
        });
    };

    let signOut = (callback) => {
        return authorization.signOut(() => {
            setUser(null);
            callback();
        });
    };

    let updateInfo = (userInfo, callback) => {
        return updateUser.updateInfo(user.id, setUser, userInfo,() => {
            callback();
        });
    };

    let createNewUser = (userLogin,userPassword,userFullname, callback) => {
        return createUser.createNewUser(setUser, userLogin,userPassword,userFullname,() => {
            callback();
        });
    };

    let value = { user, signIn, signOut, updateInfo, createNewUser };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}