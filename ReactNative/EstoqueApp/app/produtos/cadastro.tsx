import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Alert,
    StyleSheet,
    ScrollView,
    Pressable
} from 'react-native';
import { router } from 'expo-router';
import { cadastrarProduto } from '../../services/produtoService';

export default function CadastroProduto() {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [quantidade, setQuantidade] = useState('0');
    const [minimo, setMinimo] = useState('0');
    const [compra, setCompra] = useState('0');
    const [venda, setVenda] = useState('0');

    async function salvar() {
        if (!nome.trim()) {
            Alert.alert('Atenção', 'Informe o nome do produto.');
            return;
        }

        try {
            await cadastrarProduto({
                nome,
                descricao,
                quantidade: Number(quantidade),
                estoqueMinimo: Number(minimo),
                precoCompra: Number(compra),
                precoVenda: Number(venda)
            });

            Alert.alert('Sucesso', 'Produto cadastrado!');
            router.back();
        } catch {
            Alert.alert('Erro', 'Não foi possível cadastrar.');
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Cadastrar Produto</Text>

            <Text style={styles.label}>Nome do produto</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: Camiseta"
                placeholderTextColor="#888"
                value={nome}
                onChangeText={setNome}
            />

            <Text style={styles.label}>Descrição</Text>
            <TextInput
                style={styles.input}
                placeholder="Descrição do produto"
                placeholderTextColor="#888"
                value={descricao}
                onChangeText={setDescricao}
            />

            <Text style={styles.label}>Quantidade inicial</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: 10"
                placeholderTextColor="#888"
                keyboardType="numeric"
                value={quantidade}
                onChangeText={setQuantidade}
            />

            <Text style={styles.label}>Estoque mínimo</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: 5"
                placeholderTextColor="#888"
                keyboardType="numeric"
                value={minimo}
                onChangeText={setMinimo}
            />

            <Text style={styles.label}>Preço de compra (R$)</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: 25.00"
                placeholderTextColor="#888"
                keyboardType="decimal-pad"
                value={compra}
                onChangeText={setCompra}
            />

            <Text style={styles.label}>Preço de venda (R$)</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: 40.00"
                placeholderTextColor="#888"
                keyboardType="decimal-pad"
                value={venda}
                onChangeText={setVenda}
            />

            <Pressable style={styles.botao} onPress={salvar}>
                <Text style={styles.botaoTexto}>SALVAR PRODUTO</Text>
            </Pressable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 20
    },
    titulo: {
        color: '#E67A31',
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 20
    },
    label: {
        color: '#FFFFFF',
        fontSize: 15,
        marginBottom: 7
    },
    input: {
        backgroundColor: '#252525',
        color: '#FFFFFF',
        padding: 13,
        borderRadius: 7,
        marginBottom: 18
    },
    botao: {
        backgroundColor: '#E67A31',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginBottom: 30
    },
    botaoTexto: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
});
