import { View, Text, StyleSheet, Pressable } from "react-native";

function Navbar({setPagina}) {
    return (

        <View style={styles.container}>
            <Pressable onPress={() => setPagina("inicio")}>
            <Text style={styles.item}>Início</Text>
            </Pressable>
            <Pressable onPress={() => setPagina("Cidades")}>    
            <Text style={styles.item}>Cidades</Text>
            </Pressable>
            <Pressable onPress={() => setPagina("Pontos Turisticos")}>
            <Text style={styles.item}>Pontos Turísticos</Text>
            </Pressable>
            <Pressable onPress={() => setPagina("Sobre")}>
            <Text style={styles.item}>Sobre</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 15,
    },

    item: {
        fontSize: 14,
    },
});

export default Navbar;