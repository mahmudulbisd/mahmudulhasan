export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    company: "Mahmud Digital Solutions",
    role: "Founder & Performance Marketing Specialist",
    period: "2021–Now",
    description:
      "Planning, launching, and optimizing Meta Ads & Google Ads for 200+ international clients (US, UK, Australia) across HVAC, Med Spa, Roofing, E-commerce, and SaaS. Built full-funnel paid media strategies and GoHighLevel automation systems for 30+ active client accounts.",
  },
  {
    company: "Rain Assembly",
    role: "Project Manager",
    period: "Sept 2019–Now",
    description:
      "Managing client projects in Oil & Gas and Renewable Energy for US-based clients. Led LinkedIn growth strategy and social media campaigns for international business accounts. Designed WordPress websites with Elementor Pro.",
  },
  {
    company: "Fiverr & Upwork",
    role: "Freelance Digital Marketer & WordPress Designer",
    period: "2019–Now",
    description:
      "Delivered Meta Ads, Google Ads, and social media campaigns for 50+ global clients across fashion, SaaS, beauty, and education. Built Elementor-based WordPress sites and Shopify stores with consistent 5-star reviews.",
  },
  {
    company: "BRAC — Skill Development Sector",
    role: "Associate Marketing Officer",
    period: "Jan 2018–Sept 2019",
    description:
      "Designed and executed community outreach and awareness campaigns for vocational training programs. Created marketing content for program promotion, social media, and trainee acquisition.",
  },
  {
    company: "Paragon Agro Ltd. · Akij Food · PRAN-RFL",
    role: "Territory Sales Officer → Sales Officer → Sales Rep",
    period: "2014–2018",
    description:
      "Field sales, territory management, and customer acquisition across Narayanganj and Sonargaon regions. Built core skills in negotiation, client relationship management, and performance accountability.",
  },
];

export interface CaseStudy {
  title: string;
  industry: string;
  tag: string;
  image: string;
  challenge: string;
  solution: string;
  result: string;
}

export const caseStudies: CaseStudy[] = [
  {
    title: "Local Plumber Scaling",
    industry: "Home Services",
    tag: "GoHighLevel + Ads",
    image:
      "https://vibe.filesafe.space/1775282727415477231/assets/45f4a7fe-389b-48b6-a585-6a8ef23430d5.jpg",
    challenge: "Wasting hours on manual follow-ups and losing leads.",
    solution: "GoHighLevel CRM Setup & Automation",
    result: "3x lead increase in 60 days",
  },
  {
    title: "Dental Clinic Patient Booking",
    industry: "Healthcare",
    tag: "CRM + Automation",
    image:
      "https://vibe.filesafe.space/1775282727415477231/assets/b944c982-6646-4bb3-b77e-5f29484a0840.jpg",
    challenge: "High no-show rates and manual appointment reminders.",
    solution: "AI Chatbot & Booking Funnel",
    result: "Reduced no-shows by 45%",
  },
  {
    title: "Real Estate Agency Growth",
    industry: "Real Estate",
    tag: "Funnel + Facebook Ads",
    image:
      "https://vibe.filesafe.space/1775282727415477231/assets/c6e0c532-b08f-4f76-b7da-7ed347885044.jpg",
    challenge: "Inconsistent lead generation and poor tracking.",
    solution: "Facebook Ads & Lead Gen Funnel",
    result: "Generated 120+ qualified leads in month 1",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Mahmudul completely transformed our lead generation. The automation saved us countless hours and significantly boosted our conversion rate.",
    name: "John Doe",
    role: "CEO @ TechFlow",
    initials: "JD",
  },
  {
    quote:
      "The CRM setup was flawless. We saw a 3x increase in booked appointments within the first month. Highly recommended for any service business.",
    name: "Sarah Smith",
    role: "Founder @ GrowthGen",
    initials: "SS",
  },
  {
    quote:
      "Outstanding work! The custom funnels and Facebook ads strategy brought in high-quality leads consistently. Best investment for our agency.",
    name: "Mike Johnson",
    role: "Director @ ScaleUp",
    initials: "MJ",
  },
];
