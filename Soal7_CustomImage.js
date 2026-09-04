import React, { useState } from 'react';
import { View, Image, ActivityIndicator, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

function CustomImage({ source, size = 120 }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <View style={[styles.wrapper, { width: size, height: size }]}>
      {!error && (
        <Image
          source={source}
          style={[styles.image, { width: size, height: size }]}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
        />
      )}

      {loading && !error && (
        <View style={styles.overlay}>
          <ActivityIndicator size="small" color="#3b82f6" />
        </View>
      )}

      {error && (
        <View style={[styles.overlay, styles.errorBox]}>
          <Image
            source={{ uri: 'https://via.placeholder.com/120?text=No+Image' }}
            style={{ width: size, height: size }}
          />
        </View>
      )}
    </View>
  );
}

export default function App() {
  const photos = [
    'https://picsum.photos/id/1015/300/300',
    'https://broken-url-example.com/not-found.jpg',
    'https://picsum.photos/id/1016/300/300',
    'https://picsum.photos/id/1018/300/300',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.grid}>
        {photos.map((url, index) => (
          <CustomImage key={index} source={{ uri: url }} size={100} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  wrapper: {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#e2e8f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 8,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e2e8f0',
  },
  errorBox: {
    backgroundColor: '#f1f5f9',
  },
});
