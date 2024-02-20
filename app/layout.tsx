import '@/app/ui/global.css';
import { dmsans } from '@/app/ui/fonts';
import SideNav from './ui/sidenav';

import { AntdRegistry } from '@ant-design/nextjs-registry';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmsans.className} antialiased`}>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            <AntdRegistry>{children}</AntdRegistry>
          </div>
        </div>
      </body>
    </html>
  );
}
