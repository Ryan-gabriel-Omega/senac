import React from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./assets/cronometro.png')}
      />
      <View style={styles.buton}>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#383434',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  image: {
    width: '50%',
    height: 300,
    resizeMode: 'contain',
  },
});
