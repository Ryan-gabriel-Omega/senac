import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { getDatabase } from '../database/database';

export default function Layout() {
  const [bancoPronto, setBancoPronto] = useState(false);

  useEffect(() => {
    async function iniciarBanco() {
      try {
        await getDatabase();
        console.log('Banco de dados conectado!');
      } catch (error) {
        console.error('Erro ao conectar ao banco:', error);
      } finally {
        setBancoPronto(true);
      }
    }

    iniciarBanco();
  }, []);

  if (!bancoPronto) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerBackVisible: false,
      }}
    />
  );
}
