import { createFileRoute, Link } from '@tanstack/react-router';
// import { sanityClient } from '../lib/sanity'; // Uncomment when your client is ready

export const Route = createFileRoute('/')({
  loader: async () => {
    // 1. The actual GROQ query to pull your live data
    // const query = `{
    //   "settings": *[_type == "globalSettings"][0],
    //   "experiences": *[_type == "experience"][0...3] {
    //     _id, title, slug, description, "imageUrl": image.asset->url
    //   },
    //   "animalsPool": *[_type == "animal"] {
    //     name, species, bio, "imageUrl": image.asset->url
    //   }
    // }`;
    // const data = await sanityClient.fetch(query);

    // 2. Client-side randomization for the Resident Spotlight
    // const randomAnimal = data.animalsPool[Math.floor(Math.random() * data.animalsPool.length)];

    // MOCK RETURN (matches the exact shape Sanity will return based on the query above)
    const mockAnimalsPool = [
      { name: "Barnaby", species: "Barn Owl", bio: "Barnaby is one of our most experienced flying team members.", imageUrl: "https://images.unsplash.com/photo-1518992028580-6d57bd80f2dd?auto=format&fit=crop&q=80" },
      { name: "Apollo", species: "Golden Eagle", bio: "A massive and majestic bird, Apollo commands attention.", imageUrl: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&q=80" }
    ];

    return {
      settings: {
        location: "Kent Life Farm Park, Maidstone",
        openingHours: "Open 7 Days a Week: 10:00 AM - 5:00 PM",
        tripAdvisorRating: 5,
      },
      experiences: [
        { _id: '1', title: "The Owl Encounter", slug: { current: 'the-owl-encounter' }, description: "A hands-on experience with our amazing owls.", imageUrl: "https://images.unsplash.com/photo-1543158021-381c19b67f33?auto=format&fit=crop&q=80" },
        { _id: '2', title: "The Eagle Experience", slug: { current: 'the-eagle-experience' }, description: "Meet nature's most powerful predators up close.", imageUrl: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&q=80" },
      ],
      // Pick a random bird from the pool for this specific page load
      featuredBird: mockAnimalsPool[Math.floor(Math.random() * mockAnimalsPool.length)]
    };
  },
  component: HomePage,
});

function HomePage() {
  const { settings, experiences, featuredBird } = Route.useLoaderData();

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans">
      
      {/* --- SITE HEADER & NAVIGATION --- */}
      <header className="bg-black text-white sticky top-0 z-50 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          
          {/* Logo Container */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Replace src with your actual Kent Owl Academy logo asset */}
            <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center overflow-hidden border border-zinc-700 group-hover:border-emerald-500 transition-colors">
               <img src="/koa-logo.png" alt="Kent Owl Academy Logo" className="w-8 h-8 object-contain" />
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">
              Kent Owl Academy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-zinc-300">
            <Link to="/experiences" className="hover:text-emerald-400 transition-colors">Experiences</Link>
            <Link to="/education" className="hover:text-emerald-400 transition-colors">Education</Link>
            <Link to="/meet-the-birds" className="hover:text-emerald-400 transition-colors">Meet the Birds</Link>
            <Link to="/meet-the-team" className="hover:text-emerald-400 transition-colors">Meet the Team</Link>
            <Link to="/whats-on" className="hover:text-emerald-400 transition-colors">What's On?</Link>
            <Link to="/visit-us" className="hover:text-emerald-400 transition-colors">Visit Us</Link>
            <Link to="/contact-us" className="hover:text-emerald-400 transition-colors">Contact Us</Link>
          </nav>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[75vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1579737130922-03e5c9a444a7?auto=format&fit=crop&q=80" 
            alt="Owl in flight" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">
            Let Your Fascination Soar
          </h1>
          <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto font-medium">
            Experience the natural world of owls and raptors up close at Kent's 5-star bird of prey centre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/experiences" 
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-lg transition-colors"
            >
              View Experiences
            </Link>
          </div>
        </div>
      </section>

      {/* --- TRUST BAR --- */}
      <section className="bg-zinc-950 border-y border-zinc-900 text-zinc-400 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
            <span>{settings.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
            <span>{settings.openingHours}</span>
          </div>
        </div>
      </section>

      {/* --- FEATURED EXPERIENCES --- */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4 tracking-tight">Unforgettable Encounters</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">Guided hands-on experiences powered by our expert falconers.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <div key={exp._id} className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden flex flex-col group transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden bg-zinc-100">
                <img 
                  src={exp.imageUrl} 
                  alt={exp.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-black mb-3">{exp.title}</h3>
                <p className="text-zinc-600 mb-8 flex-grow leading-relaxed">{exp.description}</p>
                <Link 
                  to="/experiences/$slug" 
                  params={{ slug: exp.slug.current }}
                  className="w-full py-4 px-4 bg-black hover:bg-zinc-800 text-white font-bold text-center rounded-lg transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- RESIDENT SPOTLIGHT --- */}
      <section className="bg-black text-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-emerald-500 font-bold tracking-widest uppercase text-xs mb-4 block">Resident Spotlight</span>
            <h2 className="text-5xl font-extrabold mb-2 tracking-tight">Meet {featuredBird.name}</h2>
            <h4 className="text-xl text-zinc-400 mb-8 italic font-light">{featuredBird.species}</h4>
            <p className="text-zinc-300 text-lg leading-relaxed mb-10">
              {featuredBird.bio}
            </p>
            <Link 
              to="/meet-the-birds" 
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-zinc-700 hover:border-emerald-500 rounded-lg font-bold transition-colors"
            >
              Meet the rest of the team
            </Link>
          </div>
          <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl relative h-[600px] bg-zinc-900">
             <img 
              src={featuredBird.imageUrl} 
              alt={featuredBird.name} 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

    </div>
  );
}