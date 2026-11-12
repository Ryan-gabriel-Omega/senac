
import { StyleSheet, Text, View, TextInput, Switch, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from '../../../components/button/Button'
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { Lembrete } from '../../../types/lembretes';
import {
    getLembreteByIdByAPI,
    atualizarLembrete,
    removerLembrete
} from '../../../services/lembrete'

export default function LembreteEditScreen() {

    const { id } = useLocalSearchParams();

    const idLembrete = parseInt(id as string);

    const [lembrete, setLembrete] = useState<Lembrete>();
    const [titulo, setTitulo] = useState<string>('');
    const [corpo, setCorpo] = useState<string>('');
    const [status, setStatus] = useState<boolean>(false);

    useEffect(() => {
        async function buscarLembrete(idLembrete: number) {
            if (idLembrete) {
                const dadosLembrete = await getLembreteByIdByAPI(idLembrete);
                setLembrete(dadosLembrete);
            }
        }

        buscarLembrete(idLembrete);
    }, [idLembrete]);

    useEffect(() => {
        if (lembrete) {
            setTitulo(lembrete.tituloLembrete || '');
            setCorpo(lembrete.corpoLembrete || '');
            setStatus(lembrete.statusLembrete || false);
        }
    }, [lembrete]);

    async function salvarLembrete() {
        if (!titulo.trim() || !corpo.trim()) {
            Alert.alert('Atenção', 'Preencha o título e a descrição.');
            return;
        }

        try {
            const lembreteAtualizado: Lembrete = {
                ...lembrete!,
                lembreteId: idLembrete,
                tituloLembrete: titulo,
                corpoLembrete: corpo,
                statusLembrete: status,
                dataConclusao: status
                    ? (lembrete?.statusLembrete
                        ? lembrete.dataConclusao
                        : new Date().toISOString())
                    : undefined
            };

            await atualizarLembrete(lembreteAtualizado);

            Alert.alert('Sucesso', 'Lembrete atualizado!');
            router.back();

        } catch (error) {
            Alert.alert('Erro', 'Não foi possível atualizar o lembrete.');
            console.log(error);
        }
    }

    function excluirLembrete() {
        Alert.alert(
            'Excluir lembrete',
            'Tem certeza que deseja excluir este lembrete?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Excluir',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            await removerLembrete(idLembrete);

                            Alert.alert('Sucesso', 'Lembrete excluído!');
                            router.back();

                        } catch (error) {
                            Alert.alert('Erro', 'Não foi possível excluir o lembrete.');
                            console.log(error);
                        }
                    }
                }
            ]
        );
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
                <Button title="Salvar" onPress={salvarLembrete} />
                <Button title="Excluir" onPress={excluirLembrete} />
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
