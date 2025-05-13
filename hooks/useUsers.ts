'use client';

import { useState, useEffect, useCallback } from 'react';
import { User } from '@/types/user';
import { fetchUsers } from '@/utils/fetchUsers';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadUsers = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchUsers();
      setUsers(data.results);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while loading users');
      console.error('Error loading users:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return { 
    users, 
    loading, 
    error, 
    refetch: loadUsers 
  };
};