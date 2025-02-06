import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const MORNING = [
  {
    id:'0', title: 'MALIGO'
  },
  {
    id: '2', title: 'MAGLINIS'
  },
  {
    id: '3', title: 'MATULOG'
    },
  {
    id: '4', title: 'HUMIGA'
    },
  {
    id: '5', title: 'MAGLARO'
    },
  {
    id: '6', title: 'MAGPAHINGA'
    },
  {
    id: '7', title: 'MAHIGA'
    },
  {
    id: '8', title: 'MATULOG'
    },
  {
    id: '9', title: 'MAGLINIS'
    },
  {
    id: '10', title: 'PAHINGA'
    },

];

const AFTERNOON = [
  {
    id: '11', title: 'MAGLABA'
    },
  {
    id: '12', title: 'MAGSIMBA'
    },
  {
    id: '13', title: 'MATULOG'
    },
  {
    id: '14', title: 'MALIGO'
    },
  {
    id: '15', title: 'MAHIGA'
    },
  {
    id: '16', title: 'PAHINGA'
    },
  {
    id: '17', title: 'MAGLARO'
    },
  {
    id: '18', title: 'SUNDO KAPATID'
    },
  {
    id: '19', title: 'MALIGO'
    },

];

const EVENING= [
  {
    id: '20', title: 'MAGLARO'
    },
  {
    id: '21', title: 'HUMIGA'
    },
  {
    id: '22', title: 'MATULOG'
    },
  {
    id: '23', title: 'MAGLARO'
    },
  {
    id: '24', title: 'PAHINGA'
    },
  {
    id: '25', title: 'MATULOG'
    },

];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <TouchableOpacity>
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Morning</Text>
      <FlatList
        data={MORNING}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text style={styles.header}>Afternoon</Text>
      <FlatList
        data={AFTERNOON}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text style={styles.header}>Evening</Text>
      <FlatList
        data={EVENING}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

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
  header: {
    textAlign: 'center',
    fontSize: 30,
    color: 'red',
  },
});

export default App;
