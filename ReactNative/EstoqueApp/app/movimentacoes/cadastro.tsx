import { useEffect, useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';
import { listarProdutos } from '../../services/produtoService';
import { registrarMovimentacao } from '../../services/movimentacaoService';

export default function CadastroMovimentacao() {
    const [produtos, setProdutos] = useState<any[]>([]);
    const [produtoId, setProdutoId] = useState(0);
    const [tipo, setTipo] = useState<'entrada' | 'saida'>('entrada');
    const [quantidade, setQuantidade] = useState('');

    useEffect(() => {
        async function carregar() {
            const dados = await listarProdutos();
            setProdutos(dados);

            if (dados.length > 0) {
                setProdutoId(dados[0].id);
            }
        }

        carregar();
    }, []);

    async function salvar() {
        const valor = Number(quantidade);

        if (!produtoId || !Number.isInteger(valor) || valor <= 0) {
            Alert.alert('Atenção', 'Selecione um produto e informe uma quantidade válida.');
            return;
        }

        try {
            await registrarMovimentacao(produtoId, tipo, valor);

            Alert.alert('Sucesso', 'Movimentação registrada!');
            router.back();
        } catch (erro: any) {
            Alert.alert('Erro', erro.message || 'Não foi possível registrar.');
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Nova Movimentação</Text>

            <Text style={styles.label}>Selecione o produto</Text>
            <View style={styles.seletor}>
                <Picker selectedValue={produtoId} onValueChange={setProdutoId}>
                    {produtos.map(p => (
                        <Picker.Item key={p.id} label={p.nome} value={p.id} />
                    ))}
                </Picker>
            </View>

            <Text style={styles.label}>Tipo de movimentação</Text>
            <View style={styles.seletor}>
                <Picker selectedValue={tipo} onValueChange={setTipo}>
                    <Picker.Item label="Entrada de estoque" value="entrada" />
                    <Picker.Item label="Saída de estoque" value="saida" />
                </Picker>
            </View>

            <Text style={styles.label}>Quantidade</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite a quantidade"
                placeholderTextColor="#888"
                keyboardType="numeric"
                value={quantidade}
                onChangeText={setQuantidade}
            />

            <Pressable style={styles.botao} onPress={salvar}>
                <Text style={styles.botaoTexto}>REGISTRAR MOVIMENTAÇÃO</Text>
            </Pressable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212', padding: 20 },
    titulo: { color: '#E67A31', fontSize: 23, fontWeight: 'bold', marginBottom: 20 },
    label: { color: 'white', marginBottom: 7 },
    seletor: { backgroundColor: '#252525', marginBottom: 18, borderRadius: 7 },
    input: { backgroundColor: '#252525', color: 'white', padding: 13, borderRadius: 7, marginBottom: 18 },
    botao: { backgroundColor: '#E67A31', padding: 15, borderRadius: 7, alignItems: 'center', marginBottom: 30 },
    botaoTexto: { color: 'white', fontWeight: 'bold' }
});
