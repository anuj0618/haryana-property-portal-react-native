import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import PropertyCard from '../components/PropertyCard';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <SearchBar />
      {/* Render PropertyCard list based on search results */}
      <Text>Search Results will appear here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 }
});