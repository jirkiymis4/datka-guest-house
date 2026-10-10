import React, { useState, useEffect } from 'react';
import { LanguageCode } from '../types';
import {
  Camera,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Upload,
  Plus,
  Image as ImageIcon,
  Check,
} from 'lucide-react';

export interface GalleryPhoto {
  id: string;
  url: string;
  fallbackGradient?: string;
  category: 'rooms' | 'breakfast' | 'expeditions' | 'lodge';
  title: {
    en: string;
    ru: string;
    kg: string;
  };
  caption: {
    en: string;
    ru: string;
    kg: string;
  };
  tag: string;
  isCustom?: boolean;
}

export const DEFAULT_GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-hero-naryn',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Naryn_Panorama.jpg/1280px-Naryn_Panorama.jpg',
    category: 'lodge',
    title: {
      en: 'Datka Lodge & Tian Shan Red Cliffs',
      ru: 'Гостевой дом «Датка» и красные каньоны Нарына',
      kg: '«Датка» конок үйү жана Нарындын кызыл аскалары',
    },
    caption: {
      en: 'Panoramic view of Naryn city valley flanked by dramatic red sandstone bluffs and Tian Shan ridges at 2,050m.',
      ru: 'Панорамный вид на долину Нарына в окружении живописных красных каньонов на высоте 2 050 метров.',
      kg: '2 050 метр бийиктиктеги Нарын өрөөнүнүн жана кызыл аскаларынын кооз панорамасы.',
    },
    tag: '54 Lenin St · Naryn Valley',
  },
  {
    id: 'photo-room-deluxe',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Shyrdak_in_Kochkor%2C_Kyrgyzstan.jpg/1280px-Shyrdak_in_Kochkor%2C_Kyrgyzstan.jpg',
    category: 'rooms',
    title: {
      en: 'Deluxe King Bedroom with Handcrafted Shyrdak',
      ru: 'Номер Делюкс с подлинным кыргызским шырдаком',
      kg: 'Кол өнөрчүлүк шырдагы бар Делюкс бөлмөсү',
    },
    caption: {
      en: 'Authentic 100% natural wool felt tapestries adorn the walls, paired with comfortable orthopedic bedding and autonomous heating.',
      ru: 'Стены украшены традиционным войлочным шырдаком ручной работы из чистой овечьей шерсти. Теплый пол и удобные матрасы.',
      kg: 'Таза кой жүнүнөн жасалган салттуу кыргыз шырдактары, жылуу пол жана жайлуу керебеттер.',
    },
    tag: 'Deluxe King Room',
  },
  {
    id: 'photo-boorsok-breakfast',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Boortsog.jpg/1280px-Boortsog.jpg',
    category: 'breakfast',
    title: {
      en: 'Freshly Fried Golden Boorsok',
      ru: 'Горячие золотистые боорсоки',
      kg: 'Казандан жаңы чыккан ысык боорсок',
    },
    caption: {
      en: 'Prepared fresh every morning in our guest house kitchen, served with thick Naryn kaymak and alpine wild thyme honey.',
      ru: 'Каждое утро мы жарим свежие пышные боорсоки к столу и подаем их с домашним каймаком и горным медом.',
      kg: 'Күн сайын эртең менен казанда бышырылган ысык боорсоктор, сары май жана жайлоонун каймагы.',
    },
    tag: 'Homemade Breakfast',
  },
  {
    id: 'photo-song-kul-yurts',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Yurts_at_Song_K%C3%B6l.jpg/1280px-Yurts_at_Song_K%C3%B6l.jpg',
    category: 'expeditions',
    title: {
      en: 'Song-Kul Alpine Lake Yurt Encampments (3,016 m)',
      ru: 'Юрточные лагеря на озере Сон-Куль (3 016 м)',
      kg: 'Сон-Көлдөгү боз үйлөр (3 016 м)',
    },
    caption: {
      en: 'Just 125 km from Datka via the 33 Parrots pass. Pristine waters, grazing herds of horses, and nomadic hospitality.',
      ru: 'Всего 125 км от нашего гостевого дома через перевал 33 попугая. Кристальное озеро, табуны и ночевки в юртах.',
      kg: '«Даткадан» 33 попугай ашуусу аркылуу 125 км. Мөлтүр тунук көл жана жайлоо.',
    },
    tag: 'Song-Kul · 125 km',
  },
  {
    id: 'photo-tash-rabat-fortress',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Tash_Rabat_1.jpg/1280px-Tash_Rabat_1.jpg',
    category: 'expeditions',
    title: {
      en: '15th-Century Tash Rabat Caravanserai',
      ru: 'Средневековый караван-сарай Таш-Рабат',
      kg: 'XV кылымдагы Таш-Рабат кербен сарайы',
    },
    caption: {
      en: 'Medieval stone fortress on the ancient Silk Road in the At-Bashy mountains, 110 km south of Datka Guest House.',
      ru: 'Уникальная каменная крепость Великого Шелкового пути в Ат-Башынском ущелье, в 110 км от Нарына.',
      kg: 'Ат-Башы тоолорундагы Улуу Жибек Жолунун байыркы таш эстелиги, Нарындан 110 км.',
    },
    tag: 'Tash Rabat · 110 km',
  },
  {
    id: 'photo-kel-suu-turquoise',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Kol-Suu_lake%2C_Kyrgyzstan.jpg/1280px-Kol-Suu_lake%2C_Kyrgyzstan.jpg',
    category: 'expeditions',
    title: {
      en: 'Kel-Suu Glacial Lake Canyon (3,514 m)',
      ru: 'Бирюзовый каньон озера Кель-Суу (3 514 м)',
      kg: 'Көл-Суу бийик тоолуу көлү (3 514 м)',
    },
    caption: {
      en: 'Spectacular emerald-turquoise glacial lake between sheer limestone cliffs near the Chinese border. We arrange border permits!',
      ru: 'Фантастическое бирюзовое озеро среди отвесных скал. Оформляем пропуска в погранзону для наших гостей!',
      kg: 'Тик аскалардын ортосундагы керемет көл. Конокторубузга чек ара уруксатын даярдап беребиз!',
    },
    tag: 'Kel-Suu · 155 km',
  },
  {
    id: 'photo-horseman-mountain',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Horseman_near_Song_Kol_lake.jpg/1280px-Horseman_near_Song_Kol_lake.jpg',
    category: 'expeditions',
    title: {
      en: 'Horse Trekking across Tian Shan Jailoo',
      ru: 'Конные походы по джайлоо Тянь-Шаня',
      kg: 'Тянь-Шань жайлоолорунда ат менен саякат',
    },
    caption: {
      en: 'Experience the nomadic riding culture. We arrange friendly horse guides and gentle mounts for all skill levels.',
      ru: 'Почувствуйте дух кочевников. Мы помогаем организовать конные прогулки и опытных проводников.',
      kg: 'Көчмөн салтын сезиңиз. Ат менен тоолорго чыгууга тажрыйбалуу жол көрсөтүүчүлөрдү уюштурабыз.',
    },
    tag: 'Horse Trekking',
  },
  {
    id: 'photo-breakfast-dastorkhon',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Central_Asian_tea_culture.jpg/1280px-Central_Asian_tea_culture.jpg',
    category: 'breakfast',
    title: {
      en: 'Traditional Samovar Tea & Mountain Herbs',
      ru: 'Традиционное чаепитие с горными травами',
      kg: 'Тоо чөптөрү кошулган ысык чай',
    },
    caption: {
      en: 'Steaming hot black tea infused with wild thyme (chaiki) gathered from Naryn alpine meadows, served in porcelain piala bowls.',
      ru: 'Ароматный чай с нарынским диким чабрецом и мятой, подаваемый в расписных восточных пиалах.',
      kg: 'Нарындын тоо чабреци кошулган, кооз пиалаларда сунушталган ысык чай.',
    },
    tag: 'Tea Lounge 24/7',
  },
];

