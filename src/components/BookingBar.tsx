import React, { useState } from 'react';
import { CurrencyCode, LanguageCode } from '../types';
import { ROOMS_DATA, CURRENCY_RATES } from '../data/guestHouseData';
import { Calendar, Users, BedDouble, ArrowRight } from 'lucide-react';

interface BookingBarProps {
  currentLang: LanguageCode;
  currency: CurrencyCode;
  onOpenBookingWithDetails: (roomId: string) => void;
}

export const BookingBar: React.FC<BookingBarProps> = ({
  currentLang,
  currency,
  onOpenBookingWithDetails,
}) => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(ROOMS_DATA[0].id);
  const [dates] = useState<string>('July 2026');
  const [guests, setGuests] = useState<number>(2);

  const selectedRoom = ROOMS_DATA.find((r) => r.id === selectedRoomId) || ROOMS_DATA[0];
  const rateMultiplier = CURRENCY_RATES[currency];
  const price = Math.round(selectedRoom.priceUSD * rateMultiplier);
  const currencySymbol = currency === 'USD' ? '$' : currency === 'KGS' ? 'сом' : '€';

  const t = {
    en: {
      roomType: 'Room Selection',
      travelDates: 'Travel Season',
      guests: 'Guests',
      from: 'From',
      perNight: '/ night (breakfast incl.)',
      checkRates: 'Book Room',
    },
    ru: {
      roomType: 'Категория номера',
      travelDates: 'Период поездки',
      guests: 'Гостей',
      from: 'От',
      perNight: '/ ночь (с завтраком)',
      checkRates: 'Забронировать',
    },
    kg: {
      roomType: 'Бөлмө түрү',
      travelDates: 'Саякат мезгили',
      guests: 'Коноктор',
      from: 'Баасы',
      perNight: '/ түн (эртеңки тамак менен)',
      checkRates: 'Брондоо',
    },
  }[currentLang];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-30">
      <div className="bg-white rounded-2xl shadow-xl border border-stone-200/80 p-4 sm:p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          {/* Room Selector */}
          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-stone-50 border border-stone-200">
            <BedDouble className="w-5 h-5 text-amber-800 shrink-0" />
            <div className="flex-1 min-w-0">
              <span className="text-[10px] uppercase font-semibold text-stone-500 block">
                {t.roomType}
              </span>
              <select
                aria-label="Select room type"
                value={selectedRoomId}
                onChange={(e) => setSelectedRoomId(e.target.value)}
                className="w-full bg-transparent text-xs font-semibold text-stone-900 focus:outline-none cursor-pointer truncate"
              >
                {ROOMS_DATA.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name[currentLang]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Dates Display */}
          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-stone-50 border border-stone-200">
            <Calendar className="w-5 h-5 text-amber-800 shrink-0" />
            <div className="flex-1 min-w-0">
              <span className="text-[10px] uppercase font-semibold text-stone-500 block">
                {t.travelDates}
              </span>
              <span className="text-xs font-semibold text-stone-900 block truncate">
                Spring / Summer / Autumn 2026
              </span>
            </div>
          </div>

          {/* Guests count */}
          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-stone-50 border border-stone-200">
            <Users className="w-5 h-5 text-amber-800 shrink-0" />
            <div className="flex-1 min-w-0">
              <span className="text-[10px] uppercase font-semibold text-stone-500 block">
                {t.guests}
              </span>
              <select
                aria-label="Select guest count"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full bg-transparent text-xs font-semibold text-stone-900 focus:outline-none cursor-pointer"
              >
                <option value={1}>1 Traveler</option>
                <option value={2}>2 Travelers</option>
                <option value={3}>3 Travelers</option>
                <option value={4}>4 Travelers</option>
              </select>
            </div>
          </div>

          {/* Price & Action Button */}
          <div className="flex items-center justify-between lg:justify-end gap-4 p-2">
            <div>
              <span className="text-[10px] uppercase font-medium text-stone-500 block">
                {t.from}
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold text-amber-900 tabular-nums">
                  {price} {currencySymbol}
                </span>
                <span className="text-[10px] text-stone-500 hidden sm:inline">
                  {t.perNight}
                </span>
              </div>
            </div>

            <button
              onClick={() => onOpenBookingWithDetails(selectedRoomId)}
              className="px-5 py-3 bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm transition-all active:scale-98 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>{t.checkRates}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
