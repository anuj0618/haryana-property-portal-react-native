import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function PropertyCard({ property }: { property: any }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: property.image }} style={styles.image} />
      <Text style={styles.title}>{property.title}</Text>
      <Text>{property.location}</Text>
      <Text>{property.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderWidth: 1, borderColor: '#ddd', borderRadius: 10, padding: 10, margin: 10 },
  image: { width: '100%', height: 120, borderRadius: 8 },
  title: { fontWeight: 'bold', fontSize: 16 }
});