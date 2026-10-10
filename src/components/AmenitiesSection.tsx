import React from 'react';
import { LanguageCode } from '../types';
import { AMENITIES_DATA } from '../data/guestHouseData';
import {
  Wifi,
  Coffee,
  Car,
  ShowerHead,
  Shirt,
  Compass,
  Luggage,
  Sparkles,
} from 'lucide-react';

interface AmenitiesSectionProps {
  currentLang: LanguageCode;
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ currentLang }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'wifi':
        return Wifi;
      case 'breakfast':
        return Coffee;
      case 'parking':
        return Car;
      case 'hotwater':
        return ShowerHead;
      case 'laundry':
        return Shirt;
      case 'tours':
        return Compass;
      case 'luggage':
        return Luggage;
      case 'tea-station':
      default:
        return Sparkles;
    }
  };

  const t = {
    en: {
      kicker: 'Lodge Comforts & Trekker Facilities',
      title: 'Built for Mountain Travelers & Overland Explorers',
      desc: 'Whether you are returning after an alpine trek to Song-Kul or arriving by motorbike across the Torugart Pass, Datka provides every convenience you need to rest and recharge.',
    },
    ru: {
      kicker: 'Удобства и сервис для путешественников',
      title: 'Все условия для комфортного отдыха после гор',
      desc: 'Возвращаетесь ли вы с многодневного похода на Сон-Куль или едете на мотоцикле через перевал Торугарт — в «Датке» созданы все условия для восстановления сил.',
    },
    kg: {
      kicker: 'Саякатчылар үчүн ыңгайлуулуктар',
      title: 'Тоодон кайткандар жана коноктор үчүн толук шарттар',
      desc: 'Сон-Көлдөн чарчап келгенде же алыскы жолдон чарчаганда, «Датка» конок үйү эс алуу жана күч топтоо үчүн бардык шарттарды тартуулайт.',
    },
  }[currentLang];

  return (
    <section id="amenities" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
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

        {/* 8-Grid of Amenities with clean borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES_DATA.map((item) => {
            const Icon = getIcon(item.id);
            return (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-stone-50 border border-stone-200/90 hover:border-amber-700/40 hover:bg-amber-50/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-100/80 text-amber-900 flex items-center justify-center mb-4 border border-amber-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 mb-2">
                    {item.title[currentLang]}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.description[currentLang]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
