import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet
} from 'react-native';

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
        Tech Solutions
      </Text>

      <Text style={styles.subtitulo}>
        Soluções em tecnologia para empresas.
      </Text>

      <Pressable
        style={styles.botao}
        onPress={() => navigation.navigate('Sobre')}
      >
        <Text style={styles.textoBotao}>
          SOBRE A EMPRESA
        </Text>
      </Pressable>

      <Pressable
        style={styles.botao}
        onPress={() => navigation.navigate('Contato')}
      >
        <Text style={styles.textoBotao}>
          CONTATO
        </Text>
      </Pressable>
    </View>
  );
}

function SobreScreen() {
  return (

    <View style={styles.container}>
      <Text style={styles.titulo}>
        Sobre a Tech Solutions
      </Text>

      <Text style={styles.texto}>
        Somos uma empresa especializada em soluções
        tecnológicas para empresas.
      </Text>

      <Text style={styles.texto}>
        Nosso objetivo é ajudar negócios a utilizar a
        tecnologia de forma simples, eficiente e segura.
      </Text>
    </View>
  );
}

function ContatoScreen() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Entre em contato
      </Text>

      <Text style={styles.texto}>
         contato@techsolutions.com
      </Text>

      <Text style={styles.texto}>
         (13) 99999-9999
      </Text>

      <Text style={styles.texto}>
         Santos - SP
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicio"
          component={InicioScreen}
          options={{ title: 'Tech Solutions' }}
        />

        <Stack.Screen
          name="Sobre"
          component={SobreScreen}
          options={{ title: 'Sobre a empresa' }}
        />

        <Stack.Screen
          name="Contato"
          component={ContatoScreen}
          options={{ title: 'Contato' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '(rgb(29, 78, 170)'
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 35,
  },

  texto: {
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 15,
  },

  botao: {
    width: 220,
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#1494e9',
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
  },
});