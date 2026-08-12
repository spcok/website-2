import { createRouter as createTanStackRouter, Link } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

function DefaultNotFound() {
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

export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
    defaultNotFoundComponent: DefaultNotFound,
  });

  return router;
}

export function getRouter() {
  return createRouter();
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
