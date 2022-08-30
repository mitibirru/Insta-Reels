import React, { useState } from "react";
import { auth } from "../firabase.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const LoginHandler = async () => {
    try {
      let userCreds = await auth.signInWithEmailAndPassword(email, password);
      console.log(userCreds.user);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        value={password}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={LoginHandler}>Login</button>
    </>
  );
};

export default Login;
