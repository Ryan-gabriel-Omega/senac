
import { lembreteDados } from "../data/lembreteDados";
import { Lembrete } from "../types/lembretes";
 
const URL = "http://10.59.47.25/Ryan/API/";
 
export function getAllLembretes() {
    return lembreteDados.lembretes;
}
 
 
export function getLembreteById(pId: number) {
    return lembreteDados.lembretes.find(item => item.lembreteId === pId);
}
 
//API
 
export async function getAllLembretesByAPI(): Promise<Lembrete[]> {
    const response = await fetch(URL);
    const json = await response.json();
    console.log(json);
    return json;
}
 
export async function getLembreteByIdByAPI(pId: number): Promise<Lembrete> {
    const response = await fetch(`${URL}${pId}`);
    const json = await response.json();
    console.log(json);
    return json;
}


export async function criarLembrete(lembrete: Omit<Lembrete, 'lembreteId'>) {

    const lembreteNovo = {
        "TituloLembrete": lembrete.tituloLembrete,
        "CorpoLembrete": lembrete.corpoLembrete,
        "StatusLembrete": lembrete.statusLembrete,
        "DataLimite": lembrete.dataLimite,
        "DataConclusao": lembrete.dataConclusao
    };

    const response = await fetch(URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(lembreteNovo)
    });

    if (!response.ok) {
        throw new Error("Erro ao criar o lembrete");
    }

    return response.json();
}

export async function atualizarLembrete(lembrete:Lembrete) {
    const lembreteUnico =
    {
        "LembreteId":lembrete.lembreteId,
        "TituloLembrete":lembrete.tituloLembrete,
        "CorpoLembrete":lembrete.corpoLembrete,
        "StatusLembrete":lembrete.statusLembrete,
        "DataLimite": lembrete.dataLimite,
        "DataConclusao": lembrete.dataConclusao
    }
    const response = await fetch(`${URL}${lembrete.lembreteId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(lembreteUnico),
    });
    if (!response.ok) {
        throw new Error("Erro ao salvar o lembrete");
    }
    console.log(response.json);
    return response.json();    
}
export async function removerLembrete(idLembrete: number) {
    const response = await fetch(`${URL}${idLembrete}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const dados = await response.text();

    console.log("Status DELETE:", response.status);
    console.log("Resposta DELETE:", dados);

    if (!response.ok) {
        throw new Error(dados || "Erro ao remover o lembrete");
    }

    return dados;
}

export async function limparLembretesExpirados() {
    const lembretes = await getAllLembretesByAPI();

    const agora = Date.now();
    const doisDias = 2 * 24 * 60 * 60 * 1000;

    for (const lembrete of lembretes) {
        const concluido =
            lembrete.statusLembrete === true ||
            String(lembrete.statusLembrete) === '1';

        if (concluido && lembrete.dataConclusao) {
            const dataConclusao = new Date(
                lembrete.dataConclusao
            ).getTime();

            if (
                !Number.isNaN(dataConclusao) &&
                agora - dataConclusao >= doisDias
            ) {
                await removerLembrete(lembrete.lembreteId);
            }
        }
    }
}
