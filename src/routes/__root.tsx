import { createRootRoute, Outlet } from '@tanstack/react-router';
import { getGlobalSettings } from '../lib/sanity';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const Route = createRootRoute({
  loader: async () => {
    // This runs on the server before the page is delivered to the browser
    const settings = await getGlobalSettings();
    return { settings };
  },
  component: RootComponent,
});

function RootComponent() {
  const { settings } = Route.useLoaderData();

  return (
    <div className="min-h-screen flex flex-col font-sans bg-stone-50 text-stone-900">
      <Header />
      
      {/* The main content area where child routes render */}
      <main className="flex-1">
        <Outlet />
      </main>
      
      <Footer settings={settings} />
    </div>
  );
}