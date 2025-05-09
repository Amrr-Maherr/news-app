import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet} from "react-native";
import Header from "./src/Components/Header/Header";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar/>
        <Header />
    </SafeAreaProvider>
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
