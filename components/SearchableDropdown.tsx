'use client';
import { useState, useMemo } from 'react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Check, ChevronsUpDown, Search, User, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { User as UserType } from '@/types/user';

interface SearchableDropdownProps {
  users: UserType[];
  onSelectUser: (user: UserType | null) => void;
  selectedUser: UserType | null;
}

export const SearchableDropdown = ({ users, onSelectUser, selectedUser }: SearchableDropdownProps) => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const filteredUsers = useMemo(() => {
    if (!searchValue) return users.slice(0, 50);
    return users.filter(user => 
      `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchValue.toLowerCase()) ||
      user.email.toLowerCase().includes(searchValue.toLowerCase()) ||
      user.location.country.toLowerCase().includes(searchValue.toLowerCase())
    ).slice(0, 20);
  }, [users, searchValue]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="h-5 w-5 text-[#a3816a] animate-pulse" />
          </div>
          <label className="text-lg font-semibold text-[#a3816a]">
            Search Users
          </label>
        </div>
        
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between h-14 px-6 text-left font-normal bg-gradient-to-r bg-[#0a065d] backdrop-blur-sm border-[#a3816a]/30 hover:border-[#a3816a]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#a3816a]/20"
            >
              {selectedUser ? (
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Avatar className="h-10 w-10 ring-2 ring-[#a3816a]/50">
                      <AvatarImage src={selectedUser.picture.thumbnail} alt={`${selectedUser.name.first} ${selectedUser.name.last}`} />
                      <AvatarFallback className="bg-gradient-to-br from-[#a3816a] to-[#0a065d] text-white">
                        {selectedUser.name.first[0]}{selectedUser.name.last[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-[#d2c8c8]">{selectedUser.name.first} {selectedUser.name.last}</span>
                    <span className="text-sm text-[#d2c8c8]/70">{selectedUser.email}</span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-3 text-[#d2c8c8]/80">
                  <Search className="h-5 w-5 animate-pulse" />
                  <span className="text-base">Search by name, email, or country...</span>
                </div>
              )}
              <ChevronsUpDown className={cn("ml-2 h-5 w-5 shrink-0 transition-transform duration-200", open ? "rotate-180" : "")} />
            </Button>
          </PopoverTrigger>
          
          <PopoverContent className="w-full p-0 bg-gradient-to-b from-[#0a065d] to-[#0a065d]/90 border-[#a3816a]/30 backdrop-blur-sm" align="start">
            <Command className="bg-transparent">
              <CommandInput 
                placeholder="Search users..." 
                value={searchValue}
                onValueChange={setSearchValue}
                className="h-12 text-[#d2c8c8] placeholder:text-[#d2c8c8]/50"
              />
              <CommandEmpty className="py-6 text-center text-[#d2c8c8]/70">
                <div className="flex flex-col items-center gap-2">
                  <User className="h-8 w-8 text-[#a3816a]" />
                  <span>No users found matching your search</span>
                </div>
              </CommandEmpty>
              
              <CommandGroup className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-[#a3816a]/30 scrollbar-track-transparent">
                {filteredUsers.map((user, index) => (
                  <CommandItem
                    key={`${user.name.first}-${user.name.last}-${index}`}
                    value={`${user.name.first} ${user.name.last} ${user.email}`}
                    onSelect={() => {
                      onSelectUser(user);
                      setOpen(false);
                    }}
                    className="flex items-center space-x-4 p-4 cursor-pointer hover:bg-[#a3816a]/10 transition-all duration-200 group"
                  >
                    <div className="relative">
                      <Avatar className="h-12 w-12 ring-2 ring-transparent group-hover:ring-[#a3816a]/50 transition-all duration-200">
                        <AvatarImage src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} />
                        <AvatarFallback className="bg-gradient-to-br from-[#a3816a] to-[#0a065d] text-white">
                          {user.name.first[0]}{user.name.last[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3">
                        <p className="font-semibold text-[#d2c8c8] truncate group-hover:text-white transition-colors">
                          {user.name.first} {user.name.last}
                        </p>
                        <Badge 
                          variant="outline" 
                          className="text-xs bg-[#a3816a]/20 border-[#a3816a]/40 text-[#d2c8c8] group-hover:bg-[#a3816a]/30 transition-colors"
                        >
                          <MapPin className="h-3 w-3 mr-1" />
                          {user.location.country}
                        </Badge>
                      </div>
                      <p className="text-sm text-[#d2c8c8]/70 truncate group-hover:text-[#d2c8c8] transition-colors">
                        {user.email}
                      </p>
                    </div>
                    
                    <Check
                      className={cn(
                        "ml-2 h-5 w-5 text-[#a3816a] transition-all duration-200",
                        selectedUser?.email === user.email ? "opacity-100 scale-100" : "opacity-0 scale-75"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        
        {selectedUser && (
          <div className="flex justify-between items-center animate-fade-in">
            <div className="text-md text-[#a3816a]">
              Selected: <span className="text-[#0a065d] font-medium">{selectedUser.name.first} {selectedUser.name.last}</span>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => onSelectUser(null)}
              className="text-[#a3816a] text-md hover:text-[#0a065d] bg-[#a3816a]/10 transition-all duration-200"
            >
              Clear selection
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
