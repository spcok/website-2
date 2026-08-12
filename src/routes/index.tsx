import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
      <h1 className="text-5xl font-bold text-stone-900 mb-6">
        Welcome to Kent Owl Academy
      </h1>
      <p className="text-xl text-stone-600 max-w-2xl">
        The TanStack routing engine is successfully connected and Tailwind CSS is active.
      </p>
    </div>
  );
}