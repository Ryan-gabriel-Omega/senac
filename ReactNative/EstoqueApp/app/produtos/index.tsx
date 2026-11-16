import { useCallback, useState } from 'react';
import { View, Text, FlatList, Button, Alert, StyleSheet } from 'react-native';
import { useFocusEffect, router } from 'expo-router';
import { listarProdutos, excluirProduto } from '../../services/produtoService';

export default function Produtos() {
    const [produtos, setProdutos] = useState<any[]>([]);

    const carregar = async () => {
        setProdutos(await listarProdutos());
    };

    useFocusEffect(useCallback(() => {
        carregar();
    }, []));

    function excluir(id: number) {
        Alert.alert('Excluir', 'Deseja excluir este produto?', [
            { text: 'Cancelar' },
            {
                text: 'Excluir',
                onPress: async () => {
                    try {
                        await excluirProduto(id);
                        carregar();
                    } catch {
                        Alert.alert('Erro', 'Não foi possível excluir o produto.');
                    }
                }
            }
        ]);
    }

    return (
        <View style={styles.container}>
            <Button title="Adicionar produto" onPress={() => router.push('/produtos/cadastro')} />

            <FlatList
                data={produtos}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.texto}>{item.nome}</Text>
                        <Text style={styles.texto}>Quantidade: {item.quantidade}</Text>
                        <Text style={styles.texto}>Preço: R$ {item.precoVenda}</Text>

                        <Button title="Editar" onPress={() => router.push(`/produtos/editar/${item.id}`)} />
                        <Button title="Excluir" color="red" onPress={() => excluir(item.id)} />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 15, backgroundColor: '#121212' },
    item: { backgroundColor: '#1E1E1E', padding: 15, marginVertical: 8, borderRadius: 8 },
    texto: { color: 'white', marginBottom: 5 }
});
