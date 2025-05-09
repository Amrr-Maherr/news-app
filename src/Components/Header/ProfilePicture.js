import { Image, StyleSheet } from "react-native";

export default function ProfilePicture() {
    return (
        <>
            <Image style={styles.image} source={require("../../../assets/user.png")}/>
        </>
    )
}

const styles = StyleSheet.create({
  image: {
    width: 50, 
    height: 50,
    borderRadius: 25,
  },
});
  