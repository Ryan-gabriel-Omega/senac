import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet,
} from 'react-native';

export default function App() {

  const [nome, setNome] = useState('');
  const [bio, setBio] = useState('');

  const [foto, setFoto] = useState(
    require('./assets/imagenPerfil.jpg'),
    require('./assets/imagenPerfil2.jpg')
  );

  const publicacoes = 7;
  const seguidores = 14;
  const seguindo = 24;

  const [editando, setEditando] = useState(false);

  let areaPerfil;

  if (editando) {

    areaPerfil = (
      <View style={styles.areaEdicao}>

        <Text style={styles.tituloEdicao}>
          Editar Perfil
        </Text>

        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Nome de Perfil"
          placeholderTextColor="#777"
        />

        <TextInput
          style={styles.input}
          value={bio}
          onChangeText={setBio}
          placeholder="Biografia"
          placeholderTextColor="#777"
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setEditando(false)}
        >
          <Text style={styles.botaoTexto}>
            Salvar
          </Text>
        </TouchableOpacity>

      </View>
    );

  } else {

    areaPerfil = (
      <TouchableOpacity
        style={styles.botao}
        onPress={() => setEditando(true)}
      >
        <Text style={styles.botaoTexto}>
          Editar Perfil
        </Text>
      </TouchableOpacity>
    );

  }

  return (
    <View style={styles.container}>

      <Image
        source={foto}
        style={styles.foto}
      />

      <View style={styles.nome}>

        <Text style={styles.nomeTexto}>
          {nome}
        </Text>

        <Text style={styles.bio}>
          {bio}
        </Text>

      </View>

      <View style={styles.status}>

        <View style={styles.statusItem}>
          <Text style={styles.numero}>
            {publicacoes}
          </Text>

          <Text style={styles.label}>
            Publicações
          </Text>
        </View>

        <View style={styles.statusItem}>
          <Text style={styles.numero}>
            {seguidores}
          </Text>

          <Text style={styles.label}>
            Seguidores
          </Text>
        </View>

        <View style={styles.statusItem}>
          <Text style={styles.numero}>
            {seguindo}
          </Text>

          <Text style={styles.label}>
            Seguindo
          </Text>
        </View>

      </View>

      <View style={styles.editPerfil}>

        {areaPerfil}

      </View>

      <View style={styles.galeria}>

        <Text style={styles.galeriaTexto}>
          Fotos
        </Text>

         <Image style={styles.galeriaFotos}
        source={foto}
        style={styles.galeriaFotos}>
          
        </Image>
        <Image style={styles.galeriaFotos}
        source={foto}>
       
        </Image>
        <Image style={styles.galeriaFotos}
        source={foto}
        style={styles.galeriaFotos}
      />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#1c273f',
    alignItems: 'center',
    paddingTop: 55,
  },


  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },


  nome: {
    alignItems: 'center',
    marginBottom: 25,
  },


  nomeTexto: {
    color: '#55c7e8',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },


  bio: {
    color: '#999',
    fontSize: 14,
  },


  status: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#293449',
    paddingVertical: 15,
    marginBottom: 20,
  },


  statusItem: {
    alignItems: 'center',
  },


  numero: {
    color: '#e5b82c',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },


  label: {
    color: '#aaa',
    fontSize: 12,
  },


  editPerfil: {
    width: '90%',
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#293449',
  },


  botao: {
    backgroundColor: '#1e2a3d',
    borderWidth: 1,
    borderColor: '#35d6a0',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },


  botaoTexto: {
    color: '#35d6a0',
    fontWeight: 'bold',
  },


  areaEdicao: {
    width: '100%',
    alignItems: 'center',
    gap: 10,
  },


  tituloEdicao: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },


  input: {
    width: '90%',
    height: 45,
    backgroundColor: '#1e293b',
    borderWidth: 1,
    borderColor: '#39465c',
    borderRadius: 5,
    paddingHorizontal: 10,
    color: 'white',
  },


  galeria: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    paddingTop: 20,
    gap: 10,
    flexDirection: 'row',
  },


  galeriaTexto: {
    color: '#6f6fdb',
    fontSize: 14,
    alignSelf: 'flex-start',
    justifyContent: 'center',

  },
  galeriaFotos: {
    width: 100,
    height: 80,
    
  }

});
