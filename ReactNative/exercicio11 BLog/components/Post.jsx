import { View, Text, StyleSheet, Pressable, Image } from "react-native";

function Post({ lugar, abrirModal }) {
    return (
        <View style={styles.container}>

            <Image
                source={lugar?.imagem}
                style={styles.imagem}
            />

            <Text style={styles.titulo}>
                {lugar?.nome}
            </Text>

            <Text style={styles.descricao}>
                {lugar?.descricao}
            </Text>

            <Pressable
                style={styles.botao}
                onPress={abrirModal}
            >
                <Text style={styles.textoBotao}>
                    Ver mais
                </Text>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        padding: 15,
    },

    imagem: {
        width: "100%",
        height: 200,
        borderRadius: 10,
    },

    titulo: {
        fontSize: 20,
        fontWeight: "bold",
    },

    descricao: {
        fontSize: 15,
        marginTop: 8,
    },

    botao: {
        marginTop: 15,
        padding: 10,
        alignItems: "center",
    },

    textoBotao: {
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default Post;