interface GallerySectionProps {
  currentLang: LanguageCode;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ currentLang }) => {
  const [photos, setPhotos] = useState<GalleryPhoto[]>(() => {
    try {
      const saved = localStorage.getItem('datka_custom_photos');
      if (saved) {
        const parsed = JSON.parse(saved);
        return [...parsed, ...DEFAULT_GALLERY_PHOTOS];
      }
    } catch {
      // Ignore storage errors
    }
    return DEFAULT_GALLERY_PHOTOS;
  });

  const [activeTab, setActiveTab] = useState<'all' | 'rooms' | 'breakfast' | 'expeditions' | 'lodge'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [newPhotoUrl, setNewPhotoUrl] = useState('');
  const [newPhotoTitle, setNewPhotoTitle] = useState('');
  const [newPhotoCategory, setNewPhotoCategory] = useState<'rooms' | 'breakfast' | 'expeditions' | 'lodge'>('lodge');
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const filteredPhotos = photos.filter((p) => {
    if (activeTab === 'all') return true;
    return p.category === activeTab;
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setNewPhotoUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddPhotoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhotoUrl) return;

    const newPhoto: GalleryPhoto = {
      id: `custom-${Date.now()}`,
      url: newPhotoUrl,
      category: newPhotoCategory,
      title: {
        en: newPhotoTitle || 'Datka Guest House Photo',
        ru: newPhotoTitle || 'Фото гостевого дома «Датка»',
        kg: newPhotoTitle || '«Датка» конок үйүнүн сүрөтү',
      },
      caption: {
        en: 'Real photograph taken at 54 Lenin Street, Naryn, Kyrgyzstan.',
        ru: 'Реальная фотография, сделанная в гостевом доме по ул. Ленина 54, Нарын.',
        kg: 'Нарын шаары, Ленин көчөсү 54 дарегинде тартылган нукура сүрөт.',
      },
      tag: 'Real Guest House Photo',
      isCustom: true,
    };

    const updated = [newPhoto, ...photos];
    setPhotos(updated);

    try {
      const customs = updated.filter((p) => p.isCustom);
      localStorage.setItem('datka_custom_photos', JSON.stringify(customs));
    } catch {
      // Ignore storage errors
    }

    setUploadSuccess(true);
    setTimeout(() => {
      setUploadSuccess(false);
      setIsUploadModalOpen(false);
      setNewPhotoUrl('');
      setNewPhotoTitle('');
    }, 1500);
  };

  const t = {
    en: {
      kicker: 'Real Photography & Atmosphere',
      title: 'Moments at Datka & Across Naryn',
      subhead:
        'Explore real photographs of our guest house rooms, the morning boorsok breakfast spread, and the legendary Tian Shan mountain destinations reachable right from 54 Lenin Street.',
      tabAll: 'All Real Photos',
      tabRooms: 'Rooms & Heritage',
      tabBreakfast: 'Homemade Breakfast',
      tabExpeditions: 'Song-Kul & Kel-Suu',
      tabLodge: 'Naryn Valley & Lodge',
      addPhotoBtn: 'Add Real Picture',
      uploadModalTitle: 'Add Real Guest House Picture',
      uploadModalDesc: 'Upload a real photo from your phone or device or enter an image URL to feature it in the gallery.',
      fileLabel: 'Choose image file from phone / computer',
      urlLabel: 'Or paste image link',
      titleLabel: 'Photo Title / Room Name',
      categoryLabel: 'Category',
      savePhotoBtn: 'Save to Gallery',
      closeBtn: 'Close',
    },
    ru: {
      kicker: 'Реальные фотографии и атмосфера',
      title: 'Фотографии «Датки» и красот Нарына',
      subhead:
        'Взгляните на реальные фотографии наших комнат с войлочными шырдаками, утреннего дасторхона с горячими боорсоками и потрясающих перевалов Тянь-Шаня.',
      tabAll: 'Все фото',
      tabRooms: 'Номера и войлок',
      tabBreakfast: 'Домашний завтрак',
      tabExpeditions: 'Сон-Куль и Кель-Суу',
      tabLodge: 'Долина Нарына',
      addPhotoBtn: 'Добавить реальное фото',
      uploadModalTitle: 'Добавить фотографию',
      uploadModalDesc: 'Загрузите реальное фото с телефона или вставьте ссылку, чтобы добавить его в галерею.',
      fileLabel: 'Выбрать файл с телефона / компьютера',
      urlLabel: 'Или вставьте прямую ссылку на фото',
      titleLabel: 'Название фотографии',
      categoryLabel: 'Категория',
      savePhotoBtn: 'Сохранить фото в галерею',
      closeBtn: 'Закрыть',
    },
    kg: {
      kicker: 'Нукура сүрөттөр жана маанай',
      title: '«Датка» конок үйү жана Нарындын кооздугу',
      subhead:
        'Бөлмөлөрүбүздүн, эртең мененки дасторкондун жана Нарындан баруучу Сон-Көл, Таш-Рабат, Көл-Суу саякаттарынын нукура сүрөттөрүн көрүңүз.',
      tabAll: 'Бардык сүрөттөр',
      tabRooms: 'Бөлмөлөр жана шырдак',
      tabBreakfast: 'Эртеңки дасторкон',
      tabExpeditions: 'Сон-Көл жана Көл-Суу',
      tabLodge: 'Нарын өрөөнү',
      addPhotoBtn: 'Жаңы сүрөт кошуу',
      uploadModalTitle: 'Нукура сүрөт кошуу',
      uploadModalDesc: 'Телефондон сүрөт тандап же шилтемесин киргизип, сайтка жаңы сүрөт кошуңуз.',
      fileLabel: 'Телефондон же компьютерден сүрөт жүктөө',
      urlLabel: 'Же интернеттен сүрөт шилтемесин жазыңыз',
      titleLabel: 'Сүрөттүн аталышы',
      categoryLabel: 'Бөлүмү',
      savePhotoBtn: 'Сүрөттү сактоо',
      closeBtn: 'Жабуу',
    },
  }[currentLang];

  return (
    <section id="gallery" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Add Real Photo action */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <Camera className="w-4 h-4" />
              <span>{t.kicker}</span>
              <span aria-hidden="true">·</span>
              <span className="text-stone-400 font-normal">Naryn, Kyrgyzstan</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-white text-balance">
              {t.title}
            </h2>
            <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
              {t.subhead}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsUploadModalOpen(true)}
              className="px-4 py-2.5 bg-amber-800 hover:bg-amber-700 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-md active:scale-98"
            >
              <Plus className="w-4 h-4" />
              <span>{t.addPhotoBtn}</span>
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              activeTab === 'all'
                ? 'bg-amber-800 text-white shadow-xs'
                : 'bg-stone-800/80 text-stone-400 hover:text-white'
            }`}
          >
            {t.tabAll}
          </button>
          <button
            onClick={() => setActiveTab('rooms')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              activeTab === 'rooms'
                ? 'bg-amber-800 text-white shadow-xs'
                : 'bg-stone-800/80 text-stone-400 hover:text-white'
            }`}
          >
            {t.tabRooms}
          </button>
          <button
            onClick={() => setActiveTab('breakfast')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              activeTab === 'breakfast'
                ? 'bg-amber-800 text-white shadow-xs'
                : 'bg-stone-800/80 text-stone-400 hover:text-white'
            }`}
          >
            {t.tabBreakfast}
          </button>
          <button
            onClick={() => setActiveTab('expeditions')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              activeTab === 'expeditions'
                ? 'bg-amber-800 text-white shadow-xs'
                : 'bg-stone-800/80 text-stone-400 hover:text-white'
            }`}
          >
            {t.tabExpeditions}
          </button>
          <button
            onClick={() => setActiveTab('lodge')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              activeTab === 'lodge'
                ? 'bg-amber-800 text-white shadow-xs'
                : 'bg-stone-800/80 text-stone-400 hover:text-white'
            }`}
          >
            {t.tabLodge}
          </button>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative h-64 rounded-2xl overflow-hidden bg-stone-800 border border-stone-800/80 cursor-pointer shadow-md hover:border-amber-600/50 transition-all duration-300 flex flex-col justify-end"
            >
              {/* Real Image Tag with referrerPolicy and resilient error fallback */}
              <img
                src={photo.url}
                alt={photo.title[currentLang]}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  // Fallback to stylized SVG placeholder if network blocks image
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

              {/* Tag Marker */}
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[10px] font-semibold tracking-wide text-amber-200 bg-stone-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-stone-700/60">
                  {photo.tag}
                </span>
              </div>

              <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-1.5 bg-stone-900/80 backdrop-blur-md rounded-lg text-white">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Content overlay */}
              <div className="relative z-10 p-4">
                <h4 className="text-white font-serif-display font-medium text-sm leading-snug drop-shadow-sm group-hover:text-amber-200 transition-colors">
                  {photo.title[currentLang]}
                </h4>
                <p className="text-stone-300 text-[11px] line-clamp-1 mt-0.5">
                  {photo.caption[currentLang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 text-white/70 hover:text-white p-2 rounded-full bg-stone-900/70 hover:bg-stone-800 transition-colors z-50 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1));
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-stone-900/60 hover:bg-stone-800 transition-colors z-50 cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0));
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-stone-900/60 hover:bg-stone-800 transition-colors z-50 cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl">
              <img
                src={filteredPhotos[lightboxIndex].url}
                alt={filteredPhotos[lightboxIndex].title[currentLang]}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl"
              />
            </div>

            <div className="mt-4 text-center max-w-2xl px-4">
              <span className="text-xs uppercase font-semibold text-amber-400 block mb-1">
                {filteredPhotos[lightboxIndex].tag}
              </span>
              <h3 className="text-xl font-serif-display font-medium text-white">
                {filteredPhotos[lightboxIndex].title[currentLang]}
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm mt-1 leading-relaxed">
                {filteredPhotos[lightboxIndex].caption[currentLang]}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Upload Real Photo Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-stone-900 text-white rounded-2xl max-w-md w-full border border-stone-800 p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-amber-400">
                <Camera className="w-5 h-5" />
                <h3 className="font-serif-display text-lg font-bold text-white">
                  {t.uploadModalTitle}
                </h3>
              </div>
              <button
                onClick={() => setIsUploadModalOpen(false)}
                className="text-stone-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-stone-300 mb-5 leading-relaxed">
              {t.uploadModalDesc}
            </p>

            {uploadSuccess ? (
              <div className="py-8 text-center space-y-2">
                <div className="w-12 h-12 bg-emerald-900/60 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-600">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-sm text-white">Photo Added Successfully!</h4>
                <p className="text-xs text-stone-400">Now showing in your real gallery.</p>
              </div>
            ) : (
              <form onSubmit={handleAddPhotoSubmit} className="space-y-4">
                {/* File picker */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    {t.fileLabel}
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="w-full text-xs text-stone-300 file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-amber-800 file:text-white hover:file:bg-amber-700 cursor-pointer"
                  />
                </div>

                {/* Or image url */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    {t.urlLabel}
                  </label>
                  <input
                    type="url"
                    value={newPhotoUrl}
                    onChange={(e) => setNewPhotoUrl(e.target.value)}
                    placeholder="https://example.com/guesthouse-room.jpg"
                    className="w-full text-xs px-3 py-2.5 rounded-xl bg-stone-800 border border-stone-700 text-white focus:border-amber-500 focus:outline-none"
                  />
                </div>

                {/* Preview if url exists */}
                {newPhotoUrl && (
                  <div className="h-28 w-full rounded-xl overflow-hidden border border-stone-700 bg-stone-800">
                    <img
                      src={newPhotoUrl}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Title */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    {t.titleLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={newPhotoTitle}
                    onChange={(e) => setNewPhotoTitle(e.target.value)}
                    placeholder="e.g. Deluxe Room #2 or Garden View"
                    className="w-full text-xs px-3 py-2.5 rounded-xl bg-stone-800 border border-stone-700 text-white focus:border-amber-500 focus:outline-none"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    {t.categoryLabel}
                  </label>
                  <select
                    value={newPhotoCategory}
                    onChange={(e) => setNewPhotoCategory(e.target.value as any)}
                    className="w-full text-xs px-3 py-2.5 rounded-xl bg-stone-800 border border-stone-700 text-white focus:border-amber-500 focus:outline-none cursor-pointer"
                  >
                    <option value="rooms">Rooms & Heritage</option>
                    <option value="breakfast">Homemade Breakfast</option>
                    <option value="expeditions">Expeditions & Tours</option>
                    <option value="lodge">Lodge & Naryn</option>
                  </select>
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setIsUploadModalOpen(false)}
                    className="flex-1 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-xl text-xs font-semibold transition-colors"
                  >
                    {t.closeBtn}
                  </button>
                  <button
                    type="submit"
                    disabled={!newPhotoUrl}
                    className="flex-1 py-2.5 bg-amber-800 hover:bg-amber-700 disabled:opacity-40 text-white rounded-xl text-xs font-semibold transition-colors shadow-md"
                  >
                    {t.savePhotoBtn}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
