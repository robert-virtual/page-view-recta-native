import { Text, StyleSheet, View } from "react-native";

export function Camara() {
  return (
    <View style={styles.container}>
      <Text>Camara</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    padding: 50,
  },
});
