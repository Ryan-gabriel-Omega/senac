import { View, Text, StyleSheet, FlatList } from 'react-native';

type Aluno = {
  id: number;
  nome: string;
  cidade: string;
};

export default function Home() {
  const alunos: Aluno[] = [
    { id: 1, nome: 'Jasmin', cidade: 'Jardim Floral' },
    { id: 2, nome: 'Edgar', cidade: 'Detroit' },
    { id: 3, nome: 'Robert', cidade: 'Transilvânia' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={alunos}
        renderItem={({ item }) => (
          <View>
            <Text>Nome: {item.nome}</Text>
            <Text>Cidade: {item.cidade}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});