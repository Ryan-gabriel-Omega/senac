import { useCallback, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useFocusEffect, router } from 'expo-router';
import { listarProdutos } from '../services/produtoService';
import { listarFornecedores } from '../services/fornecedorService';

export default function Inicio() {
    const [produtos, setProdutos] = useState<any[]>([]);
    const [fornecedores, setFornecedores] = useState<any[]>([]);

    const carregar = async () => {
        setProdutos(await listarProdutos());
        setFornecedores(await listarFornecedores());
    };

    useFocusEffect(useCallback(() => {
        carregar();
    }, []));

    const baixo = produtos.filter(
        p => p.quantidade <= p.estoqueMinimo
    ).length;

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Controle de Estoque</Text>

            <Text style={styles.texto}>Produtos: {produtos.length}</Text>
            <Text style={styles.texto}>Estoque baixo: {baixo}</Text>
            <Text style={styles.texto}>Fornecedores: {fornecedores.length}</Text>

            <View style={styles.botao}>
                <Button title="Produtos" onPress={() => router.push('/produtos')} />
            </View>

            <View style={styles.botao}>
                <Button title="Fornecedores" onPress={() => router.push('/fornecedores')} />
            </View>

            <View style={styles.botao}>
                <Button title="Movimentações" onPress={() => router.push('/movimentacoes')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#121212' },
    titulo: { color: '#E67A31', fontSize: 25, fontWeight: 'bold', marginBottom: 25 },
    texto: { color: 'white', fontSize: 18, marginBottom: 15 },
    botao: { marginTop: 10 }
});
