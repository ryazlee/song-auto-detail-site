export const site = {
  name: "Song Auto Detail LLC",
  shortName: "Song Auto Detail",
  tagline: "Automotive Paint Protection",
  headline: "Song Auto Detail Automotive Paint Protection",
  subhead: "XPEL authorized installer in Santa Clara and surrounding areas",
  description:
    "Premium automotive paint protection in Santa Clara, California. Certified XPEL PPF and ceramic coating installer.",
  url: "https://ryazlee.github.io/song-auto-detail-site",
  address: "1467 Laurelwood Rd, Santa Clara, CA 95054",
  mapsUrl: "https://maps.google.com/?q=1467+Laurelwood+Rd+Santa+Clara+CA+95054",
  phone: "(408) 598-2849",
  phoneHref: "tel:+14085982849",
  email: "songautodetail@gmail.com",
  hours: [
    { days: "Monday – Friday", time: "10:00 AM – 5:30 PM" },
    { days: "Saturday", time: "By appointment only" },
    { days: "Sunday", time: "Closed" },
  ],
  social: {
    instagram: "https://www.instagram.com/songautodetail/",
    facebook: "https://www.facebook.com/SongAutoDetail",
    tiktok: "https://www.tiktok.com/@songautodetail",
    yelp: "https://www.yelp.com/biz/song-auto-detail-santa-clara",
  },
} as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/faq", label: "FAQs" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    href: "/services/ppf",
    name: "Paint Protection Film",
    short: "PPF",
    summary:
      "Transparent film that protects paint from rock chips, scratches, and everyday wear.",
  },
  {
    href: "/services/ceramic-coating",
    name: "Ceramic Coating",
    short: "Ceramic",
    summary:
      "A durable SiO2 coating that bonds to the clear coat and shields the paint from the environment.",
  },
  {
    href: "/services/paint-correction",
    name: "Paint Correction",
    short: "Correction",
    summary:
      "Machine polishing that levels the clear coat to remove swirls, etching, and light scratches.",
  },
  {
    href: "/services/auto-detailing",
    name: "Auto Detailing",
    short: "Detailing",
    summary:
      "Interior and exterior detailing beyond a wash — deep clean, polish, and protect.",
  },
] as const;

export const featuredWork = [
  "2025 BMW M3 Competition — XPEL full-body satin PPF & ceramic coating",
  "2026 Corvette Z06 — XPEL Track Pack PPF",
  "Mercedes-Benz GLE 63S Coupe — full-body stealth PPF & ceramic coating",
  "Tesla Model S Signature Edition — XPEL full-body PPF & ceramic coating",
  "Tesla Cybertruck — XPEL satin black color-change PPF",
  "2025 GMC Denali — paint correction and 5-year ceramic coating",
] as const;

export const review = {
  quote:
    "I took my 2026 Chevy Tahoe to Song Auto Detail for PPF installation, and I couldn’t be happier with the results and experience. Yong, the owner, was extremely professional from start to finish and took the time to answer all of my questions thoroughly. The quality of the work was absolutely meticulous — every detail was done with precision, and it’s clear he takes a lot of pride in his craftsmanship. The shop itself was extremely clean and well organized, which gave me a lot of confidence in the quality of work being done. I highly recommend Song Auto Detail to anyone looking for top-quality PPF or detailing work.",
  name: "Martin Casillas",
} as const;
