import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import ProfilePicture from "./ProfilePicture";
import Title from "./Title";
import FavoriteIcon from "./FavoriteIcon";

export default function Header() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ProfilePicture />
        <Title />
        <FavoriteIcon />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
