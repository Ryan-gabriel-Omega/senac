import { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, ScrollView, Pressable } from 'react-native';
import { router } from 'expo-router';
import { cadastrarFornecedor } from '../../services/fornecedorService';

export default function CadastroFornecedor() {
    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');

    async function salvar() {
        if (!nome.trim()) {
            Alert.alert('Atenção', 'Informe o nome do fornecedor.');
            return;
        }

        try {
            await cadastrarFornecedor({ nome, cnpj, telefone, email });

            Alert.alert('Sucesso', 'Fornecedor cadastrado!');
            router.back();
        } catch {
            Alert.alert('Erro', 'Não foi possível cadastrar.');
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Cadastrar Fornecedor</Text>

            <Text style={styles.label}>Nome do fornecedor</Text>
            <TextInput style={styles.input} placeholder="Ex: Distribuidora ABC" placeholderTextColor="#888" value={nome} onChangeText={setNome} />

            <Text style={styles.label}>CNPJ</Text>
            <TextInput style={styles.input} placeholder="Digite o CNPJ" placeholderTextColor="#888" value={cnpj} onChangeText={setCnpj} />

            <Text style={styles.label}>Telefone</Text>
            <TextInput style={styles.input} placeholder="Digite o telefone" placeholderTextColor="#888" keyboardType="phone-pad" value={telefone} onChangeText={setTelefone} />

            <Text style={styles.label}>E-mail</Text>
            <TextInput style={styles.input} placeholder="Digite o e-mail" placeholderTextColor="#888" keyboardType="email-address" value={email} onChangeText={setEmail} />

            <Pressable style={styles.botao} onPress={salvar}>
                <Text style={styles.botaoTexto}>SALVAR FORNECEDOR</Text>
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
