import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function App() {

  const [frase, setFrase] = useState(
    'Clique no seu cookie!'
  );

  const [aberto, setAberto] = useState(false);

  const biscoito = require('./assets/biscoito.png');
  const biscoitoAberto = require('./assets/biscoitoAberto.png');

  const frases = [
    'Hoje será um ótimo dia!',
    'Acredite nos seus sonhos.',
    'Uma grande surpresa está a caminho.',
    'Você está no caminho certo.',
    'Tenha coragem para começar algo novo.',
    'Coisas boas estão por vir.',
  ];

  function sorteioFrases() {

    const numero = Math.floor(Math.random() * frases.length);

    setFrase(frases[numero]);

    setAberto(true);
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Biscoito da Sorte
      </Text>

      <TouchableOpacity onPress={sorteioFrases}>

        <Image
          source={aberto ? biscoitoAberto : biscoito}
          style={styles.biscoito}
        />

      </TouchableOpacity>

      <Text style={styles.frases}>
        {frase}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#c46f32',
    marginBottom: 30,
  },

  biscoito: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 30,
  },

  frases: {
    fontSize: 20,
    color: '#5C4033',
    textAlign: 'center',
    marginBottom: 30,
  },

  botao: {
    backgroundColor: '#D9902F',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },

});
