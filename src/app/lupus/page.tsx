import Link from 'next/link';
import SplitPaneLayout from '../components/SplitPaneLayout';

export default function LupusPage() {
  return (
    <SplitPaneLayout>
      <div className="text-left">
        <h1 className="text-base font-medium mb-4">About Lupus UK</h1>
        <p className="text-base">under construction. will update with info about lupus and lupus uk charity. for now, you can just go to their <Link href="https://lupusuk.org.uk/what-is-lupus/" target="_blank" className="underline">website</Link> to find out more.</p>
      </div>
    </SplitPaneLayout>
  );
}