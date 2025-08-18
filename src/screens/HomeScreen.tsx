import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Welcome to Haryana Property Portal</Text>
      {/* Add PropertyCard, SearchBar, etc., here */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 20 }
});