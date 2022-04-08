import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Posts, Tagged, Videos } from "../pages";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Tab = createMaterialTopTabNavigator();

export function ProfileMenu() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="post" size={24} color={color} />
          ),
        }}
        name="Posts"
        component={Posts}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="play" size={24} color={color} />
          ),
        }}
        name="Videos"
        component={Videos}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="tag" size={24} color={color} />
          ),
        }}
        name="Tagged"
        component={Tagged}
      />
    </Tab.Navigator>
  );
}
