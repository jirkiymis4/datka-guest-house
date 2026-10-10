import { Room, ExcursionDestination, AmenityItem, Testimonial } from '../types';

export const CURRENCY_RATES = {
  USD: 1,
  KGS: 89,
  EUR: 0.92,
};

export const CONTACT_INFO = {
  hostName: 'Jirgal Turganbaeva',
  email: 'jirgalturganbaeva71@gmail.com',
  phoneDisplay: '+996 700 842 190',
  phoneClean: '+996700842190',
  whatsappNumber: '996700842190',
  address: {
    en: '54 Lenin St, Naryn, Kyrgyzstan',
    ru: 'ул. Ленина 54, г. Нарын, Кыргызстан',
    kg: 'Ленин көчөсү 54, Нарын шаары, Кыргызстан',
  },
  postalCode: '722900',
  coordinates: {
    lat: 41.4285,
    lng: 76.0123,
  },
  checkIn: '14:00',
  checkOut: '11:30',
};

export const ROOMS_DATA: Room[] = [
  {
    id: 'deluxe-mountain',
    name: {
      en: 'Deluxe King with Mountain View',
      ru: 'Делюкс с видом на горы',
      kg: 'Тоо көрүнүшү бар Делюкс бөлмөсү',
    },
    tagline: {
      en: 'Spacious retreat with handcrafted Kyrgyz felt decor and serene Tian Shan vistas',
      ru: 'Просторный номер с ручным кыргызским войлоком и панорамой Тянь-Шаня',
      kg: 'Кыргыздын салттуу шырдагы жана кооз Тянь-Шань көрүнүшү менен кенен бөлмө',
    },
    priceUSD: 38,
    capacity: 2,
    beds: {
      en: '1 Large King Bed (Orthopedic)',
      ru: '1 Большая двуспальная кровать (ортопед)',
      kg: '1 Чоң эки кишилик керебет',
    },
    sizeM2: 25,
    features: {
      en: [
        'Private en-suite bathroom with 24/7 hot rain shower',
        'Handmade shyrdak wool rug & embroidered accents',
        'Autonomous floor heating & quiet climate control',
        'Electric kettle, Naryn herbal tea selection & cups',
        'Fast Starlink Wi-Fi & bedside USB chargers',
        'Work desk with mountain view',
      ],
      ru: [
        'Собственная ванная комната с горячим душем 24/7',
        'Ручной шырдак из чистой шерсти и настенный декор',
        'Автономное отопление и теплый пол',
        'Электрочайник, горные травы Нарына и посуда',
        'Скоростной Starlink Wi-Fi и розетки у кровати',
        'Рабочий стол с видом на горы',
      ],
      kg: [
        '24/7 ысык суусу бар жеке душ жана даараткана',
        'Таза жүндөн жасалган кол өнөрчүлүк шырдак',
        'Автономдуу жылытуу тутуму',
        'Электр чайнеги, Нарындын дары чөп чайлары',
        'Ылдам Starlink Wi-Fi байланышы',
        'Тоого караган иш столу',
      ],
    },
    popular: true,
    imageTheme: 'mountain',
  },
  {
    id: 'comfort-twin',
    name: {
      en: 'Comfort Twin / Trekker Room',
      ru: 'Комфорт Твин для путешественников',
      kg: 'Саякатчылар үчүн Ыңгайлуу Твин бөлмөсү',
    },
    tagline: {
      en: 'Two plush single beds, gear drying rack, and quiet courtyard garden view',
      ru: 'Две отдельные кровати, сушилка для экипировки и вид во внутренний сад',
      kg: 'Эки өзүнчө керебет, тоо кийимдерин кургатуу жайы жана бакча көрүнүшү',
    },
    priceUSD: 34,
    capacity: 2,
    beds: {
      en: '2 Comfortable Single Beds',
      ru: '2 Удобные односпальные кровати',
      kg: '2 Ыңгайлуу бир кишилик керебет',
    },
    sizeM2: 22,
    features: {
      en: [
        'Private bathroom with powerful hot water pressure',
        'Dedicated heavy backpack & gear storage space',
        'Individual reading lamps and power points',
        'High-velocity boot dryer available on request',
        'Starlink Wi-Fi connectivity',
        'Hearty homemade breakfast included',
      ],
      ru: [
        'Собственный санузел с отличным напором горячей воды',
        'Место для походных рюкзаков и треккингового снаряжения',
        'Индивидуальные лампы для чтения и розетки',
        'Сушилка для горной обуви по запросу',
        'Wi-Fi Starlink',
        'Сытный домашний завтрак включен',
      ],
      kg: [
        'Күчтүү басымдагы ысык суусу бар жеке душ',
        'Рюкзак жана тоо шаймандары үчүн атайын орун',
        'Ар бир керебетте окуу чырагы жана розетка',
        'Бут кийим кургаткыч суроо-талап боюнча',
        'Starlink Wi-Fi туташуусу',
        'Толук үй эртең мененки тамагы камтылган',
      ],
    },
    imageTheme: 'twin',
  },
  {
    id: 'heritage-family',
    name: {
      en: 'Traditional Kyrgyz Family Suite',
      ru: 'Семейный люкс в кыргызском стиле',
      kg: 'Кыргыз салтындагы Үй-бүлөлүк Люкс',
    },
    tagline: {
      en: 'Extra-large room with separate seating dastorkhon area and handcrafted felt details',
      ru: 'Просторный номер с традиционной зоной дасторхона и аутентичной атмосферой',
      kg: 'Дасторкон бурчу жана кыргыз оюм-чийимдери бар кенен үй-бүлөлүк бөлмө',
    },
    priceUSD: 52,
    capacity: 4,
    beds: {
      en: '1 King Bed + 2 Twin Beds (or Floor Tatami)',
      ru: '1 Двуспальная кровать + 2 Односпальные',
      kg: '1 Чоң керебет + 2 Бир кишилик керебет',
    },
    sizeM2: 36,
    features: {
      en: [
        'Spacious layout accommodating up to 4 guests',
        'Traditional low tea table (dastorkhon) with felt cushions',
        'Modern private bathroom with hair dryer and fresh towels',
        'Quiet residential street atmosphere away from heavy traffic',
        'Wardrobe and secure luggage lockers',
        'Complimentary family breakfast banquet included',
      ],
      ru: [
        'Просторная планировка до 4 гостей',
        'Низкий столик для чая (дасторхон) с теплыми подушками',
        'Современная ванная комната, фен, чистые полотенца',
        'Тихая обстановка без городского шума',
        'Вместительный гардероб',
        'Фирменный домашний завтрак включен',
      ],
      kg: [
        '4 кишиге чейин ылайыкташкан кеңири бөлмө',
        'Жер дасторкон жана жумшак төшөктөр бурчу',
        'Заманбап даараткана жана таза сүлгүлөр',
        'Тынч, бейпил айлана-чөйрө',
        'Кенен кийим шкафы',
        'Үй-бүлөлүк даамдуу эртең мененки тамак',
      ],
    },
    popular: true,
    imageTheme: 'family',
  },
  {
    id: 'cozy-triple',
    name: {
      en: 'Cozy Triple Room',
      ru: 'Уютный трехместный номер',
      kg: 'Үч кишилик жайлуу бөлмө',
    },
    tagline: {
      en: 'Perfect balance of affordability and comfort for small groups & travel buddies',
      ru: 'Идеально для компаний друзей, мотопутешественников и альпинистов',
      kg: 'Достор тобу, мото-саякатчылар жана альпинисттер үчүн эң мыкты чечим',
    },
    priceUSD: 42,
    capacity: 3,
    beds: {
      en: '3 Single Spring Beds',
      ru: '3 Удобные раздельные кровати',
      kg: '3 Бир кишилик керебет',
    },
    sizeM2: 26,
    features: {
      en: [
        'En-suite private shower and WC',
        'Heavy warm duvets for cool mountain nights',
        'High-speed Wi-Fi throughout',
        'Complimentary tea & coffee at our all-day tea station',
        'Convenient parking inside secure gate',
        'Breakfast with fresh boorsok and local honey',
      ],
      ru: [
        'Собственный душ и санузел',
        'Теплые пуховые одеяла для прохладных нарынских ночей',
        'Скоростной Wi-Fi по всей территории',
        'Чайная станция в столовой в любое время суток',
        'Закрытая охраняемая парковка во дворе',
        'Завтрак с горячими боорсоками и нарынским медом',
      ],
      kg: [
        'Жеке душ жана даараткана',
        'Нарындын салкын түндөрү үчүн жылуу төшөктөр',
        'Бардык жерде жеткиликтүү Starlink Wi-Fi',
        'Күнү-түнү ысык чай бурчу',
        'Короодогу коопсуз жабык автотурук',
        'Ысык боорсок жана тоо балы менен эртең мененки тамак',
      ],
    },
    imageTheme: 'budget',
  },
];

