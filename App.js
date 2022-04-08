import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { TabsMenu } from "./routes/TabsMenu";
export default function App() {
  return (
    <NavigationContainer>
      <TabsMenu />
    </NavigationContainer>
  );
}
