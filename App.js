import React from "react";
import { View } from "react-native";
import WelcomeScreen from "./app/screen/WelcomeScreen";
import LoginScreen from "./app/screen/LoginScreen";
import Navigator from "./app/routes/homeStack"


export default function App() {
  return (
    //  <WelcomeScreen />
     <Navigator />
    
  );
}

