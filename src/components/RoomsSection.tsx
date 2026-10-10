import React, { useState } from 'react';
import { CurrencyCode, LanguageCode, Room } from '../types';
import { ROOMS_DATA, CURRENCY_RATES } from '../data/guestHouseData';
import { RoomCardVisual } from './KyrgyzArtElements';
import { Check, Users, Maximize2, Bed, ArrowRight } from 'lucide-react';

interface RoomsSectionProps {
  currentLang: LanguageCode;
  currency: CurrencyCode;
  onSelectRoom: (roomId: string) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  currentLang,
  currency,
  onSelectRoom,
}) => {
  const [filter, setFilter] = useState<'all' | 'couples' | 'trekkers' | 'family'>('all');

  const rateMultiplier = CURRENCY_RATES[currency];
  const currencySymbol = currency === 'USD' ? '$' : currency === 'KGS' ? 'сом' : '€';

  const t = {
    en: {
      kicker: 'Accommodations at 54 Lenin St',
      title: 'Comfortable Mountain Chambers & Suites',
      desc: 'All rooms at Datka Guest House feature orthopedic mattresses, private en-suite bathrooms with 24/7 high-pressure hot showers, autonomous heating, and our signature homemade breakfast.',
      filterAll: 'All Rooms (4)',
      filterCouples: 'Couples & Solo',
      filterTrekkers: 'Twin & Trekkers',
      filterFamily: 'Family & Groups',
      perNight: 'per night',
      breakfastIncluded: 'Homemade breakfast included',
      bookRoom: 'Reserve Room',
      roomDetails: 'View Amenities',
    },
    ru: {
      kicker: 'Размещение по ул. Ленина 54',
      title: 'Номера и люксы в центре Нарына',
      desc: 'В каждом номере гостевого дома «Датка» установлены ортопедические матрасы, собственные санузлы с горячей водой 24/7, автономное отопление и бесплатный завтрак.',
      filterAll: 'Все номера (4)',
      filterCouples: 'Пары и соло',
      filterTrekkers: 'Твин и туристы',
      filterFamily: 'Семьи и группы',
      perNight: 'за ночь',
      breakfastIncluded: 'Завтрак включен',
      bookRoom: 'Забронировать',
      roomDetails: 'Все удобства',
    },
    kg: {
      kicker: 'Ленин көчөсү 54 дарегиндеги жайлар',
      title: 'Нарындагы жайлуу бөлмөлөр жана люкстар',
      desc: '«Датка» конок үйүнүн бардык бөлмөлөрүндө ортопедиялык керебеттер, жеке душ, 24/7 ысык суу, жылытуу жана табигый үй эртең мененки тамагы камтылган.',
      filterAll: 'Баары (4)',
      filterCouples: 'Эки кишилик',
      filterTrekkers: 'Твин жана саякатчылар',
      filterFamily: 'Үй-бүлөлүк',
      perNight: 'бир түнгө',
      breakfastIncluded: 'Эртеңки тамак камтылган',
      bookRoom: 'Брондоо',
      roomDetails: 'Ыңгайлуулуктар',
    },
  }[currentLang];

  const filteredRooms = ROOMS_DATA.filter((room) => {
    if (filter === 'couples') return room.capacity <= 2 && room.imageTheme === 'mountain';
    if (filter === 'trekkers') return room.imageTheme === 'twin' || room.imageTheme === 'budget';
    if (filter === 'family') return room.capacity >= 3;
    return true;
  });

  return (
    <section id="rooms" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
              {t.kicker}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-stone-900 text-balance">
              {t.title}
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              {t.desc}
            </p>
          </div>

          {/* Interactive filter buttons (valid segmented control) */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-200/80 rounded-xl shrink-0">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {t.filterAll}
            </button>
            <button
              onClick={() => setFilter('couples')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'couples'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {t.filterCouples}
            </button>
            <button
              onClick={() => setFilter('trekkers')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'trekkers'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {t.filterTrekkers}
            </button>
            <button
              onClick={() => setFilter('family')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'family'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {t.filterFamily}
            </button>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredRooms.map((room) => {
            const price = Math.round(room.priceUSD * rateMultiplier);
            return (
              <div
                key={room.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col"
              >
                {/* Visual Area */}
                <RoomCardVisual
                  theme={room.imageTheme}
                  title={room.name[currentLang]}
                />

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed metadata line */}
                    <div className="flex items-center gap-3 text-xs text-stone-500 mb-2">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-stone-400" />
                        <span>Up to {room.capacity} guests</span>
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Maximize2 className="w-3.5 h-3.5 text-stone-400" />
                        <span>{room.sizeM2} m²</span>
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Bed className="w-3.5 h-3.5 text-stone-400" />
                        <span>{room.beds[currentLang]}</span>
                      </span>
                    </div>

                    <p className="text-stone-600 text-sm mb-4 leading-relaxed">
                      {room.tagline[currentLang]}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 mb-6">
                      {room.features[currentLang].slice(0, 4).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                          <Check className="w-3.5 h-3.5 text-amber-700 mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Action row */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-bold font-serif-display text-stone-900 tabular-nums">
                          {price} {currencySymbol}
                        </span>
                        <span className="text-xs text-stone-500">{t.perNight}</span>
                      </div>
                      <span className="text-[11px] text-emerald-800 font-medium block">
                        ✓ {t.breakfastIncluded}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectRoom(room.id)}
                      className="px-4 py-2.5 bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all shadow-xs active:scale-98 cursor-pointer"
                    >
                      <span>{t.bookRoom}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
