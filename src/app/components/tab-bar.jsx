'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const routes = [
  { key: 'home', icon: 'fi-rr-house-chimney', address: '/' },
  { key: 'dashboard', icon: 'fi-rr-apps', address: '/dashboard' },
  { key: 'new', icon: 'fi-rr-bell', address: '/new' },
  // { key: 'new', icon: 'fi-rr-add-document', address: '/new' },
  { key: 'profile', icon: 'fi-rr-user', address: '/profile' },
];

const TabBarButton = ({ isActive, icon, address }) => {
  const activeClasses = isActive ? ' bg-gradient-primary' : '';

  return (
    <Link href={address} className={`w-full p-3 rounded-md${activeClasses}`}>
      <i className={`fi ${icon} flex items-center justify-center`}></i>
    </Link>
  );
};

const TabBar = () => {
  const pathname = usePathname();
  const currentRoute =
    routes.find((route) => pathname.includes(route.key)) || routes[0];

  return (
    <footer className="w-full">
      <div className="mx-auto max-w-md flex p-2 gap-2 justify-around items-center bg-base-100 border-t">
        {routes.map((route) => (
          <TabBarButton
            key={route.key}
            isActive={currentRoute.key === route.key}
            icon={route.icon}
            address={route.address}
          />
        ))}
      </div>
    </footer>
  );
};

export default TabBar;
