import { getDatabase } from '../database/database';
import { Movimentacao } from '../types/movimentacao';

export async function listarMovimentacoes() {
    const db = await getDatabase();

    return db.getAllAsync<Movimentacao>(
        'SELECT * FROM movimentacoes ORDER BY id DESC'
    );
}

export async function registrarMovimentacao(
    produtoId: number,
    tipo: 'entrada' | 'saida',
    quantidade: number
) {
    if (quantidade <= 0 || !Number.isInteger(quantidade)) {
        throw new Error('Quantidade inválida.');
    }

    const db = await getDatabase();

    await db.withTransactionAsync(async () => {
        const produto = await db.getFirstAsync<{ quantidade: number }>(
            'SELECT quantidade FROM produtos WHERE id = ?',
            [produtoId]
        );

        if (!produto) throw new Error('Produto não encontrado.');

        const novaQuantidade = tipo === 'entrada'
            ? produto.quantidade + quantidade
            : produto.quantidade - quantidade;

        if (novaQuantidade < 0) {
            throw new Error('Estoque insuficiente.');
        }

        await db.runAsync(
            'UPDATE produtos SET quantidade = ? WHERE id = ?',
            [novaQuantidade, produtoId]
        );

        await db.runAsync(
            'INSERT INTO movimentacoes (produtoId, tipo, quantidade, data) VALUES (?, ?, ?, ?)',
            [produtoId, tipo, quantidade, new Date().toISOString()]
        );
    });
}
