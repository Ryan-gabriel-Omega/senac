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
    const response = await fetch(`${URL}/${pId}`);
    const json = await response.json();
    console.log(json);
    return json;
}

export async function criarLembrete(lembrete:Omit<Lembrete, 'lembreteId'>) {
{
    "TituloLembrete"; lembrete.tituloLembrete,
    "CorpoLembrete";lembrete.corpoLembrete,
    "StatusLembrete"; lembrete.statusLembrete
}
const response = await  fetch(URL, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    }
});
if (!response.ok) {
    throw new Error("Error ao criar o lembrete");
}    
console.log(response.json());
return response.json();
}
export async function atualizarLembrete(lembrete:Lembrete) {
    const lembreteUnico =
    {
        "LembreteId":lembrete.lembreteId,
        "TituloLembrete":lembrete.tituloLembrete,
        "CorpoLembrete":lembrete.corpoLembrete,
        "StatusLembrete":lembrete.statusLembrete
    }
    const response = await fetch(`${URL}/${lembrete.lembreteId}`, {
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
export async function removerLembrete(idLembrete:number) {    
    const response = await fetch(`${URL}/${idLembrete}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },        
    });
    if (!response.ok) {
        throw new Error("Erro ao remover o lembrete");
    }
    console.log(response.json);
    return response.json();    
}