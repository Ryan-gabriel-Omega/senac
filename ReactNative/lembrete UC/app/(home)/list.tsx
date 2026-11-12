
import { StyleSheet, FlatList, View, Alert } from 'react-native';
import { LembreteItem } from '../../lembreteitens/lembreteintem';
import { getAllLembretesByAPI, atualizarLembrete } from '../../services/lembrete';
import { useCallback, useState } from 'react';
import { useFocusEffect } from 'expo-router';
import { Lembrete } from '../../types/lembretes';

export default function List() {
    const [lembretes, setLembretes] = useState<Lembrete[]>([]);

    useFocusEffect(
        useCallback(() => {
            async function getLembretesAll() {
                try {
                    const listaLembretes = await getAllLembretesByAPI();

                    const pendentes = listaLembretes.filter(
                        item =>
                            item.statusLembrete === false ||
                            String(item.statusLembrete) === '0'
                    );

                    setLembretes(pendentes);
                } catch (error) {
                    Alert.alert("Erro", "Não foi possível carregar os lembretes.");
                }
            }

            getLembretesAll();
        }, [])
    );

    async function alterarStatus(lembrete: Lembrete) {
        try {
            await atualizarLembrete(lembrete);

            setLembretes(listaAtual =>
                listaAtual.filter(
                    item => item.lembreteId !== lembrete.lembreteId
                )
            );
        } catch (error) {
            Alert.alert("Erro", "Não foi possível atualizar o lembrete.");
        }
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={lembretes}
                renderItem={({ item }) => (
                    <LembreteItem
                        lembrete={item}
                        onAlterarStatus={alterarStatus}
                    />
                )}
                keyExtractor={(item) => item.lembreteId.toString()}
                style={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#191923',
    },
    list: {
        width: '100%',
        padding: 16,
        fontSize: 14,
    },
});
