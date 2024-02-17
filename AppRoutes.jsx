import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// screens
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import BottomTabs from "./BottomTabs";
import Drawer from "./screens/Drawer";

const Stack = createStackNavigator();

const AppRoutes = () => {
  const { Screen, Navigator } = Stack;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigator screenOptions={{ headerShown: false }} initialRouteName="tuto">
        <Screen name="home" component={Home} />
        <Screen name="about" component={About} />
        <Screen name="contact" component={Contact} />
        <Screen name="tuto" component={Drawer} />
      </Navigator>
    </SafeAreaView>
  );
};

export default AppRoutes;
