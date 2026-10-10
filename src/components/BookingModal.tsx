import React, { useState } from 'react';
import { CurrencyCode, LanguageCode, Room } from '../types';
import { ROOMS_DATA, CURRENCY_RATES, CONTACT_INFO } from '../data/guestHouseData';
import { X, Calendar, Users, CheckCircle, Send, MessageCircle, Mail, MapPin } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: CurrencyCode;
  currentLang: LanguageCode;
  preselectedRoomId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  currency,
  currentLang,
  preselectedRoomId,
}) => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(
    preselectedRoomId || ROOMS_DATA[0].id
  );
  const [checkIn, setCheckIn] = useState<string>('2026-07-15');
  const [checkOut, setCheckOut] = useState<string>('2026-07-17');
  const [guestsCount, setGuestsCount] = useState<number>(2);
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [needBorderPermit, setNeedBorderPermit] = useState<boolean>(false);
  const [needMountainTransfer, setNeedMountainTransfer] = useState<boolean>(false);
  const [specialNotes, setSpecialNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingCode, setBookingCode] = useState<string>('');

  if (!isOpen) return null;

  const selectedRoom: Room =
    ROOMS_DATA.find((r) => r.id === selectedRoomId) || ROOMS_DATA[0];

  // Calculate nights
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const nights = Math.max(
    1,
    Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
  );

  const rateMultiplier = CURRENCY_RATES[currency];
  const roomPriceConverted = Math.round(selectedRoom.priceUSD * rateMultiplier);
  const permitPricePerPersonUSD = 15;
  const permitPriceConverted = needBorderPermit
    ? Math.round(permitPricePerPersonUSD * guestsCount * rateMultiplier)
    : 0;
  const totalPriceConverted = roomPriceConverted * nights + permitPriceConverted;

  const currencySymbol =
    currency === 'USD' ? '$' : currency === 'KGS' ? 'сом' : '€';

  const t = {
    en: {
      modalTitle: 'Book Your Stay at Datka Guest House',
      subtitle: '54 Lenin St, Naryn · Instant Direct Booking & Inquiry',
      datesLabel: 'Dates of Stay',
      checkIn: 'Check-In',
      checkOut: 'Check-Out',
      nightsCount: `${nights} ${nights === 1 ? 'night' : 'nights'}`,
      selectRoom: 'Select Room Type',
      guests: 'Guests',
      addons: 'Expedition Add-ons & Assistance',
      borderPermitLabel: `Kel-Suu Border Zone Permit (+${currency === 'USD' ? '$15' : `${Math.round(15 * rateMultiplier)} ${currencySymbol}`}/person)`,
      transferLabel: '4x4 Tour / Mountain Transfer driver consultation (Free)',
      personalInfo: 'Your Contact Details',
      namePlaceholder: 'Full Name (e.g., Alex Bennett)',
      emailPlaceholder: 'Email address',
      phonePlaceholder: 'Phone or WhatsApp (e.g., +1 555 123 4567)',
      notesPlaceholder: 'Any dietary needs, arrival time, bicycle/moto storage...',
      priceSummary: 'Estimated Total',
      breakfastIncluded: 'Homemade Kyrgyz breakfast included',
      submitBtn: 'Confirm Direct Reservation',
      whatsAppBtn: 'Book via WhatsApp',
      emailHostBtn: 'Send via Email',
      confirmationTitle: 'Reservation Request Received!',
      confirmationDesc: 'We have registered your booking request. Jirgal Turganbaeva will confirm with you directly.',
      refCodeLabel: 'Reservation Reference',
      backToSite: 'Return to Website',
    },
    ru: {
      modalTitle: 'Бронирование в Datka Guest House',
      subtitle: 'ул. Ленина 54, г. Нарын · Прямое бронирование без посредников',
      datesLabel: 'Даты проживания',
      checkIn: 'Заезд',
      checkOut: 'Выезд',
      nightsCount: `${nights} ${nights === 1 ? 'ночь' : nights < 5 ? 'ночи' : 'ночей'}`,
      selectRoom: 'Выберите категорию номера',
      guests: 'Гостей',
      addons: 'Дополнительные услуги и помощь',
      borderPermitLabel: `Погранпропуск на Кель-Суу (+${currency === 'USD' ? '$15' : `${Math.round(15 * rateMultiplier)} ${currencySymbol}`}/чел)`,
      transferLabel: 'Консультация по трансферу 4х4 на Сон-Куль / Таш-Рабат (Бесплатно)',
      personalInfo: 'Контактные данные',
      namePlaceholder: 'Ваше имя и фамилия',
      emailPlaceholder: 'Электронная почта',
      phonePlaceholder: 'Номер телефона или WhatsApp',
      notesPlaceholder: 'Особые пожелания, время приезда, парковка мото/авто...',
      priceSummary: 'Итоговая стоимость',
      breakfastIncluded: 'Сытный домашний завтрак включен',
      submitBtn: 'Подтвердить бронирование',
      whatsAppBtn: 'Написать в WhatsApp',
      emailHostBtn: 'Отправить на Email',
      confirmationTitle: 'Запрос на бронь принят!',
      confirmationDesc: 'Спасибо! Хозяйка гостевого дома Жиргал Турганбаева свяжется с вами для подтверждения.',
      refCodeLabel: 'Номер заявки',
      backToSite: 'Вернуться на сайт',
    },
    kg: {
      modalTitle: 'Datka Guest House бөлмөсүн брондоо',
      subtitle: 'Ленин көчөсү 54, Нарын ш. · Түз брондоо',
      datesLabel: 'Келүү жана кетүү күндөрү',
      checkIn: 'Келүү',
      checkOut: 'Кетүү',
      nightsCount: `${nights} түн`,
      selectRoom: 'Бөлмөнү тандаңыз',
      guests: 'Коноктордун саны',
      addons: 'Кошумча кызматтар',
      borderPermitLabel: `Көл-Суу чек ара уруксаты (+${currency === 'USD' ? '$15' : `${Math.round(15 * rateMultiplier)} ${currencySymbol}`}/адам)`,
      transferLabel: '4х4 унаа боюнча кеңеш (Акысыз)',
      personalInfo: 'Байланыш маалыматтары',
      namePlaceholder: 'Аты-жөнүңүз',
      emailPlaceholder: 'Электрондук почта',
      phonePlaceholder: 'Телефон же WhatsApp номери',
      notesPlaceholder: 'Кошумча каалоолор, келүү убактысы...',
      priceSummary: 'Жалпы баасы',
      breakfastIncluded: 'Үй эртең мененки тамагы камтылган',
      submitBtn: 'Брондоону тастыктоо',
      whatsAppBtn: 'WhatsApp аркылуу брондоо',
      emailHostBtn: 'Email аркылуу жөнөтүү',
      confirmationTitle: 'Брондоо сурамы кабыл алынды!',
      confirmationDesc: 'Ырахмат! Мейманкананын ээси Жыргал Турганбаева сиз менен байланышат.',
      refCodeLabel: 'Брондоо коду',
      backToSite: 'Сайтка кайтуу',
    },
  }[currentLang];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedCode = `DATKA-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingCode(generatedCode);
    setIsSubmitted(true);
  };

  const constructWhatsAppText = () => {
    const text = `Salam / Hello! I would like to book a stay at Datka Guest House (54 Lenin St, Naryn):
