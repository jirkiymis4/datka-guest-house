import React, { useState } from 'react';
import { LanguageCode } from '../types';
import { TESTIMONIALS_DATA, FAQS_DATA } from '../data/guestHouseData';
import { Star, ChevronDown, MessageSquareQuote, HelpCircle } from 'lucide-react';

interface ReviewsAndFaqSectionProps {
  currentLang: LanguageCode;
}

export const ReviewsAndFaqSection: React.FC<ReviewsAndFaqSectionProps> = ({ currentLang }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const t = {
    en: {
      reviewsKicker: 'Verified Guest Experiences',
      reviewsTitle: 'Loved by Trekkers & Overland Voyagers',
      faqKicker: 'Helpful Information',
      faqTitle: 'Frequently Asked Questions',
    },
    ru: {
      reviewsKicker: 'Отзывы наших гостей',
      reviewsTitle: 'Что говорят путешественники о «Датке»',
      faqKicker: 'Полезная информация',
      faqTitle: 'Часто задаваемые вопросы',
    },
    kg: {
      reviewsKicker: 'Коноктордун пикирлери',
      reviewsTitle: 'Саякатчылардын «Датка» тууралуу ойлору',
      faqKicker: 'Пайдалуу маалымат',
      faqTitle: 'Көп берилүүчү суроолор',
    },
  }[currentLang];

  return (
    <section className="py-20 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Testimonials Block */}
        <div>
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
              <MessageSquareQuote className="w-4 h-4" />
              <span>{t.reviewsKicker}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-stone-900 text-balance">
              {t.reviewsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <span className="font-bold text-stone-900 text-xs block">
                    {review.author}
                  </span>
                  <div className="flex items-center gap-2 text-[11px] text-stone-500 mt-0.5">
                    <span>{review.origin}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-amber-800 font-medium">{review.travelerType}</span>
                  </div>
                  <span className="text-[10px] text-stone-400 block mt-1">
                    Stayed in {review.roomBooked}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Block */}
        <div className="pt-8 border-t border-stone-200">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>{t.faqKicker}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-stone-900 text-balance">
              {t.faqTitle}
            </h2>
          </div>

          <div className="max-w-3xl space-y-3">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-stone-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-stone-900 text-sm hover:text-amber-800 transition-colors cursor-pointer"
                  >
                    <span>{faq.question[currentLang]}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-800' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3 animate-in fade-in duration-150">
                      {faq.answer[currentLang]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
