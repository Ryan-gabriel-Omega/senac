import { useCallback, useState } from 'react';
import { View, Text, FlatList, Button, Alert, StyleSheet } from 'react-native';
import { useFocusEffect, router } from 'expo-router';
import { listarFornecedores, excluirFornecedor } from '../../services/fornecedorService';

export default function Fornecedores() {
    const [fornecedores, setFornecedores] = useState<any[]>([]);

    const carregar = async () => {
        setFornecedores(await listarFornecedores());
    };

    useFocusEffect(useCallback(() => {
        carregar();
    }, []));

    function excluir(id: number) {
        Alert.alert('Excluir', 'Deseja excluir este fornecedor?', [
            { text: 'Cancelar' },
            {
                text: 'Excluir',
                onPress: async () => {
                    await excluirFornecedor(id);
                    carregar();
                }
            }
        ]);
    }

    return (
        <View style={styles.container}>
            <Button title="Adicionar fornecedor" onPress={() => router.push('/fornecedores/cadastro')} />

            <FlatList
                data={fornecedores}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.texto}>{item.nome}</Text>
                        <Text style={styles.texto}>{item.telefone}</Text>
                        <Text style={styles.texto}>{item.email}</Text>

                        <Button title="Editar" onPress={() => router.push(`/fornecedores/editar/${item.id}`)} />
                        <Button title="Excluir" color="red" onPress={() => excluir(item.id)} />
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
