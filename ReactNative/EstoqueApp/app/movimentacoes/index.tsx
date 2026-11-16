import { useCallback, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useFocusEffect, router } from 'expo-router';
import { listarMovimentacoes } from '../../services/movimentacaoService';
import { listarProdutos } from '../../services/produtoService';

export default function Movimentacoes() {
    const [movimentacoes, setMovimentacoes] = useState<any[]>([]);
    const [produtos, setProdutos] = useState<any[]>([]);

    const carregar = async () => {
        setMovimentacoes(await listarMovimentacoes());
        setProdutos(await listarProdutos());
    };

    useFocusEffect(useCallback(() => {
        carregar();
    }, []));

    return (
        <View style={styles.container}>
            <Button title="Nova movimentação" onPress={() => router.push('/movimentacoes/cadastro')} />

            <FlatList
                data={movimentacoes}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.texto}>
                            {produtos.find(p => p.id === item.produtoId)?.nome ?? 'Produto'}
                        </Text>
                        <Text style={styles.texto}>
                            {item.tipo === 'entrada' ? 'Entrada' : 'Saída'}: {item.quantidade}
                        </Text>
                        <Text style={styles.texto}>
                            {new Date(item.data).toLocaleDateString('pt-BR')}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 15, backgroundColor: '#121212' },
    item: { backgroundColor: '#1E1E1E', padding: 15, marginVertical: 8 },
    texto: { color: 'white', marginBottom: 5 }
});
