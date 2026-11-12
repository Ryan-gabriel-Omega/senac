
import { Pressable, Text, View, Switch } from "react-native";
import { Link } from "expo-router";
import { Lembrete } from "../types/lembretes";
import { styles } from "../lembreteitens/lembreteitemstyles";

type props = {
    lembrete: Lembrete;
    onAlterarStatus?: (lembrete: Lembrete) => void;
}

export function LembreteItem({ lembrete, onAlterarStatus }: props) {

    function calcularDiasRestantes(dataLimite: string): number {
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);

        const [ano, mes, dia] = dataLimite.split('-').map(Number);
        const data = new Date(ano, mes - 1, dia);
        data.setHours(0, 0, 0, 0);

        const diferenca = data.getTime() - hoje.getTime();

        return Math.ceil(diferenca / (1000 * 60 * 60 * 24));
    }

    const diasRestantes = lembrete.dataLimite
        ? calcularDiasRestantes(lembrete.dataLimite)
        : undefined;

    let avisoPrazo = '';

    if (diasRestantes !== undefined) {
        if (diasRestantes < 0) {
            avisoPrazo = 'Prazo vencido';
        } else if (diasRestantes === 0) {
            avisoPrazo = 'Vence hoje';
        } else if (diasRestantes <= 3) {
            avisoPrazo = 'Prazo curto';
        }
    }

    function alterarStatus(status: boolean) {
        const lembreteAtualizado: Lembrete = {
            ...lembrete,
            statusLembrete: status,
            dataConclusao: status ? new Date().toISOString() : undefined
        };

        onAlterarStatus?.(lembreteAtualizado);
    }

    return (
        <Link href={`/lembrete/${lembrete.lembreteId}`} asChild>
            <Pressable style={styles.pressableContainer}>
                <View style={styles.textContainer}>
                    <Text style={[styles.title, styles.destaque]}>
                        {lembrete.tituloLembrete}
                    </Text>

                    {!lembrete.statusLembrete && avisoPrazo !== '' && (
                        <Text style={styles.avisoPrazo}>
                            {avisoPrazo}
                        </Text>
                    )}
                </View>

                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    value={lembrete.statusLembrete.toString() === '0' ? false : true}
                    onValueChange={alterarStatus}
                />
            </Pressable>
        </Link>
    );
}
