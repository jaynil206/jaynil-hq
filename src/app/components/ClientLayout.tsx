'use client';

import { usePathname } from 'next/navigation';
import Nav from './Nav';
import Canvas from './Canvas';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();
  
  return (
    <div className="min-h-screen">
      {/* Desktop Layout: Side-by-side */}
      <div className="hidden lg:grid lg:grid-cols-[320px_1fr] lg:h-screen">
        <Nav />
        <Canvas>
          {children}
        </Canvas>
      </div>
      
      {/* Mobile Layout: Full screen toggle */}
      <div className="block lg:hidden h-screen">
        {pathname === '/' ? <Nav /> : <Canvas>{children}</Canvas>}
      </div>
    </div>
  );
}
