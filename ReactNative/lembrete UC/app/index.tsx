
import { StyleSheet, Text, View, Image } from "react-native";
import { router } from "expo-router";
import { Button } from "../components/button/Button";

export default function Page() {
  
  function navigate() {
    router.replace('/list')
  }
return (
  <View style={styles.container}>
    <Image
      source={require('../assets/calendario.png')}
      style={styles.logo}
      resizeMode="cover"
    />
    <Text style={styles.textName}>Lembretes UC</Text>
    <Text style={styles.textDev}>Subject 01</Text>
    <Button title="Entrar" onPress={navigate} />
  </View>
)

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#191923",
  },

  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },

  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#EAEAF0",
  },

  subtitle: {
    fontSize: 36,
    color: "#B0B0C0",
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },

  textName: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    color: "#EAEAF0",
  },

  textDev: {
    fontSize: 16,
    color: "#A78BFA",
    marginBottom: 24,
  },
});
