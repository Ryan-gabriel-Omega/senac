
import * as SQLite from 'expo-sqlite';

let db: SQLite.SQLiteDatabase;

export async function getDatabase() {
    if (db) return db;

    db = await SQLite.openDatabaseAsync('estoque.db');

    await db.execAsync(`
        PRAGMA foreign_keys = ON;

        CREATE TABLE IF NOT EXISTS fornecedores (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            cnpj TEXT,
            telefone TEXT,
            email TEXT
        );

        CREATE TABLE IF NOT EXISTS produtos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            descricao TEXT,
            quantidade INTEGER NOT NULL DEFAULT 0,
            estoqueMinimo INTEGER NOT NULL DEFAULT 0,
            precoCompra REAL NOT NULL DEFAULT 0,
            precoVenda REAL NOT NULL DEFAULT 0,
            fornecedorId INTEGER,
            FOREIGN KEY (fornecedorId)
                REFERENCES fornecedores(id)
                ON DELETE SET NULL
        );

        CREATE TABLE IF NOT EXISTS movimentacoes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            produtoId INTEGER NOT NULL,
            tipo TEXT NOT NULL,
            quantidade INTEGER NOT NULL,
            data TEXT NOT NULL,
            FOREIGN KEY (produtoId)
                REFERENCES produtos(id)
        );
    `);

    return db;
}
