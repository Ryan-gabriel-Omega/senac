import { View, Text, StyleSheet } from "react-native";

function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Lugares e Pontos Turísticos
            </Text>

            <Text style={styles.subtitulo}>
                Descubra cidades e lugares incríveis.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },

    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        alignSelf: 'center',
    },

    subtitulo: {
        fontSize: 16,
        marginTop: 5,
        alignSelf: 'center',
    },
});

export default Header;