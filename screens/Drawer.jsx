import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

//screens
import Profile from "./Profile";
import Followers from "./Followers";
import BottomTabs from "../BottomTabs";
import DrawerContent from "../components/DrawerContent";

const DrawerNav = createDrawerNavigator();

const Drawer = () => {
  const { Screen, Navigator } = DrawerNav;
  return (
    <View style={{ flex: 1 }}>
      <Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <DrawerContent {...props} />}
        initialRouteName="bottom tab"
      >
        <Screen name="profile" component={Profile} />
        <Screen name="followers" component={Followers} />
        <Screen name="bottom tab" component={BottomTabs} />
      </Navigator>
    </View>
  );
};

export default Drawer;
