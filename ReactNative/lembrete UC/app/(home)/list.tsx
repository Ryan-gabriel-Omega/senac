import { StyleSheet, FlatList, View } from 'react-native';
import { LembreteItem } from '../../lembreteitens/lembreteintem';
import { getAllLembretes, getAllLembretesByAPI } from '../../services/lembrete';
import { useEffect, useState } from 'react';
import { Lembrete } from '../../types/lembretes';
 
export default function List() {
 const [lembretes, setLembretes] = useState<Lembrete[]>([]);
 
 useEffect(() => {
    async function getLembretesAll() {
      const listaLembretes = await getAllLembretesByAPI();
      setLembretes(listaLembretes);
    }
    getLembretesAll();
  }, [lembretes]);
 
  return (
    <View style={styles.container}>
      <FlatList
        data={lembretes}
        renderItem={({ item }) => <LembreteItem lembrete={item} />}
        keyExtractor={(item) => item.lembreteId.toString()}
        style={styles.list}
      />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#09599b',
  },
  list: {
    width: '100%',
    padding: 16,
    fontSize: 14,
  },
});