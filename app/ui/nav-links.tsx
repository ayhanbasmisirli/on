'use client';
import {
  UserGroupIcon,
  Cog6ToothIcon,
  Squares2X2Icon,
  ClipboardDocumentIcon,
  BoltIcon,
  Square2StackIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Dashboard', href: '/dashboard', icon: Squares2X2Icon },
  { name: 'Campaign', href: '/campaign', icon: BoltIcon },
  { name: 'Audience', href: '/', icon: UserGroupIcon },
  { name: 'Flows', href: '/flows', icon: Square2StackIcon },
  { name: 'Content', href: '/content', icon: ClipboardDocumentIcon },
  { name: 'Settings', href: '/settings ', icon: Cog6ToothIcon },
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
