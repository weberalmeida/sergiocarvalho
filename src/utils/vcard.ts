import { CONSULTANT_DATA } from "../data/mockData";

export function generateVCardString(): string {
  const c = CONSULTANT_DATA;
  
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${c.name}`,
    `N:Carvalho;Sérgio;;;`,
    `TITLE:${c.title}`,
    `ORG:Consultoria Imobiliária de Alto Padrão Paraíba`,
    `TEL;TYPE=CELL,VOICE:${c.whatsappNumber}`,
    `EMAIL;TYPE=WORK,INTERNET:${c.email}`,
    `ADR;TYPE=WORK:;;${c.officeAddress};João Pessoa;PB;58039-000;Brasil`,
    `NOTE:${c.creci} | Especialista em Investimentos Imobiliários, Valorização e Rentabilidade na Paraíba.`,
    `URL:${c.instagram}`,
    "END:VCARD",
  ].join("\r\n");
}

export function downloadVCard(): void {
  const vcardData = generateVCardString();
  const blob = new Blob([vcardData], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "Sergio_Carvalho_Investimentos_PB.vcf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
