import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Text>Home Screen</Text>
      <Text
        onPress={() => {
          navigation.navigate("about");
        }}
      >
        Go to About us
      </Text>
    </View>
  );
};

export default Home;
