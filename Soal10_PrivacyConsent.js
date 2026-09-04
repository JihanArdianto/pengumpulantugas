import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';

export default function App() {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = () => {
    Alert.alert('Registrasi', 'Pendaftaran berhasil dikirim!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Syarat & Ketentuan</Text>
        <Text style={styles.description}>
          Dengan mendaftar, Anda menyetujui Syarat & Ketentuan serta Kebijakan Privasi yang
          berlaku pada aplikasi ini.
        </Text>

        <View style={styles.switchRow}>
          <Switch
            value={agreed}
            onValueChange={setAgreed}
            trackColor={{ false: '#cbd5e1', true: '#86efac' }}
            thumbColor={agreed ? '#22c55e' : '#f1f5f9'}
          />
          <Text style={styles.switchLabel}>
            Saya setuju dengan Syarat & Ketentuan
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.submitButton, !agreed && styles.submitButtonDisabled]}
          onPress={handleSubmit}
          disabled={!agreed}
        >
          <Text style={styles.submitText}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    color: '#64748b',
    lineHeight: 20,
    marginBottom: 16,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    marginLeft: 10,
    fontSize: 13,
    color: '#334155',
    flex: 1,
  },
  submitButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonDisabled: {
    backgroundColor: '#93c5fd',
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
