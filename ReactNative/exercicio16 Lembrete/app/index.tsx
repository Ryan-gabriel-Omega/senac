import { StyleSheet, Text, View, Image } from "react-native";
import { router } from "expo-router";
import { Button } from "../components/button/Button";

export default function Page() {
  
  function navigation() {
    router.replace('/list')
  }
return (
  <View style={styles.container}>
    <Image
      source={require('../assets/logoRemindMe.png')}
      style={styles.logo}
      resizeMode="cover"
    />
    <Text style={styles.textName}>RemindMe App - 2026®</Text>
    <Text style={styles.textDev}>By Developer</Text>
    <Button title="Entrar" onPress={navigation} />
  </View>
)

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
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
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  logo:
  ,
  textName:
  ,
  textDev:
  ,
  
});
