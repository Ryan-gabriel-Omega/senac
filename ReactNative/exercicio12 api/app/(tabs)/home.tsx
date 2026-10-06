import { StyleSheet, Text, View, FlatList, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getAllProducts } from "../../services/product";
import { ProductItem } from "../../components/productItem/productItem";

/*type Aluno = {
   id: number;
   nome: string;
   cidade: string;
};
 
const alunos: Aluno[] = [
    { id: 1, nome: "Anderson", cidade: "Guarujá" },
    { id: 2, nome: "Agatha", cidade: "Santos" },
    { id: 3, nome: "Gabriel", cidade: "Santos" },
    { id: 4, nome: "Vitor", cidade: "Santos" },
    { id: 5, nome: "Nathielly", cidade: "São Vicente" },
    { id: 6, nome: "Nathally", cidade: "São Vicente" },
];*/
export default function Home() {
 
    const products = getAllProducts();
 
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={products}
                renderItem={
                    ({ item }) =>
                        <ProductItem product={item}></ProductItem>
                }
                keyExtractor={item => item.id.toString()}>
               
 
            </FlatList>
        </SafeAreaView>
    );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    pressableContainer: {        
        flexDirection: 'row',
        gap: 16,
        padding: 16,
        borderBottomColor: "#ddd",
        borderStyle: 'solid',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: "#eee"
    },
    textContainer:
    {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 16,
        marginBottom: 8
    },
    description: {
        fontSize: 14,
        color: "#333"
    },
    price: {
        textAlign: 'right'
    },
    destaque: {
        fontWeight: 'bold',
        color: "#f14897"
    }
});
 