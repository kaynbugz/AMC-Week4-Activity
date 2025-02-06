import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

type ItemData = {
  id: string;
  title: string;
};

const DATA: ItemData[] = [
  { id: '0', title: 'MORNING' },
  { id: '1', title: 'MAGLINIS' },
  { id: '2', title: 'MAGLABA' },
  { id: '3', title: 'MAGSIPILYO' },
  { id: '4', title: 'MAGPLANTSA' },
  { id: '5', title: 'ALMUSAL' },
  { id: '6', title: 'MERYENDA' },
  { id: '7', title: 'LINIS' },
  { id: '8', title: 'MATULOG' },
  { id: '9', title: 'TUMULONG' },
  { id: '10', title: 'MALIGO' },
  { id: '11', title: 'AFTERNOON' },
  { id: '12', title: 'CELLPHONE' },
  { id: '13', title: 'MAGLARO' },
  { id: '14', title: 'PAHINGA' },
  { id: '15', title: 'TUMLONG' },
  { id: '16', title: 'MAGLINIS' },
  { id: '17', title: 'MAGLARO' },
  { id: '18', title: 'PAHINGA' },
  { id: '19', title: 'MAGLINIS' },
  { id: '20', title: 'MAGLARO' },
  { id: '21', title: 'GABI' },
  { id: '22', title: 'PAHINGA' },
  { id: '23', title: 'NAGALUTO' },
  { id: '24', title: 'LUCKY9' },
  { id: '25', title: 'BLACKJACK' },
  { id: '26', title: 'BACCARAT' },
];

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }: { item: ItemData }) => {
    const backgroundColor = item.id === selectedId ? 'black' : 'white';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 30,
    borderRadius: 5,
    borderWidth: 3,
    padding: 3,
    margin: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
