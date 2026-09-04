import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

const categories = ['Semua', 'Matematika', 'Ipas', 'Bhasa Inggris'];

function CategoryBar() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoryBar}
    >
      {categories.map((cat) => (
        <View key={cat} style={styles.categoryChip}>
          <Text style={styles.categoryText}>{cat}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

function ArticleContent() {
  return (
    <ScrollView style={styles.articleScroll} contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.articleTitle}>Pengenalan Aljabar Dasar</Text>
      {Array.from({ length: 12 }, (_, i) => (
        <Text key={i} style={styles.paragraph}>
          Ini adalah paragraf ke-{i + 1} dari materi pembelajaran. Konten ini dapat digeser
          secara vertikal untuk membaca keseluruhan artikel dari atas ke bawah.
        </Text>
      ))}
    </ScrollView>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CategoryBar />
      <ArticleContent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  categoryBar: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  categoryChip: {
    backgroundColor: '#e2e8f0',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    marginRight: 8,
  },
  categoryText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#334155',
  },
  articleScroll: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    color: '#1e293b',
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    color: '#475569',
    marginBottom: 12,
  },
});
