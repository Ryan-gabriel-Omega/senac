import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const locais = [
  {
    id: '1',
    nome: 'Santos',
    latitude: -23.9608,
    longitude: -46.3336,
  },
  {
    id: '2',
    nome: 'São Vicente',
    latitude: -23.9604,
    longitude: -46.4120,
  },
  {
    id: '3',
    nome: 'Praia Grande',
    latitude: -24.0058,
    longitude: -46.4021,
  },
  {
    id: '4',
    nome: 'Guarujá',
    latitude: -23.9931,
    longitude: -46.2564,
  },
  {
    id: '5',
    nome: 'Bertioga',
    latitude: -23.8545,
    longitude: -46.1386,
  },
  {
    id: '6',
    nome: 'Cubatão',
    latitude: -23.8950,
    longitude: -46.4255,
  },
  {
    id: '7',
    nome: 'Mongaguá',
    latitude: -24.0939,
    longitude: -46.6205,
  },
  {
    id: '8',
    nome: 'Itanhaém',
    latitude: -24.1736,
    longitude: -46.7889,
  },
  {
    id: '9',
    nome: 'Peruíbe',
    latitude: -24.3209,
    longitude: -47.0081,
  },
  {
    id: '10',
    nome: 'Praia do Gonzaga',
    latitude: -23.9677,
    longitude: -46.3335,
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.9607,
          longitude: -46.3336,
          latitudeDelta: 0.30,
          longitudeDelta: 0.30,
        }}
      >
        {locais.map((local) => (
          <Marker
            key={local.id}
            coordinate={{
              latitude: local.latitude,
              longitude: local.longitude,
            }}
            title={local.nome}
            description={`Localização de ${local.nome}`}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: '100%',
    height: '100%',
  },
});