export const EXCURSIONS_DATA: ExcursionDestination[] = [
  {
    id: 'song-kul',
    name: {
      en: 'Song-Kul Alpine Lake (Сон-Көл)',
      ru: 'Высокогорное озеро Сон-Куль',
      kg: 'Сон-Көл бийик тоолуу көлү',
    },
    altitude: '3,016 m (9,895 ft)',
    distanceKm: 125,
    drivingTimeHours: 3,
    requiresBorderPermit: false,
    description: {
      en: 'The crown jewel of Kyrgyz nomadism. A pristine alpine plateau surrounded by rolling emerald hills, grazing herds of horses, and traditional white yurt encampments.',
      ru: 'Жемчужина кочевого Кыргызстана. Бескрайнее горное плато, пасущиеся табуны лошадей, зеркальная гладь озера и белые юрточные лагеря чабанов.',
      kg: 'Кыргыз көчмөн жашоосунун туу чокусу. Жашыл жайлоо, эркин чуркаган жылкылар, мөлтүр тунук көл жана ак боз үйлөр.',
    },
    highlights: {
      en: ['Breathtaking "33 Parrots" winding pass (Teskei Torpok)', 'Authentic yurt stays & kymyz tasting', 'Stargazing with zero light pollution'],
      ru: ['Знаменитый серпантин «33 попугая» (Тескей Торпок)', 'Ночевка в настоящей юрте и дегустация кымыза', 'Невероятное звездное небо и Млечный путь'],
      kg: ['«33 попугай» ашуусунун кооз бурулуштары', 'Боз үйдө түнөө жана нукура кымыз даамы', 'Кооз жылдыздуу ачык асман'],
    },
    roadCondition: {
      en: 'Gravel pass road. High-clearance 4x4 recommended; accessible June to late September.',
      ru: 'Гравийный горный перевал. Рекомендуется внедорожник 4x4; сезон с июня по конец сентября.',
      kg: 'Шагыл таштуу тоо жолу. 4x4 унаасы сунушталат; июндан сентябрдын аягына чейин ачык.',
    },
    bestSeason: 'June – September',
  },
  {
    id: 'tash-rabat',
    name: {
      en: 'Tash Rabat Caravanserai (Таш-Рабат)',
      ru: 'Караван-сарай Таш-Рабат',
      kg: 'Таш-Рабат кербен сарайы',
    },
    altitude: '3,200 m (10,500 ft)',
    distanceKm: 110,
    drivingTimeHours: 1.8,
    requiresBorderPermit: false,
    description: {
      en: '15th-century fortified stone caravanserai nestled in the dramatic Kara-Koyun canyon. One of the best preserved ancient Silk Road waystations in Central Asia.',
      ru: 'Уникальный каменный караван-сарай XV века в узком ущелье Кара-Коюн. Главный исторический памятник Великого Шелкового пути в Центральной Азии.',
      kg: 'XV кылымга таандык Кара-Коюн капчыгайындагы таштан курулган кербен сарай. Улуу Жибек Жолунун эң байыркы тарыхый эстелиги.',
    },
    highlights: {
      en: ['31 vaulted stone rooms with central domed hall', 'Scenic drive through At-Bashy valley', 'Day horse treks towards Chatyr-Kul pass'],
      ru: ['31 сводчатая каменная комната и купольный зал', 'Живописная дорога через долину Ат-Башы', 'Конные прогулки в сторону перевала к Чатыр-Кулю'],
      kg: ['31 кумпалуу таш бөлмө жана борбордук зал', 'Ат-Башы өрөөнү аркылуу кооз саякат', 'Чатыр-Көл ашуусуна ат менен сейилдөө'],
    },
    roadCondition: {
      en: 'Smooth paved road to At-Bashy + 15 km compacted scenic valley dirt road. Accessible all year.',
      ru: 'Отличный асфальт до Ат-Башы + 15 км укатанной грунтовки по ущелью. Доступен круглый год.',
      kg: 'Ат-Башыга чейин түз асфальт + капчыгай боюнча 15 км түз жол. Жыл бою ачык.',
    },
    bestSeason: 'All Year (May – October ideal)',
  },
  {
    id: 'kel-suu',
    name: {
      en: 'Kel-Suu Glacial Lake (Көл-Суу)',
      ru: 'Бирюзовое озеро Кель-Суу',
      kg: 'Көл-Суу бийик тоолуу көлү',
    },
    altitude: '3,514 m (11,529 ft)',
    distanceKm: 155,
    drivingTimeHours: 4,
    requiresBorderPermit: true,
    description: {
      en: 'Surreal emerald-turquoise alpine lake wedged between vertical limestone cliff walls near the Chinese border. Often cited by international explorers as Kyrgyzstan’s most dramatic landscape.',
      ru: 'Фантастическое бирюзовое озеро в каньоне с отвесными скалами у границы с Китаем. Одно из самых впечатляющих и труднодоступных мест мира.',
      kg: 'Кытай чек арасына жакын жердеги тик аскалардын ортосунда жайгашкан сырдуу бирюза түстүү көл. Кыргызстандын эң керемет жаратылыш бурчу.',
    },
    highlights: {
      en: ['Incredible boat rides through towering rock chasms', 'Kok-Kiya valley with nomadic yurt camps', 'Wild yaks and alpine eagle sightings'],
      ru: ['Катание на моторной лодке меж километровых скал', 'Долина Кок-Кыя с пастбищами и юртами', 'Табуны яков и парящие беркуты'],
      kg: ['Тик аскалардын арасында кайык менен сүзүү', 'Көк-Кыя өрөөнүндөгү боз үйлөр', 'Жапайы топоздор жана бүркүттөр'],
    },
    roadCondition: {
      en: 'Rugged unpaved track crossing rivers and gravel scree. Requires sturdy 4WD vehicle and experienced mountain driver.',
      ru: 'Сложная горная трасса с бродами и каменистыми участками. Только подготовленный внедорожник 4WD.',
      kg: 'Таштак жана суу кечүүчү оор тоо жолу. Жакшы даярдалган 4WD унаа гана өтөт.',
    },
    bestSeason: 'Late June – Mid September',
  },
  {
    id: 'eki-naryn',
    name: {
      en: 'Eki-Naryn & Valley of Two Rivers',
      ru: 'Ущелье Эки-Нарын',
      kg: 'Эки-Нарын капчыгайы',
    },
    altitude: '2,150 m (7,050 ft)',
    distanceKm: 44,
    drivingTimeHours: 1,
    requiresBorderPermit: false,
    description: {
      en: 'Confluence of the Big and Small Naryn rivers fringed by lush Tien Shan pine forests and sculpted red clay cliffs. An easy and magnificent half-day excursion.',
      ru: 'Место слияния Большого и Малого Нарына в окружении реликтовых сосновых лесов и красных каньонов. Идеальная экскурсия на полдня.',
      kg: 'Чоң жана Кичи Нарын дарыяларынын кошулган жери, карагайлуу токойлор жана кызыл чокулар.',
    },
    highlights: {
      en: ['Fresh pine-scented mountain air & wild berry picking', 'Dramatic wooden suspension footbridges', 'Quiet picnic spots right on the riverbank'],
      ru: ['Хвойный лечебный воздух и заросли облепихи', 'Подвесные деревянные мостики над рекой', 'Уединенные поляны для пикника у воды'],
      kg: ['Карагай жыттуу таза аба жана жапайы мөмөлөр', 'Дарыянын үстүндөгү асма көпүрөлөр', 'Суу жээгиндеги тынч эс алуу жайлары'],
    },
    roadCondition: {
      en: 'Good gravel road along the river canyon. Suitable for standard cars and 4WD.',
      ru: 'Хорошая гравийная дорога вдоль каньона. Подходит для большинства авто.',
      kg: 'Дарыя жээгиндеги түз шагыл жол. Бардык унааларга ылайыктуу.',
    },
    bestSeason: 'May – October',
  },
];

