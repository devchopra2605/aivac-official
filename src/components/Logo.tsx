import React from 'react';
import { Wind } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white p-2 rounded-md">
      <Wind className="h-6 w-6" />
    </div>
  );
};

export default Logo;