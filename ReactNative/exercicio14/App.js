import React from 'react';
import {
  View, Text, Pressable, StyleSheet
} from "react-native";
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function InicioScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Meus produtos
      </Text>

      <Text style={styles.subtitulo}>
        Encontre os melhores produtos para você.
      </Text>

      <Pressable
        style={styles.botao}
        onPress={() => navigation.navigate('Produtos')}>
        <Text style={styles.textoBotao}>
          VER PRODUTOS
        </Text>
      </Pressable>
    </View>
  );
}

// TELA DE PRODUTOS

function ProdutoScreen({ navigation }) {
  const produtos = [
    {
      id: 1,
      nome: 'Notebook',
      preco: 3500
    },
    {
      id: 2,
      nome: 'Smartphone',
      preco: 200
    },
    {
      id: 3,
      nome: 'tablet',
      preco: 1500
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Produtos
      </Text>

      {produtos.map((produto) => (
        <View
          key={produto.id}
          style={styles.card}>

          <Text style={styles.nomeProduto}>
            {produto.nome}
          </Text>

          <Text style={styles.preco}>
            {produto.preco.toFixed(2)}
          </Text>

          <Pressable
            style={styles.botao}
            onPress={() =>
              navigation.navigate('Detalhes', {
                produto: produto
              })
            }>
            <Text style={styles.textoBotao}>
              VER DETALHES
            </Text>
          </Pressable>
        </View>
      ))}

      <Pressable
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>
          VOLTAR
        </Text>
      </Pressable>
    </View>
  );
}

// TELA DETALHES

function DetalhesScreen({ route, navigation }) {
  const { produto } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Detalhes do Produto
      </Text>

      <View style={styles.cardDetalhes}>
        <Text style={styles.nomeProduto}>
          {produto.nome}
        </Text>

        <Text style={styles.preco}>
          {produto.preco.toFixed(2)}
        </Text>

        <Text style={styles.descricao}>
          Este produto está disponível para compra.
        </Text>

        <Pressable
          style={styles.botao}
          onPress={() => {
            alert('Produto selecionado: ' + produto.nome);
          }}>
          <Text style={styles.textoBotao}>
            COMPRAR
          </Text>
        </Pressable>

        <Pressable
          style={styles.botaoVoltar}
          onPress={() => navigation.goBack()}>
          <Text style={styles.textoBotao}>
            VOLTAR
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
    justifyContent: 'center'
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },

  subtitulo: {
    fontSize: 17,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 30
  },

  botao: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10
  },

  botaoVoltar: {
    backgroundColor: '#555',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15
  },

  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },

  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15
  },

  cardDetalhes: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 10,
    marginBottom: 20
  },

  nomeProduto: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8
  },

  preco: {
    fontSize: 20,
    color: '#007AFF',
    fontWeight: 'bold',
    marginBottom: 10
  },

  descricao: {
    fontSize: 16,
    color: 'gray',
    lineHeight: 24
  }

});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Inicio"
          component={InicioScreen}
        />

        <Stack.Screen
          name="Produtos"
          component={ProdutoScreen}
        />

        <Stack.Screen
          name="Detalhes"
          component={DetalhesScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}