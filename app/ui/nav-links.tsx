'use client';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Campaign', href: '/campaign', icon: DocumentDuplicateIcon },
  { name: 'Audience', href: '/', icon: UserGroupIcon },
  { name: 'Flows', href: '/flows', icon: HomeIcon },
  { name: 'Content', href: '/content', icon: HomeIcon },
  { name: 'Settings', href: '/settings ', icon: HomeIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'rounded-mdp-3  flex h-[48px] grow items-center justify-center gap-5 text-xs md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'text-[#8241ff]': pathname === link.href,
                'text-[#c5c5c5]': pathname !== link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
