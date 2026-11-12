
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet
} from 'react-native';

export default function App() {


  const [bateria, setBateria] = useState(75);
  const [mensagem, setMensagem] = useState('');


  useEffect(() => {
    if (bateria <= 20) {
      setMensagem('Bateria crítica! Conecte o carregador.');
    } else if (bateria <= 50) {
      setMensagem('Bateria baixa. Economize energia.');
    } else if (bateria <= 80) {
      setMensagem('Bateria em nível adequado.');
    } else {
      setMensagem('Bateria carregada.');
    }
  }, [bateria]);


  function diminuirBateria() {
    setBateria((valorAtual) => Math.max(0, valorAtual - 10));
  }

  function aumentarBateria() {
    setBateria((valorAtual) => Math.min(100, valorAtual + 10));
  }

  return (
    <View style={styles.container}>


      <Text style={styles.titulo}>
        Monitor de Bateria
      </Text>


      <Text style={styles.bateria}>
        {bateria}%
      </Text>

      <Text style={styles.mensagem}>
        {mensagem}
      </Text>

      <Pressable
        style={styles.botao}
        onPress={diminuirBateria}
      >
        <Text style={styles.textoBotao}>
          Diminuir bateria (-10%)
        </Text>
      </Pressable>

      <Pressable
        style={styles.botao}
        onPress={aumentarBateria}
      >
        <Text style={styles.textoBotao}>
          Aumentar bateria (+10%)
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  bateria: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  mensagem: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },

  botao: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
    width: 220,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
