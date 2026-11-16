export type Produto = {
    id: number;
    nome: string;
    descricao?: string;
    quantidade: number;
    estoqueMinimo: number;
    precoCompra: number;
    precoVenda: number;
    fornecedorId?: number | null;
};
