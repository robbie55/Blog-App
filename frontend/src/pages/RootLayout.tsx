import Sidebar from '../components/Sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', overflow: 'hidden', height: '100vh' }}>
      <Sidebar />
      <main style={{ flex: '1 1 auto', minWidth: '0', overflow: 'hidden' }}>
        {children}
      </main>
    </div>
  );
}
