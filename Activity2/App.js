import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const BoldAndBeautiful = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <View style={styles.border}>
      <Text style={styles.baseText}>Bugto,
        <Text style={styles.innerText}> Christian Ken G. </Text>
      </Text>
    </View>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  border: {
    borderRadius: 10,
    backgroundColor: 'green',
    borderWidth: 5,
    borderColor: 'black',
    padding: 3,
    margin: 5,
  },
  baseText: {
    fontWeight: 'bold',
  },
  innerText: {
    color: 'black',
    fontFamily: 'italic',
  },
});

export default BoldAndBeautiful;