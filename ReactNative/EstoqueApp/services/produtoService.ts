import { getDatabase } from '../database/database';
import { Produto } from '../types/produto';

export async function listarProdutos() {
    const db = await getDatabase();
    return db.getAllAsync<Produto>('SELECT * FROM produtos');
}

export async function buscarProduto(id: number) {
    const db = await getDatabase();

    return db.getFirstAsync<Produto>(
        'SELECT * FROM produtos WHERE id = ?',
        [id]
    );
}

export async function cadastrarProduto(p: Omit<Produto, 'id'>) {
    const db = await getDatabase();

    return db.runAsync(
        `INSERT INTO produtos
        (nome, descricao, quantidade, estoqueMinimo, precoCompra, precoVenda, fornecedorId)
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
            p.nome,
            p.descricao ?? '',
            p.quantidade,
            p.estoqueMinimo,
            p.precoCompra,
            p.precoVenda,
            p.fornecedorId ?? null
        ]
    );
}

export async function atualizarProduto(p: Produto) {
    const db = await getDatabase();

    return db.runAsync(
        `UPDATE produtos SET
        nome = ?, descricao = ?, quantidade = ?,
        estoqueMinimo = ?, precoCompra = ?, precoVenda = ?,
        fornecedorId = ?
        WHERE id = ?`,
        [
            p.nome,
            p.descricao ?? '',
            p.quantidade,
            p.estoqueMinimo,
            p.precoCompra,
            p.precoVenda,
            p.fornecedorId ?? null,
            p.id
        ]
    );
}

export async function excluirProduto(id: number) {
    const db = await getDatabase();
    return db.runAsync('DELETE FROM produtos WHERE id = ?', [id]);
}
