import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeaderCard } from "./components/HeaderCard";
import { ParaibaBoomSection } from "./components/ParaibaBoomSection";
import { BookingSection } from "./components/BookingSection";
import { BookingModal } from "./components/BookingModal";
import { PropertiesSection } from "./components/PropertiesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { BookingDetails } from "./types";

export default function App() {
  const [activeBooking, setActiveBooking] = useState<BookingDetails | null>(null);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const handleOpenBookingScroll = () => {
    const el = document.getElementById("agendamento");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookingSuccess = (booking: BookingDetails) => {
    setActiveBooking(booking);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-amber-400 selection:text-slate-950">
      {/* Navbar */}
      <Navbar
        onOpenBooking={handleOpenBookingScroll}
        onOpenShare={() => setIsShareOpen(true)}
      />

      {/* Main Digital Business Card Header */}
      <HeaderCard
        onOpenBooking={handleOpenBookingScroll}
        onOpenShare={() => setIsShareOpen(true)}
      />

      {/* O Momento Paraíba: Investimento, Valorização & Calculadora ROI */}
      <ParaibaBoomSection onOpenBooking={handleOpenBookingScroll} />

      {/* Booking Form (Agendamento Rápido de Consultoria) */}
      <BookingSection onBookingSuccess={handleBookingSuccess} />

      {/* Curated Opportunities Portfolio */}
      <PropertiesSection onOpenBooking={handleOpenBookingScroll} />

      {/* Client Testimonials & FAQs */}
      <TestimonialsSection onOpenBooking={handleOpenBookingScroll} />

      {/* Contact Channels & QR Code Share */}
      <ContactSection
        onOpenBooking={handleOpenBookingScroll}
        isShareOpen={isShareOpen}
        onCloseShare={() => setIsShareOpen(false)}
      />

      {/* Footer */}
      <Footer />

      {/* Booking Success Modal */}
      {activeBooking && (
        <BookingModal
          booking={activeBooking}
          onClose={() => setActiveBooking(null)}
        />
      )}
    </div>
  );
}
