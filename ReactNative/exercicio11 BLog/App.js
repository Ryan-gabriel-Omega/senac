import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

function App() {

    const [pagina, setPagina] = useState("inicio");
    const [modalAberto, setModalAberto] = useState(false);
    const [lugarSelecionado, setLugarSelecionado] = useState(null);

    const lugares = [
        {
            id: 1,
            nome: "Santos - São Paulo",
            descricao: "Conheça Santos, uma cidade litorânea conhecida por suas belas praias, jardins à beira-mar e diversos pontos turísticos, oferecendo opções para quem gosta de natureza, história e lazer.",
            imagem: require("./assets/santos.jpg")
        },

        {
            id: 2,
            nome: "Cristo Redentor — Rio de Janeiro, RJ",
            descricao: "Um dos símbolos mais conhecidos do Brasil, o Cristo Redentor oferece uma vista panorâmica da cidade do Rio de Janeiro e de suas paisagens naturais.",
            imagem: require("./assets/cristoredentorRJ.jpg")
        },

        {
            id: 3,
            nome: "MASP — São Paulo, SP",
            descricao: "Um dos principais museus de arte do Brasil, o MASP é conhecido por seu acervo de obras de diferentes períodos e por sua arquitetura marcante na Avenida Paulista.",
            imagem: require("./assets/masp sp.jpg")
        },
        {
        id: 4,
        nome: "Cataratas do Iguaçu — Foz do Iguaçu, PR",
        descricao: "Um dos maiores conjuntos de quedas-d’água do mundo, as Cataratas do Iguaçu impressionam pela dimensão, pela força das águas e pela paisagem natural ao redor.",
        imagem: require("./assets/cataratasdoiguasul.jpg")
        },
         {
        id: 5,
        nome: "Centro Histórico de Ouro Preto — Ouro Preto, MG",
        descricao: "Conhecido por sua arquitetura colonial e suas igrejas históricas, o Centro Histórico de Ouro Preto preserva parte importante da história e da arquitetura do período colonial brasileiro.",
        imagem: require("./assets/Centro Histórico de Ouro preto.jpg")
        },
    ];

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>
                <Header />
                <Navbar setPagina={setPagina} />
                {pagina === "inicio" && (
                    <>
                        {lugares.map((lugar) => (
                            <Post
                                key={lugar.id}
                                lugar={lugar}
                                abrirModal={() => {
                                    setLugarSelecionado(lugar);
                                    setModalAberto(true);
                                }}
                            />
                        ))}
                    </>
                )}
                {pagina === "cidades" && (
                    <>
                        {lugares.map((lugar) => (
                            <Post
                                key={lugar.id}
                                lugar={lugar}
                                abrirModal={() => {
                                    setLugarSelecionado(lugar);
                                    setModalAberto(true);
                                }}
                            />
                        ))}
                    </>
                )}
                {pagina === "turisticos" && (
                    <>
                        {lugares.map((lugar) => (
                            <Post
                                key={lugar.id}
                                lugar={lugar}
                                abrirModal={() => {
                                    setLugarSelecionado(lugar);
                                    setModalAberto(true);
                                }}
                            />
                        ))}
                    </>
                )}
                {pagina === "sobre" && (
                    <Post
                        lugar={{
                            nome: "Sobre",
                            descricao: "Blog sobre cidades, viagens epontos turísticos."
                        }}
                        abrirModal={() => {
                            setLugarSelecionado({
                                nome: "Sobre",
                                descricao: "Blog sobre cidades,viagens e pontos turísticos."
                            });
                            setModalAberto(true);
                        }}
                    />
                )}
                <Footer />
            </ScrollView>

            <Modal
                visivel={modalAberto}
                fecharModal={() => setModalAberto(false)}
                lugar={lugarSelecionado}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: 'rgb(73, 104, 189)',
    },
})

export default App;