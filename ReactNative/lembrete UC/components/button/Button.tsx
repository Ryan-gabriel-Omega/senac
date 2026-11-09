import { Pressable, Text, StyleSheet } from "react-native";
 
type Props = {
  title: string;
  onPress: () => void;
};
 
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#E67a31",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
 
export function Button({ title, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}
 
 
 