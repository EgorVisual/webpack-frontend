import React from 'react';
import { useState } from 'react'
import fakeAuthProvider from "../../servicers/auth";
import { AuthContext } from "../../context";

export default function AuthProvider({ children }) {
    let [user, setUser] = useState(null);

    let signIn = (newUser, callback) => {
        return fakeAuthProvider.signIn(() => {
            setUser(newUser);
            callback();
        });
    };

    let signOut = (callback) => {
        return fakeAuthProvider.signOut(() => {
            setUser(null);
            callback();
        });
    };

    let value = { user, signIn, signOut };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}