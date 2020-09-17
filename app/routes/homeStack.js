import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../screen/WelcomeScreen";
import ViewImageScreen from "../screen/ViewImageScreen";

const screens = {
  WelcomeScreen: {
    screen: WelcomeScreen,
  },
  ViewImageScreen: {
    screen: ViewImageScreen,
  },
};

const HomeStack = createStackNavigator(screens);


export default createAppContainer(HomeStack);