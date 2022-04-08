import { Button, Text, StyleSheet, View } from "react-native";

export function Messages({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Messages</Text>
      <Button
        title="home"
        onPress={() => {
          navigation.push("Camara");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
