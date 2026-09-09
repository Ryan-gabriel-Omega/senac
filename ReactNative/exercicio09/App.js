import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet
} from 'react-native';

export default function App() {


  const palavra = 'COMPUTADOR';

  const [letra, setLetra] = useState('');

  const [letrasUsadas, setLetrasUsadas] = useState([]);

  const [erros, setErros] = useState(0);

  const [mensagem, setMensagem] = useState(
    'Digite uma letra'
  );

  const tentarLetra = () => {

    const novaLetra = letra.toUpperCase();

    if (novaLetra === '') {
      return;
    }

    if (letrasUsadas.includes(novaLetra)) {
      setMensagem('Você já tentou essa letra!');
      setLetra('');
      return;
    }

    const novasLetras = [...letrasUsadas, novaLetra];
    setLetrasUsadas(novasLetras);

    if (palavra.includes(novaLetra)) {
      setMensagem('Acertou!');
    } else {
      setMensagem('Errou!');
      setErros(erros + 1);
    }

    setLetra('');
  };

  const mostrarPalavra = () => {


    return palavra
      .split('')
      .map((letraPalavra) => {


        if (letrasUsadas.includes(letraPalavra)) {
          return letraPalavra;
        } else {
          return '_';
        }

      })
      .join(' ');
  };


  const ganhou = palavra
    .split('')
    .every((letraPalavra) =>
      letrasUsadas.includes(letraPalavra)
    );


  const perdeu = erros >= 6;

  return (
    <View style={styles.container}>


      <Text style={styles.titulo}>
        JOGO DA FORCA
      </Text>


      <Text style={styles.palavra}>
        {mostrarPalavra()}
      </Text>


      <Text style={styles.mensagem}>
        {mensagem}
      </Text>


      <TextInput
        style={styles.input}
        placeholder="Digite uma letra"
        maxLength={1}
        autoCapitalize="characters"
        value={letra}
        onChangeText={setLetra}
      />


      <Pressable
        style={styles.botao}
        onPress={tentarLetra}
        disabled={ganhou || perdeu}
      >
        <Text style={styles.textoBotao}>
          TENTAR
        </Text>
      </Pressable>


      <Text style={styles.erros}>
        Erros: {erros} / 6
      </Text>


      <Text style={styles.letras}>
        Letras usadas:
      </Text>

      <Text style={styles.letrasUsadas}>
        {letrasUsadas.join(' - ')}
      </Text>

      {ganhou && (
        <Text style={styles.vitoria}>
          parabéns! você ganhou!
        </Text>
      )}

      {perdeu && (
        <Text style={styles.derrota}>
          você perdeu!
          {'\n'}
          A palavra era: {palavra}
        </Text>
      )}

      {(ganhou || perdeu) && (
        <Pressable
          style={styles.botaoNovo}
          onPress={() => {
            setLetrasUsadas([]);
            setErros(0);
            setMensagem('Digite uma letra');
            setLetra('');
          }}
        >
          <Text style={styles.textoBotao}>
            NOVO JOGO
          </Text>
        </Pressable>
      )}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#192652',
    justifyContent: 'center',
    padding: 25
  },

  titulo: {
    color: '#5900fdc7',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40
  },

  palavra: {
    color: '#ffffffc0',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 5,
    marginBottom: 30
  },

  mensagem: {
    color: '#03fff2e8',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20
  },

  input: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 15
  },

  botao: {
    backgroundColor: '#1347b6',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center'
  },

  textoBotao: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold'
  },

  erros: {
    color: '#03fff2e8',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 25
  },

  letras: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 25
  },

  letrasUsadas: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10
  },

  vitoria: {
    color: '#4CAF50',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30
  },

  derrota: {
    color: '#F44336',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30
  },

  botaoNovo: {
    backgroundColor: '#34A853',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25
  }

});