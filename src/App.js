import React from 'react'
import {Route, Routes } from "react-router-dom";
import AuthProvider from "./modules/auth/AuthProvider";
import NavigationPanel from "./modules/NavigationPanel";
import RequireAuth from "./modules/auth/RequireAuth";
import LoginPage from "./pages/LoginPage";
import TodoMain from "./components/Todo/todo-main/TodoMain";
import ProtectedPage from "./pages/ProtectedPage";
import PublicPage from "./pages/PublicPage";
import Configuration from "./pages/Configuration";

export default function App() {

    return (
          <AuthProvider>
            <NavigationPanel/>
            <Routes>
              <Route path="/" element={<PublicPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/protected"
                element={
                  <RequireAuth>
                     <ProtectedPage />
                  </RequireAuth>
                }
              />
                <Route exact path="/main" element={
                  <RequireAuth>
                    <TodoMain/>
                  </RequireAuth>}/>
                <Route exact path="/config" element={
                  <RequireAuth>
                    <Configuration/>
                  </RequireAuth>}/>
            </Routes>
          </AuthProvider>
    );
};