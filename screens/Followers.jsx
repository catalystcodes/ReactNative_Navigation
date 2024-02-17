import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Followers = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Followers Drawer Screen</Text>
      <Text
        onPress={() => {
          navigation.navigate("bottom tab");
        }}
      >
        GO BACK
      </Text>
    </View>
  );
};

export default Followers;
