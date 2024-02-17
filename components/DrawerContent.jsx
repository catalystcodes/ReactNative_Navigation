import { View, Text } from "react-native";
import React from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

const DrawerContent = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        style={{
          backgroundColor: "#a1a1a1",
          display: "flex",
        }}
      >
        <Text
          onPress={() => {
            navigation.navigate("profile");
          }}
        >
          profile
        </Text>
        <Text
          onPress={() => {
            navigation.navigate("followers");
          }}
        >
          Flowers
        </Text>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;
