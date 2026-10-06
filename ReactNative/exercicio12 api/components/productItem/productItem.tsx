import { Pressable, Image, Text, View } from "react-native";
import { styles } from "./productItemStyle";
import { Product } from "../../types/Produtos";
import { Link } from "expo-router";
 
type props = {
    product: Product;
}
 
export function ProductItem({ product }: props) {
    return (
     <Link href={`/product/${product.id}`} asChild>
        <Pressable style={styles.pressableContainer} >
            <Image
                style={styles.image} source={{ uri: product.image }} resizeMode="cover">
 
            </Image>
            <View style={styles.textContainer}>
                <Text style={[styles.title, styles.destaque]}>
                    {product.title}
                </Text>
 
                <Text style={[styles.description]}>
                    {product.description}
                </Text>
 
                <Text style={[styles.price, styles.destaque]}>
                    R$ {product.price.toFixed(2)}
                </Text>
            </View>
        </Pressable>
        </Link>
    )
 
 
}