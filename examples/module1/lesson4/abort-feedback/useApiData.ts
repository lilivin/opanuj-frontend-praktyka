import axios from 'axios';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

const API_URL = '/api/data/users?timeout=10000';

export function useApiData() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState(false);
  let controller: AbortController | null = null;

  async function getApiData(controller: AbortController) {
    const data = await axios.get(API_URL, {
      timeout: 5000,
      signal: controller.signal,
    });
    return data;
  }

  useEffect(() => {
    handleFetchData();
  }, []);

  async function handleFetchData() {
    setError(false);
    if (controller) {
      controller.abort();
    }

    try {
      console.log('Nowe zapytanie');
      controller = new AbortController();
      const { data } = await getApiData(controller);
      setUsers(data.users);
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.log('Błąd:', error);
        setError(true);
      }
    }
  }
  return { users, error, handleFetchData };
}
