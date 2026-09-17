import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Modal as RNModal,
    Image
} from "react-native";

function Modal({ visivel, fecharModal, lugar }) {
    return (
        <RNModal
            visible={visivel}
            transparent={true}
            animationType="slide"
        >
            <View style={styles.fundo}>

                <View style={styles.container}>

                    <Image
                        source={lugar?.imagem}
                        style={styles.imagem}
                    />

                    <Text style={styles.titulo}>
                        {lugar?.nome}
                    </Text>

                    <Text style={styles.texto}>
                        {lugar?.descricao}
                    </Text>

                    <Pressable
                        style={styles.botao}
                        onPress={fecharModal}
                    >
                        <Text>Fechar</Text>
                    </Pressable>

                </View>

            </View>
        </RNModal>
    );
}

const styles = StyleSheet.create({
    fundo: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.43)",
    },

    container: {
        width: "85%",
        padding: 20,
        borderRadius: 10,
        backgroundColor: "rgb(71, 212, 182)",
    },

    imagem: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        marginBottom: 15,
    },

    titulo: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
    },

    texto: {
        fontSize: 16,
    },

    botao: {
        marginTop: 20,
        padding: 10,
        alignItems: "center",
    },
});

export default Modal;