'use client';

import Link from 'next/link';

interface CanvasProps {
  children?: React.ReactNode;
}

export default function Canvas({ children }: CanvasProps) {
  return (
    <main className="h-full overflow-y-auto">
      {/* Mobile back button */}
      <div className="lg:hidden p-8 border-b border-gray-300">
        <Link href="/" className="text-base underline">
          Back
        </Link>
      </div>

      {/* Content area */}
      <div className="p-8">
        {children || (
          <div className="text-left">
            <h1 className="text-base font-medium mb-4">Welcome</h1>
            <p className="text-base">Select a section from the navigation to get started.</p>
          </div>
        )}
      </div>
    </main>
  );
}