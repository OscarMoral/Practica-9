import { useState, useEffect } from 'react';
import { ref, onValue, set, get } from 'firebase/database';
import { db } from '../firebase/config';

export const useFirebase = (path) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dbRef = ref(db, path);
    
    const unsubscribe = onValue(dbRef, (snapshot) => {
      try {
        const val = snapshot.val();
        setData(val);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }, (error) => {
      setError(error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [path]);

  const updateData = async (newData) => {
    try {
      const dbRef = ref(db, path);
      await set(dbRef, newData);
      return true;
    } catch (err) {
      setError(err);
      return false;
    }
  };

  const getData = async () => {
    try {
      const dbRef = ref(db, path);
      const snapshot = await get(dbRef);
      return snapshot.val();
    } catch (err) {
      setError(err);
      return null;
    }
  };

  return { data, loading, error, updateData, getData };
};

export default useFirebase; 