import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { Image, Text, View } from 'react-native';


class App extends Component {
  render() {
  let nome = 'Combate Arms Logo';

  let imagem = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIzvkCDYphdDuMn8VxRuFdp2O8x7r1BdwunBeNX1rUFVrVdbw6B-bmak&s=10';

    return (
      <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 0, 0, 0.68)',
      }}
    >
      <Text style={{ color: 'purple', fontSize: 20 }}>
        {nome}
      </Text>

      <Image
        source={{ uri: imagem }}
        style={{
        width: 450,
        height: 300,
        resizeMode: 'contain',
      }}
    />
  </View>
);
}
}

export default App;