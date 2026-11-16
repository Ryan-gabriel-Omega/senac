import { useEffect, useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, ScrollView, Pressable } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { buscarProduto, atualizarProduto } from '../../../services/produtoService';

export default function EditarProduto() {
    const { id } = useLocalSearchParams();

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [quantidade, setQuantidade] = useState('0');
    const [minimo, setMinimo] = useState('0');
    const [compra, setCompra] = useState('0');
    const [venda, setVenda] = useState('0');

    useEffect(() => {
        async function carregar() {
            const produto = await buscarProduto(Number(id));

            if (produto) {
                setNome(produto.nome);
                setDescricao(produto.descricao ?? '');
                setQuantidade(String(produto.quantidade));
                setMinimo(String(produto.estoqueMinimo));
                setCompra(String(produto.precoCompra));
                setVenda(String(produto.precoVenda));
            }
        }

        carregar();
    }, [id]);

    async function salvar() {
        if (!nome.trim()) {
            Alert.alert('Atenção', 'Informe o nome.');
            return;
        }

        try {
            await atualizarProduto({
                id: Number(id),
                nome,
                descricao,
                quantidade: Number(quantidade),
                estoqueMinimo: Number(minimo),
                precoCompra: Number(compra),
                precoVenda: Number(venda)
            });

            Alert.alert('Sucesso', 'Produto atualizado!');
            router.back();
        } catch {
            Alert.alert('Erro', 'Não foi possível atualizar.');
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Editar Produto</Text>

            <Text style={styles.label}>Nome do produto</Text>
            <TextInput style={styles.input} value={nome} onChangeText={setNome} />

            <Text style={styles.label}>Descrição</Text>
            <TextInput style={styles.input} value={descricao} onChangeText={setDescricao} />

            <Text style={styles.label}>Quantidade</Text>
            <TextInput style={styles.input} keyboardType="numeric" value={quantidade} onChangeText={setQuantidade} />

            <Text style={styles.label}>Estoque mínimo</Text>
            <TextInput style={styles.input} keyboardType="numeric" value={minimo} onChangeText={setMinimo} />

            <Text style={styles.label}>Preço de compra (R$)</Text>
            <TextInput style={styles.input} keyboardType="decimal-pad" value={compra} onChangeText={setCompra} />

            <Text style={styles.label}>Preço de venda (R$)</Text>
            <TextInput style={styles.input} keyboardType="decimal-pad" value={venda} onChangeText={setVenda} />

            <Pressable style={styles.botao} onPress={salvar}>
                <Text style={styles.botaoTexto}>SALVAR ALTERAÇÕES</Text>
            </Pressable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212', padding: 20 },
    titulo: { color: '#E67A31', fontSize: 23, fontWeight: 'bold', marginBottom: 20 },
    label: { color: 'white', marginBottom: 7 },
    input: { backgroundColor: '#252525', color: 'white', padding: 13, borderRadius: 7, marginBottom: 18 },
    botao: { backgroundColor: '#E67A31', padding: 15, borderRadius: 7, alignItems: 'center', marginBottom: 30 },
    botaoTexto: { color: 'white', fontWeight: 'bold' }
});
