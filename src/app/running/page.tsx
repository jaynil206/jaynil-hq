import SplitPaneLayout from '../components/SplitPaneLayout';

export default function RunningPage() {
  return (
    <SplitPaneLayout>
      <div className="text-left">
        <h1 className="text-base font-medium mb-4">Running Stats</h1>
        <p className="text-base">Strava integration and running statistics will be displayed here.</p>
      </div>
    </SplitPaneLayout>
  );
}