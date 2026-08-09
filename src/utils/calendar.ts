import { BookingDetails } from "../types";

export function createGoogleCalendarUrl(booking: BookingDetails): string {
  const title = encodeURIComponent(`Consultoria Imobiliária - Sérgio Carvalho & ${booking.name}`);
  const description = encodeURIComponent(
    `Reunião de Consultoria sobre Investimentos Imobiliários na Paraíba.\n\n` +
    `Objetivo: ${booking.objective}\n` +
    `Faixa de Investimento: ${booking.budget}\n` +
    `Link da Videoconferência: ${booking.meetingLink}\n\n` +
    `WhatsApp do Consultor: (83) 99999-8888`
  );
  const location = encodeURIComponent(booking.meetingLink);

  // Format start and end date string (e.g. 2026-08-15T14:00:00)
  // assuming 45 minutes meeting
  const [year, month, day] = booking.date.split("-");
  const [hours, minutes] = booking.time.split(":");
  
  const startDate = new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day),
    parseInt(hours),
    parseInt(minutes)
  );

  const endDate = new Date(startDate.getTime() + 45 * 60 * 1000);

  const formatUtc = (d: Date) => d.toISOString().replace(/-|:|\.\d\d\d/g, "");

  const dates = `${formatUtc(startDate)}/${formatUtc(endDate)}`;

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${description}&location=${location}`;
}

export function downloadIcsFile(booking: BookingDetails): void {
  const [year, month, day] = booking.date.split("-");
  const [hours, minutes] = booking.time.split(":");

  const startDate = new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day),
    parseInt(hours),
    parseInt(minutes)
  );
  const endDate = new Date(startDate.getTime() + 45 * 60 * 1000);

  const formatUtc = (d: Date) => d.toISOString().replace(/-|:|\.\d\d\d/g, "");

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Consultoria Imobiliaria PB//NONSGML v1.0//PT",
    "BEGIN:VEVENT",
    `UID:booking-${booking.id}@consultoriaparaiba.com.br`,
    `DTSTAMP:${formatUtc(new Date())}`,
    `DTSTART:${formatUtc(startDate)}`,
    `DTEND:${formatUtc(endDate)}`,
    `SUMMARY:Consultoria Imobiliária - Sérgio Carvalho & ${booking.name}`,
    `DESCRIPTION:Consultoria em Investimentos Imobiliários na Paraíba.\\nObjetivo: ${booking.objective}\\nLink: ${booking.meetingLink}`,
    `LOCATION:${booking.meetingLink}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `Consultoria_SergioCarvalho_${booking.date}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
