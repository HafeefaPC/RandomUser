
export interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    country: string;
    state?: string;
    city?: string;
    postcode?: string | number;
    coordinates?: {
      latitude: string;
      longitude: string;
    };
    timezone?: {
      offset: string;
      description: string;
    };
  };
  email: string;
  phone: string;
  cell?: string;
  dob?: {
    date: string;
    age: number;
  };
  registered?: {
    date: string;
    age: number;
  };
  id?: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  gender: 'male' | 'female';
  nat?: string;
}
export interface ApiResponse {
  results: User[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}
