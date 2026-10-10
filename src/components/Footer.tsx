import React from 'react';
import { LanguageCode } from '../types';
import { CONTACT_INFO } from '../data/guestHouseData';
import { KyrgyzOrnamentPattern } from './KyrgyzArtElements';

interface FooterProps {
  currentLang: LanguageCode;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = {
    en: {
      tagline: 'Warm Kyrgyz hospitality and high-altitude expedition basecamp in Naryn.',
      quickLinks: 'Navigation',
      rooms: 'Rooms & Rates',
      breakfast: 'Dastorkhon Breakfast',
      expeditions: 'Song-Kul & Kel-Suu Tours',
      location: '54 Lenin St, Naryn',
      copyright: '© 2026 Datka Guest House. All rights reserved. Naryn, Kyrgyz Republic.',
    },
    ru: {
      tagline: 'Уютный гостевой дом и база для горных экспедиций в самом центре Нарына.',
      quickLinks: 'Разделы сайта',
      rooms: 'Номера и цены',
      breakfast: 'Домашний завтрак',
      expeditions: 'Туры на Сон-Куль и Кель-Суу',
      location: 'ул. Ленина 54, г. Нарын',
      copyright: '© 2026 Datka Guest House. Все права защищены. Нарын, Кыргызская Республика.',
    },
    kg: {
      tagline: 'Нарын шаарындагы жайлуу кыргыз конок үйү жана тоо саякаттарынын борбору.',
      quickLinks: 'Бөлүмдөр',
      rooms: 'Бөлмөлөр жана баалар',
      breakfast: 'Эртең мененки дасторкон',
      expeditions: 'Сон-Көл жана Көл-Суу саякаттары',
      location: 'Ленин көчөсү 54, Нарын ш.',
      copyright: '© 2026 «Датка» конок үйү. Бардык укуктар корголгон. Нарын шаары, Кыргызстан.',
    },
  }[currentLang];

  return (
    <footer className="bg-stone-950 text-stone-400 text-xs border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Address */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <KyrgyzOrnamentPattern className="w-5 h-5 text-amber-500" />
              <span className="text-lg font-serif-display font-bold text-white tracking-tight">
                Datka Guest House
              </span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              {t.tagline}
            </p>
            <div className="text-stone-300 text-xs space-y-0.5 pt-2">
              <p className="font-medium text-amber-200">{CONTACT_INFO.address.en}</p>
              <p className="text-stone-400">Postal Code: {CONTACT_INFO.postalCode}</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h5 className="text-white font-semibold text-xs uppercase tracking-wider">
              {t.quickLinks}
            </h5>
            <ul className="space-y-1.5">
              <li>
                <a href="#rooms" className="hover:text-amber-300 transition-colors">
                  {t.rooms}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-300 transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#breakfast" className="hover:text-amber-300 transition-colors">
                  {t.breakfast}
                </a>
              </li>
              <li>
                <a href="#expeditions" className="hover:text-amber-300 transition-colors">
                  {t.expeditions}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-300 transition-colors">
                  {t.location}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-4 space-y-2.5">
            <h5 className="text-white font-semibold text-xs uppercase tracking-wider">
              Direct Contact
            </h5>
            <p className="text-stone-300 font-medium">{CONTACT_INFO.hostName}</p>
            <p>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-amber-400 hover:underline"
              >
                {CONTACT_INFO.email}
              </a>
            </p>
            <p className="text-stone-300">
              WhatsApp / Phone:{' '}
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                className="text-emerald-400 hover:underline"
              >
                {CONTACT_INFO.phoneDisplay}
              </a>
            </p>
            <p className="text-stone-500 text-[11px] pt-1">
              Check-In: from {CONTACT_INFO.checkIn} · Check-Out: by {CONTACT_INFO.checkOut}
            </p>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="mt-12 pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>{t.copyright}</p>
          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              WhatsApp
            </a>
            <span>·</span>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="hover:text-amber-400 transition-colors"
            >
              Email Host
            </a>
            <span>·</span>
            <a
              href="https://maps.google.com/?q=54+Lenin+St+Naryn+Kyrgyzstan"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
