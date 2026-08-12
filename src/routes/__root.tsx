import { createRootRoute, Outlet, Link } from '@tanstack/react-router';
import { getGlobalSettings } from '../lib/sanity';
import Header from '../components/Header';
import Footer from '../components/Footer';

function NotFoundComponent() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <h1 className="text-6xl font-extrabold text-stone-800 mb-2">404</h1>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Page Not Found</h2>
      <p className="text-stone-600 mb-6 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors shadow-sm"
      >
        Back to Home
      </Link>
    </div>
  );
}

export const Route = createRootRoute({
  loader: async () => {
    // This runs on the server before the page is delivered to the browser
    const settings = await getGlobalSettings();
    return { settings };
  },
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
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