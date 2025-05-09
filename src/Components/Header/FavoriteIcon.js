import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export default function FavoriteIcon() {
  return (
    <>
      <Ionicons
        name="heart"
        size={50}
        color="red"
        style={styles.icon}
      />
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    borderRadius: 25,
  },
});
