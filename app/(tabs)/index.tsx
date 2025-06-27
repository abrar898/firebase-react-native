import { Redirect } from 'expo-router';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../../constants/firebase';

export default function Index() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setLoggedIn(!!user);
      
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) return null;

  return <Redirect href={loggedIn ? '/landing' : '/login'} />;
}
