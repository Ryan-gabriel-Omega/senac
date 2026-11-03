import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Switch,
    StyleSheet
} from 'react-native';
import { Stack } from 'expo-router';
import { Button } from '../../components/button/Button'
import { Lembrete } from '../../types/lembretes';
import { criarLembrete } from '../../services/lembrete';

export default function Add() {
 
    const [titulo, setTitulo] = useState<string>('');
    const [corpo, setCorpo] = useState<string>('');
    const [status, setStatus] = useState<boolean>(false);
   


async function handleLembreteAdd() {
    console.log(titulo + " " + corpo + " " + status.toString());

    try {
        const novoLembrete: Omit<Lembrete, 'lembreteId'> = {
            "tituloLembrete": titulo,
            "corpoLembrete": corpo,
            "statusLembrete": status,
        };

        await criarLembrete(novoLembrete);

        alert("Lembrete adicionado com sucesso!");
    } catch (erro) {
        console.log("Erro ao adicionar lembrete:", erro);
        alert("Não foi possível adicionar o lembrete.");
    }
}



    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: "Adicionar Lembrete" }} />
            <View style={styles.lembreteArea}>
 
                <View style={styles.detailsArea}>
 
                    <Text style={styles.title}>Título</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setTitulo}
                        textAlign='center'
                        value={titulo}
                    />
                    <Text style={styles.description}>Descrição</Text>
                    <TextInput
                        editable={true}
                        multiline={true}
                        numberOfLines={6}
                        maxLength={60}
                        // onChangeText={text => onChangeText(text)}
                        onChangeText={setCorpo}
                        style={styles.input}
                        value={corpo}
                    />
                    <View style={styles.switchArea}>
                        <Text>Não Concluída</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                            // ios_backgroundColor="#3e3e3e"
                            onValueChange={setStatus}
                            value={status}
                        />
                        <Text>Concluída</Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonArea}>
                <Button title="Adicionar" onPress={handleLembreteAdd} />
            </View>
        </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d2e0f9"
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
    detailsArea: {
        width: "100%",
        justifyContent: 'center',
        alignItems: "center",
        color: "#E67A31",
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: "#4294E7",
        borderRadius: 10,
        padding: 20,
        gap: 16,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#4294E7"
    },
    description: {
        fontSize: 20
    },
 
    input: {
        width: "100%",
        margin: 12,
        borderWidth: 1,
        padding: 6
    }
})    

    