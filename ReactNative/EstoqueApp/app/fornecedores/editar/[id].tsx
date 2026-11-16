import { useEffect, useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, ScrollView, Pressable } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { buscarFornecedor, atualizarFornecedor } from '../../../services/fornecedorService';

export default function EditarFornecedor() {
    const { id } = useLocalSearchParams();

    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        async function carregar() {
            const fornecedor = await buscarFornecedor(Number(id));

            if (fornecedor) {
                setNome(fornecedor.nome);
                setCnpj(fornecedor.cnpj ?? '');
                setTelefone(fornecedor.telefone ?? '');
                setEmail(fornecedor.email ?? '');
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
            await atualizarFornecedor({
                id: Number(id),
                nome,
                cnpj,
                telefone,
                email
            });

            Alert.alert('Sucesso', 'Fornecedor atualizado!');
            router.back();
        } catch {
            Alert.alert('Erro', 'Não foi possível atualizar.');
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Editar Fornecedor</Text>

            <Text style={styles.label}>Nome do fornecedor</Text>
            <TextInput style={styles.input} value={nome} onChangeText={setNome} />

            <Text style={styles.label}>CNPJ</Text>
            <TextInput style={styles.input} value={cnpj} onChangeText={setCnpj} />

            <Text style={styles.label}>Telefone</Text>
            <TextInput style={styles.input} keyboardType="phone-pad" value={telefone} onChangeText={setTelefone} />

            <Text style={styles.label}>E-mail</Text>
            <TextInput style={styles.input} keyboardType="email-address" value={email} onChangeText={setEmail} />

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
