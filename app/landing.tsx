import { useRouter } from 'expo-router';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { auth } from '../constants/firebase';

export default function LandingScreen() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        router.push('/login');
      }
    });

    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1080' }}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/9131/9131544.png' }}
          style={styles.icon}
        />
        <Text style={styles.title}>Welcome 👋</Text>
        <Text style={styles.subtitle}>You are logged in as:</Text>
        <Text style={styles.email}>{user?.email}</Text>
        <View style={styles.button}>
          <Button title="Logout" onPress={handleLogout} color="#ff3b30" />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 6,
  },
  email: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    width: '100%',
  },
});
