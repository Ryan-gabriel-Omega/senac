import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, SafeAreaView} from 'react-native';

export default function App() {

  const Produtos = [
    { id: '1', nome: 'Acarajé Completo', preco: '60.00', Image: require('./assets/acaraje.jpg') },

    { id: '2', nome: 'Baiao de Dois Completo', preco: '150.00', Image: require('./assets/baiaodedoisnordestino.jpg') },

    { id: '3', nome: 'Moqueca de Peixe topo', preco: '100.00', Image: require('./assets/moquecadepeixetopo.jpg') },

    { id: '4', nome: 'Caipifrutas Nordestinas', preco: '17.00', Image: require('./assets/a93416a9d19536d6dae539113a99c58a.jpg') },

    { id: '5', nome: 'Carne de sol com Macaxeira', preco: '60.00', Image: require('./assets/Carne_de_sol_com_macaxeira.jpg') },

    { id: '6', nome: 'Guaraná Jesus', preco: '6.00', Image: require('./assets/guarana-jesus-425x400.jpg') },

    { id: '7', nome: 'Cajuína', preco: '12.00', Image: require('./assets/qk3ViuIVX6zOjOfJFkVBrZAMtMzbzmrtBaRRYLSu.jpg') },

    { id: '8', nome: 'Garapa (Caldo de Cana)', preco: '15.00', Image: require('./assets/shutterstock_360360530.2048x1024.jpg') },

    { id: '9', nome: 'Tapioca', preco: '10.00', Image: require('./assets/tapioca-recheada.jpg') },

    { id: '10', nome: 'Tiquira', preco: '150.00', Image: require('./assets/tiquira-indios-699x393.jpg') },
    

  ];

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.containerInterno}
      data={Produtos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.cardProduto}>
          <Image source={item.Image} style={styles.fotoProduto} />
          <View style={styles.infoContainer}>
            <Text style={styles.textoNome}>{item.nome}</Text>
            <Text style={styles.textoPreco}>R$ {item.preco}</Text>
          </View>
        </View>
      )}
    />
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a78527',
  },
  containerInterno: {
    alignItems: 'center',
    paddingTop: 55,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
  },
  cardProduto: {
    flexDirection: 'row',
    backgroundColor: '#14253b',
    width: '90%',
    padding: 10,
    marginVertical: 5,
    borderRadius: 6,
    alignItems: 'center',
  },
  fotoProduto: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#534f4f',
  },
  infoContainer: {
    marginLeft: 15,
    flex: 1,
  },
  textoNome: {
    color: '#6e6e6efd',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  textoPreco: {
    color: '#e2980e',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
});