import SplitPaneLayout from '../components/SplitPaneLayout';
import Image from 'next/image';

export default function JaynilPage() {
  return (
    <SplitPaneLayout>
      <div className="text-left">
        <h1 className="text-base font-medium mb-4">About Jaynil</h1>
        <p className="text-base">Learn more about Jaynil&apos;s journey and motivation for running the London Marathon.</p>
        <Image src="/images/meme.png" alt="Jaynil" width={1200} height={630}/>
      </div>
    </SplitPaneLayout>
  );
}