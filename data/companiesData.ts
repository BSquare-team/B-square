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
    url: "",
    period: "2025~",
  },
  {
    id: "Ryze",
    name: "Ryze",
    logo: "/assets/companies/ryze2.png",
    url: "",
    period: "2025~",
  },
  {
    id: "Fittdesign",
    name: "FittDesign",
    logo: "/assets/companies/Fittdesign.png",
    url: "",
    period: "2024~",
  },  
  {
    id: "power100",
    name: "power100",
    logo: "/assets/companies/power100.png",
    url: "",
    period: "2025~",
  },
  {
    id: "Ryze",
    name: "Ryze",
    logo: "/assets/companies/ryze2.png",
    url: "",
    period: "2025~",
  },
  {
    id: "Fittdesign",
    name: "FittDesign",
    logo: "/assets/companies/Fittdesign.png",
    url: "",
    period: "2024~",
  },
  {
    id: "power100",
    name: "power100",
    logo: "/assets/companies/power100.png",
    url: "",
    period: "2025~",
  },
  {
    id: "Botgenossen",
    name: "Ryze",
    logo: "/assets/companies/ryze2.png",
    url: "",
    period: "2025~",
  },
  {
    id: "Fittdesign",
    name: "FittDesign",
    logo: "/assets/companies/Fittdesign.png",
    url: "",
    period: "2024~",
  },
];