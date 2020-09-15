import { StatusBar } from "expo-status-bar";
import React from "react";
import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image, 
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";
import hooks from "./components/Welcome.js.js.js"
import Welcome from "./components/Welcome.js.js.js";

export default function App() {
  let x = 1;
  console.log("App execution is on!");

  const handlePress = () => {
    console.log("Text Pressed!");
  };

  const ButtonPress = () => {
    console.log("Button Pressed!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text>Yasir's First Mobile App</Text>
      <Text onPress={handlePress}>Please click me!</Text>
      <TouchableHighlight onPress={() => console.log("Image Tapped!")} >
        <Image
          blurRadius={1}
          fadeDuration={3000}
          onLoad={handlePress}
            source={{
              width: 200,
              height: 200,
              uri: "https://picsum.photos/200/300",
          }} />
      </TouchableHighlight >
        <Button
          color="red" 
          title="Click Me!" 
          onPress={() => Alert.alert("My Title", "My Message", [
            {text: "Yes", onPress: () => console.log("Yes")},
            {text: "No", onPress: () => console.log("No")},
          ])
        } 
        />
        <Welcome />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
});