export const AMENITIES_DATA: AmenityItem[] = [
  {
    id: 'wifi',
    iconName: 'wifi',
    title: {
      en: 'Starlink High-Speed Wi-Fi',
      ru: 'Высокоскоростной Starlink Wi-Fi',
      kg: 'Ылдам Starlink Wi-Fi байланышы',
    },
    description: {
      en: 'Reliable fiber/satellite internet covering every room and garden courtyard. Perfect for remote work and sharing trek photos.',
      ru: 'Стабильный интернет во всех номерах и в саду. Отлично подходит для удаленной работы и связи с близкими.',
      kg: 'Бардык бөлмөлөрдө жана бакчада туруктуу интернет. Саякат сүрөттөрүн жөнөтүү жана иштөө үчүн идеалдуу.',
    },
  },
  {
    id: 'breakfast',
    iconName: 'coffee',
    title: {
      en: 'Hearty Kyrgyz Breakfast Included',
      ru: 'Сытный домашний завтрак включен',
      kg: 'Даамдуу үй эртең мененки тамагы',
    },
    description: {
      en: 'Golden hot boorsok, artisanal kaymak cream, wild mountain herb honey, homemade fruit jams, eggs, and freshly brewed samovar teas.',
      ru: 'Горячие пышные боорсоки, домашний каймак, горный мед с разнотравья Нарына, яйца, каши и ароматный чай из самовара.',
      kg: 'Ысык боорсок, сары май, каймак, таза тоо балы, жумуртка жана демделген ысык чай.',
    },
  },
  {
    id: 'parking',
    iconName: 'car',
    title: {
      en: 'Gated Secure 4x4 & Moto Parking',
      ru: 'Охраняемая парковка для авто и мото',
      kg: 'Коопсуз жабык авто жана мото токтотмо',
    },
    description: {
      en: 'Enclosed private courtyard accommodates overland SUVs, camper vans, motorbikes, and mountain bikes safely behind locked gates.',
      ru: 'Закрытый просторный двор для экспедиционных внедорожников, кемперов, мотоциклов и велосипедов.',
      kg: 'Жол тандабас унаалар, мотоцикл жана велосипеддер үчүн короодогу коопсуз жабык орун.',
    },
  },
  {
    id: 'hotwater',
    iconName: 'shower',
    title: {
      en: '24/7 Powerful Hot Showers',
      ru: 'Круглосуточный горячий душ',
      kg: 'Күнү-түнү ысык суу жана душ',
    },
    description: {
      en: 'Modern high-capacity boiler system providing uninterrupted hot water with excellent water pressure after long mountain hikes.',
      ru: 'Мощные автономные бойлеры гарантируют постоянный горячий душ с отличным напором в любое время суток.',
      kg: 'Тоодон чарчап келгенде жуунууга ылайыкталган дайыма ысык суу жана күчтүү басымдагы душ.',
    },
  },
  {
    id: 'laundry',
    iconName: 'washing-machine',
    title: {
      en: 'Trekker Laundry & Gear Drying',
      ru: 'Прачечная и сушка снаряжения',
      kg: 'Кир жуугуч жана кийим кургатуу',
    },
    description: {
      en: 'Fast turnaround laundry service for hiking clothes, thermal wear, and outdoor gear so you leave refreshed for your next pass.',
      ru: 'Быстрая стирка и бережная сушка походных вещей и термобелья перед следующим перевалом.',
      kg: 'Тоо кийимдерин жана шаймандарын тез жууп, кургатып берүү кызматы.',
    },
  },
  {
    id: 'tours',
    iconName: 'compass',
    title: {
      en: 'Permits & 4x4 Tour Coordination',
      ru: 'Пропуска и трансферы на 4х4',
      kg: 'Чек ара уруксат кагаздары жана 4х4 унаалар',
    },
    description: {
      en: 'Official Kel-Suu border zone permit processing, trusted local English/Russian-speaking mountain drivers, and horse trek booking.',
      ru: 'Оформление погранпропусков на Кель-Суу, проверенные водители на внедорожниках, заказ лошадей и юрт на Сон-Куле.',
      kg: 'Көл-Сууга чек ара уруксат кагазын даярдоо, ишенимдүү айдоочулар жана боз үй заказ кылуу.',
    },
  },
  {
    id: 'luggage',
    iconName: 'shield',
    title: {
      en: 'Complimentary Trek Luggage Storage',
      ru: 'Бесплатное хранение багажа',
      kg: 'Жүктү бекер сактоо кызматы',
    },
    description: {
      en: 'Leave heavy suitcases and extra gear safely in our locked storage room while you embark on multi-day treks to Song-Kul or Tash Rabat.',
      ru: 'Оставьте чемоданы и лишние вещи в нашей охраняемой комнате, пока вы в многодневном походе на Сон-Куле.',
      kg: 'Сон-Көлгө же тоого кеткен учурда ашыкча оор жүктөрдү сактоочу ишенимдүү жай.',
    },
  },
  {
    id: 'tea-station',
    iconName: 'kettle',
    title: {
      en: 'All-Day Dastorkhon Tea Lounge',
      ru: 'Чайная зона 24/7 с горными травами',
      kg: '24/7 чай бурчу жана дасторкон',
    },
    description: {
      en: 'Help yourself anytime to hot samovar water, fragrant wild thyme, mint, mountain honey, dried apricots, and walnuts in our cozy dining hall.',
      ru: 'В любое время суток согрейтесь горячим чаем с чабрецом, мятой, горным медом и курагой в уютной гостиной.',
      kg: 'Каалаган убакта ысык чай, тоо чабреци, мейиз жана жаңгак менен дем алып эс алыңыз.',
    },
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'review-1',
    author: 'Markus & Elena Lindqvist',
    origin: 'Stockholm, Sweden',
    travelerType: 'Overland Road-Trippers',
    date: 'August 2025',
    text: 'Datka was heaven after 4 days of camping in the cold rain near Song-Kul! Jirgal welcomed us like long-lost family. The shower was scalding hot with amazing pressure, our room had real floor heating, and the breakfast boorsok with mountain cream made our entire trip. Safe secure parking for our Land Cruiser inside the yard.',
    roomBooked: 'Deluxe King with Mountain View',
    rating: 5,
  },
  {
    id: 'review-2',
    author: 'Clara Beaumont',
    origin: 'Lyon, France',
    travelerType: 'Solo Trekker',
    date: 'July 2025',
    text: 'I stayed here twice—before and after my Kel-Suu expedition. Jirgal helped arrange my border zone permit in advance and coordinated a friendly local 4x4 driver. They let me store my big suitcase for free while I was away. The Wi-Fi is blazing fast so I could back up all my camera raw files without hiccups.',
    roomBooked: 'Comfort Twin Room',
    rating: 5,
  },
  {
    id: 'review-3',
    author: 'Hiroshi Tanaka',
    origin: 'Osaka, Japan',
    travelerType: 'Silk Road Cyclist',
    date: 'September 2025',
    text: 'As a bikepacker coming over the Torugart Pass from Kashgar, Datka Guest House on Lenin Street was the most comforting stop of my 3,000 km journey. They have an outdoor tap to wash the dusty bike and tools. Breakfast is royal, beds are deeply restful. The address is super easy to find right on the main street.',
    roomBooked: 'Cozy Triple Room',
    rating: 5,
  },
];

