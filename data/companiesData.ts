/**
 * @author © ColdByDefault
 * @license Copyright (c) 2026 ColdByDefault. All rights reserved.
 * @version 6.x.x
 */

export interface CompanyLogo {
  id: string;
  name: string;
  logo?: string; // Made optional since we now support text fallbacks
  url?: string;
  period?: string;
}

export const companiesData: CompanyLogo[] = [
  {
    id: "power100",
    name: "power100",
    logo: "/assets/companies/power100.png",
    url: "https://avarno.de",
    period: "2025~",
  },
  {
    id: "Ryze",
    name: "Ryze",
    logo: "/assets/companies/ryze2.png",
    url: "https://Ryze.de",
    period: "2025~",
  },
  {
    id: "Fittdesign",
    name: "Fittdesign",
    logo: "/assets/companies/Fittdesign.png",
    url: "https://berich-hub.vercel.app/",
    period: "2024~",
  },
  {
    id: "power100",
    name: "power100",
    logo: "/assets/companies/power100.png",
    url: "https://avarno.de",
    period: "2025~",
  },
  {
    id: "Botgenossen",
    name: "Botgenossen",
    logo: "/assets/companies/ryze2.png",
    url: "https://botgenossen.de",
    period: "2025~",
  },
  {
    id: "Fittdesign",
    name: "Fittdesign",
    logo: "/assets/companies/Fittdesign.png",
    url: "https://berich-hub.vercel.app/",
    period: "2024~",
  },
  {
    id: "power100",
    name: "power100",
    logo: "/assets/companies/power100.png",
    url: "https://avarno.de",
    period: "2025~",
  },
  {
    id: "Botgenossen",
    name: "Ryze",
    logo: "/assets/companies/ryze2.png",
    url: "https://Ryze.de",
    period: "2025~",
  },
  {
    id: "Fittdesign",
    name: "Fittdesign",
    logo: "/assets/companies/Fittdesign.png",
    url: "https://berich-hub.vercel.app/",
    period: "2024~",
  },
];