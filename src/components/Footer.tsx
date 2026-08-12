
import { GlobalSettings } from '../types';

interface FooterProps {
  settings: GlobalSettings;
}

export default function Footer({ settings }: FooterProps) {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 border-t-4 border-emerald-700">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Contact */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Contact Us</h3>
          <address className="not-italic flex flex-col gap-2">
            <p>{settings.address}</p>
            <p>
              <a href={`tel:${settings.phone}`} className="hover:text-emerald-400 transition-colors">{settings.phone}</a>
            </p>
            <p>
              <a href={`mailto:${settings.email}`} className="hover:text-emerald-400 transition-colors">{settings.email}</a>
            </p>
          </address>
        </div>

        {/* Column 2: Opening Times & Alerts */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Visiting</h3>
          <p className="mb-4 text-sm leading-relaxed">{settings.openingHours}</p>
          {settings.announcementText && (
            <div className="bg-stone-800 p-4 rounded-md border-l-4 border-yellow-500">
              <p className="text-sm font-semibold text-white">{settings.announcementText}</p>
            </div>
          )}
        </div>

        {/* Column 3: Socials & Trust */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Connect</h3>
          <div className="flex gap-4 mb-6">
            {settings.facebookUrl && (
              <a href={settings.facebookUrl} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors font-medium">Facebook</a>
            )}
            {settings.instagramUrl && (
              <a href={settings.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors font-medium">Instagram</a>
            )}
          </div>
          <div className="bg-stone-800 p-4 rounded-md inline-block">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <span className="font-bold text-white">{settings.tripAdvisorRating}</span>
            </div>
            <p className="text-xs">Based on {settings.tripAdvisorReviewsCount} reviews</p>
          </div>
        </div>
        
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-stone-800 text-center text-sm text-stone-500">
        &copy; {new Date().getFullYear()} Kent Owl Academy. All rights reserved.
      </div>
    </footer>
  );
}