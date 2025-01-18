import { StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import ChartScreen from './src/ChartScreen';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ChartScreen />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
});
