import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { Image, Text, View, Mensagem } from 'react-native';
import {teste_Mobile} from './components/teste_Mobile';
import Jobs from './components/Jobs';

class App extends Component {
  render() {

  let imagem = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIzvkCDYphdDuMn8VxRuFdp2O8x7r1BdwunBeNX1rUFVrVdbw6B-bmak&s=10';

    return (
      <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(175, 163, 26)',
        paddingTop: 50,
      }}
    >
      <View style={{flex: 1, width: '100%', alignItems: 'center', paddingHorizontal: 20 ,}}>
        <Text style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>
          {teste_Mobile.Mensagem}
        </Text>

        <Jobs></Jobs>

      </View>
      <Image
        source={{ uri: imagem }}
        style={{
        flex: 1 ,
        width: '100%',
        height: 250,
        resizeMode: 'contain',
      }}
    />
  </View>
);
}
}

export default App;