import React from 'react';
import { Button } from '@/components/ui/button';
import { Home, Users } from 'lucide-react';

export default function ActionButtons() {
  return (
    <div className="flex items-center gap-4">
      <Button className="flex items-center gap-2 bg-white text-gray-700 hover:bg-gray-50 border border-gray-300">
        <Home className="h-4 w-4" />
        Find Companies
      </Button>

      <Button className="flex items-center gap-2 bg-white text-gray-700 hover:bg-gray-50 border border-gray-300">
        <Users className="h-4 w-4" />
        Find People
      </Button>
      <Button className="flex items-center gap-2 !bg-black !text-white hover:!bg-neutral-900">
        <span className="text-xl font-bold">+</span> New Grid
      </Button>
    </div>
  );
}
