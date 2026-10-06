import {
    StyleSheet,
    Image,
    Text,
    SafeAreaView,
    ScrollView,
    View
} from "react-native";
import { Button } from "../../components/button/Button";
import { useLocalSearchParams, router } from "expo-router";
import { getAllProducts, getProductById } from "../../services/product";



export default function ProductScrems() {

    const { id } = useLocalSearchParams();

    const idProduct = parseInt(id as string);

    const product = getProductById(idProduct);

    if(!product) return router.back;
        
    const handleComprar = () => {
        alert(`Você comprou ${product.title} e gastará mais ${product.price}`);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.productArea}
                contentContainerStyle={{
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 16
                }}
            >
                <Image
                    style={styles.image}
                    source={{ uri: product.image }}
                    resizeMode="cover"
                />

                <View style={styles.detailsArea}>
                    <Text style={styles.title}>
                        {product.title}
                    </Text>

                    <Text style={styles.description}>
                        {product.description}
                    </Text>
                </View>

                <Text style={styles.price}>
                    R$ {product.price.toFixed(2)}
                </Text>
            </ScrollView>

            <View style={styles.buttonArea}>
                <Button
                    title="Comprar"
                    onPress={handleComprar}
                />
            </View>
        </SafeAreaView>
    );
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    productArea: {
        flex: 1,
        padding: 20        
    },
    buttonArea: {
        padding: 20
    },
    image: {
        width: "100%",
        height: 250,
        padding: 20,
        borderRadius: 10        
    },
    detailsArea:{
        width:"100%",
        justifyContent:'center',
        alignItems:"center",
        color:"#E67A31",
        borderStyle:'solid',
        borderWidth:1,
        borderColor:"#E67A31",
        borderRadius:10,
        padding:20,
        gap:16
    },
    title:{
        fontSize:28,
        fontWeight:'bold'
    },
    description:{
        fontSize:16
    },
    price:{
        backgroundColor:"#F5DAB8",
        width:"100%",
        fontSize:24,      
        textAlign:'center',
        padding:20,      
        borderRadius:10,
        color:"#FF0000"
    }
})