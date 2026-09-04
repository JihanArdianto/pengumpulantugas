import React from 'react';
import { View, Text, SectionList, StyleSheet, SafeAreaView } from 'react-native';

const DATA = [
  {
    title: 'Mata Pelajaran Kejuruan',
    data: [
      { subject: 'Pemrograman Web', score: 90 },
      { subject: 'Basis Data', score: 85 },
      { subject: 'Jaringan Komputer', score: 88 },
    ],
  },
  {
    title: 'Mata Pelajaran Umum',
    data: [
      { subject: 'Matematika', score: 78 },
      { subject: 'Bahasa Indonesia', score: 82 },
      { subject: 'Bahasa Inggris', score: 80 },
      { subject: 'PPKn', score: 84 },
    ],
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.subject + index}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.subject}>{item.subject}</Text>
            <Text style={styles.score}>{item.score}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{title}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  sectionHeader: {
    backgroundColor: '#3b82f6',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  subject: {
    fontSize: 14,
    color: '#1e293b',
  },
  score: {
    fontSize: 14,
    fontWeight: '700',
    color: '#16a34a',
  },
});
