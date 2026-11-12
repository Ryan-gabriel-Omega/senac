
import { StyleSheet, FlatList, View, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { LembreteItem } from '../../lembreteitens/lembreteintem';
import { getAllLembretesByAPI, atualizarLembrete } from '../../services/lembrete';
import { Lembrete } from '../../types/lembretes';

export default function Concluidos() {
    const [lembretes, setLembretes] = useState<Lembrete[]>([]);

    useEffect(() => {
        async function getLembretesConcluidos() {
            try {
                const listaLembretes = await getAllLembretesByAPI();

                const concluidos = listaLembretes.filter(
                    item => String(item.statusLembrete) !== '0' &&
                            String(item.statusLembrete) !== 'false'
                );

                setLembretes(concluidos);
            } catch (error) {
                Alert.alert("Erro", "Não foi possível carregar os concluídos.");
            }
        }

        getLembretesConcluidos();
    }, []);

    async function restaurarLembrete(lembrete: Lembrete) {
        try {
            await atualizarLembrete(lembrete);

            setLembretes(listaAtual =>
                listaAtual.filter(
                    item => item.lembreteId !== lembrete.lembreteId
                )
            );
        } catch (error) {
            Alert.alert("Erro", "Não foi possível restaurar o lembrete.");
        }
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={lembretes}
                renderItem={({ item }) => (
                    <LembreteItem
                        lembrete={item}
                        onAlterarStatus={restaurarLembrete}
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
