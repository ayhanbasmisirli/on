import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="border-black-900 flex h-full flex-col justify-center border-r px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-center justify-center rounded-md p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-7xl font-thin text-black md:w-40">ONO</div>
      </Link>
      <div className="ml-4 hidden text-xs text-[#c5c5c5] md:block">Menu</div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md  md:block"></div>
        <form>
          <button className="flex h-[48px] w-full items-center justify-center gap-3 rounded-md bg-[#8241ff] text-sm font-medium text-white md:flex-none md:justify-start md:p-2  md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">
              <div>
                <p>Logout</p>
              </div>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
