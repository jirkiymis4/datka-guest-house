import React, { useState } from 'react';
import { LanguageCode } from '../types';
import { CONTACT_INFO } from '../data/guestHouseData';
import { MapPin, Navigation, Copy, Check, Car, Compass, ExternalLink } from 'lucide-react';

interface LocationSectionProps {
  currentLang: LanguageCode;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ currentLang }) => {
  const [copiedLang, setCopiedLang] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLang(id);
    setTimeout(() => setCopiedLang(null), 2500);
  };

  const t = {
    en: {
      kicker: 'Finding Datka Guest House',
      title: 'Centrally Located at 54 Lenin Street',
      desc: 'Positioned right on Naryn’s main avenue, Datka is exceptionally easy to locate for drivers, cyclists, and taxi passengers arriving from Bishkek or Kochkor.',
      addressCardTitle: 'Official Address',
      copyForTaxi: 'Copy address to show driver',
      openGoogleMaps: 'Open in Google Maps',
      open2GIS: 'Open in 2GIS',
      landmarksTitle: 'Walking Distance Landmarks',
      transitTitle: 'How to Reach Naryn',
      transitBishkek: 'From Bishkek (Western Bus Station): Shared taxis (legkovushka) depart throughout the day (4.5–5 hours via Boom Gorge and Kochkor).',
      transitKochkor: 'From Kochkor: Regular shared taxis and marshrutkas run across the scenic Dolon Pass (2.5 hours, 3,030m).',
      transitChina: 'From Torugart Pass (China border): Paved highway via At-Bashy (approx. 2.5–3 hours).',
    },
    ru: {
      kicker: 'Как нас найти в Нарыне',
      title: 'Удобное расположение: ул. Ленина 54',
      desc: 'Гостевой дом находится на главной улице Нарына. Нас легко найти как самостоятельным путешественникам на авто, так и пассажирам маршруток из Бишкека.',
      addressCardTitle: 'Официальный адрес',
      copyForTaxi: 'Скопировать адрес для таксиста',
      openGoogleMaps: 'Открыть в Google Картах',
      open2GIS: 'Открыть в 2ГИС',
      landmarksTitle: 'Что находится рядом пешком',
      transitTitle: 'Как добраться до Нарына',
      transitBishkek: 'Из Бишкека (Западный автовокзал): Коллективные такси отправляются каждые 30 минут (4.5–5 часов в пути через Боомское ущелье).',
      transitKochkor: 'Из Кочкора: Маршрутки и такси через живописный перевал Долон (2.5 часа, 3 030 м).',
      transitChina: 'С перевала Торугарт (граница с КНР): Асфальтированная трасса через Ат-Башы (около 2.5–3 часов).',
    },
    kg: {
      kicker: '«Датка» конок үйүнүн дареги',
      title: 'Нарын шаары, Ленин көчөсү 54',
      desc: 'Мейманкана Нарындын негизги көчөсүндө орун алган. Бишкектен же Кочкордон келген жүргүнчүлөр жана айдоочулар үчүн табууга өтө ыңгайлуу.',
      addressCardTitle: 'Расмий дарек',
      copyForTaxi: 'Айдоочуга көрсөтүү үчүн көчүрүү',
      openGoogleMaps: 'Google Картадан ачуу',
      open2GIS: '2ГИС аркылуу ачуу',
      landmarksTitle: 'Жакын арадагы жайлар',
      transitTitle: 'Нарынга кантип келүүгө болот',
      transitBishkek: 'Бишкектен (Батыш автобекети): Күн сайын таксилер жана маршруткалар каттайт (Боом капчыгайы аркылуу 4.5–5 саат).',
      transitKochkor: 'Кочкордон: Долон ашуусу (3030 м) аркылуу таксилер (2.5 саат).',
      transitChina: 'Торугарт ашуусунан (Кытай чек арасы): Ат-Башы аркылуу түз асфальт жол (2.5–3 саат).',
    },
  }[currentLang];

  return (
    <section id="location" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            <MapPin className="w-4 h-4" />
            <span>{t.kicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-stone-900 text-balance">
            {t.title}
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            {t.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Address Cards & Quick Copy for taxi */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <h3 className="font-serif-display text-lg font-bold text-stone-900">
                {t.addressCardTitle}
              </h3>

              {/* English Address */}
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-stone-400 block">English</span>
                  <span className="text-xs font-semibold text-stone-800">{CONTACT_INFO.address.en}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(CONTACT_INFO.address.en, 'en')}
                  className="p-1.5 hover:bg-stone-200 rounded-lg text-stone-600 transition-colors"
                  title="Copy English address"
                >
                  {copiedLang === 'en' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Russian Address (Crucial for taxi drivers) */}
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-800 block">Для такси (Русский)</span>
                  <span className="text-xs font-semibold text-stone-900">{CONTACT_INFO.address.ru}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(CONTACT_INFO.address.ru, 'ru')}
                  className="p-1.5 hover:bg-stone-200 rounded-lg text-stone-600 transition-colors"
                  title="Copy Russian address"
                >
                  {copiedLang === 'ru' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Kyrgyz Address */}
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-stone-400 block">Кыргызча</span>
                  <span className="text-xs font-semibold text-stone-800">{CONTACT_INFO.address.kg}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(CONTACT_INFO.address.kg, 'kg')}
                  className="p-1.5 hover:bg-stone-200 rounded-lg text-stone-600 transition-colors"
                  title="Copy Kyrgyz address"
                >
                  {copiedLang === 'kg' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Direct Maps Links */}
              <div className="flex gap-2 pt-2">
                <a
                  href="https://maps.google.com/?q=54+Lenin+St+Naryn+Kyrgyzstan"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 px-3 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>

                <a
                  href="https://2gis.kg/naryn"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 px-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>2GIS Naryn</span>
                  <ExternalLink className="w-3 h-3 text-emerald-200" />
                </a>
              </div>
            </div>

            {/* Walking Landmarks */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                {t.landmarksTitle}
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-stone-100">
                  <span className="text-stone-700 font-medium">Ala-Too Central Square & Theater</span>
                  <span className="text-stone-500 font-mono">5 min walk (500 m)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone-100">
                  <span className="text-stone-700 font-medium">Naryn River Bank & Footbridge</span>
                  <span className="text-stone-500 font-mono">4 min walk (350 m)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone-100">
                  <span className="text-stone-700 font-medium">Demir Bank & Optima ATMs</span>
                  <span className="text-stone-500 font-mono">3 min walk (300 m)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone-100">
                  <span className="text-stone-700 font-medium">Nomad Coffee & National Cafes</span>
                  <span className="text-stone-500 font-mono">4 min walk (400 m)</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-stone-700 font-medium">Central Bazaar & Taxi Stand</span>
                  <span className="text-stone-500 font-mono">12 min walk / 3 min drive</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map Canvas Simulator */}
          <div className="lg:col-span-7 space-y-5">
            <div className="relative h-[340px] sm:h-[380px] rounded-2xl overflow-hidden bg-stone-900 border border-stone-300 shadow-sm flex flex-col justify-between p-6">
              {/* Map background grid representing Naryn valley */}
              <div className="absolute inset-0 bg-[radial-gradient(#44403c_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

              {/* Simulated Naryn River flowing through town */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 600 400" preserveAspectRatio="none">
                <path d="M0,180 Q150,220 300,190 T600,210" fill="none" stroke="#0284c7" strokeWidth="22" strokeLinecap="round" />
                <path d="M0,180 Q150,220 300,190 T600,210" fill="none" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" opacity="0.6" />
                {/* Lenin street line */}
                <path d="M40,110 L560,110" fill="none" stroke="#e2e8f0" strokeWidth="8" strokeDasharray="6,6" opacity="0.5" />
              </svg>

              {/* Pin for Datka Guest House */}
              <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                <div className="bg-amber-800 text-white px-3 py-1.5 rounded-xl shadow-lg border border-amber-600 flex items-center gap-1.5 text-xs font-bold animate-bounce">
                  <MapPin className="w-3.5 h-3.5 text-amber-300" />
                  <span>Datka Guest House · 54 Lenin St</span>
                </div>
                <div className="w-3 h-3 bg-amber-800 rotate-45 -mt-1.5 border-r border-b border-amber-600" />
              </div>

              {/* Top overlay note */}
              <div className="relative z-10 flex justify-between items-center bg-stone-950/80 backdrop-blur-md px-4 py-2 rounded-xl border border-stone-800 text-xs text-white max-w-sm">
                <span className="font-semibold text-amber-400">Naryn Valley Map View</span>
                <span className="text-stone-400">Elev. 2,050 m</span>
              </div>

              {/* Bottom legend */}
              <div className="relative z-10 bg-stone-950/85 backdrop-blur-md p-4 rounded-xl border border-stone-800 text-xs text-stone-300 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-1 bg-sky-400 rounded-full inline-block" />
                  <span>Naryn River (Нарын дарыясы) — south of Lenin St</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-1 bg-amber-400 rounded-full inline-block" />
                  <span>54 Lenin St — main east-west boulevard with smooth asphalt</span>
                </div>
              </div>
            </div>

            {/* Transit Advice Card */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
                <Car className="w-4 h-4" />
                <span>{t.transitTitle}</span>
              </div>

              <div className="space-y-3 text-xs text-stone-700">
                <p className="leading-relaxed">
                  <strong className="text-stone-900 block mb-0.5">Bishkek → Naryn:</strong>
                  {t.transitBishkek}
                </p>
                <p className="leading-relaxed">
                  <strong className="text-stone-900 block mb-0.5">Kochkor → Naryn:</strong>
                  {t.transitKochkor}
                </p>
                <p className="leading-relaxed">
                  <strong className="text-stone-900 block mb-0.5">Torugart / China → Naryn:</strong>
                  {t.transitChina}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
