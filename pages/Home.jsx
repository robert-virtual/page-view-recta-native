import {
  TouchableOpacity,
  SafeAreaView,
  Button,
  Text,
  StyleSheet,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export function Home({navigate}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 15,
          shadowColor: "gray",
          shadowRadius: 5,
          shadowOpacity: 0.1,
        }}
      >
        <Text>Home</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="facebook-messenger"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
