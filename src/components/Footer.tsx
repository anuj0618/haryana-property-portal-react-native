import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text>© Haryana Property Portal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: { padding: 12, alignItems: 'center', backgroundColor: '#f8f8f8' }
});