export const FAQS_DATA = [
  {
    question: {
      en: 'Where exactly is Datka Guest House located in Naryn?',
      ru: 'Где именно находится Datka Guest House в Нарыне?',
      kg: 'Datka Guest House Нарында кайсы даректе жайгашкан?',
    },
    answer: {
      en: 'We are situated at 54 Lenin Street (ул. Ленина 54), right along the main tree-lined avenue of Naryn city. We are a pleasant 5-minute walk from the central square, local cafes, grocery stores, and ATMs, yet setback enough for peaceful, quiet sleep.',
      ru: 'Мы находимся по адресу: ул. Ленина 54, на центральной зеленой улице Нарына. В 5 минутах пешком от центральной площади, местных кафе, продуктовых магазинов и банкоматов.',
      kg: 'Биз Нарын шаарынын борбордук көчөсүндө, Ленин көчөсү 54 дарегинде жайгашканбыз. Борбордук аянтка, дүкөндөргө жана банкоматтарга жөө 5 мүнөт.',
    },
  },
  {
    question: {
      en: 'Can you help arrange border zone permits for Kel-Suu Lake?',
      ru: 'Помогаете ли вы с оформлением погранпропуска на озеро Кель-Суу?',
      kg: 'Көл-Суу көлүнө чек ара уруксат кагазын даярдап бере аласыздарбы?',
    },
    answer: {
      en: 'Yes! Kel-Suu is situated near the Chinese border and requires an official border pass. Simply contact us with your passport copy at least 7–10 days before your arrival, and we will have your stamped permit ready when you check in.',
      ru: 'Да, обязательно! Кель-Суу находится в приграничной зоне с Китаем, для посещения нужен пропуск. Отправьте нам фото паспорта за 7–10 дней до заезда, и готовый пропуск будет ждать вас на ресепшн.',
      kg: 'Ооба! Көл-Суу чек ара тилкесинде болгондуктан атайын уруксат талап кылынат. Келүүдөн 7–10 күн мурун паспортуңузду жөнөтсөңүз, даярдап коёбуз.',
    },
  },
  {
    question: {
      en: 'What payment methods do you accept?',
      ru: 'Какие способы оплаты вы принимаете?',
      kg: 'Кандай төлөм ыкмалары кабыл алынат?',
    },
    answer: {
      en: 'We accept cash in Kyrgyz Som (KGS), US Dollars (USD), and Euros (EUR). For local guests and CIS travelers, we also accept instant QR payments via MBank, Optima Bank, and Demir Bank.',
      ru: 'Мы принимаем наличные в сомах (KGS), долларах (USD) и евро (EUR). Также доступна оплата по QR-коду через MBank, Optima24 и Demir Bank.',
      kg: 'Кыргыз сому (KGS), АКШ доллары (USD) жана Евро (EUR) накталай кабыл алынат. Ошондой эле MBank, Optima жана Demir QR аркылуу төлөөгө болот.',
    },
  },
  {
    question: {
      en: 'Is breakfast included in the room price?',
      ru: 'Включен ли завтрак в стоимость проживания?',
      kg: 'Эртең мененки тамак бөлмөнүн баасына киреби?',
    },
    answer: {
      en: 'Yes! A generous, home-cooked Kyrgyz breakfast is included with all room bookings. Served from 07:00 to 10:30 (or earlier by request for hikers setting off on early dawn mountain passes).',
      ru: 'Да! Наш фирменный сытный домашний завтрак включен во все тарифы. Подается с 07:00 до 10:30 (или раньше по договоренности для ранних выездов в горы).',
      kg: 'Ооба! Бардык бөлмөлөргө даамдуу үй эртең мененки тамагы камтылган. Саат 07:00дөн 10:30га чейин берилет (эрте чыккандар үчүн эрте даярдалат).',
    },
  },
];
