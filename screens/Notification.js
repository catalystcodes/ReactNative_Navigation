import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text } from "react-native";

export default function Notification() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>Notifications</Text>
      <Text
        onPress={() => {
          navigation.navigate("contact");
        }}
      >
        go to contact us
      </Text>
    </SafeAreaView>
  );
}
