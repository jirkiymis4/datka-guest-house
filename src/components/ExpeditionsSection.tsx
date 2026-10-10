import React, { useState } from 'react';
import { LanguageCode, ExcursionDestination } from '../types';
import { EXCURSIONS_DATA, CONTACT_INFO } from '../data/guestHouseData';
import { Compass, ShieldAlert, Mountain, Clock, MapPin, Check, MessageSquare } from 'lucide-react';

interface ExpeditionsSectionProps {
  currentLang: LanguageCode;
  onOpenBooking: () => void;
}

export const ExpeditionsSection: React.FC<ExpeditionsSectionProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  const [selectedDestId, setSelectedDestId] = useState<string>(EXCURSIONS_DATA[0].id);

  const selectedDestination: ExcursionDestination =
    EXCURSIONS_DATA.find((d) => d.id === selectedDestId) || EXCURSIONS_DATA[0];

  const t = {
    en: {
      kicker: 'Tian Shan Silk Road Gateway',
      title: 'High-Altitude Expeditions from Naryn',
      subhead:
        'With its 2,050 m altitude, Naryn is Central Asia’s premier staging ground for alpine lakes, nomadic pastures, and medieval Silk Road fortresses. We assist our guests with reliable 4x4 drivers, border permits, and yurt stays.',
      altitude: 'Altitude',
      distance: 'Distance from Datka',
      driveTime: 'Driving Time',
      permitRequired: 'Border Zone Permit Required',
      noPermitNeeded: 'No Permit Needed',
      roadCondition: 'Road & Vehicle Requirement',
      bestSeason: 'Best Travel Window',
      highlights: 'Expedition Highlights',
      inquireTour: 'Inquire About 4x4 Tour & Driver',
      permitNotice:
        'Kel-Suu requires an official State Border Service permit. We can process this for our guests in advance.',
      needPermitHelp: 'Request Kel-Suu Permit',
    },
    ru: {
      kicker: 'Врата Великого Шелкового Пути',
      title: 'Горные маршруты и экспедиции из Нарына',
      subhead:
        'Нарын (2 050 м) — главная стартовая точка Кыргызстана для путешествий к высокогорным озерам, караван-сараям и джайлоо. Мы помогаем гостям с проверенными водителями 4х4, погранпропусками и юртами.',
      altitude: 'Высота над уровнем моря',
      distance: 'Расстояние от гостевого дома',
      driveTime: 'Время в пути',
      permitRequired: 'Нужен пограничный пропуск',
      noPermitNeeded: 'Пропуск не требуется',
      roadCondition: 'Состояние дороги и транспорт',
      bestSeason: 'Рекомендуемый сезон',
      highlights: 'Главные впечатления',
      inquireTour: 'Заказать поездку на внедорожнике 4х4',
      permitNotice:
        'Для посещения Кель-Суу требуется пропуск в пограничную зону. Мы оформим его для вас заранее.',
      needPermitHelp: 'Оформить погранпропуск',
    },
    kg: {
      kicker: 'Улуу Жибек Жолунун дарбазасы',
      title: 'Нарындан чыгуучу тоо саякаттары',
      subhead:
        'Нарын шаары (2 050 м) — Сон-Көлгө, Таш-Рабатка жана Көл-Сууга сапар тартуу үчүн эң негизги борбор. Конокторубузга тажрыйбалуу 4х4 айдоочуларды, боз үйлөрдү жана чек ара уруксаттарын уюштуруп беребиз.',
      altitude: 'Деңиз деңгээлинен бийиктиги',
      distance: '«Датка» конок үйүнөн аралыгы',
      driveTime: 'Жол убактысы',
      permitRequired: 'Чек ара уруксаты талап кылынат',
      noPermitNeeded: 'Уруксат талап кылынбайт',
      roadCondition: 'Жолдун абалы жана унаа',
      bestSeason: 'Эң ыңгайлуу мезгил',
      highlights: 'Негизги кооздуктар',
      inquireTour: '4х4 унаа жана саякат заказ кылуу',
      permitNotice:
        'Көл-Сууга баруу үчүн мамлекеттик чек ара кызматынын уруксаты керек. Биз муну алдын ала даярдап беребиз.',
      needPermitHelp: 'Чек ара кагазын заказ кылуу',
    },
  }[currentLang];

  const handleWhatsAppTourInquiry = (destName: string) => {
    const text = encodeURIComponent(
      `Salam! I am inquiring about an expedition to ${destName} starting from Datka Guest House in Naryn. Could you please share 4x4 driver availability and rates?`
    );
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="expeditions" className="py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            <Compass className="w-4 h-4" />
            <span>{t.kicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-stone-900 text-balance">
            {t.title}
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            {t.subhead}
          </p>
        </div>

        {/* Tab Selector for Destinations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {EXCURSIONS_DATA.map((dest) => {
            const isSelected = dest.id === selectedDestId;
            return (
              <button
                key={dest.id}
                onClick={() => setSelectedDestId(dest.id)}
                className={`p-4 rounded-xl text-left transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-amber-900 text-white border-amber-950 shadow-md ring-2 ring-amber-800/20'
                    : 'bg-white text-stone-800 border-stone-200 hover:border-stone-400'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-semibold uppercase ${isSelected ? 'text-amber-200' : 'text-stone-500'}`}>
                    {dest.altitude}
                  </span>
                  {dest.requiresBorderPermit && (
                    <span className={`text-[10px] font-bold ${isSelected ? 'text-amber-300' : 'text-rose-600'}`}>
                      Permit
                    </span>
                  )}
                </div>
                <h4 className="font-serif-display font-bold text-sm sm:text-base leading-snug">
                  {dest.name[currentLang]}
                </h4>
                <div className={`text-xs mt-1 tabular-nums ${isSelected ? 'text-amber-100' : 'text-stone-500'}`}>
                  {dest.distanceKm} km · {dest.drivingTimeHours} hrs
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Destination Detailed Showcase */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Facts & Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 mb-1">
                  <span>{selectedDestination.altitude}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedDestination.bestSeason}</span>
                  <span aria-hidden="true">·</span>
                  <span className={selectedDestination.requiresBorderPermit ? 'text-rose-600 font-bold' : 'text-emerald-700 font-medium'}>
                    {selectedDestination.requiresBorderPermit ? t.permitRequired : t.noPermitNeeded}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif-display font-medium text-stone-900">
                  {selectedDestination.name[currentLang]}
                </h3>

                <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
                  {selectedDestination.description[currentLang]}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2">
                <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  {t.highlights}
                </h5>
                <div className="space-y-1.5">
                  {selectedDestination.highlights[currentLang].map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Road Condition */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-700">
                  <Mountain className="w-4 h-4 text-amber-800" />
                  <span>{t.roadCondition}</span>
                </div>
                <p className="text-xs text-stone-600">
                  {selectedDestination.roadCondition[currentLang]}
                </p>
              </div>
            </div>

            {/* Right Column: Key Logistics & Direct Booking */}
            <div className="lg:col-span-5 bg-stone-50 rounded-xl p-6 border border-stone-200 space-y-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-800">
                Logistics from 54 Lenin St
              </h4>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center py-2 border-b border-stone-200">
                  <span className="text-stone-500 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    <span>{t.distance}</span>
                  </span>
                  <span className="font-bold text-stone-900 tabular-nums">
                    {selectedDestination.distanceKm} km
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-stone-200">
                  <span className="text-stone-500 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span>{t.driveTime}</span>
                  </span>
                  <span className="font-bold text-stone-900 tabular-nums">
                    ~{selectedDestination.drivingTimeHours} hours (one way)
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-stone-200">
                  <span className="text-stone-500 flex items-center gap-1.5">
                    <Mountain className="w-3.5 h-3.5 text-stone-400" />
                    <span>{t.altitude}</span>
                  </span>
                  <span className="font-bold text-stone-900 tabular-nums">
                    {selectedDestination.altitude}
                  </span>
                </div>
              </div>

              {selectedDestination.requiresBorderPermit && (
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <span>{t.permitNotice}</span>
                </div>
              )}

              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => handleWhatsAppTourInquiry(selectedDestination.name.en)}
                  className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.inquireTour}</span>
                </button>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-medium transition-colors cursor-pointer"
                >
                  Book Room + Tour Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
