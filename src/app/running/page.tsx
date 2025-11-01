import Link from 'next/link';
import SplitPaneLayout from '../components/SplitPaneLayout';

export default function RunningPage() {
  return (
    <SplitPaneLayout>
      <div className="text-left">
        <h1 className="text-base font-medium mb-4">how training is going</h1>
        <p className="text-base">under construction. will update with log of my runs, stats, etc. for now you can follow me on <Link href="https://www.strava.com/athletes/40391750" target="_blank" className="underline">Strava</Link>.</p>
      </div>
    </SplitPaneLayout>
  );
}