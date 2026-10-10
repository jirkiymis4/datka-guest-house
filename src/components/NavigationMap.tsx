import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { LanguageCode } from '../types';
import { CONTACT_INFO } from '../data/guestHouseData';
import {
  Navigation,
  Compass,
  MapPin,
  Car,
  Copy,
  Check,
  ExternalLink,
  Layers,
  ZoomIn,
  ZoomOut,
  Mountain,
  CornerDownRight,
  Route,
} from 'lucide-react';

interface NavigationMapProps {
  currentLang: LanguageCode;
}

interface Waypoint {
  name: { en: string; ru: string; kg: string };
  coords: [number, number];
  type: 'guesthouse' | 'city' | 'pass' | 'excursion';
  description: { en: string; ru: string; kg: string };
}

const WAYPOINTS: Waypoint[] = [
  {
    name: {
      en: 'Datka Guest House (54 Lenin St)',
      ru: 'Datka Guest House (ул. Ленина 54)',
      kg: '«Датка» конок үйү (Ленин көч. 54)',
    },
    coords: [41.4285, 76.0123],
    type: 'guesthouse',
    description: {
      en: 'Your destination! 54 Lenin Street. Secure gated yard, hot showers, Starlink Wi-Fi.',
      ru: 'Ваша цель! Ул. Ленина 54. Охраняемый двор, горячий душ, Wi-Fi Starlink.',
      kg: 'Сиздин бара турган жайыңыз! Ленин көчөсү 54. Коопсуз жабык короо, ысык суу.',
    },
  },
  {
    name: {
      en: 'Ala-Too Central Square & Theater',
      ru: 'Центральная площадь Ала-Тоо и театр',
      kg: 'Борбордук Ала-Тоо аянты жана театр',
    },
    coords: [41.429, 76.002],
    type: 'city',
    description: {
      en: '5 min walk (500m) west along Lenin Street. Parks, regional administration.',
      ru: '5 минут пешком (500м) на запад по ул. Ленина. Парки, администрация.',
      kg: 'Ленин көчөсү менен батышты көздөй 5 мүнөт жөө (500м). Сейил бак.',
    },
  },
  {
    name: {
      en: 'Naryn River Footbridge & Riverside Walk',
      ru: 'Пешеходный мост через реку Нарын',
      kg: 'Нарын дарыясындагы жөө адамдар көпүрөсү',
    },
    coords: [41.4255, 76.008],
    type: 'city',
    description: {
      en: '4 min walk (350m) south. Rushing turquoise glacial river views.',
      ru: '4 минуты пешком (350м) на юг. Вид на бурную реку Нарын.',
      kg: 'Түштүктү көздөй 4 мүнөт жөө (350м). Кооз Нарын дарыясы.',
    },
  },
  {
    name: {
      en: 'Central Bazaar & Marshrutka Station',
      ru: 'Центральный базар и автостанция',
      kg: 'Борбордук базар жана автобекет',
    },
    coords: [41.432, 75.986],
    type: 'city',
    description: {
      en: '3 min drive / 12 min walk. Shared taxis to Bishkek, Kochkor, and At-Bashy.',
      ru: '3 мин на авто / 12 мин пешком. Коллективные такси в Бишкек, Кочкор, Ат-Башы.',
      kg: 'Унаа менен 3 мүнөт / жөө 12 мүнөт. Бишкекке, Кочкорго таксилер.',
    },
  },
  {
    name: {
      en: 'Song-Kul Lake (Сон-Көл)',
      ru: 'Высокогорное озеро Сон-Куль',
      kg: 'Сон-Көл бийик тоолуу көлү',
    },
    coords: [41.8383, 75.1438],
    type: 'excursion',
    description: {
      en: '125 km (3 hrs) via 33 Parrots pass. Alpine yurts, wild horses, 3,016m altitude.',
      ru: '125 км (3 часа) через перевал 33 попугая. Юрты, табуны лошадей, 3 016 м.',
      kg: '125 км (3 саат) 33 попугай ашуусу аркылуу. Боз үйлөр, 3 016 м бийиктик.',
    },
  },
  {
    name: {
      en: 'Tash Rabat Caravanserai (Таш-Рабат)',
      ru: 'Караван-сарай Таш-Рабат',
      kg: 'Таш-Рабат кербен сарайы',
    },
    coords: [40.8225, 75.2917],
    type: 'excursion',
    description: {
      en: '110 km (1.8 hrs). 15th-century stone Silk Road fortress in Kara-Koyun canyon.',
      ru: '110 км (1.8 ч). Каменный караван-сарай XV века в ущелье Кара-Коюн.',
      kg: '110 км (1.8 саат). XV кылымдагы таш кербен сарай.',
    },
  },
  {
    name: {
      en: 'Kel-Suu Glacial Lake (Көл-Суу)',
      ru: 'Бирюзовое озеро Кель-Суу',
      kg: 'Көл-Суу бийик тоолуу көлү',
    },
    coords: [40.6653, 76.3986],
    type: 'excursion',
    description: {
      en: '155 km (4 hrs 4x4). Dramatic turquoise chasm near China border. Border permit required.',
      ru: '155 км (4 ч на 4х4). Бирюзовое озеро в каньоне у границы с Китаем. Нужен пропуск.',
      kg: '155 км (4WD 4 саат). Кытай чек арасындагы сырдуу бирюза көл. Пропуск керек.',
    },
  },
  {
    name: {
      en: 'Dolon Pass (3,030 m)',
      ru: 'Перевал Долон (3 030 м)',
      kg: 'Долон ашуусу (3 030 м)',
    },
    coords: [41.8392, 75.9231],
    type: 'pass',
    description: {
      en: 'Mountain pass on Bishkek–Naryn highway. Dramatic Tian Shan switchbacks.',
      ru: 'Высокогорный перевал на трассе Бишкек–Нарын. Серпантины и панорамы.',
      kg: 'Бишкек–Нарын жолундагы кооз бийик тоо ашуусу.',
    },
  },
];

