import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, User as UserIcon, Crown, Star, Globe, Sparkles } from 'lucide-react';
import { User } from '@/types/user';

interface UserDetailsProps {
  user: User | null;
}

export const UserDetails = ({ user }: UserDetailsProps) => {
  if (!user) {
    return (
      <Card className="w-full max-w-6xl mx-auto bg-gradient-to-b bg-[#0a065d] backdrop-blur-sm border-[#a3816a]/20 shadow-xl">
        <CardContent className="flex flex-col items-center justify-center py-20 text-center">
          <div className="relative">
            <div className="rounded-full bg-gradient-to-br from-[#a3816a]/20 to-[#a3816a]/30 p-6 mb-6 animate-pulse">
              <UserIcon className="h-16 w-16 text-[#a3816a]/60" />
            </div>
            <Sparkles className="absolute -top-2 -right-2 h-8 w-8 text-[#a3816a] animate-bounce" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-[#d2c8c8]">No User Selected</h3>
          <p className="text-[#d2c8c8]/70 max-w-md">
            Please select a user from the dropdown above to view their detailed information
          </p>
          <div className="mt-6 flex items-center gap-2 text-[#a3816a]/60">
            <Star className="h-4 w-4 animate-pulse" />
            <span className="text-sm">Waiting for selection...</span>
            <Star className="h-4 w-4 animate-pulse" style={{animationDelay: '0.5s'}} />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-6xl mx-auto bg-gradient-to-b bg-[#0a065d] backdrop-blur-sm border-[#a3816a]/20 shadow-2xl shadow-[#a3816a]/10 animate-fade-in">
      <CardHeader className="pb-6 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#a3816a]/5 to-transparent"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#a3816a]/5 rounded-full blur-3xl"></div>
        
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8 relative z-10">
          <div className="relative">
            <Avatar className="h-40 w-40 ring-4 ring-[#a3816a]/30 shadow-2xl shadow-[#a3816a]/20 animate-fade-in">
              <AvatarImage 
                src={user.picture.large} 
                alt={`${user.name.first} ${user.name.last}`} 
                className="object-cover"
              />
              <AvatarFallback className="text-3xl bg-gradient-to-br from-[#a3816a] to-[#0a065d] text-white">
                {user.name.first[0]}{user.name.last[0]}
              </AvatarFallback>
            </Avatar>
            {/* Status indicator */}
            <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2 animate-pulse">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          
          <div className="text-center sm:text-left flex-1">
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#d2c8c8] to-[#a3816a] bg-clip-text text-transparent">
                {user.name.title} {user.name.first} {user.name.last}
              </h1>
              <Sparkles className="absolute -top-4 -right-8 h-6 w-6 text-[#a3816a] animate-spin-slow" />
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start mb-4">
              <Badge 
                variant="secondary" 
                className="capitalize bg-gradient-to-r from-[#a3816a]/20 to-[#a3816a]/30 border-[#a3816a]/40 text-[#d2c8c8] px-4 py-2"
              >
                {user.gender}
              </Badge>
              <Badge 
                variant="outline" 
                className="bg-[#a3816a]/10 border-[#a3816a]/40 text-[#d2c8c8] px-4 py-2"
              >
                <MapPin className="h-4 w-4 mr-2 animate-pulse" />
                {user.location.country}
              </Badge>
            </div>
            
            {/* Quick stats */}
            <div className="flex items-center gap-2 text-[#d2c8c8]/70 justify-center sm:justify-start">
              <Globe className="h-4 w-4" />
              <span className="text-sm">Member since 2024</span>
              <Star className="h-4 w-4 ml-2 text-yellow-500" />
              <span className="text-sm">Verified User</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <Separator className="bg-[#a3816a]/20" />
      
      <CardContent className="pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-[#a3816a]/20 to-[#a3816a]/30 rounded-lg">
                <Mail className="h-5 w-5 text-[#a3816a]" />
              </div>
              <h3 className="text-xl font-semibold text-[#d2c8c8]">Contact Information</h3>
            </div>
            
            <div className="space-y-5">
              <div className="group flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-[#0a065d]/80 to-[#0a065d]/60 backdrop-blur-sm hover:from-[#a3816a]/10 hover:to-[#a3816a]/20 transition-all duration-300 border border-[#a3816a]/10 hover:border-[#a3816a]/20">
                <div className="rounded-full bg-gradient-to-br from-[#a3816a]/30 to-[#a3816a]/40 p-3 group-hover:scale-110 transition-transform duration-200">
                  <Mail className="h-5 w-5 text-[#d2c8c8]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#d2c8c8]/70 mb-1">Email Address</p>
                  <p className="text-[#d2c8c8] font-semibold truncate group-hover:text-white transition-colors">
                    {user.email}
                  </p>
                </div>
              </div>
              
              <div className="group flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-[#0a065d]/80 to-[#0a065d]/60 backdrop-blur-sm hover:from-[#a3816a]/10 hover:to-[#a3816a]/20 transition-all duration-300 border border-[#a3816a]/10 hover:border-[#a3816a]/20">
                <div className="rounded-full bg-gradient-to-br from-[#a3816a]/30 to-[#a3816a]/40 p-3 group-hover:scale-110 transition-transform duration-200">
                  <Phone className="h-5 w-5 text-[#d2c8c8]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#d2c8c8]/70 mb-1">Phone Number</p>
                  <p className="text-[#d2c8c8] font-semibold group-hover:text-white transition-colors">
                    {user.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="animate-slide-in-right">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-[#a3816a]/20 to-[#a3816a]/30 rounded-lg">
                <UserIcon className="h-5 w-5 text-[#a3816a]" />
              </div>
              <h3 className="text-xl font-semibold text-[#d2c8c8]">Additional Details</h3>
            </div>
            
            <div className="space-y-5">
              <div className="group flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-[#0a065d]/80 to-[#0a065d]/60 backdrop-blur-sm hover:from-[#a3816a]/10 hover:to-[#a3816a]/20 transition-all duration-300 border border-[#a3816a]/10 hover:border-[#a3816a]/20">
                <div className="rounded-full bg-gradient-to-br from-[#a3816a]/30 to-[#a3816a]/40 p-3 group-hover:scale-110 transition-transform duration-200">
                  <MapPin className="h-5 w-5 text-[#d2c8c8]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#d2c8c8]/70 mb-1">Location</p>
                  <p className="text-[#d2c8c8] font-semibold group-hover:text-white transition-colors">
                    {user.location.country}
                  </p>
                </div>
              </div>
              
              <div className="group flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-[#0a065d]/80 to-[#0a065d]/60 backdrop-blur-sm hover:from-[#a3816a]/10 hover:to-[#a3816a]/20 transition-all duration-300 border border-[#a3816a]/10 hover:border-[#a3816a]/20">
                <div className="rounded-full bg-gradient-to-br from-[#a3816a]/30 to-[#a3816a]/40 p-3 group-hover:scale-110 transition-transform duration-200">
                  <Crown className="h-5 w-5 text-[#d2c8c8]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#d2c8c8]/70 mb-1">Title</p>
                  <p className="text-[#d2c8c8] font-semibold capitalize group-hover:text-white transition-colors">
                    {user.name.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};