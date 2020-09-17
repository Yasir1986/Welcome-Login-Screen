import React from "react";
import { StyleSheet, ImageBackground, View, Image, Text, Button } from "react-native";

function WelcomeScreen(props) {

  const pressHandler = () => {
    //props.navigation.navigate('ViewImageScreen')
    props.navigation.push('ViewImageScreen')
  }

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.text}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}>
        <Text style={styles.buttonText} onPress={pressHandler}>Login</Text>
      </View>
      <View style={styles.registerButton}>
        <Text style={styles.buttonText} onPress={pressHandler}>Register</Text>
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  text: {
    color: "darkgreen",
  },
});
