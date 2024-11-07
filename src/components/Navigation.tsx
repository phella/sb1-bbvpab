import React from 'react';
import { Home, Car, Search, User } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-4">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <NavItem icon={Home} label="Home" active />
          <NavItem icon={Car} label="Rides" />
          <NavItem icon={Search} label="Search" />
          <NavItem icon={User} label="Account" />
        </div>
      </div>
    </nav>
  );
}

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}

function NavItem({ icon: Icon, label, active }: NavItemProps) {
  return (
    <button className="flex flex-col items-center gap-1">
      <Icon className={`h-6 w-6 ${active ? 'text-emerald-600' : 'text-gray-500'}`} />
      <span className={`text-sm ${active ? 'text-emerald-600' : 'text-gray-500'}`}>{label}</span>
    </button>
  );
}