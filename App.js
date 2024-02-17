import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./AppRoutes";

export default function App() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
