import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>

        <Image
          source={{
            uri: '',
          }}
          style={styles.banner}
        />
        
        <Text style={styles.logo}>
          techStore
        </Text>

        <Text style={styles.titulo}>
          Categorias
        </Text>

        <View style={styles.categorias}>
          <View style={styles.categoria}>
            <Text>Notebooks</Text>
          </View>

          <View style={styles.categoria}>
            <Text>Celulares</Text>
          </View>

          <View style={styles.categoria}>
            <Text>Monitores</Text>
          </View>

          <View style={styles.categoria}>
            <Text>Acessórios</Text>
          </View>
        </View>

        <Text style={styles.oferta}>
          Oferta do dia
        </Text>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    gap: 20,
  },

  header: {
    alignItems: 'center',
  },

  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  banner: {
    width: '100%',
    height: 160,
    borderRadius: 12,
    marginBottom: 20,
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  categorias: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },

  categoria: {
    padding: 15,
    backgroundColor: '#eee',
    borderRadius: 10,
  },

  oferta: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});