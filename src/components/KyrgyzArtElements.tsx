import React from 'react';

/**
 * Traditional Kyrgyz Ornamental Motif (Muyuz / Horn of Abundance)
 * Used in Shyrdak felt carpets across Naryn jailoo.
 */
export const KyrgyzOrnamentPattern: React.FC<{ className?: string }> = ({ className = 'w-6 h-6 text-amber-700' }) => (
  <svg
    viewBox="0 0 100 100"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M50 15 C40 15 30 25 30 38 C30 50 42 55 45 62 C48 68 45 75 38 75 C30 75 25 68 25 60 C25 45 10 45 10 60 C10 80 25 90 40 90 C58 90 65 75 60 62 C56 52 45 48 45 38 C45 32 48 25 50 25 C52 25 55 32 55 38 C55 48 44 52 40 62 C35 75 42 90 60 90 C75 90 90 80 90 60 C90 45 75 45 75 60 C75 68 70 75 62 75 C55 75 52 68 55 62 C58 55 70 50 70 38 C70 25 60 15 50 15 Z" />
  </svg>
);

/**
 * Border runner motif reminiscent of Kyrgyz felt edges
 */
export const ShyrdakBorderStrip: React.FC<{ className?: string }> = ({ className = 'h-2 w-full text-amber-600/30' }) => (
  <div className={`overflow-hidden flex items-center justify-between ${className}`} aria-hidden="true">
    {Array.from({ length: 24 }).map((_, i) => (
      <svg key={i} viewBox="0 0 40 20" className="w-8 h-4 shrink-0" fill="currentColor">
        <polygon points="20,2 38,18 2,18" />
      </svg>
    ))}
  </div>
);

/**
 * Visual illustration for Mountain Hero Banner
 */
