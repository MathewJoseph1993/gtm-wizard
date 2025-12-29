'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { pb } from '@/lib/pocketbase';
import { RecordModel } from 'pocketbase';

interface AuthContextType {
  user: RecordModel | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name?: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<RecordModel | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    setUser(pb.authStore.record);
    setIsLoading(false);

    // Subscribe to auth changes
    pb.authStore.onChange((token, record) => {
      setUser(record);
    });
  }, []);

  const login = async (email: string, password: string) => {
    const authData = await pb.collection('users').authWithPassword(email, password);
    setUser(authData.record);
  };

  const signup = async (email: string, password: string, name?: string) => {
    // Create user
    await pb.collection('users').create({
      email,
      password,
      passwordConfirm: password,
      name: name || '',
    });
    // Auto-login after signup
    await login(email, password);
  };

  const logout = () => {
    pb.authStore.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
