import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View } from "react-native";
import { Activity, Home, Profile, Search } from "../pages";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Main } from "./Main";
const Tab = createBottomTabNavigator();

export function TabsMenu() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
