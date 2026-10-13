
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet
} from 'react-native';

export default function App() {

  // Estados


  // useEffect


  // Funções dos botões


  return (
    <View style={styles.container}>

      {/* Título */}


      {/* Nível da bateria */}


      {/* Mensagem da bateria */}


      {/* Botão para diminuir a bateria */}


      {/* Botão para aumentar a bateria */}

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
