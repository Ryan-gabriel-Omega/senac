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