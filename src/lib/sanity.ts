import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { Animal, Experience, GlobalSettings } from '../types';

// Retrieve environment credentials if set
const env = (import.meta as any).env || {};
const projectId = env.VITE_SANITY_PROJECT_ID || 'd3k9x101'; // Default project placeholder
const dataset = env.VITE_SANITY_DATASET || 'production';
const apiVersion = '2024-01-01';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  if (!source) return '';
  if (typeof source === 'string') return source;
  try {
    return builder.image(source).url();
  } catch {
    return typeof source === 'string' ? source : '';
  }
}

// Check if client is using real Sanity instance or fallback
export let isUsingSanityCms = false;

// Curated Kent Owl Academy Global Settings Fallback
export const fallbackGlobalSettings: GlobalSettings = {
  siteTitle: 'Kent Owl Academy | Bird Displays, Experiences & Education',
  metaDescription: 'Experience the natural world of owls, raptors, and animals up close at Kent Life Heritage Farm Park, Maidstone.',
  announcementText: 'Located at Kent Life, Maidstone | Pre-booking required for all experience days.',
  phone: '07535471588',
  email: 'admin@kentowlacademy.com',
  address: 'Kent Owl Academy, Kent Life, Lock Lane, Sandling, Maidstone, ME14 3AU',
  openingHours: 'Check Kent Life opening times. All experiences must be pre-booked.',
  facebookUrl: 'https://www.facebook.com/kentowlacademy',
  instagramUrl: 'https://www.instagram.com/kent_owls',
  tripAdvisorRating: 5.0,
  tripAdvisorReviewsCount: 200,
};

