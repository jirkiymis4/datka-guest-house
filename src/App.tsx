import { useState } from 'react';
import { CurrencyCode, LanguageCode } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookingBar } from './components/BookingBar';
import { RoomsSection } from './components/RoomsSection';
import { BreakfastSection } from './components/BreakfastSection';
import { GallerySection } from './components/GallerySection';
import { ExpeditionsSection } from './components/ExpeditionsSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { NavigationMap } from './components/NavigationMap';
import { LocationSection } from './components/LocationSection';
import { ReviewsAndFaqSection } from './components/ReviewsAndFaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ChatBox } from './components/ChatBox';

export default function App() {
  const [currentLang, setCurrentLang] = useState<LanguageCode>('en');
  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState<string | undefined>(undefined);

  const handleOpenBooking = () => {
    setSelectedRoomForBooking(undefined);
    setIsBookingModalOpen(true);
  };

  const handleSelectRoomAndBook = (roomId: string) => {
    setSelectedRoomForBooking(roomId);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-amber-800 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        currency={currency}
        onCurrencyChange={setCurrency}
        onOpenBooking={handleOpenBooking}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />

        {/* Quick Booking Strip */}
        <BookingBar
          currentLang={currentLang}
          currency={currency}
          onOpenBookingWithDetails={handleSelectRoomAndBook}
        />

        {/* Rooms & Suites Showcase */}
        <RoomsSection
          currentLang={currentLang}
          currency={currency}
          onSelectRoom={handleSelectRoomAndBook}
        />

        {/* Authentic Kyrgyz Dastorkhon Breakfast */}
        <BreakfastSection currentLang={currentLang} />

        {/* Real Photography & Guest House Gallery */}
        <GallerySection currentLang={currentLang} />

        {/* High-Altitude Mountain Expeditions & Tour Basecamp */}
        <ExpeditionsSection
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />

        {/* Guest House Amenities */}
        <AmenitiesSection currentLang={currentLang} />

        {/* Live Interactive Navigation Map & GPS Route Guide */}
        <NavigationMap currentLang={currentLang} />

        {/* Location & 54 Lenin St Map Guide */}
        <LocationSection currentLang={currentLang} />

        {/* Guest Reviews & Frequently Asked Questions */}
        <ReviewsAndFaqSection currentLang={currentLang} />

        {/* Host Contact & Direct Booking Form */}
        <ContactSection currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        currency={currency}
        currentLang={currentLang}
        preselectedRoomId={selectedRoomForBooking}
      />

      {/* 24/7 Guest House Concierge Chat Box */}
      <ChatBox
        currentLang={currentLang}
        onOpenBooking={handleOpenBooking}
      />
    </div>
  );
}
