import { Link } from '@tanstack/react-router';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-stone-900 text-stone-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img 
            src="/logo.png" 
            alt="Kent Owl Academy Logo" 
            className="h-12 w-auto object-contain bg-white rounded-full p-1" 
            onError={(e) => (e.currentTarget.style.display = 'none')} 
          />
          <span className="font-bold text-xl tracking-tight hidden sm:block">Kent Owl Academy</span>
        </Link>
        
        <nav className="flex items-center gap-6 font-medium">
          <Link to="/experiences" className="hover:text-emerald-400 transition-colors [&.active]:text-emerald-400">Experiences</Link>
          <Link to="/animals" className="hover:text-emerald-400 transition-colors [&.active]:text-emerald-400">The Aviary</Link>
          <Link to="/contact" className="hover:text-emerald-400 transition-colors [&.active]:text-emerald-400">Contact</Link>
        </nav>
      </div>
    </header>
  );
}