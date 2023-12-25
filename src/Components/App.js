import React from "react";
import Signin from "./Signin";
import AuthState from "../context/AuthState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";
import PasswordReset from "./PasswordReset";

function App() {
  return (
    <>
      <Router>
        <AuthState>
          <Routes>
          <Route element={<PrivateRoute/>}>
            <Route exact path="/" element={<Dashboard/>}/>
          </Route>
            <Route path="/signin" element={<Signin />} />
            <Route path="/login" element={<Login />} />
            <Route path= "/changePassword" element={<PasswordReset/>} />
          </Routes>
        </AuthState>
      </Router>
    </>
  );
}

export default App;
