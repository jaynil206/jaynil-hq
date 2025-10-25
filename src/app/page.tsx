import SplitPaneLayout from './components/SplitPaneLayout';

export default function Home() {
  return (
    <SplitPaneLayout>
      <div className="text-left">
        <h1 className="text-base font-medium mb-4">Welcome</h1>
        <p className="text-base">Select a section from the navigation to get started.</p>
      </div>
    </SplitPaneLayout>
  );
}
