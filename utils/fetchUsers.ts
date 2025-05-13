import { ApiResponse } from '@/types/user';

export const fetchUsers = async (): Promise<ApiResponse> => {
  const response = await fetch('https://randomuser.me/api/?results=100');
  
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  
  return response.json();
};