import { View, Text, StyleSheet } from "react-native"

export default function config() {
    return (
        <View style={styles.container}>
            <Text>sou o config</Text>
        </View>
    )

}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center'
    },
})