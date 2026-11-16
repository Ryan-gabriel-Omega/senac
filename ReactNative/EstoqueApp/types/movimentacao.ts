export type Movimentacao = {
    id: number;
    produtoId: number;
    tipo: 'entrada' | 'saida';
    quantidade: number;
    data: string;
};
