import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

// Komponen reusable UserCard
function UserCard({ name, status, imageUrl }) {
  const isActive = status === 'Aktif';

  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <View
          style={[
            styles.badge,
            { backgroundColor: isActive ? '#22c55e' : '#94a3b8' },
          ]}
        >
          <Text style={styles.badgeText}>{status}</Text>
        </View>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <UserCard
        name="Jihan Ardianto"
        status="Aktif"
        imageUrl="https://i.pravatar.cc/150?img=1"
      />
      <UserCard
        name="Pandu"
        status="Alumni"
        imageUrl="https://i.pravatar.cc/150?img=2"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#1e293b',
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});
