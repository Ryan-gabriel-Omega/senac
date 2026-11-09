import { Lembrete } from "../types/lembretes";
 
type Lembretes = {
    lembretes: Lembrete[]
};
export const lembreteDados: Lembretes = {
    lembretes: [
        {
            lembreteId: 1,
            tituloLembrete: 'Pagar',
            corpoLembrete: 'Pagar conta de luz ref AGO25',
            statusLembrete: false
        },
        {
            lembreteId: 2,
            tituloLembrete: 'Comprar',
            corpoLembrete: 'Comprar comida para o mês',
            statusLembrete: true
        },
   
    ]
}