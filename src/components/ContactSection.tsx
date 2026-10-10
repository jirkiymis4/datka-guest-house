import React, { useState } from 'react';
import { LanguageCode } from '../types';
import { CONTACT_INFO } from '../data/guestHouseData';
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle } from 'lucide-react';

interface ContactSectionProps {
  currentLang: LanguageCode;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const t = {
    en: {
      kicker: 'Get in Touch with Your Host',
      title: 'We Look Forward to Welcoming You to Naryn',
      subhead:
        'Have a question regarding road conditions, Kel-Suu border permits, bike storage, or room availability? Write to us directly or send a WhatsApp message.',
      hostCardTitle: 'Your Host in Naryn',
      hostName: CONTACT_INFO.hostName,
      hostRole: 'Owner & Host, Datka Guest House',
      hostBio:
        '“Our family has lived in the Naryn mountains for generations. We take deep pride in making every traveler feel at home with warm hearths, honest advice, and fresh boorsok.”',
      formTitle: 'Send a Direct Message',
      nameLabel: 'Your Name',
      emailLabel: 'Email Address',
      messageLabel: 'Your Message or Travel Dates',
      sendBtn: 'Send Message',
      sentTitle: 'Message Dispatched!',
      sentDesc: `Thank you, ${name}! Jirgal will reply to ${email} as soon as possible.`,
    },
    ru: {
      kicker: 'Связь с хозяйкой дома',
      title: 'Будем рады видеть вас в гостях в Нарыне',
      subhead:
        'Есть вопросы о перевалах, погранпропусках на Кель-Суу или бронировании? Напишите нам напрямую на почту или в WhatsApp.',
      hostCardTitle: 'Хозяйка гостевого дома',
      hostName: CONTACT_INFO.hostName,
      hostRole: 'Владелица Datka Guest House',
      hostBio:
        '«Наша семья живет в Нарыне много поколений. Мы с радостью встречаем гостей со всего мира, согреваем горячим чаем и помогаем открыть для себя красоту Тянь-Шаня».',
      formTitle: 'Написать нам сообщение',
      nameLabel: 'Ваше имя',
      emailLabel: 'Электронная почта',
      messageLabel: 'Ваш вопрос или планируемые даты поездки',
      sendBtn: 'Отправить сообщение',
      sentTitle: 'Сообщение отправлено!',
      sentDesc: `Спасибо, ${name}! Жиргал ответит вам на ${email} в ближайшее время.`,
    },
    kg: {
      kicker: 'Байланыш',
      title: 'Сизди Нарында кубануу менен күтөбүз',
      subhead:
        'Жолдун абалы, Көл-Суу чек ара уруксаты же бөлмөлөр боюнча суроолоруңуз болсо, бизге түз жазыңыз же WhatsApp аркылуу кайрылыңыз.',
      hostCardTitle: 'Конок үйүнүн ээси',
      hostName: CONTACT_INFO.hostName,
      hostRole: '«Датка» конок үйүнүн негиздөөчүсү',
      hostBio:
        '«Биздин үй-бүлө Нарын жергесинде жашайт. Дүйнөнүн ар кайсы бурчунан келген саякатчыларга кыргыздын нукура меймандостугун көрсөтүү — биздин сыймыгыбыз».',
      formTitle: 'Бизге кат жөнөтүү',
      nameLabel: 'Аты-жөнүңүз',
      emailLabel: 'Электрондук дарегиңиз',
      messageLabel: 'Сурооңуз же келүүчү күндөрүңүз',
      sendBtn: 'Жөнөтүү',
      sentTitle: 'Катыңыз жөнөтүлдү!',
      sentDesc: `Ырахмат, ${name}! Жыргал сиздин ${email} дарегиңизге жооп берет.`,
    },
  }[currentLang];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            {t.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-stone-900 text-balance">
            {t.title}
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            {t.subhead}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Host Profile & Fast Links Card */}
          <div className="lg:col-span-5 bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block">
                {t.hostCardTitle}
              </span>
              <h3 className="text-2xl font-serif-display font-bold text-stone-900 mt-1">
                {t.hostName}
              </h3>
              <p className="text-xs text-amber-800 font-semibold mt-0.5">
                {t.hostRole}
              </p>
              <p className="text-xs text-stone-600 italic mt-3 leading-relaxed">
                {t.hostBio}
              </p>
            </div>

            <div className="pt-4 border-t border-stone-200 space-y-3">
              {/* Email */}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-3 p-3 bg-white rounded-xl border border-stone-200 hover:border-amber-700/50 transition-colors text-xs"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] text-stone-400 block uppercase font-medium">Direct Email</span>
                  <span className="font-semibold text-stone-900 truncate block">{CONTACT_INFO.email}</span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 bg-white rounded-xl border border-stone-200 hover:border-emerald-600/50 transition-colors text-xs"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] text-stone-400 block uppercase font-medium">WhatsApp Chat</span>
                  <span className="font-semibold text-stone-900 truncate block">{CONTACT_INFO.phoneDisplay}</span>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className="flex items-center gap-3 p-3 bg-white rounded-xl border border-stone-200 hover:border-sky-600/50 transition-colors text-xs"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] text-stone-400 block uppercase font-medium">Phone Call</span>
                  <span className="font-semibold text-stone-900 truncate block">{CONTACT_INFO.phoneDisplay}</span>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-stone-200 text-xs">
                <div className="w-8 h-8 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] text-stone-400 block uppercase font-medium">Street Address</span>
                  <span className="font-semibold text-stone-900 truncate block">{CONTACT_INFO.address.en}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
            {sent ? (
              <div className="text-center py-10 space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold font-serif-display text-stone-900">
                  {t.sentTitle}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                  {t.sentDesc}
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 text-xs font-semibold text-amber-800 underline underline-offset-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif-display text-xl font-bold text-stone-900 mb-2">
                  {t.formTitle}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      {t.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Thomas Laurent"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-amber-800 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      {t.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-amber-800 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {t.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us your expected dates, room preference, or tour questions..."
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-amber-800 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-amber-800 hover:bg-amber-900 text-white font-semibold rounded-xl text-xs flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t.sendBtn}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
