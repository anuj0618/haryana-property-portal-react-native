import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Search properties..." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { margin: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 8 }
});