// Curated Kent Owl Academy Experiences Mock Data
export const fallbackExperiences: Experience[] = [
  {
    _id: 'exp-1',
    title: 'VIP Owl Encounter',
    slug: { current: 'vip-owl-encounter' },
    category: 'owl-encounter',
    shortDescription: 'Hold, fly, and feed up to 5 species of majestic owls in a 1-on-1 hands-on session with our expert falconers.',
    fullDescription: `Step into the enchanted world of owls with our flagship VIP Owl Encounter. During this intimate 90-minute session, you'll be introduced to 5 different owl species ranging from the delicate Little Owl to the formidable Eurasian Eagle Owl.

You will learn the secrets of their silent flight, feather aerodynamics, hunting camouflage, and conservation story. Under the gentle guidance of our senior falconers, you will put on a leather gauntlet glove and experience the awe of having owls land directly on your arm.

Perfect for owl enthusiasts, nature lovers, or anyone seeking a magical memory in Kent.`,
    price: 45,
    duration: '1.5 Hours',
    maxParticipants: 4,
    minAge: 8,
    featured: true,
    includedItems: [
      'Personal Falconer Guide',
      'Flight gauntlet provided',
      'Fly 5 distinct owl species',
      'Feeding & handling experience',
      'Free entry to Kent Life Heritage Farm Park',
      'Souvenir digital photo pass'
    ],
    requirements: [
      'Sturdy closed-toe footwear required',
      'Dress appropriately for outdoor weather',
      'Children under 16 must be accompanied by a paying adult'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1543549790-8b5f4a028cfb?auto=format&fit=crop&q=80&w=1200',
    rating: 5.0,
    reviewCount: 320,
  },
  {
    _id: 'exp-2',
    title: 'Half-Day Falconry Experience',
    slug: { current: 'half-day-falconry-experience' },
    category: 'falconry',
    shortDescription: 'Master the ancient art of falconry. Fly hawks, falcons, and owls in our dedicated arena and woodland flyway.',
    fullDescription: `Delve deep into the heritage sport of kings! Our 3-hour Half-Day Falconry Experience takes you through the history, husbandry, and thrilling mechanics of raptor flight.

After an safety briefing and introduction in our weathering area, you'll practice handling gauntlet techniques before taking Harris's Hawks into our woodland walk area for 'free-flying' from tree to glove. Watch falcons stoop through the air and handle apex nocturnal predators.

Includes light refreshments and a chance to meet our entire collection of 30+ birds.`,
    price: 85,
    duration: '3.0 Hours',
    maxParticipants: 6,
    minAge: 12,
    featured: true,
    includedItems: [
      '3 hours hands-on raptor training',
      'Free-fly Harris Hawks in woodland walk',
      'Fly falcons and large owl species',
      'Complimentary tea, coffee & biscuits',
      'Full park admission included',
      'Personalized completion voucher'
    ],
    requirements: [
      'Good mobility for outdoor terrain',
      'No bright loose umbrellas during flying',
      'Minimum age 12 years'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&q=80&w=1200',
    rating: 4.9,
    reviewCount: 198,
  },
  {
    _id: 'exp-3',
    title: 'Bird of Prey Photography Workshop',
    slug: { current: 'bird-of-prey-photography-workshop' },
    category: 'photography',
    shortDescription: 'Capture striking portrait shots and high-speed flight action with natural mossy backgrounds and static perches.',
    fullDescription: `Designed specifically for photographers of all skill levels—from smartphones to pro DSLR/mirrorless setups! Get unprecedented, barrier-free access to our birds in authentic, naturalistic settings.

Our team poses our resident owls, hawks, and falcons on mossy stumps, rustic barn timbers, and lush autumn foliage without jesses visible where possible. Includes guided flight sessions for capturing dramatic action shots in mid-air.`,
    price: 95,
    duration: '4.0 Hours',
    maxParticipants: 8,
    minAge: 14,
    featured: true,
    includedItems: [
      'Barrier-free photo perches in natural habitats',
      'Dedicated flight passes for action photography',
      'Macro portrait opportunities with 8+ species',
      'Falconer posing assistants',
      'Lunch voucher at Kent Life Tearoom'
    ],
    requirements: [
      'Bring your own camera/lens setup',
      'Tripods/Monopods permitted',
      'Weatherproof gear recommended'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=1200',
    rating: 5.0,
    reviewCount: 142,
  },
  {
    _id: 'exp-4',
    title: 'Junior Keeper Experience (Ages 6-15)',
    slug: { current: 'junior-keeper-experience' },
    category: 'children',
    shortDescription: 'An inspiring hands-on morning for young animal lovers! Prepare meals, clean aviaries, fly gentle owls, and earn a certificate.',
    fullDescription: `Give young wildlife champions an unforgettable behind-the-scenes adventure! Under direct supervision, junior keepers get their hands dirty preparing nutritious diets, learning bird health checks, weighing raptors, and flying friendly barn owls.

A educational, interactive experience that fosters deep respect for UK wildlife and conservation. Includes a signed Junior Falconer Certificate and badge!`,
    price: 55,
    duration: '2.0 Hours',
    maxParticipants: 4,
    minAge: 6,
    featured: false,
    includedItems: [
      'Hands-on keeper duties',
      'Fly friendly barn owls and screech owls',
      'Official Junior Falconer Certificate & Badge',
      '1 Accompanying adult free entry pass'
    ],
    requirements: [
      '1 Parent or Guardian must remain on park grounds',
      'Wear clothes that can get slightly dusty'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1574063413132-355dbfd83e0c?auto=format&fit=crop&q=80&w=1200',
    rating: 4.9,
    reviewCount: 115,
  },
  {
    _id: 'exp-5',
    title: 'Exclusive Private Family & Group Booking',
    slug: { current: 'exclusive-private-family-group' },
    category: 'group',
    shortDescription: 'Private access for your family, birthday, or corporate team. Customized flying itinerary tailored to your group size.',
    fullDescription: `Enjoy completely exclusive access to Kent Owl Academy for your private party or corporate team building event. Tailored entirely to your wishes—whether you want a relaxed owl-focused afternoon tea or an adrenaline-filled raptor flying show.`,
    price: 240,
    duration: '2.5 Hours',
    maxParticipants: 12,
    minAge: 4,
    featured: false,
    includedItems: [
      'Exclusive access to the flying arena',
      'Custom choice of bird species',
      'Group photo opportunity',
      'Private seating area'
    ],
    requirements: [
      'Advance booking required',
      'Contact team for tailored catering options'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200',
    rating: 5.0,
    reviewCount: 67,
  }
];

// Curated Kent Owl Academy Animals / Birds Mock Data
export const fallbackAnimals: Animal[] = [
  {
    _id: 'bird-1',
    name: 'Barnaby',
    species: 'British Barn Owl',
    scientificName: 'Tyto alba',
    type: 'owl',
    wingspan: '85 - 93 cm',
    weight: '330g',
    diet: 'Field voles, shrews, mice',
    origin: 'Native UK',
    funFact: 'Barnaby’s heart-shaped facial disc acts like a satellite dish, directing subtle sounds straight to his asymmetrical ear openings!',
    bio: 'Barnaby is our star ambassador barn owl, famous for his silky white plumage and whisper-silent flight demonstrations.',
    imageUrl: 'https://images.unsplash.com/photo-1543549790-8b5f4a028cfb?auto=format&fit=crop&q=80&w=800',
    featured: true,
    adoptionAvailable: true,
  },
  {
    _id: 'bird-2',
    name: 'Titan',
    species: 'Eurasian Eagle Owl',
    scientificName: 'Bubo bubo',
    type: 'owl',
    wingspan: '160 - 188 cm',
    weight: '2.7 kg',
    diet: 'Rabbits, gamebirds, small mammals',
    origin: 'Continental Europe',
    funFact: 'Titan’s piercing orange eyes indicate that he is an open-country twilight hunter with immense visual acuity!',
    bio: 'Titan is the largest owl resident at Kent Owl Academy. Despite his massive size and fiery ear tufts, he is a gentle giant with visitors.',
    imageUrl: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=800',
    featured: true,
    adoptionAvailable: true,
  },
  {
    _id: 'bird-3',
    name: 'Pippin',
    species: 'Southern White-faced Owl',
    scientificName: 'Ptilopsis granti',
    type: 'owl',
    wingspan: '55 cm',
    weight: '210g',
    diet: 'Large insects, lizards, small rodents',
    origin: 'Sub-Saharan Africa',
    funFact: 'When feeling threatened, Pippin can transform his body appearance—either puffing up huge or slimming down like a thin tree branch!',
    bio: 'Pippin is a fan favorite among junior visitors thanks to his bright orange eyes, pristine white face, and inquisitive feather head tilts.',
    imageUrl: 'https://images.unsplash.com/photo-1574063413132-355dbfd83e0c?auto=format&fit=crop&q=80&w=800',
    featured: true,
    adoptionAvailable: true,
  },
  {
    _id: 'bird-4',
    name: 'Jax & Maverick',
    species: 'Harris’s Hawks',
    scientificName: 'Parabuteo unicinctus',
    type: 'hawk',
    wingspan: '110 cm',
    weight: '850g',
    diet: 'Small mammals and game',
    origin: 'Southwestern USA & Americas',
    funFact: 'Harris Hawks are known as the "Wolves of the Sky" because they are one of the only raptor species that hunts in cooperative social packs!',
    bio: 'Jax and Maverick love flying in tandem during our half-day falconry walks, soaring between oak trees to swoop down gently onto guest gloves.',
    imageUrl: 'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&q=80&w=800',
    featured: true,
    adoptionAvailable: true,
  },
  {
    _id: 'bird-5',
    name: 'Zephyr',
    species: 'Peregrine Falcon',
    scientificName: 'Falco peregrinus',
    type: 'falcon',
    wingspan: '100 cm',
    weight: '720g',
    diet: 'Medium-sized birds',
    origin: 'Worldwide / UK coastal cliffs',
    funFact: 'Peregrine falcons are the fastest creatures on Earth, reaching stoop diving speeds in excess of 240 mph (386 km/h)!',
    bio: 'Zephyr’s agility and high-speed lure stooping displays during our afternoon flying shows leave audiences utterly breathless.',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    featured: false,
    adoptionAvailable: true,
  },
  {
    _id: 'bird-6',
    name: 'Gizmo',
    species: 'Spectacled Owl',
    scientificName: 'Pulsatrix perspicillata',
    type: 'owl',
    wingspan: '90 - 110 cm',
    weight: '800g',
    diet: 'Small mammals, frogs, crabs',
    origin: 'Neotropical Rainforests',
    funFact: 'Spectacled Owls get their name from the striking white facial feathers surrounding their eyes that resemble classic spectacles.',
    bio: 'Hailing from tropical rainforest biomes, Gizmo has a distinctive deep pulsing call and striking yellow eyes.',
    imageUrl: 'https://images.unsplash.com/photo-1543549790-8b5f4a028cfb?auto=format&fit=crop&q=80&w=800',
    featured: false,
    adoptionAvailable: true,
  }
];

// Data Fetching Functions with Sanity API query + Graceful Fallback
export async function getGlobalSettings(): Promise<GlobalSettings> {
  try {
    const data = await sanityClient.fetch<GlobalSettings>(
      `*[_type == "globalSettings"][0]{
        siteTitle,
        metaDescription,
        announcementText,
        phone,
        email,
        address,
        openingHours,
        facebookUrl,
        instagramUrl,
        tripAdvisorRating,
        tripAdvisorReviewsCount
      }`
    );
    if (data && data.siteTitle) {
      isUsingSanityCms = true;
      return data;
    }
  } catch (error) {
    console.warn('Sanity globalSettings fetch failed or unconfigured, using curated fallback data:', error);
  }
  return fallbackGlobalSettings;
}

export async function getExperiences(): Promise<Experience[]> {
  try {
    const data = await sanityClient.fetch<Experience[]>(
      `*[_type == "experience"] | order(price asc) {
        _id,
        title,
        slug,
        category,
        shortDescription,
        fullDescription,
        price,
        duration,
        maxParticipants,
        minAge,
        featured,
        includedItems,
        requirements,
        "imageUrl": mainImage.asset->url,
        rating,
        reviewCount
      }`
    );
    if (data && data.length > 0) {
      isUsingSanityCms = true;
      return data;
    }
  } catch (error) {
    console.warn('Sanity experiences fetch failed, using fallback data:', error);
  }
  return fallbackExperiences;
}

export async function getExperienceBySlug(slug: string): Promise<Experience | null> {
  try {
    const data = await sanityClient.fetch<Experience>(
      `*[_type == "experience" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        category,
        shortDescription,
        fullDescription,
        price,
        duration,
        maxParticipants,
        minAge,
        featured,
        includedItems,
        requirements,
        "imageUrl": mainImage.asset->url,
        rating,
        reviewCount
      }`,
      { slug }
    );
    if (data && data.title) {
      isUsingSanityCms = true;
      return data;
    }
  } catch (error) {
    console.warn(`Sanity experience slug fetch failed for ${slug}, checking fallback:`, error);
  }
  const found = fallbackExperiences.find(e => e.slug.current === slug);
  return found || fallbackExperiences[0];
}

export async function getAnimals(): Promise<Animal[]> {
  try {
    const data = await sanityClient.fetch<Animal[]>(
      `*[_type == "animal"] | order(name asc) {
        _id,
        name,
        species,
        scientificName,
        type,
        wingspan,
        weight,
        diet,
        origin,
        funFact,
        bio,
        "imageUrl": image.asset->url,
        featured,
        adoptionAvailable
      }`
    );
    if (data && data.length > 0) {
      isUsingSanityCms = true;
      return data;
    }
  } catch (error) {
    console.warn('Sanity animals fetch failed, using fallback data:', error);
  }
  return fallbackAnimals;
}