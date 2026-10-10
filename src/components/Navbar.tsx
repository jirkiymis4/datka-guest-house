import React, { useState } from 'react';
import { CurrencyCode, LanguageCode } from '../types';
import { Globe, DollarSign, Menu, X, PhoneCall } from 'lucide-react';
import { CONTACT_INFO } from '../data/guestHouseData';

interface NavbarProps {
  currentLang: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  currency: CurrencyCode;
  onCurrencyChange: (curr: CurrencyCode) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  currency,
  onCurrencyChange,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLabels = {
    en: {
      rooms: 'Rooms',
      photos: 'Photos',
      expeditions: 'Expeditions',
      amenities: 'Amenities',
      location: 'Map & Route',
      bookStay: 'Book Stay',
    },
    ru: {
      rooms: 'Номера',
      photos: 'Фото',
      expeditions: 'Экскурсии',
      amenities: 'Удобства',
      location: 'Карта и проезд',
      bookStay: 'Забронировать',
    },
    kg: {
      rooms: 'Бөлмөлөр',
      photos: 'Сүрөттөр',
      expeditions: 'Экскурсиялар',
      amenities: 'Ыңгайлуулуктар',
      location: 'Жол картасы',
      bookStay: 'Брондоо',
    },
  }[currentLang];

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div className="bg-stone-900 text-stone-300 text-xs py-1.5 px-4 md:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-amber-400 font-medium">Naryn, Kyrgyzstan</span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-300 hidden sm:inline">54 Lenin St</span>
            <span className="text-stone-600 hidden sm:inline">·</span>
            <span className="text-stone-400 hidden md:inline">2,050m Altitude</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Quick Phone / WhatsApp */}
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="text-stone-300 hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>

            {/* Currency Selector */}
            <div className="flex items-center gap-1 bg-stone-800/80 px-2 py-0.5 rounded border border-stone-700/60">
              <DollarSign className="w-3 h-3 text-amber-400" />
              <select
                aria-label="Select Currency"
                value={currency}
                onChange={(e) => onCurrencyChange(e.target.value as CurrencyCode)}
                className="bg-transparent text-white text-xs font-semibold focus:outline-none cursor-pointer"
              >
                <option value="USD" className="bg-stone-900 text-white">USD ($)</option>
                <option value="KGS" className="bg-stone-900 text-white">KGS (сом)</option>
                <option value="EUR" className="bg-stone-900 text-white">EUR (€)</option>
              </select>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-1 bg-stone-800/80 px-2 py-0.5 rounded border border-stone-700/60">
              <Globe className="w-3 h-3 text-sky-400" />
              <select
                aria-label="Select Language"
                value={currentLang}
                onChange={(e) => onLanguageChange(e.target.value as LanguageCode)}
                className="bg-transparent text-white text-xs font-medium focus:outline-none cursor-pointer"
              >
                <option value="en" className="bg-stone-900 text-white">English</option>
                <option value="ru" className="bg-stone-900 text-white">Русский</option>
                <option value="kg" className="bg-stone-900 text-white">Кыргызча</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Strict 3-Zone Header Contract */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 py-3.5">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="/"
            className="text-xl md:text-2xl font-serif-display font-bold tracking-tight text-stone-900 hover:text-amber-800 transition-colors whitespace-nowrap shrink-0"
          >
            Datka Guest House
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
            <a
              href="#rooms"
              className="hover:text-amber-800 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {navLabels.rooms}
            </a>
            <a
              href="#gallery"
              className="hover:text-amber-800 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {navLabels.photos}
            </a>
            <a
              href="#expeditions"
              className="hover:text-amber-800 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {navLabels.expeditions}
            </a>
            <a
              href="#amenities"
              className="hover:text-amber-800 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {navLabels.amenities}
            </a>
            <a
              href="#navigation-map"
              className="hover:text-amber-800 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {navLabels.location}
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2 text-xs md:text-sm font-semibold text-white bg-amber-800 hover:bg-amber-900 active:scale-98 transition-all rounded-lg shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
            >
              {navLabels.bookStay}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-white px-4 py-4 shadow-lg space-y-3">
            <div className="flex flex-col space-y-2 text-sm font-medium text-stone-800">
              <a
                href="#rooms"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-2 hover:bg-stone-50 rounded"
              >
                {navLabels.rooms}
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-2 hover:bg-stone-50 rounded"
              >
                {navLabels.photos}
              </a>
              <a
                href="#expeditions"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-2 hover:bg-stone-50 rounded"
              >
                {navLabels.expeditions}
              </a>
              <a
                href="#amenities"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-2 hover:bg-stone-50 rounded"
              >
                {navLabels.amenities}
              </a>
              <a
                href="#navigation-map"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-2 hover:bg-stone-50 rounded"
              >
                {navLabels.location}
              </a>
            </div>

            <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600">
              <span>54 Lenin St, Naryn</span>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-amber-800 font-medium"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
