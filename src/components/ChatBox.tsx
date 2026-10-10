import React, { useState, useRef, useEffect } from 'react';
import { LanguageCode } from '../types';
import { CONTACT_INFO, ROOMS_DATA } from '../data/guestHouseData';
import {
  MessageSquare,
  X,
  Send,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Check,
  Copy,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'host' | 'user';
  text: string;
  timestamp: string;
  actionType?: 'booking' | 'whatsapp' | 'email' | 'copy_address';
  actionLabel?: string;
}

interface ChatBoxProps {
  currentLang: LanguageCode;
  onOpenBooking: () => void;
}

export const ChatBox: React.FC<ChatBoxProps> = ({ currentLang, onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [copiedAddress, setCopiedAddress] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getInitialMessages = (lang: LanguageCode): ChatMessage[] => {
    switch (lang) {
      case 'ru':
        return [
          {
            id: 'init-1',
            sender: 'host',
            text: 'Салам! Добро пожаловать в Datka Guest House в Нарыне. Меня зовут Жиргал. С удовольствием отвечу на любые вопросы о номерах, нашем сытном домашнем завтраке, погранпропусках на Кель-Суу или дороге до ул. Ленина 54!',
            timestamp: 'Сейчас',
          },
        ];
      case 'kg':
        return [
          {
            id: 'init-1',
            sender: 'host',
            text: 'Салам! Нарындагы «Датка» конок үйүнө кош келиңиз. Менин атым Жыргал. Бөлмөлөр, эртеңки дасторкон, Көл-Суу чек ара уруксаты же Ленин көчөсү 54 дареги боюнча суроолоруңузга кубануу менен жооп берем!',
            timestamp: 'Азыр',
          },
        ];
      case 'en':
      default:
        return [
          {
            id: 'init-1',
            sender: 'host',
            text: 'Salam! Welcome to Datka Guest House in Naryn. I am Jirgal, your host. How can I help you today? Ask me about room availability, our homemade breakfast, Kel-Suu border permits, or finding us at 54 Lenin Street.',
            timestamp: 'Just now',
          },
        ];
    }
  };

  const [messages, setMessages] = useState<ChatMessage[]>(() => getInitialMessages(currentLang));

  // Reset or update welcome message if language changes and only initial message is present
  useEffect(() => {
    if (messages.length <= 1) {
      setMessages(getInitialMessages(currentLang));
    }
  }, [currentLang]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const quickPrompts = {
    en: [
      { id: 'address', label: '📍 Address & Directions' },
      { id: 'permit', label: '🏔️ Kel-Suu Border Permit' },
      { id: 'rooms', label: '🛏️ Rooms & Nightly Rates' },
      { id: 'parking', label: '🚗 4x4 & Moto Parking' },
      { id: 'breakfast', label: '🍳 Breakfast Hours' },
      { id: 'transit', label: '🚐 How to get here from Bishkek' },
    ],
    ru: [
      { id: 'address', label: '📍 Точный адрес и как доехать' },
      { id: 'permit', label: '🏔️ Погранпропуск на Кель-Суу' },
      { id: 'rooms', label: '🛏️ Номера и цены' },
      { id: 'parking', label: '🚗 Парковка для 4х4 и мото' },
      { id: 'breakfast', label: '🍳 Время завтрака' },
      { id: 'transit', label: '🚐 Как доехать из Бишкека' },
    ],
    kg: [
      { id: 'address', label: '📍 Дареги жана жол' },
      { id: 'permit', label: '🏔️ Көл-Суу чек ара уруксаты' },
      { id: 'rooms', label: '🛏️ Бөлмөлөр жана баалар' },
      { id: 'parking', label: '🚗 Авто токтотмо' },
      { id: 'breakfast', label: '🍳 Эртеңки тамак убактысы' },
      { id: 'transit', label: '🚐 Бишкектен келүү жолу' },
    ],
  }[currentLang];

  const generateAnswer = (query: string): { text: string; actionType?: ChatMessage['actionType']; actionLabel?: string } => {
    const q = query.toLowerCase();

    // 1. Address / Location / Directions
    if (q.includes('address') || q.includes('адрес') || q.includes('дарек') || q.includes('lenin') || q.includes('ленин') || q.includes('location') || q.includes('где') || q.includes('кайда')) {
      if (currentLang === 'ru') {
        return {
          text: `Наш точный адрес: ул. Ленина 54, город Нарын, Кыргызстан (ул. Ленина 54). Мы расположены прямо на главной улице Нарына, всего в 5 минутах ходьбы от центральной площади Ала-Тоо и реки Нарын. Для таксистов просто скажите «Ленина 54, конок уй Датка».`,
          actionType: 'copy_address',
          actionLabel: 'Скопировать адрес для такси',
        };
      } else if (currentLang === 'kg') {
        return {
          text: `Биздин так дарегибиз: Нарын шаары, Ленин көчөсү 54. Борбордук көчөдө, Ала-Тоо аянтынан 5 мүнөттүк жөө аралыкта. Таксиге «Ленин көчөсү 54» деп айтсаңыз түз алып келет.`,
          actionType: 'copy_address',
          actionLabel: 'Даректи көчүрүп алуу',
        };
      } else {
        return {
          text: `Our official address is 54 Lenin Street, Naryn city, Kyrgyzstan. We are centrally located on the main avenue, an easy 5-minute stroll from Ala-Too Central Square and 4 minutes to the Naryn River walkway. For local drivers, simply say "Lenin 54, Datka Guest House".`,
          actionType: 'copy_address',
          actionLabel: 'Copy 54 Lenin St Address',
        };
      }
    }

    // 2. Kel-Suu Border Permit
    if (q.includes('permit') || q.includes('пропуск') || q.includes('уруксат') || q.includes('kel-suu') || q.includes('кель-суу') || q.includes('көл-суу') || q.includes('border') || q.includes('граница')) {
      if (currentLang === 'ru') {
        return {
          text: `Озеро Кель-Суу находится в приграничной зоне с Китаем, поэтому для его посещения необходим официальный пограничный пропуск. Мы оформляем его для наших гостей за $15 с человека. Просто пришлите четкое фото или скан паспорта за 7–10 дней до вашего приезда на наш WhatsApp или Email!`,
          actionType: 'whatsapp',
          actionLabel: 'Заказать пропуск в WhatsApp',
        };
      } else if (currentLang === 'kg') {
        return {
          text: `Көл-Суу Кытай чек ара тилкесинде жайгашкандыктан, атайын погранпропуск керектелет. Биз конокторубузга 7-10 күн мурун паспортун жиберсе, даярдап беребиз (бир адамга $15). Бизге WhatsApp аркылуу паспортуңузду жибериңиз.`,
          actionType: 'whatsapp',
          actionLabel: 'WhatsApp аркылуу уруксат заказ кылуу',
        };
      } else {
        return {
          text: `Kel-Suu Lake is located in the restricted frontier zone near the Chinese border, so a State Border Service permit is mandatory. We arrange this hassle-free for our staying guests for $15 per person. Simply send us a clear photo/scan of your passport 7–10 days prior to your arrival via WhatsApp or email.`,
          actionType: 'whatsapp',
          actionLabel: 'Request Permit via WhatsApp',
        };
      }
    }

    // 3. Rooms & Pricing / Availability
    if (q.includes('room') || q.includes('номер') || q.includes('бөлмө') || q.includes('price') || q.includes('цена') || q.includes('баа') || q.includes('cost') || q.includes('rate') || q.includes('book') || q.includes('бронь') || q.includes('suite')) {
      if (currentLang === 'ru') {
        return {
          text: `У нас 4 категории номеров:\n• Делюкс с видом на горы: $38 (~3 350 сом) — двуспальная кровать King, подогрев пола\n• Комфорт Твин (для туристов): $34 (~3 000 сом) — 2 раздельные кровати, сушилка снаряжения\n• Семейный Люкс в нац. стиле: $52 (~4 600 сом) — до 4 человек с дасторхоном\n• Уютный Трехместный: $42 (~3 700 сом) — 3 кровати\n\nВ каждый номер включен горячий душ 24/7 и сытный домашний завтрак!`,
          actionType: 'booking',
          actionLabel: 'Открыть форму бронирования',
        };
      } else if (currentLang === 'kg') {
        return {
          text: `Бизде 4 түрдүү бөлмө бар:\n• Тоо көрүнүшү бар Делюкс: $38 (~3 350 сом)\n• Саякатчылар үчүн Твин: $34 (~3 000 сом)\n• Улуттук үй-бүлөлүк люкс: $52 (~4 600 сом)\n• Үч кишилик бөлмө: $42 (~3 700 сом)\n\nБардык бөлмөлөргө ысык душ жана даамдуу эртең мененки тамак камтылган!`,
          actionType: 'booking',
          actionLabel: 'Бөлмөнү тандап брондоо',
        };
      } else {
        return {
          text: `We have 4 comfortable room configurations:\n• Deluxe King with Mountain View: $38/night (~3,350 KGS) — King bed, floor heating, mountain view\n• Comfort Twin / Trekker: $34/night (~3,000 KGS) — 2 single beds, gear racks\n• Traditional Family Suite: $52/night (~4,600 KGS) — Up to 4 guests with low dastorkhon seating\n• Cozy Triple Room: $42/night (~3,700 KGS) — 3 single beds\n\nAll rates include powerful hot en-suite showers, high-speed Starlink Wi-Fi, and our signature breakfast!`,
          actionType: 'booking',
          actionLabel: 'Open Direct Booking Window',
        };
      }
    }

    // 4. Parking & Security
    if (q.includes('park') || q.includes('парковк') || q.includes('авто') || q.includes('токтот') || q.includes('moto') || q.includes('bike') || q.includes('4x4') || q.includes('car') || q.includes('camper') || q.includes('машин')) {
      if (currentLang === 'ru') {
        return {
          text: `Да, у нас большая закрытая охраняемая территория внутри двора за воротами! Без проблем размещаются экспедиционные джипы 4х4 (Land Cruiser, Patrol), кемперы, мотоциклы и велосипеды. Есть шланг с водой для мойки пыли с авто и велосипедов, а также базовый инструмент.`,
        };
      } else if (currentLang === 'kg') {
        return {
          text: `Ооба, короодо дарбазасы бар коопсуз, жабык автотурук бар! Чоң 4х4 джиптер, мотоциклдер жана велосипеддер кенен батат. Унаа же велосипед жууганга суу шланги бар.`,
        };
      } else {
        return {
          text: `Yes! We have an enclosed, gated courtyard directly on the property. We easily accommodate overland expedition 4x4s (Land Cruisers, Defenders), camper vans, adventure motorbikes, and touring bicycles safely behind locked gates. We also have a wash hose and pump available for dusty bikes and rigs.`,
        };
      }
    }

    // 5. Breakfast
    if (q.includes('breakfast') || q.includes('завтрак') || q.includes('эртең') || q.includes('food') || q.includes('еда') || q.includes('тамак') || q.includes('boorsok') || q.includes('боорсок') || q.includes('kaymak') || q.includes('каймак')) {
      if (currentLang === 'ru') {
        return {
          text: `Завтрак включен в стоимость всех номеров и подается ежедневно с 07:00 до 10:30 в нашей уютной столовой. Мы готовим горячие воздушные боорсоки в казане, подаем свежий нарынский каймак, горный мед с чабрецом, домашние джемы, яйца, каши и чай из самовара. Если вы выезжаете на перевал на рассвете, мы с радостью соберем ранний ланч-бокс с собой!`,
        };
      } else if (currentLang === 'kg') {
        return {
          text: `Эртең мененки тамак бардык бөлмөлөргө камтылган! Күн сайын 07:00дөн 10:30га чейин берилет. Казандан жаңы чыгарылган ысык боорсок, жайлоонун каймагы, таза тоо балы, жумуртка жана чабрец кошулган чай сунушталат. Эрте кетүүчүлөргө жол азыгы даярдалат.`,
        };
      } else {
        return {
          text: `A generous homemade Kyrgyz breakfast is complimentary with every room! Served daily from 07:00 to 10:30. You will enjoy freshly fried golden boorsok pastries, thick pasture kaymak cream, wild mountain thyme honey, homemade preserves, made-to-order eggs, hot porridge, and samovar tea. For dawn departures to high passes, we prepare packed breakfast boxes upon request!`,
        };
      }
    }

    // 6. Transit from Bishkek / Kochkor
    if (q.includes('bishkek') || q.includes('бишкек') || q.includes('kochkor') || q.includes('кочкор') || q.includes('taxi') || q.includes('такси') || q.includes('marshrutka') || q.includes('маршрутк') || q.includes('transit') || q.includes('get here') || q.includes('доехать')) {
      if (currentLang === 'ru') {
        return {
          text: `Как добраться до Нарына:\n• Из Бишкека (Западный автовокзал): Коллективные легковые такси отправляются каждые 20-30 минут с утра до вечера. Дорога занимает ~4.5–5 часов через Боомское ущелье и перевал Долон. Стоимость ~600–800 сом за место.\n• Из Кочкора: Такси и маршрутки идут около 2.5 часов (~350–400 сом).\n\nТаксисту в Нарыне назовите адрес «ул. Ленина 54, Datka».`,
          actionType: 'copy_address',
          actionLabel: 'Скопировать адрес для водителя',
        };
      } else if (currentLang === 'kg') {
        return {
          text: `Нарынга келүү жолу:\n• Бишкектен (Батыш автобекетинен): Жеңил таксилер күн бою жөнөйт. Жол 4.5–5 саат (Боом жана Долон ашуусу аркылуу). Баасы 600–800 сом.\n• Кочкордон: Такси жана маршрутка менен 2.5 саат (~350 сом).\n\nАйдоочуга «Ленин көчөсү 54» десеңиз жетип келесиз.`,
          actionType: 'copy_address',
          actionLabel: 'Айдоочуга даректи көрсөтүү',
        };
      } else {
        return {
          text: `How to reach us:\n• From Bishkek (Western Bus Station / Zapadnyi Avtovokzal): Shared 7-seater taxis and cars leave continuously throughout the day. Travel time is ~4.5–5 hours via scenic Boom Gorge and Dolon Pass (3,030m). Cost is ~600–800 KGS per seat.\n• From Kochkor: Shared taxis take ~2.5 hours (~350–400 KGS).\n\nUpon entering Naryn city, have the driver drop you right at 54 Lenin Street!`,
          actionType: 'copy_address',
          actionLabel: 'Copy 54 Lenin St Address',
        };
      }
    }

    // 7. Song-Kul / Tash-Rabat / Tours / 4x4
    if (q.includes('song-kul') || q.includes('сон-куль') || q.includes('сон-көл') || q.includes('tash rabat') || q.includes('таш-рабат') || q.includes('таш рабат') || q.includes('driver') || q.includes('водитель') || q.includes('айдоочу') || q.includes('tour') || q.includes('экскурси')) {
      if (currentLang === 'ru') {
        return {
          text: `Мы помогаем организовать поездки на Сон-Куль (125 км, через перевал 33 попугая), в каменный караван-сарай Таш-Рабат (110 км) и на озеро Кель-Суу (155 км). У нас есть проверенные местные водители на надежных джипах 4х4, которые знают каждый брод и перевал. Напишите нам в WhatsApp, чтобы узнать доступность и стоимость на ваши даты!`,
          actionType: 'whatsapp',
          actionLabel: 'Связаться с Жиргал по турам',
        };
      } else if (currentLang === 'kg') {
        return {
          text: `Сон-Көлгө (125 км, 33 попугай ашуусу), Таш-Рабатка (110 км) жана Көл-Сууга (155 км) саякаттарды уюштуруп беребиз. Биздин ишенимдүү жергиликтүү 4х4 джип айдоочуларыбыз бар. Кененирээк маалымат алуу үчүн WhatsApp аркылуу жазыңыз!`,
          actionType: 'whatsapp',
          actionLabel: 'Тур боюнча WhatsAppтан жазуу',
        };
      } else {
        return {
          text: `We coordinate custom 4x4 excursions to Song-Kul Lake (125 km via the dramatic "33 Parrots" pass), Tash Rabat Silk Road Caravanserai (110 km), and Kel-Suu glacial lake (155 km). We work with experienced local mountain drivers with reliable high-clearance 4WD vehicles. Reach out to Jirgal on WhatsApp to reserve a driver or yurt stay!`,
          actionType: 'whatsapp',
          actionLabel: 'Message Host for 4x4 Driver',
        };
      }
    }

    // 8. Wi-Fi / Internet
    if (q.includes('wifi') || q.includes('вайфай') || q.includes('интернет') || q.includes('internet') || q.includes('starlink')) {
      if (currentLang === 'ru') {
        return {
          text: `Да! У нас установлен скоростной интернет Starlink + оптоволокно. Сигнал стабильно ловит во всех номерах, в столовой и даже в саду. Скорости хватает для видеозвонков, удаленной работы и выгрузки фото из походов.`,
        };
      } else if (currentLang === 'kg') {
        return {
          text: `Ооба! Бардык бөлмөлөрдө жана короодо ылдам Starlink Wi-Fi жеткиликтүү. Иштөөгө жана саякат сүрөттөрүн жөнөтүүгө абдан ыңгайлуу.`,
        };
      } else {
        return {
          text: `Yes! We have high-speed Starlink satellite & fiber Wi-Fi covering every room, the dining hall, and the courtyard garden. It is fast and reliable for remote work, streaming, and uploading high-resolution mountain photography.`,
        };
      }
    }

    // 9. Payment Methods
    if (q.includes('pay') || q.includes('оплат') || q.includes('төлөм') || q.includes('card') || q.includes('карт') || q.includes('cash') || q.includes('наличн') || q.includes('mbank')) {
      if (currentLang === 'ru') {
        return {
          text: `Мы принимаем оплату наличными в сомах (KGS), долларах США (USD) и евро (EUR). Для гостей из Кыргызстана и СНГ также доступна мгновенная оплата по QR-коду через MBank, Optima24 и Demir Bank. Банкоматы с выдачей наличных находятся в 3 минутах пешком от нас.`,
        };
      } else if (currentLang === 'kg') {
        return {
          text: `Төлөм накталай түрдө сом (KGS), доллар (USD) жана евро (EUR) менен кабыл алынат. Ошондой эле MBank, Optima24 жана Demir QR аркылуу төлөөгө болот. Банкоматтарга жөө 3 мүнөт.`,
        };
      } else {
        return {
          text: `We accept cash in Kyrgyz Som (KGS), US Dollars (USD), and Euros (EUR). For travelers from Kyrgyzstan and Central Asia, we also accept QR payments via MBank, Optima, and Demir Bank. Multiple ATMs that accept international Visa and Mastercard are a 3-minute walk from our door.`,
        };
      }
    }

    // 10. Default friendly response
    if (currentLang === 'ru') {
      return {
        text: `Спасибо за вопрос! Я с радостью помогу вам спланировать поездку в Нарын. Напишите мне напрямую в WhatsApp (+996 700 842 190) или на почту jirgalturganbaeva71@gmail.com, либо нажмите кнопку ниже, чтобы забронировать номер!`,
        actionType: 'whatsapp',
        actionLabel: 'Написать Жиргал в WhatsApp',
      };
    } else if (currentLang === 'kg') {
      return {
        text: `Чоң ырахмат! Сурооңуз боюнча кененирээк маалымат алуу үчүн мага түз WhatsApp (+996 700 842 190) же jirgalturganbaeva71@gmail.com почтасына жазсаңыз болот!`,
        actionType: 'whatsapp',
        actionLabel: 'WhatsApp аркылуу байланышуу',
      };
    } else {
      return {
        text: `Thank you for asking! I would love to help you arrange your stay in Naryn. You can send me a quick message on WhatsApp (+996 700 842 190) or email jirgalturganbaeva71@gmail.com, or reserve your room directly below!`,
        actionType: 'whatsapp',
        actionLabel: 'Chat directly on WhatsApp',
      };
    }
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputText.trim();
    if (!query) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: 'Now',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');

    // Simulate natural response latency (250ms)
    setTimeout(() => {
      const answer = generateAnswer(query);
      const hostReply: ChatMessage = {
        id: `host-${Date.now()}`,
        sender: 'host',
        text: answer.text,
        timestamp: 'Just now',
        actionType: answer.actionType,
        actionLabel: answer.actionLabel,
      };
      setMessages((prev) => [...prev, hostReply]);
    }, 280);
  };

  const handleActionClick = (actionType?: ChatMessage['actionType']) => {
    if (actionType === 'booking') {
      onOpenBooking();
      setIsOpen(false);
    } else if (actionType === 'whatsapp') {
      window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}`, '_blank');
    } else if (actionType === 'copy_address') {
      const addressText = currentLang === 'ru' ? CONTACT_INFO.address.ru : currentLang === 'kg' ? CONTACT_INFO.address.kg : CONTACT_INFO.address.en;
      navigator.clipboard.writeText(addressText);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2500);
    } else if (actionType === 'email') {
      window.location.href = `mailto:${CONTACT_INFO.email}`;
    }
  };

  const chatLabels = {
    en: {
      buttonLabel: 'Chat with Host',
      title: 'Datka Concierge · Jirgal',
      status: 'Usually replies in minutes · 54 Lenin St',
      placeholder: 'Ask about rooms, road to Kel-Suu, breakfast...',
      callDirect: 'Call +996 700 842 190',
      whatsappBanner: 'WhatsApp Quick Chat',
      directContact: 'Email: jirgalturganbaeva71@gmail.com',
    },
    ru: {
      buttonLabel: 'Чат с хозяйкой',
      title: 'Консьерж Datka · Жиргал',
      status: 'Отвечаем за несколько минут · ул. Ленина 54',
      placeholder: 'Спросите о номерах, пропусках, завтраке...',
      callDirect: 'Позвонить +996 700 842 190',
      whatsappBanner: 'Написать в WhatsApp',
      directContact: 'Почта: jirgalturganbaeva71@gmail.com',
    },
    kg: {
      buttonLabel: 'Жыргал менен баарлашуу',
      title: '«Датка» конок үйү · Жыргал',
      status: 'Байланыштабыз · Ленин көчөсү 54',
      placeholder: 'Бөлмөлөр, Көл-Суу уруксаты, тамак боюнча суроо...',
      callDirect: 'Чалуу +996 700 842 190',
      whatsappBanner: 'WhatsApp аркылуу жазуу',
      directContact: 'Почта: jirgalturganbaeva71@gmail.com',
    },
  }[currentLang];

  return (
    <>
      {/* Floating Chat Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-40 bg-amber-800 hover:bg-amber-900 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl flex items-center gap-2.5 transition-all duration-200 active:scale-95 group cursor-pointer border border-amber-600/40"
          aria-label="Open chat with Datka Guest House host"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 text-amber-100" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-amber-800 animate-pulse" />
          </div>
          <span className="hidden sm:inline text-xs font-semibold whitespace-nowrap">
            {chatLabels.buttonLabel}
          </span>
        </button>
      )}

      {/* Floating Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[94vw] sm:w-[380px] md:w-[410px] h-[550px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Chat Header */}
          <div className="bg-stone-900 text-white px-4 py-3.5 flex items-center justify-between border-b border-stone-800 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-amber-800 text-amber-200 border border-amber-600/50 flex items-center justify-center font-bold text-sm shrink-0">
                JT
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="font-semibold text-xs sm:text-sm text-amber-100 truncate">
                    {chatLabels.title}
                  </h4>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                </div>
                <p className="text-[11px] text-stone-300 truncate">
                  {chatLabels.status}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className="text-stone-400 hover:text-white p-1 rounded-lg hover:bg-stone-800 transition-colors"
                aria-label="Close chat window"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick WhatsApp / Direct Phone Utility Strip */}
          <div className="bg-stone-100 px-3 py-1.5 border-b border-stone-200 flex items-center justify-between text-[11px] text-stone-600 shrink-0">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-semibold"
            >
              <span>{chatLabels.whatsappBanner}</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className="flex items-center gap-1 text-stone-700 hover:text-stone-900 font-medium"
            >
              <Phone className="w-3 h-3 text-stone-500" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-stone-50/60">
            {messages.map((msg) => {
              const isHost = msg.sender === 'host';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isHost ? 'items-start' : 'items-end'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-[13px] leading-relaxed shadow-2xs whitespace-pre-line ${
                      isHost
                        ? 'bg-white text-stone-800 border border-stone-200 rounded-tl-xs'
                        : 'bg-amber-800 text-white rounded-tr-xs'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Attached Action Button */}
                  {msg.actionType && (
                    <button
                      onClick={() => handleActionClick(msg.actionType)}
                      className="mt-1.5 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold text-xs rounded-lg transition-colors border border-amber-300/80 cursor-pointer"
                    >
                      {msg.actionType === 'copy_address' ? (
                        copiedAddress ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />
                      ) : msg.actionType === 'booking' ? (
                        <Calendar className="w-3.5 h-3.5" />
                      ) : (
                        <ExternalLink className="w-3.5 h-3.5" />
                      )}
                      <span>
                        {msg.actionType === 'copy_address' && copiedAddress
                          ? 'Copied to Clipboard!'
                          : msg.actionLabel || 'Action'}
                      </span>
                    </button>
                  )}

                  <span className="text-[10px] text-stone-400 mt-0.5 px-1">
                    {msg.timestamp}
                  </span>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3 py-2 bg-white border-t border-stone-200 shrink-0 overflow-x-auto">
            <div className="flex gap-1.5 whitespace-nowrap pb-0.5">
              {quickPrompts.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSendMessage(item.label.replace(/^.*? /, ''))}
                  className="text-[11px] bg-stone-100 hover:bg-amber-50 hover:text-amber-900 text-stone-700 px-2.5 py-1 rounded-full border border-stone-200 transition-colors shrink-0 cursor-pointer flex items-center gap-1"
                >
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-2.5 bg-white border-t border-stone-200 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={chatLabels.placeholder}
              className="flex-1 text-xs px-3 py-2 rounded-xl border border-stone-300 focus:border-amber-800 focus:outline-none"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2 bg-amber-800 hover:bg-amber-900 disabled:opacity-40 disabled:hover:bg-amber-800 text-white rounded-xl transition-colors cursor-pointer shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