• Room: ${selectedRoom.name[currentLang]}
• Dates: ${checkIn} to ${checkOut} (${nights} nights)
• Guests: ${guestsCount}
• Name: ${guestName || 'Guest'}
• Phone: ${guestPhone || 'Not provided'}
• Total: ~${totalPriceConverted} ${currencySymbol}
${needBorderPermit ? '• Need Kel-Suu Border Permit\n' : ''}${needMountainTransfer ? '• Interested in 4x4 Tour/Transfer\n' : ''}${specialNotes ? `• Notes: ${specialNotes}` : ''}`;
    return encodeURIComponent(text);
  };

  const constructMailtoUrl = () => {
    const subject = encodeURIComponent(`Booking Inquiry: ${selectedRoom.name.en} (${checkIn} - ${checkOut})`);
    const body = constructWhatsAppText();
    return `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200 text-stone-900 animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-stone-900 text-white px-5 py-4 flex items-start justify-between border-b border-stone-800">
          <div>
            <h3 className="font-serif-display text-lg sm:text-xl font-medium text-amber-100">
              {t.modalTitle}
            </h3>
            <p className="text-stone-300 text-xs mt-0.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.subtitle}</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-1 rounded-lg hover:bg-stone-800 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6 space-y-6">
          {isSubmitted ? (
            /* Success confirmation screen */
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold font-serif-display text-stone-900">
                {t.confirmationTitle}
              </h4>
              <p className="text-sm text-stone-600 max-w-md mx-auto">
                {t.confirmationDesc}
              </p>

              <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-500">{t.refCodeLabel}</span>
                  <span className="font-mono font-bold text-stone-900">{bookingCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Room</span>
                  <span className="font-medium text-stone-900">{selectedRoom.name[currentLang]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Dates</span>
                  <span className="font-medium text-stone-900">{checkIn} → {checkOut} ({nights} nights)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Guests</span>
                  <span className="font-medium text-stone-900">{guestsCount}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-stone-200 text-sm">
                  <span className="font-semibold text-stone-900">Estimated Total</span>
                  <span className="font-bold text-amber-900">
                    {totalPriceConverted} {currencySymbol}
                  </span>
                </div>
              </div>

              {/* Fast Direct Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2 max-w-md mx-auto">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${constructWhatsAppText()}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-medium rounded-lg text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </a>
                <a
                  href={constructMailtoUrl()}
                  className="px-4 py-2.5 bg-stone-800 hover:bg-stone-900 text-white font-medium rounded-lg text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send to Host Email</span>
                </a>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="text-stone-600 hover:text-stone-900 text-xs font-semibold underline underline-offset-2"
                >
                  {t.backToSite}
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleFormSubmit} className="space-y-5">
              {/* Dates Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-2">
                  {t.datesLabel}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 border border-stone-300 rounded-xl px-3 py-2 bg-stone-50">
                    <Calendar className="w-4 h-4 text-stone-500" />
                    <div className="flex-1">
                      <span className="text-[10px] text-stone-500 block uppercase font-medium">{t.checkIn}</span>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full text-xs font-medium text-stone-800 bg-transparent focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 border border-stone-300 rounded-xl px-3 py-2 bg-stone-50">
                    <Calendar className="w-4 h-4 text-stone-500" />
                    <div className="flex-1">
                      <span className="text-[10px] text-stone-500 block uppercase font-medium">{t.checkOut}</span>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full text-xs font-medium text-stone-800 bg-transparent focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="text-right mt-1">
                  <span className="text-xs text-stone-500">{t.nightsCount}</span>
                </div>
              </div>

              {/* Room Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-2">
                  {t.selectRoom}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {ROOMS_DATA.map((room) => {
                    const priceInCur = Math.round(room.priceUSD * rateMultiplier);
                    const isSelected = room.id === selectedRoomId;
                    return (
                      <div
                        key={room.id}
                        onClick={() => setSelectedRoomId(room.id)}
                        className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                          isSelected
                            ? 'border-amber-800 bg-amber-50/60 ring-1 ring-amber-800'
                            : 'border-stone-200 hover:border-stone-400 bg-white'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <span className="text-xs font-semibold text-stone-900 block">
                            {room.name[currentLang]}
                          </span>
                          <span className="text-xs font-bold text-amber-900 tabular-nums">
                            {priceInCur} {currencySymbol}
                          </span>
                        </div>
                        <span className="text-[11px] text-stone-500 block mt-0.5">
                          {room.beds[currentLang]} · {room.sizeM2} m²
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Guests Count */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-2">
                  {t.guests}
                </label>
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-stone-500" />
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setGuestsCount(num)}
                        className={`w-9 h-9 rounded-lg text-xs font-semibold transition-colors ${
                          guestsCount === num
                            ? 'bg-amber-800 text-white'
                            : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Add-ons */}
              <div className="space-y-2 pt-2 border-t border-stone-200">
                <span className="block text-xs font-semibold uppercase tracking-wider text-stone-600">
                  {t.addons}
                </span>

                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-stone-800">
                  <input
                    type="checkbox"
                    checked={needBorderPermit}
                    onChange={(e) => setNeedBorderPermit(e.target.checked)}
                    className="mt-0.5 rounded text-amber-800 focus:ring-amber-800"
                  />
                  <span>{t.borderPermitLabel}</span>
                </label>

                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-stone-800">
                  <input
                    type="checkbox"
                    checked={needMountainTransfer}
                    onChange={(e) => setNeedMountainTransfer(e.target.checked)}
                    className="mt-0.5 rounded text-amber-800 focus:ring-amber-800"
                  />
                  <span>{t.transferLabel}</span>
                </label>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 pt-2 border-t border-stone-200">
                <span className="block text-xs font-semibold uppercase tracking-wider text-stone-600">
                  {t.personalInfo}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder={t.namePlaceholder}
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-stone-300 focus:border-amber-800 focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    placeholder={t.phonePlaceholder}
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-stone-300 focus:border-amber-800 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="email"
                    required
                    placeholder={t.emailPlaceholder}
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-stone-300 focus:border-amber-800 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder={t.notesPlaceholder}
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-stone-300 focus:border-amber-800 focus:outline-none"
                  />
                </div>
              </div>

              {/* Price Calculation Card */}
              <div className="bg-stone-100 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-stone-200">
                <div>
                  <span className="text-xs text-stone-500 block">{t.priceSummary}</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-bold text-stone-900 tabular-nums">
                      {totalPriceConverted} {currencySymbol}
                    </span>
                    <span className="text-xs text-stone-600">
                      ({nights} {nights === 1 ? 'night' : 'nights'})
                    </span>
                  </div>
                  <span className="text-[11px] text-emerald-800 font-medium block">
                    ✓ {t.breakfastIncluded}
                  </span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${constructWhatsAppText()}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-initial px-3 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <button
                    type="submit"
                    className="flex-1 sm:flex-initial px-4 py-2.5 bg-amber-800 hover:bg-amber-900 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer whitespace-nowrap"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t.submitBtn}</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
