import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';

const VARIANT_COLORS = {
  primary: '#3b82f6',
  success: '#22c55e',
  danger: '#ef4444',
};

function MyButton({ title, onPress, variant = 'primary' }) {
  const backgroundColor = VARIANT_COLORS[variant] || VARIANT_COLORS.primary;

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MyButton
        title="Simpan"
        variant="primary"
        onPress={() => Alert.alert('Primary ditekan')}
      />
      <MyButton
        title="Berhasil"
        variant="success"
        onPress={() => Alert.alert('Success ditekan')}
      />
      <MyButton
        title="Hapus"
        variant="danger"
        onPress={() => Alert.alert('Danger ditekan')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
    padding: 20,
    gap: 12,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
