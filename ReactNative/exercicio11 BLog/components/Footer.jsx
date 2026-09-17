import { View, Text, StyleSheet } from "react-native";

function Footer() {
    return (
        <View style={styles.container}>
            <Text>
                Teste de Footer
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "center",
    },
});

export default Footer;