import { StyleSheet, Text } from "react-native";

export default function Title() {
  return (
    <>
      <Text style={styles.text}>News App</Text>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    fontFamily: "Roboto",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginVertical: 10,
  },
});
