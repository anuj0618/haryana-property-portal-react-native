import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PropertyDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Property Details</Text>
      {/* Render details, images, and actions */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 }
});