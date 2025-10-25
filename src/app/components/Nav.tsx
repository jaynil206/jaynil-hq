import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="p-8 border-r border-gray-300 h-full">
      <div className="text-left">
        <p className="text-base mb-8">
          hi, <Link href="/jaynil" className="underline">jaynil</Link> is <Link href="/running" className="underline">running</Link> the <Link href="/running" className="underline">london marathon</Link> to raise money for <Link href="/lupus" className="underline">Lupus UK</Link> in memory of <Link href="/hiral" className="underline">Hiral</Link> (his mum).
        </p>
        
        <div className="text-left">
          <a
            href="https://www.justgiving.com/fundraising/jaynil-marathon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base underline"
          >
            support the cause
          </a>
        </div>
      </div>
    </nav>
  );
}