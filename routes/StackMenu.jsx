import { createStackNavigator } from "@react-navigation/stack";
import { Messages, Camara } from "../pages";
import { TabsMenu } from "./TabsMenu";

const Stack = createStackNavigator();

export function StackMenu() {
  return (
    <Stack.Navigator
      initialRouteName="TabsMenu"
      screenOptions={{
        animationTypeForReplace: "push",
        gestureEnabled: true,
        gestureDirection: "horizontal",
      }}
    >
      <Stack.Screen name="Camara" component={Camara} />
      <Stack.Screen
        name="TabsMenu"
        component={TabsMenu}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
  );
}
