'use client';
import { useState } from 'react';
import { User } from '@/types/user';
import { useUsers } from '@/hooks/useUsers';
import { SearchableDropdown } from '@/components/SearchableDropdown';
import { UserDetails } from '@/components/UserDetails';
import {LoadingSpinner  } from '@/components/LoadingSpinner';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { RefreshCw, Users, AlertCircle, Sparkles, Globe, Search } from 'lucide-react';

export default function Home() {
  const { users, loading, error, refetch } = useUsers();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-[#d2c8c8] via-[#a3816a]/20 to-[#d2c8c8] relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#a3816a]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#a3816a]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#0a065d] to-[#a3816a] bg-clip-text text-transparent animate-pulse">
                Random User Directory
              </h1>
            </div>
            <p className="text-xl text-[#0a065d] mb-6 animate-fade-in">
              Discover and connect with people from around the world
            </p>
          </div>
          <LoadingSpinner />
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-[#0a065d] via-red-900/20 to-[#0a065d]">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#a3816a] to-[#d2c8c8] bg-clip-text text-transparent">
              Random User Directory
            </h1>
          </div>
          <div className="max-w-3xl mx-auto">
            <Alert variant="destructive" className="animate-fade-in border-red-500/50 bg-red-500/10 backdrop-blur-sm">
              <AlertCircle className="h-5 w-5 animate-pulse" />
              <AlertTitle className="text-lg text-white">Oops! Something went wrong</AlertTitle>
              <AlertDescription className="mt-2 text-red-200">
                {error}
              </AlertDescription>
            </Alert>
            <div className="mt-8 text-center">
              <Button 
                onClick={refetch} 
                className="gap-2 bg-gradient-to-r from-[#a3816a] to-[#0a065d] hover:from-[#a3816a]/90 hover:to-[#0a065d]/90 transition-all duration-300 transform hover:scale-105"
              >
                <RefreshCw className="h-4 w-4 animate-spin text-white" />
                Try Again
              </Button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#d2c8c8] via-[#0a065d]/20 to-[#d2c8c8] relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#a3816a]/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-[#a3816a]/5 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-[#0a065d]/5 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r  from-[#0a065d] to-[#a3816a] bg-clip-text text-transparent">
              Random User Directory
            </h1>
          </div>
          
          <p className="text-xl text-[#0a065d] mb-8 max-w-3xl mx-auto">
            Discover and connect with people from around the world
          </p>
          
          {/* Stats display */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#a3816a]/10 rounded-full backdrop-blur-sm border border-[#a3816a]/20">
              <Users className="h-5 w-5 text-[#a3816a]" />
              <span className="text-[#0a065d] font-medium">{users.length} Users</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#a3816a]/10 rounded-full backdrop-blur-sm border border-[#a3816a]/20">
              <Search className="h-5 w-5 text-[#a3816a]" />
              <span className="text-[#0a065d] font-medium">Search Enabled</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-8 max-w-6xl mx-auto">
          <SearchableDropdown
            users={users}
            onSelectUser={setSelectedUser}
            selectedUser={selectedUser}
          />
          
          <UserDetails user={selectedUser} />
        </div>
      </div>
    </main>
  );
}