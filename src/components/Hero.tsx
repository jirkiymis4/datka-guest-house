import React, { useState } from 'react';
import { MountainHeroIllustration } from './KyrgyzArtElements';
import { LanguageCode } from '../types';
import { MapPin, Wifi, ShieldCheck, Coffee, Camera, Sparkles } from 'lucide-react';

interface HeroProps {
  currentLang: LanguageCode;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenBooking }) => {
  const [showRealPhoto, setShowRealPhoto] = useState<boolean>(true);
  const [photoError, setPhotoError] = useState<boolean>(false);

  const realHeroPhotoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Naryn_Panorama.jpg/1280px-Naryn_Panorama.jpg';

  const content = {
    en: {
      locationBadge: '54 Lenin St, Naryn · Kyrgyzstan',
      headline: 'Authentic Nomadic Warmth in the Heart of Naryn',
      subhead:
        'Your cozy high-altitude haven on Lenin Street. Handcrafted felt shyrdak comfort, piping hot high-pressure showers, homemade boorsok breakfasts, and the definitive basecamp for Song-Kul, Tash Rabat, and Kel-Suu expeditions.',
      checkAvailability: 'Check Availability & Rates',
      exploreTours: 'Explore Mountain Expeditions',
      metrics: [
        { label: 'Altitude', value: '2,050 m' },
        { label: 'To Song-Kul', value: '125 km' },
        { label: 'Wi-Fi Speed', value: 'Starlink' },
        { label: 'Breakfast', value: 'Included' },
      ],
      trustPoints: [
        { icon: MapPin, text: 'Central 54 Lenin Street Location' },
        { icon: Wifi, text: 'High-Speed Starlink Wi-Fi' },
        { icon: ShieldCheck, text: 'Gated 4x4 & Moto Courtyard' },
        { icon: Coffee, text: 'Fresh Boorsok & Kaymak Breakfast' },
      ],
    },
    ru: {
      locationBadge: 'ул. Ленина 54, г. Нарын · Кыргызстан',
      headline: 'Истинное кыргызское гостеприимство в центре Нарына',
      subhead:
        'Уютный высокогорный дом на улице Ленина. Традиционный войлочный уют, горячий душ с отличным напором, сытный домашний завтрак с боорсоками и надежная база для поездок на Сон-Куль, Таш-Рабат и Кель-Суу.',
      checkAvailability: 'Проверить свободные номера',
      exploreTours: 'Маршруты и экскурсии',
      metrics: [
        { label: 'Высота', value: '2 050 м' },
        { label: 'До Сон-Куля', value: '125 км' },
        { label: 'Интернет', value: 'Starlink' },
        { label: 'Завтрак', value: 'Включен' },
      ],
      trustPoints: [
        { icon: MapPin, text: 'Центр Нарына, ул. Ленина 54' },
        { icon: Wifi, text: 'Скоростной Starlink Wi-Fi' },
        { icon: ShieldCheck, text: 'Закрытый двор для 4х4 и мото' },
        { icon: Coffee, text: 'Горячие боорсоки и каймак' },
      ],
    },
    kg: {
      locationBadge: 'Ленин көчөсү 54, Нарын ш. · Кыргызстан',
      headline: 'Нарындын чок ортосундагы нукура кыргыз меймандостугу',
      subhead:
        'Ленин көчөсүндөгү жылуу жана жайлуу мейманкана. Салттуу шырдак кооздугу, ысык суу, жаңы бышкан боорсок менен эртең мененки тамак жана Сон-Көл, Таш-Рабат, Көл-Сууга чыгуучу эң ыңгайлуу жай.',
      checkAvailability: 'Бөлмөлөрдү көрүү жана брондоо',
      exploreTours: 'Тоо саякаттары жана маршруттар',
      metrics: [
        { label: 'Бийиктик', value: '2 050 м' },
        { label: 'Сон-Көлгө чейин', value: '125 км' },
        { label: 'Байланыш', value: 'Starlink' },
        { label: 'Эртеңки тамак', value: 'Камтылган' },
      ],
      trustPoints: [
        { icon: MapPin, text: 'Ленин көчөсү 54 дареги' },
        { icon: Wifi, text: 'Ылдам Starlink Wi-Fi' },
        { icon: ShieldCheck, text: '4х4 унаалар үчүн жабык короо' },
        { icon: Coffee, text: 'Ысык боорсок жана сары май' },
      ],
    },
  }[currentLang];

  return (
    <section className="relative overflow-hidden pt-8 pb-14 bg-gradient-to-b from-stone-100 via-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Column 1: Editorial Headline & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            {/* Unboxed clean metadata kicker (NO pill badge) */}
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide text-amber-800">
              <span className="w-2 h-2 rounded-full bg-amber-700" />
              <span>{content.locationBadge}</span>
              <span aria-hidden="true">·</span>
              <span className="text-stone-500 font-normal">Silk Road Route</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-medium text-stone-900 leading-[1.15] text-balance">
              {content.headline}
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
              {content.subhead}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 bg-amber-800 hover:bg-amber-900 text-white font-semibold rounded-xl shadow-md transition-all active:scale-98 text-center text-sm cursor-pointer whitespace-nowrap shrink-0"
              >
                {content.checkAvailability}
              </button>
              <a
                href="#expeditions"
                className="px-6 py-3.5 bg-white hover:bg-stone-100 text-stone-800 font-medium rounded-xl border border-stone-300 transition-colors text-center text-sm whitespace-nowrap shrink-0"
              >
                {content.exploreTours}
              </a>
            </div>

            {/* Trust Markers row */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-stone-200">
              {content.trustPoints.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-2.5 text-xs text-stone-700">
                    <div className="p-1.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200/60 shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: Mountain Hero Visual with Real Photography Frame */}
          <div className="lg:col-span-6 relative">
            {/* View Mode Toggle Pill (Functional segmented control) */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-1 p-1 bg-stone-900/80 backdrop-blur-md rounded-xl border border-stone-700/60 text-xs">
              <button
                onClick={() => setShowRealPhoto(true)}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer flex items-center gap-1 ${
                  showRealPhoto && !photoError
                    ? 'bg-amber-800 text-white shadow-xs'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                <Camera className="w-3 h-3" />
                <span>Real Photo</span>
              </button>
              <button
                onClick={() => setShowRealPhoto(false)}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer flex items-center gap-1 ${
                  !showRealPhoto || photoError
                    ? 'bg-amber-800 text-white shadow-xs'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                <Sparkles className="w-3 h-3" />
                <span>Lodge Art</span>
              </button>
            </div>

            {showRealPhoto && !photoError ? (
              <div className="relative w-full h-[460px] md:h-[540px] rounded-2xl overflow-hidden shadow-2xl border border-stone-200/40 bg-stone-900 group">
                <img
                  src={realHeroPhotoUrl}
                  alt="Real view of Naryn valley mountains and Datka Guest House area"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={() => setPhotoError(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />

                {/* Real Photo Verified Marker */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900/80 backdrop-blur-md border border-stone-700/60 text-xs text-amber-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="font-semibold">Real Photo · Naryn Valley</span>
                </div>

                {/* Foreground Card */}
                <div className="absolute bottom-6 inset-x-6 z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
                  <div className="bg-stone-900/90 backdrop-blur-md border border-stone-700/60 rounded-xl p-4 max-w-sm">
                    <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider block mb-0.5">
                      Highland Basecamp
                    </span>
                    <h3 className="text-white font-bold text-base">
                      54 Lenin Street, Naryn (2,050 m)
                    </h3>
                    <p className="text-stone-300 text-xs mt-1">
                      Cozy rooms, hot rain showers, and central location on Lenin St.
                    </p>
                  </div>

                  <a
                    href="#gallery"
                    className="px-3.5 py-2 rounded-xl bg-amber-800/90 hover:bg-amber-800 text-white text-xs font-semibold backdrop-blur-md border border-amber-600/40 transition-colors whitespace-nowrap"
                  >
                    View All Real Photos →
                  </a>
                </div>
              </div>
            ) : (
              <MountainHeroIllustration />
            )}
          </div>
        </div>

        {/* 4-Column Key Metrics Strip below the hero split */}
        <div className="mt-12 pt-8 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          {content.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">
                {metric.label}
              </span>
              <span className="text-2xl md:text-3xl font-bold font-serif-display text-stone-900 mt-1 tabular-nums">
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
