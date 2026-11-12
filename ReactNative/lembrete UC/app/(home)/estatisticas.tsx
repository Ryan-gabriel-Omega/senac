
import { StyleSheet, View, Text, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { getAllLembretesByAPI } from '../../services/lembrete';
import { Lembrete } from '../../types/lembretes';

export default function Estatisticas() {
    const [lembretes, setLembretes] = useState<Lembrete[]>([]);

    useEffect(() => {
        async function carregarLembretes() {
            try {
                const lista = await getAllLembretesByAPI();
                setLembretes(lista);
            } catch (error) {
                Alert.alert('Erro', 'Não foi possível carregar as estatísticas.');
            }
        }

        carregarLembretes();
    }, []);

    function calcularDiasRestantes(dataLimite: string): number {
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);

        const [ano, mes, dia] = dataLimite.split('-').map(Number);
        const data = new Date(ano, mes - 1, dia);
        data.setHours(0, 0, 0, 0);

        return Math.ceil(
            (data.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24)
        );
    }

    const total = lembretes.length;

    const concluidos = lembretes.filter(
        item => item.statusLembrete === true ||
                String(item.statusLembrete) === '1'
    ).length;

    const prazoCurto = lembretes.filter(item => {
        const concluido = item.statusLembrete === true ||
                          String(item.statusLembrete) === '1';

        if (concluido || !item.dataLimite) {
            return false;
        }

        const dias = calcularDiasRestantes(item.dataLimite);

        return dias >= 1 && dias <= 3;
    }).length;

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Estatísticas</Text>

            <View style={styles.card}>
                <Text style={styles.descricao}>Total de lembretes</Text>
                <Text style={styles.numero}>{total}</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.descricao}>Concluídos</Text>
                <Text style={styles.numero}>{concluidos}</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.descricao}>Prazo curto</Text>
                <Text style={styles.numero}>{prazoCurto}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 40,
        backgroundColor: '#191923',
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#EAEAF0',
        marginBottom: 25,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#252535',
        padding: 25,
        borderRadius: 12,
        marginBottom: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#514477',
    },
    descricao: {
        fontSize: 18,
        color: '#B0B0C0',
    },
    numero: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#A78BFA',
        marginTop: 10,
    },
});