export const NavigationMap: React.FC<NavigationMapProps> = ({ currentLang }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [activeView, setActiveView] = useState<'city' | 'region'>('city');
  const [selectedRoute, setSelectedRoute] = useState<'bishkek' | 'kochkor' | 'torugart' | 'songkul'>('bishkek');
  const [copiedCoords, setCopiedCoords] = useState(false);

  // Initialize and update Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Avoid double initialization
    if (!mapInstanceRef.current) {
      const initialCenter: [number, number] = [41.4285, 76.0123];
      const initialZoom = activeView === 'city' ? 14 : 9;

      const map = L.map(mapContainerRef.current, {
        center: initialCenter,
        zoom: initialZoom,
        zoomControl: false,
        attributionControl: false,
      });

      // Add OpenStreetMap standard tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);

      // Add custom zoom control in top-right
      L.control.zoom({ position: 'topright' }).addTo(map);

      mapInstanceRef.current = map;
    }

    const map = mapInstanceRef.current;

    // Clear existing markers
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker || layer instanceof L.Polyline) {
        map.removeLayer(layer);
      }
    });

    // Custom DivIcons
    const guesthouseIcon = L.divIcon({
      className: 'custom-leaflet-marker-guesthouse',
      html: `
        <div style="
          background: #78350f;
          color: white;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid white;
          box-shadow: 0 4px 14px rgba(0,0,0,0.35);
          cursor: pointer;
          position: relative;
        ">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          <span style="
            position: absolute;
            top: -4px;
            right: -4px;
            width: 12px;
            height: 12px;
            background: #22c55e;
            border: 2px solid white;
            border-radius: 50%;
          "></span>
        </div>
      `,
      iconSize: [44, 44],
      iconAnchor: [22, 22],
    });

    const landmarkIcon = L.divIcon({
      className: 'custom-leaflet-marker-city',
      html: `
        <div style="
          background: #0f172a;
          color: white;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.25);
          cursor: pointer;
        ">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </div>
      `,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });

    const excursionIcon = L.divIcon({
      className: 'custom-leaflet-marker-excursion',
      html: `
        <div style="
          background: #0284c7;
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          cursor: pointer;
        ">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
          </svg>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
    });

    // Filter which waypoints to render based on view
    const visibleWaypoints =
      activeView === 'city'
        ? WAYPOINTS.filter((w) => w.type === 'guesthouse' || w.type === 'city')
        : WAYPOINTS;

    visibleWaypoints.forEach((wp) => {
      const icon =
        wp.type === 'guesthouse'
          ? guesthouseIcon
          : wp.type === 'excursion' || wp.type === 'pass'
          ? excursionIcon
          : landmarkIcon;

      const marker = L.marker(wp.coords, { icon }).addTo(map);

      // Create rich popup
      const isDatka = wp.type === 'guesthouse';
      const popupHtml = `
        <div style="font-family: system-ui, sans-serif; padding: 4px; min-width: 200px;">
          <div style="font-size: 11px; font-weight: 700; color: ${isDatka ? '#78350f' : '#0f172a'}; margin-bottom: 2px;">
            ${wp.name[currentLang]}
          </div>
          <p style="font-size: 10px; color: #57534e; margin: 0 0 6px 0; line-height: 1.4;">
            ${wp.description[currentLang]}
          </p>
          <a href="https://www.google.com/maps/dir/?api=1&destination=${wp.coords[0]},${wp.coords[1]}"
             target="_blank"
             rel="noreferrer"
             style="display: inline-block; background: #78350f; color: white; padding: 4px 8px; border-radius: 6px; font-size: 10px; font-weight: 600; text-decoration: none;">
            Navigate via Google Maps →
          </a>
        </div>
      `;

      marker.bindPopup(popupHtml);

      if (isDatka && activeView === 'city') {
        marker.openPopup();
      }
    });

    // If region view, adjust view to fit all waypoints
    if (activeView === 'region') {
      map.setView([41.25, 75.8], 8);
    } else {
      map.setView([41.4285, 76.0123], 15);
    }
  }, [activeView, currentLang]);

  const handleCopyCoordinates = () => {
    navigator.clipboard.writeText('41.4285, 76.0123');
    setCopiedCoords(true);
    setTimeout(() => setCopiedCoords(false), 2500);
  };

  const t = {
    en: {
      kicker: 'Live GPS Navigation & Route Guide',
      title: 'Interactive Map & Driving Routes to 54 Lenin St',
      subhead:
        'Explore street-level directions in Naryn, plan your drive across the Tian Shan mountain passes from Bishkek or Kochkor, and launch one-tap turn-by-turn navigation directly on your phone.',
      viewCity: 'Naryn City View (54 Lenin St)',
      viewRegion: 'Tian Shan Region & Silk Road',
      googleNav: 'Google Maps Directions',
      twoGisNav: '2GIS Naryn (Local App)',
      appleNav: 'Apple Maps',
      yandexNav: 'Yandex Maps',
      coordsBtn: 'Copy GPS Coordinates',
      routesTitle: 'Turn-by-Turn Route Planner to Naryn',
      routeBishkek: 'Bishkek → Naryn (315 km)',
      routeKochkor: 'Kochkor → Naryn (125 km)',
      routeTorugart: 'Torugart / China → Naryn (180 km)',
      routeSongKul: 'Naryn → Song-Kul (125 km)',
      landmarkLegend: 'Street Orientation Guide',
    },
    ru: {
      kicker: 'Живая навигация и карта проезда',
      title: 'Интерактивная карта и маршруты до ул. Ленина 54',
      subhead:
        'Изучите схему проезда по Нарыну, спланируйте поездку через горные перевалы из Бишкека или Кочкора и запустите пошаговую навигацию прямо в навигаторе вашего телефона.',
      viewCity: 'Город Нарын (ул. Ленина 54)',
      viewRegion: 'Регион Тянь-Шаня и перевалы',
      googleNav: 'Маршрут в Google Картах',
      twoGisNav: '2ГИС Нарын (Для такси)',
      appleNav: 'Apple Карты',
      yandexNav: 'Яндекс Карты',
      coordsBtn: 'Скопировать GPS координаты',
      routesTitle: 'Пошаговые маршруты до Нарына',
      routeBishkek: 'Бишкек → Нарын (315 км)',
      routeKochkor: 'Кочкор → Нарын (125 км)',
      routeTorugart: 'Торугарт / Китай → Нарын (180 км)',
      routeSongKul: 'Нарын → Сон-Куль (125 км)',
      landmarkLegend: 'Ориентиры на местности',
    },
    kg: {
      kicker: 'Түз навигация жана жол картасы',
      title: 'Ленин көчөсү 54 дарегине интерактивдүү жол картасы',
      subhead:
        'Нарын шаары боюнча жолду карап чыгыңыз, Бишкектен же Кочкордон ашуулар аркылуу келүүнү пландаңыз жана телефонуңузга түз навигацияны иштетиңиз.',
      viewCity: 'Нарын шаары (Ленин көч. 54)',
      viewRegion: 'Тянь-Шань аймагы жана ашуулар',
      googleNav: 'Google Картадан маршрут',
      twoGisNav: '2ГИС Нарын (Жергиликтүү)',
      appleNav: 'Apple Карталар',
      yandexNav: 'Яндекс Карталар',
      coordsBtn: 'GPS координаттарын көчүрүү',
      routesTitle: 'Нарынга келүүчү негизги маршруттар',
      routeBishkek: 'Бишкек → Нарын (315 км)',
      routeKochkor: 'Кочкор → Нарын (125 км)',
      routeTorugart: 'Торугарт / Кытай → Нарын (180 км)',
      routeSongKul: 'Нарын → Сон-Көл (125 км)',
      landmarkLegend: 'Шаардагы ориентирлер',
    },
  }[currentLang];

  const routesInfo = {
    bishkek: {
      distance: '315 km',
      duration: '4.5 – 5.0 hours',
      roadType: 'Smooth asphalt highway (A365 / EM-07)',
      passes: 'Dolon Pass (3,030 m / 9,940 ft)',
      steps: [
        {
          point: 'Western Bus Station (Bishkek)',
          note: 'Depart via Chuy Valley on paved highway A365.',
        },
        {
          point: 'Boom Gorge (Боом капчыгайы)',
          note: 'Scenic river canyon highway with modern rest stops and food cafes.',
        },
        {
          point: 'Balykchy & Kochkor Valley',
          note: 'Popular lunch stop (samsa, lagman, fruit market) before the ascent.',
        },
        {
          point: 'Dolon Pass Summit (3,030 m)',
          note: 'High-altitude paved serpentine pass with sweeping mountain panoramas. Keep speeds moderate.',
        },
        {
          point: 'Enter Naryn on Lenin Street',
          note: 'Drive 2.5 km down the central avenue — Datka Guest House is on your right at #54!',
        },
      ],
    },
    kochkor: {
      distance: '125 km',
      duration: '2.0 – 2.5 hours',
      roadType: 'Well-maintained paved road',
      passes: 'Dolon Pass (3,030 m)',
      steps: [
        {
          point: 'Kochkor Central Square',
          note: 'Shared taxis and marshrutkas leave regularly from Kochkor bazaar.',
        },
        {
          point: 'Ascent to Dolon Pass',
          note: 'Gentle gradient, scenic yurt camps and grazing horses along the roadside.',
        },
        {
          point: 'Descent into Naryn River Valley',
          note: 'Follow the river gorge straight into central Naryn onto Lenin Street.',
        },
        {
          point: '54 Lenin Street',
          note: 'Gated entrance with secure parking for your vehicle.',
        },
      ],
    },
    torugart: {
      distance: '180 km',
      duration: '2.5 – 3.0 hours',
      roadType: 'Smooth paved international Silk Road corridor',
      passes: 'Kyzyl-Bel & Kara-Koyun valleys',
      steps: [
        {
          point: 'Torugart Border Post (China–Kyrgyzstan)',
          note: 'Customs and immigration processing point.',
        },
        {
          point: 'At-Bashy Valley & Fortress',
          note: 'Scenic agricultural basin. Turnoff to Tash Rabat Caravanserai.',
        },
        {
          point: 'Approaching Naryn from South',
          note: 'Cross the Naryn River bridge and merge onto Lenin Street #54.',
        },
      ],
    },
    songkul: {
      distance: '125 km',
      duration: '3.0 – 3.5 hours',
      roadType: 'Mountain gravel road (4x4 recommended)',
      passes: 'Teskei Torpok / "33 Parrots" Pass (3,133 m)',
      steps: [
        {
          point: 'Start from Datka Guest House (54 Lenin St)',
          note: 'Pack warm layers, camera gear, and pre-ordered packed breakfast from Jirgal.',
        },
        {
          point: 'Naryn Gorge towards Kurtka / Ak-Tal',
          note: 'Scenic red sandstone bluffs along the rushing river.',
        },
        {
          point: '33 Parrots Switchback Pass',
          note: 'Famous dramatic zigzag serpentines climbing up to the alpine plateau.',
        },
        {
          point: 'Song-Kul Lake Shore (3,016 m)',
          note: 'Traditional shepherd yurts, horseback riding, and stargazing.',
        },
      ],
    },
  };

  const activeRouteData = routesInfo[selectedRoute];

  return (
    <section id="navigation-map" className="py-20 bg-stone-100/80 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
              <Navigation className="w-4 h-4" />
              <span>{t.kicker}</span>
              <span aria-hidden="true">·</span>
              <span className="text-stone-500 font-normal">54 Lenin St, Naryn</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-stone-900 text-balance">
              {t.title}
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              {t.subhead}
            </p>
          </div>

          {/* Map Layer View Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-200/90 rounded-xl shrink-0">
            <button
              onClick={() => setActiveView('city')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeView === 'city'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-amber-800" />
              <span>{t.viewCity}</span>
            </button>

            <button
              onClick={() => setActiveView('region')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeView === 'region'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Mountain className="w-3.5 h-3.5 text-sky-700" />
              <span>{t.viewRegion}</span>
            </button>
          </div>
        </div>

        {/* Live Interactive Map Box */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden mb-12">
          {/* Top Quick GPS Action Strip */}
          <div className="bg-stone-900 text-white px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs border-b border-stone-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="font-semibold text-amber-200">54 Lenin St, Naryn</span>
              <span className="text-stone-400 hidden sm:inline">· 41.4285° N, 76.0123° E</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyCoordinates}
                className="px-2.5 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedCoords ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCoords ? 'Copied 41.4285, 76.0123' : t.coordsBtn}</span>
              </button>
            </div>
          </div>

          {/* The Leaflet Map Canvas Container */}
          <div
            ref={mapContainerRef}
            className="w-full h-[450px] sm:h-[500px] bg-stone-200 z-10"
            aria-label="Interactive map of Datka Guest House and Naryn"
          />

          {/* 1-Tap Navigation App Launchers Strip */}
          <div className="bg-stone-50 p-4 sm:p-5 border-t border-stone-200 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=41.4285,76.0123"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white hover:bg-stone-100 rounded-xl border border-stone-200 text-stone-900 font-semibold text-xs flex items-center justify-between transition-colors shadow-2xs group"
            >
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-amber-800 group-hover:scale-110 transition-transform" />
                <span>{t.googleNav}</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
            </a>

            <a
              href="https://2gis.kg/naryn"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white hover:bg-emerald-50 rounded-xl border border-stone-200 text-stone-900 font-semibold text-xs flex items-center justify-between transition-colors shadow-2xs group"
            >
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-emerald-700 group-hover:scale-110 transition-transform" />
                <span>{t.twoGisNav}</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
            </a>

            <a
              href="https://maps.apple.com/?daddr=41.4285,76.0123"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white hover:bg-stone-100 rounded-xl border border-stone-200 text-stone-900 font-semibold text-xs flex items-center justify-between transition-colors shadow-2xs group"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-stone-700 group-hover:scale-110 transition-transform" />
                <span>{t.appleNav}</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
            </a>

            <a
              href="https://yandex.com/maps/?rtext=~41.4285,76.0123"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white hover:bg-rose-50 rounded-xl border border-stone-200 text-stone-900 font-semibold text-xs flex items-center justify-between transition-colors shadow-2xs group"
            >
              <div className="flex items-center gap-2">
                <Route className="w-4 h-4 text-rose-700 group-hover:scale-110 transition-transform" />
                <span>{t.yandexNav}</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-rose-600" />
            </a>
          </div>
        </div>

        {/* Turn-by-Turn Route Planner Grid */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
              <Car className="w-4 h-4" />
              <span>{t.routesTitle}</span>
            </div>

            {/* Route Tabs */}
            <div className="flex flex-wrap gap-1.5 bg-stone-100 p-1 rounded-xl">
              <button
                onClick={() => setSelectedRoute('bishkek')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedRoute === 'bishkek'
                    ? 'bg-amber-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {t.routeBishkek}
              </button>
              <button
                onClick={() => setSelectedRoute('kochkor')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedRoute === 'kochkor'
                    ? 'bg-amber-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {t.routeKochkor}
              </button>
              <button
                onClick={() => setSelectedRoute('torugart')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedRoute === 'torugart'
                    ? 'bg-amber-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {t.routeTorugart}
              </button>
              <button
                onClick={() => setSelectedRoute('songkul')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedRoute === 'songkul'
                    ? 'bg-amber-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {t.routeSongKul}
              </button>
            </div>
          </div>

          {/* Route Overview Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-stone-50 rounded-xl border border-stone-200 mb-6 text-xs">
            <div>
              <span className="text-stone-500 block uppercase text-[10px] font-semibold">Total Distance</span>
              <span className="text-stone-900 font-bold text-sm tabular-nums">{activeRouteData.distance}</span>
            </div>
            <div>
              <span className="text-stone-500 block uppercase text-[10px] font-semibold">Driving Time</span>
              <span className="text-stone-900 font-bold text-sm tabular-nums">{activeRouteData.duration}</span>
            </div>
            <div>
              <span className="text-stone-500 block uppercase text-[10px] font-semibold">Mountain Passes & Surface</span>
              <span className="text-stone-900 font-bold text-sm">{activeRouteData.passes}</span>
            </div>
          </div>

          {/* Step-by-Step Waypoint Guidance */}
          <div className="space-y-4">
            {activeRouteData.steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3.5 text-xs">
                <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-stone-900 text-xs sm:text-sm">
                    {step.point}
                  </h5>
                  <p className="text-stone-600 leading-relaxed mt-0.5">
                    {step.note}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrival Note */}
          <div className="mt-6 pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs bg-amber-50/60 p-4 rounded-xl border border-amber-200/60">
            <div className="flex items-center gap-2 text-amber-950 font-medium">
              <MapPin className="w-4 h-4 text-amber-800 shrink-0" />
              <span>
                <strong>Street Sign:</strong> Look for the carved wooden sign "Datka Guest House" at <strong>54 Lenin Street</strong>. Call Jirgal at +996 700 842 190 if you need the gate opened!
              </span>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=41.4285,76.0123"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white rounded-lg font-semibold shrink-0 transition-colors whitespace-nowrap"
            >
              Start GPS Navigation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