export const MountainHeroIllustration: React.FC = () => {
  return (
    <div className="relative w-full h-[460px] md:h-[540px] rounded-2xl overflow-hidden bg-gradient-to-b from-sky-900 via-stone-800 to-amber-950/80 shadow-2xl border border-stone-700/40">
      {/* Sky and sun backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-200/20 via-orange-500/10 to-transparent" />
      
      {/* Distant Tian Shan Snow-capped Peaks */}
      <svg
        className="absolute bottom-16 w-full h-72 text-stone-700/60 transition-transform duration-700 hover:scale-105"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,400 L0,230 L120,130 L220,200 L380,80 L520,220 L680,60 L820,200 L960,110 L1100,210 L1200,150 L1200,400 Z" opacity="0.4" />
        <path d="M0,400 L0,260 L180,180 L320,280 L480,140 L640,270 L800,120 L940,240 L1080,160 L1200,220 L1200,400 Z" opacity="0.6" fill="#1c1917" />
        {/* Snow highlights on peaks */}
        <polygon points="380,80 340,140 420,140" fill="#f8fafc" opacity="0.75" />
        <polygon points="680,60 630,135 730,135" fill="#f8fafc" opacity="0.85" />
        <polygon points="800,120 760,170 840,170" fill="#f8fafc" opacity="0.75" />
        <polygon points="960,110 930,155 990,155" fill="#f8fafc" opacity="0.7" />
      </svg>

      {/* Midground Naryn Red Rock Canyon Layer */}
      <svg
        className="absolute bottom-6 w-full h-44 text-amber-900/80"
        viewBox="0 0 1200 250"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,250 L0,110 Q140,80 280,120 T600,100 T920,130 T1200,90 L1200,250 Z" opacity="0.85" />
        <path d="M0,250 L0,150 Q220,110 440,160 T880,140 T1200,130 L1200,250 Z" opacity="0.95" fill="#292524" />
      </svg>

      {/* Foreground Guest House Facade Silhouette with Warm Glowing Windows */}
      <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-stone-950 via-stone-900/90 to-transparent flex items-end px-6 pb-6">
        <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div className="bg-stone-900/90 backdrop-blur-md border border-stone-700/60 rounded-xl p-4 max-w-sm">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Naryn Highland Lodge
            </div>
            <p className="text-white font-medium text-sm">
              54 Lenin Street, Naryn (2,050 m)
            </p>
            <p className="text-stone-300 text-xs mt-0.5">
              Warm rooms · Hot showers · Tian Shan expeditions base
            </p>
          </div>

          <div className="flex items-center gap-3 bg-amber-950/80 backdrop-blur-md border border-amber-800/40 rounded-xl px-4 py-2.5 text-xs text-amber-100">
            <span className="font-semibold text-amber-300">Fast Wi-Fi</span>
            <span>·</span>
            <span className="font-semibold text-amber-300">4x4 Yard</span>
            <span>·</span>
            <span className="font-semibold text-amber-300">Fresh Boorsok</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Visual illustration & real photography for Room Cards
 */
export const RoomCardVisual: React.FC<{ theme: 'mountain' | 'twin' | 'family' | 'budget'; title: string }> = ({ theme, title }) => {
  const getThemeDetails = () => {
    switch (theme) {
      case 'mountain':
        return {
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Shyrdak_in_Kochkor%2C_Kyrgyzstan.jpg/1280px-Shyrdak_in_Kochkor%2C_Kyrgyzstan.jpg',
          gradient: 'from-amber-900/70 via-stone-800 to-stone-900',
          accent: 'Deluxe King · Handcrafted Wool Shyrdak',
          bedIcon: '1 King Bed',
          shyrdakColor: 'text-amber-500/80',
        };
      case 'twin':
        return {
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Naryn_Panorama.jpg/1280px-Naryn_Panorama.jpg',
          gradient: 'from-emerald-950/70 via-stone-800 to-stone-900',
          accent: 'Comfort Twin · Mountain Trekker Base',
          bedIcon: '2 Single Beds',
          shyrdakColor: 'text-emerald-400/70',
        };
      case 'family':
        return {
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Yurts_at_Song_K%C3%B6l.jpg/1280px-Yurts_at_Song_K%C3%B6l.jpg',
          gradient: 'from-rose-950/70 via-stone-800 to-stone-900',
          accent: 'Heritage Family Suite · Dastorkhon Area',
          bedIcon: 'King + 2 Singles',
          shyrdakColor: 'text-rose-400/80',
        };
      case 'budget':
      default:
        return {
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Horseman_near_Song_Kol_lake.jpg/1280px-Horseman_near_Song_Kol_lake.jpg',
          gradient: 'from-sky-950/70 via-stone-800 to-stone-900',
          accent: 'Cozy Triple · Group & Cyclist Friendly',
          bedIcon: '3 Single Beds',
          shyrdakColor: 'text-sky-400/70',
        };
    }
  };

  const details = getThemeDetails();

  return (
    <div className={`relative h-64 w-full rounded-xl overflow-hidden bg-gradient-to-br ${details.gradient} border border-stone-200/20 flex flex-col justify-between p-5 group`}>
      {/* Real Background Photo */}
      <img
        src={details.imageUrl}
        alt={title}
        referrerPolicy="no-referrer"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        onError={(e) => {
          (e.target as HTMLElement).style.display = 'none';
        }}
      />

      {/* Scrim Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-black/25 pointer-events-none" />

      {/* Decorative Traditional Felt Shyrdak Wall Banner */}
      <div className="absolute -right-8 -top-8 w-40 h-40 opacity-20 pointer-events-none">
        <KyrgyzOrnamentPattern className={`w-full h-full ${details.shyrdakColor}`} />
      </div>

      <div className="flex items-center justify-between z-10">
        <span className="text-xs font-semibold text-white bg-stone-950/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-stone-700/60 shadow-xs">
          {details.bedIcon}
        </span>
        <span className="text-xs font-semibold text-amber-300 bg-amber-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-700/60 shadow-xs">
          En-suite Bathroom
        </span>
      </div>

      {/* Cozy Interior Room Representation */}
      <div className="z-10 mt-auto">
        <div className="w-10 h-1 bg-amber-500 mb-2 rounded-full" />
        <h4 className="text-white font-serif-display font-semibold text-lg drop-shadow-sm group-hover:text-amber-200 transition-colors">
          {title}
        </h4>
        <p className="text-stone-300 text-xs mt-0.5 drop-shadow-xs">{details.accent}</p>
      </div>
    </div>
  );
};

/**
 * Visual illustration & real photography for Kyrgyz Breakfast Dastorkhon
 */
export const BreakfastVisualCard: React.FC = () => {
  const realBoorsokUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Boortsog.jpg/1280px-Boortsog.jpg';

  return (
    <div className="relative rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 text-white shadow-xl flex flex-col justify-between">
      {/* Real Boorsok Photo Banner on Top */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-stone-900 group">
        <img
          src={realBoorsokUrl}
          alt="Freshly fried boorsok pastries in Kyrgyzstan"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />

        <div className="absolute top-3 left-3 z-10">
          <span className="text-[10px] font-semibold tracking-wide text-amber-200 bg-stone-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-stone-700/60">
            Real Photo · Fresh Hot Boorsok
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8 relative z-10">
        <div className="max-w-xl">
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
            Traditional Naryn Hospitality
          </span>
          <h3 className="text-2xl font-serif-display font-medium text-amber-100 mt-1 mb-3">
            The Authentic Kyrgyz Dastorkhon
          </h3>
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-5">
            Every morning, wake up to golden <strong className="text-amber-200">Boorsok</strong> fried fresh in the kazan, served with thick highland <strong className="text-amber-200">Kaymak</strong> (clotted cream) and raw honey harvested by local beekeepers from wild mountain herbs.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
            <div className="bg-stone-900/90 border border-stone-800 rounded-lg p-2.5">
              <span className="text-amber-400 text-xs font-bold block">Hot Boorsok</span>
              <span className="text-stone-400 text-[11px]">Fried golden dough</span>
            </div>
            <div className="bg-stone-900/90 border border-stone-800 rounded-lg p-2.5">
              <span className="text-amber-400 text-xs font-bold block">Alpine Kaymak</span>
              <span className="text-stone-400 text-[11px]">Highland clotted cream</span>
            </div>
            <div className="bg-stone-900/90 border border-stone-800 rounded-lg p-2.5">
              <span className="text-amber-400 text-xs font-bold block">Mountain Honey</span>
              <span className="text-stone-400 text-[11px]">Wild thyme & mint</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
