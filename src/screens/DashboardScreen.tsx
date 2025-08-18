import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      {/* Add dashboard widgets and links */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 }
});