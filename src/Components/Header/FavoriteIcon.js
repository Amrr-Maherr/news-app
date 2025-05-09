import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export default function FavoriteIcon() {
  return (
    <>
      <Ionicons
        name="heart"
        size={30}
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
