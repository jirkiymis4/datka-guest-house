import React from 'react';
import { LanguageCode } from '../types';
import { BreakfastVisualCard } from './KyrgyzArtElements';
import { Clock, Heart, Award } from 'lucide-react';

interface BreakfastSectionProps {
  currentLang: LanguageCode;
}

export const BreakfastSection: React.FC<BreakfastSectionProps> = ({ currentLang }) => {
  const content = {
    en: {
      kicker: 'Morning Dastorkhon Experience',
      title: 'A Feast of Fresh Mountain Flavors',
      lead:
        'In Kyrgyz tradition, a guest who sits at your table is a blessing sent by heaven. Every morning at Datka, our kitchen fills with the warm aroma of freshly fried boorsok and brewed mountain tea.',
      items: [
        {
          title: 'Golden Boorsok Pastries',
          desc: 'Light, puffy pieces of fried leavened dough served piping hot straight from the kazan.',
        },
        {
          title: 'Artisanal Naryn Kaymak',
          desc: 'Thick, velvety clotted cream sourced directly from pasture cows grazing at 2,200m altitude.',
        },
        {
          title: 'Wild Mountain Flower Honey',
          desc: 'Raw unfiltered honey fragrant with wild mountain thyme, mint, and alpine herbs.',
        },
        {
          title: 'Orchard Preserves & Jams',
          desc: 'Home-stewed wild sea buckthorn (chyrgana), mountain raspberry, and sweet apricot jam.',
        },
        {
          title: 'Hearty Eggs & Porridge',
          desc: 'Cooked to order: farm-fresh scrambled or sunny eggs, wholesome oatmeal or rice porridge.',
        },
        {
          title: 'Herbal Mountain Samovar Tea',
          desc: 'Loose-leaf black tea infused with dried mountain herbs, served in traditional porcelain piala.',
        },
      ],
      timingBadge: 'Daily: 07:00 – 10:30',
      earlyHikerNote: 'Dawn Departure Breakfast Packs available on request for early passes to Song-Kul & Kel-Suu.',
    },
    ru: {
      kicker: 'Традиционный утренний дасторхон',
      title: 'Щедрый вкус кыргызского утра',
      lead:
        'По древней кыргызской традиции, гость — это посланник благословения. Каждое утро в «Датке» начинается с аромата горячих румяных боорсоков и целебного чая с высокогорных трав.',
      items: [
        {
          title: 'Горячие пышные боорсоки',
          desc: 'Воздушные кусочки дрожжевого теста, обжаренные в казане до золотистой корочки.',
        },
        {
          title: 'Настоящий нарынский каймак',
          desc: 'Густые, тающие во рту домашние сливки от коров с высокогорных джайлоо.',
        },
        {
          title: 'Дикий мед с горного разнотравья',
          desc: 'Натуральный мед с ароматом чабреца, горного шалфея и душицы Нарынского хребта.',
        },
        {
          title: 'Домашнее варенье из ягод',
          desc: 'Облепиховый джем (чырганак), горная малина и абрикосовое варенье собственного приготовления.',
        },
        {
          title: 'Деревенские яйца и каши',
          desc: 'Свежая яичница или омлет, овсяная и рисовая каши для заряда бодрости в походе.',
        },
        {
          title: 'Чай с горными травами из самовара',
          desc: 'Ароматный черный чай, который приятно пить из традиционных фарфоровых пиал.',
        },
      ],
      timingBadge: 'Ежедневно: 07:00 – 10:30',
      earlyHikerNote: 'Для ранних выездов на перевалы собираем сытный дорожный ланч-бокс с собой.',
    },
    kg: {
      kicker: 'Эртең мененки дасторкон',
      title: 'Нарындын нукура даамдарынан жасалган сый',
      lead:
        'Кыргыздын «Конок келсе – кут келет» деген накылы бар. «Датка» конок үйүндө күн сайын казандан жаңы чыгарылган ысык боорсок жана тоо чөптөрүнөн демделген чай сунушталат.',
      items: [
        {
          title: 'Кызарган ысык боорсоктор',
          desc: 'Казандан жаңы эле чыгарылган, жумшак жана даамдуу боорсоктор.',
        },
        {
          title: 'Нарындын нукура каймагы',
          desc: '2200 метр бийиктиктеги жайлоодон келген табигый, коюу каймак.',
        },
        {
          title: 'Тоо гүлдөрүнүн таза балы',
          desc: 'Чабрец, жалбыз жана башка дары чөптөрдөн жыйналган табигый тоо балы.',
        },
        {
          title: 'Үйдө кайнатылган кыямдар',
          desc: 'Чычырканак, малина жана өрүктөн жасалган таттуу үй кыямдары.',
        },
        {
          title: 'Жумуртка жана ысык ботколор',
          desc: 'Тоого чыгууга кубат берүүчү жаңы жумуртка жана сүттүү ботколор.',
        },
        {
          title: 'Тоо чөптөрү кошулган чай',
          desc: 'Кыргыздын кооз пиалаларында сунушталган чабрец кошулган ысык чай.',
        },
      ],
      timingBadge: 'Күндө: 07:00 – 10:30',
      earlyHikerNote: 'Тоого эрте чыга турган саякатчылар үчүн жол азыгы алдын ала даярдалат.',
    },
  }[currentLang];

  return (
    <section id="breakfast" className="py-20 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Column 1: Editorial Details & Menu list */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <Award className="w-4 h-4" />
              <span>{content.kicker}</span>
              <span aria-hidden="true">·</span>
              <span className="text-stone-400 font-normal">Included for All Guests</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-white text-balance">
              {content.title}
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {content.lead}
            </p>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {content.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-stone-800/80 border border-stone-700/60 rounded-xl p-3.5 space-y-1 hover:border-amber-700/50 transition-colors"
                >
                  <h4 className="text-sm font-semibold text-amber-200">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-300 leading-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Timing and Special hiker note */}
            <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-800/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-amber-300 font-medium">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{content.timingBadge}</span>
              </div>
              <div className="flex items-center gap-1.5 text-stone-300">
                <Heart className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>{content.earlyHikerNote}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Visual Card */}
          <div className="lg:col-span-5">
            <BreakfastVisualCard />
          </div>
        </div>
      </div>
    </section>
  );
};
