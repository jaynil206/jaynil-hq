import SplitPaneLayout from './components/SplitPaneLayout';

export default function Home() {
  return (
    <SplitPaneLayout>
      <div className="text-left">
        <h1 className="text-base font-medium mb-4">Welcome</h1>
        <p className="text-base">this site is under construction. click underlined words to navigate to different sections e.g. &apos;jaynil&apos; or &apos;running&apos;.</p>
      </div>
    </SplitPaneLayout>
  );
}
