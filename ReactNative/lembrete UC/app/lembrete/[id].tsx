
import { StyleSheet, Text, SafeAreaView, View, TextInput, Switch, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from '../../components/button/Button'
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { Lembrete } from '../../types/lembretes';
import { removerLembrete, getLembreteByIdByAPI, atualizarLembrete } from '../../services/lembrete'
import DateTimePicker from '@react-native-community/datetimepicker';

export default function LembreteEditScreen() {

    const { id } = useLocalSearchParams();

    const idLembrete = parseInt(id as string);

    const [lembrete, setLembrete] = useState<Lembrete>();
    const [titulo, setTitulo] = useState<string>('');
    const [corpo, setCorpo] = useState<string>('');
    const [status, setStatus] = useState<boolean>(false);
    const [dataLimite, setDataLimite] = useState<Date | undefined>(undefined);
    const [mostrarCalendario, setMostrarCalendario] = useState<boolean>(false);

    const dataLimiteFormatada = dataLimite
        ? `${dataLimite.getFullYear()}-${String(dataLimite.getMonth() + 1).padStart(2, '0')}-${String(dataLimite.getDate()).padStart(2, '0')}`
        : undefined;

    useEffect(() => {
        async function getLembreteById(idLembrete: number) {
            if (idLembrete) {
                const dadosLembrete = await getLembreteByIdByAPI(idLembrete);
                setLembrete(dadosLembrete);
            }
        }

        getLembreteById(idLembrete);
    }, [idLembrete]);

    useEffect(() => {
        if (lembrete) {
            setTitulo(lembrete.tituloLembrete || '');
            setCorpo(lembrete.corpoLembrete || '');

            setStatus(
                lembrete.statusLembrete === true ||
                String(lembrete.statusLembrete) === '1'
            );

            if (lembrete.dataLimite) {
                const [ano, mes, dia] = lembrete.dataLimite.split('-').map(Number);
                setDataLimite(new Date(ano, mes - 1, dia));
            } else {
                setDataLimite(undefined);
            }
        }
    }, [lembrete]);

    async function handleLembreteSave() {
        try {
            if (lembrete) {
                const statusAnterior =
                    lembrete.statusLembrete === true ||
                    String(lembrete.statusLembrete) === '1';

                const lembreteAtualizado: Lembrete = {
                    lembreteId: idLembrete,
                    tituloLembrete: titulo,
                    corpoLembrete: corpo,
                    statusLembrete: status,
                    dataLimite: dataLimiteFormatada,
                    dataConclusao: status
                        ? (statusAnterior
                            ? lembrete.dataConclusao
                            : new Date().toISOString())
                        : undefined
                };

                await atualizarLembrete(lembreteAtualizado);

                Alert.alert("Sucesso", "Lembrete atualizado!");
                router.back();
            }
        } catch (error) {
            Alert.alert("Erro", "Não foi possível atualizar o lembrete.");
        }
    }

    async function handleLembrereRemove() {
        try {
            await removerLembrete(idLembrete);

            Alert.alert("Sucesso", "Lembrete removido!");
            router.back();
        } catch (error) {
            Alert.alert("Erro", "Não foi possível remover o lembrete.");
        }
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: lembrete?.tituloLembrete }} />
            <View style={styles.lembreteArea}>

                <View style={styles.detailsArea}>

                    <Text style={styles.title}>Título</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setTitulo}
                        value={titulo}
                        textAlign='center'
                    />

                    <Text style={styles.description}>Descrição</Text>
                    <TextInput
                        editable={true}
                        multiline={true}
                        numberOfLines={6}
                        maxLength={60}
                        onChangeText={setCorpo}
                        value={corpo}
                        style={styles.input}
                    />

                    <Button
                        title={dataLimite
                            ? dataLimite.toLocaleDateString('pt-BR')
                            : 'Selecionar data limite'
                        }
                        onPress={() => setMostrarCalendario(true)}
                    />

                    {mostrarCalendario && (
                        <DateTimePicker
                            value={dataLimite ?? new Date()}
                            mode="date"
                            display="default"
                            onChange={(event, selectedDate) => {
                                setMostrarCalendario(false);

                                if (event.type === 'set' && selectedDate) {
                                    setDataLimite(selectedDate);
                                }
                            }}
                        />
                    )}

                    <View style={styles.switchArea}>
                        <Text style={styles.switchText}>Não Concluída</Text>
                        <Switch
                            trackColor={{ false: '#555566', true: '#8B6AD9' }}
                            thumbColor={status ? '#D6C6FF' : '#CCCCCC'}
                            value={status}
                            onValueChange={setStatus}
                        />
                        <Text style={styles.switchText}>Concluída</Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonArea}>
                <Button title="Salvar" onPress={handleLembreteSave} />
                <Button title="Excluir" onPress={handleLembrereRemove} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#191923"
    },
    lembreteArea: {
        flex: 1,
        padding: 20,
        marginTop: 64
    },
    buttonArea: {
        padding: 20,
        flexDirection: "row",
        gap: 32,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 64
    },
    switchArea: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 32
    },
    switchText: {
        color: "#EAEAF0",
        fontSize: 14
    },
    detailsArea: {
        width: "100%",
        justifyContent: 'center',
        alignItems: "center",
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: "#514477",
        borderRadius: 10,
        padding: 20,
        gap: 16,
        backgroundColor: "#252535"
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#A78BFA"
    },
    description: {
        fontSize: 20,
        color: "#EAEAF0"
    },

    input: {
        width: "100%",
        margin: 12,
        borderWidth: 1,
        borderColor: "#514477",
        borderRadius: 8,
        padding: 10,
        backgroundColor: "#191923",
        color: "#EAEAF0"
    }
})
