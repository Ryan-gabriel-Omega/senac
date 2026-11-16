import { getDatabase } from '../database/database';
import { Fornecedor } from '../types/fornecedor';

export async function listarFornecedores() {
    const db = await getDatabase();
    return db.getAllAsync<Fornecedor>('SELECT * FROM fornecedores');
}

export async function buscarFornecedor(id: number) {
    const db = await getDatabase();
    return db.getFirstAsync<Fornecedor>(
        'SELECT * FROM fornecedores WHERE id = ?',
        [id]
    );
}

export async function cadastrarFornecedor(f: Omit<Fornecedor, 'id'>) {
    const db = await getDatabase();

    return db.runAsync(
        'INSERT INTO fornecedores (nome, cnpj, telefone, email) VALUES (?, ?, ?, ?)',
        [f.nome, f.cnpj ?? '', f.telefone ?? '', f.email ?? '']
    );
}

export async function atualizarFornecedor(f: Fornecedor) {
    const db = await getDatabase();

    return db.runAsync(
        'UPDATE fornecedores SET nome = ?, cnpj = ?, telefone = ?, email = ? WHERE id = ?',
        [f.nome, f.cnpj ?? '', f.telefone ?? '', f.email ?? '', f.id]
    );
}

export async function excluirFornecedor(id: number) {
    const db = await getDatabase();
    return db.runAsync('DELETE FROM fornecedores WHERE id = ?', [id]);
}
