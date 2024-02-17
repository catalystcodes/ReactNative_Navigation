import { DrawerActions, useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, View } from "react-native";

export default function Feeds() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>Feeds </Text>
      <Text
        onPress={() => {
          navigation.navigate("Notification");
        }}
      >
        {" "}
        Goto notifications screen{" "}
      </Text>

      <Text
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        {" "}
        open Drawer
      </Text>
    </SafeAreaView>
  );
}
