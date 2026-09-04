import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const options = ['Light Mode', 'Dark Mode', 'System Default'];

function ModeSelector() {
  const [selected, setSelected] = useState('System Default');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pilih Tampilan</Text>
      {options.map((option) => {
        const isActive = option === selected;
        return (
          <TouchableOpacity
            key={option}
            style={[styles.option, isActive && styles.optionActive]}
            onPress={() => setSelected(option)}
            activeOpacity={0.8}
          >
            <Text style={[styles.optionText, isActive && styles.optionTextActive]}>
              {option}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <ModeSelector />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
    color: '#1e293b',
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: '#f1f5f9',
    marginBottom: 8,
  },
  optionActive: {
    backgroundColor: '#3b82f6',
  },
  optionText: {
    fontSize: 14,
    color: '#334155',
    fontWeight: '600',
  },
  optionTextActive: {
    color: '#fff',
  },
});
