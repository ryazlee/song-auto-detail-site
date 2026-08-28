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
  /** Google Calendar appointment URL. Leave empty to hide scheduling CTAs. */
  calendarUrl: "" as string,
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
  { href: "/projects", label: "Gallery" },
  { href: "/faq", label: "FAQs" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    href: "/services/ppf",
    name: "PPF",
    fullName: "Paint Protection Film",
    image: "/images/services/tesla-bumper-ppf.jpg",
    alt: "Tesla bumper PPF at Song Auto Detail",
    summary:
      "Transparent film that protects paint from rock chips, scratches, and everyday wear.",
  },
  {
    href: "/services/ceramic-coating",
    name: "Ceramic Coating",
    fullName: "Ceramic Coating",
    image: "/images/services/porsche-ppf.jpg",
    alt: "Porsche ceramic coating and PPF",
    summary:
      "A durable SiO2 coating that bonds to the clear coat and shields the paint from the environment.",
  },
  {
    href: "/services/paint-correction",
    name: "Paint Correction",
    fullName: "Paint Correction",
    image: "/images/services/paint-correction.jpg",
    alt: "Paint correction in Santa Clara",
    summary:
      "Machine polishing that levels the clear coat to remove swirls, etching, and light scratches.",
  },
  {
    href: "/services/auto-detailing",
    name: "Detailing",
    fullName: "Auto Detailing",
    image: "/images/services/mercedes-g63.jpeg",
    alt: "Mercedes G63 PPF in Santa Clara",
    summary:
      "Interior and exterior detailing beyond a wash — deep clean, polish, and protect.",
  },
] as const;

export const partners = [
  { src: "/images/partners/xpel.png", alt: "XPEL Santa Clara" },
  { src: "/images/partners/stek.png", alt: "STEK installer in the Bay Area" },
  { src: "/images/partners/pureppf.png", alt: "PurePPF installer" },
  { src: "/images/partners/artdeshine.png", alt: "Artdeshine installer" },
  { src: "/images/partners/gswf.png", alt: "GSWF installer" },
] as const;

export const featuredWork = [
  {
    src: "/images/work/bmw-m3-2025.jpg",
    alt: "2025 BMW M3 Competition XPEL full-body satin PPF and ceramic coating",
  },
  {
    src: "/images/work/corvette-z06.jpeg",
    alt: "2026 Corvette Z06 XPEL Track Pack PPF",
  },
  {
    src: "/images/work/lamborghini.jpeg",
    alt: "Lamborghini PPF at Song Auto Detail",
  },
  {
    src: "/images/work/mercedes-gle63s.jpeg",
    alt: "Mercedes-Benz GLE 63S Coupe full-body stealth PPF and ceramic coating",
  },
  {
    src: "/images/work/porsche-911.jpeg",
    alt: "Porsche 911 full-body PPF installation",
  },
  {
    src: "/images/work/tesla-model-s.jpeg",
    alt: "Tesla Model S Signature Edition XPEL full-body PPF and ceramic coating",
  },
  {
    src: "/images/work/tesla-cybertruck.jpeg",
    alt: "Tesla Cybertruck XPEL satin black color-change PPF",
  },
  {
    src: "/images/work/bmw-x7.jpeg",
    alt: "BMW X7 full-body XPEL stealth paint protection film in Santa Clara",
  },
  {
    src: "/images/work/porsche-gt3.jpeg",
    alt: "Porsche GT3 Touring PPF",
  },
  {
    src: "/images/work/tesla-model-x.jpeg",
    alt: "2026 Tesla Model X XPEL gloss Ultimate Plus PPF in Santa Clara",
  },
  {
    src: "/images/work/gmc-denali.jpeg",
    alt: "2025 GMC Denali paint correction and 5-year ceramic coating",
  },
  {
    src: "/images/work/cadillac-blackwing.jpeg",
    alt: "Cadillac CT5-V Blackwing XPEL Ultimate paint protection film",
  },
  {
    src: "/images/work/bmw-m3-2023.jpeg",
    alt: "2023 BMW M3 Competition XPEL full-body satin PPF",
  },
  {
    src: "/images/work/tesla-model-3.jpeg",
    alt: "Tesla Model 3 full-body XPEL Ultimate Plus gloss PPF",
  },
  {
    src: "/images/work/porsche-taycan.jpeg",
    alt: "Porsche Taycan XPEL full-body satin PPF and ceramic coating",
  },
  {
    src: "/images/work/honda-civic.jpeg",
    alt: "Honda Civic color-change gloss black PPF",
  },
] as const;

export const review = {
  quote:
    "I took my 2026 Chevy Tahoe to Song Auto Detail for PPF installation, and I couldn’t be happier with the results and experience. Yong, the owner, was extremely professional from start to finish and took the time to answer all of my questions thoroughly. The quality of the work was absolutely meticulous — every detail was done with precision, and it’s clear he takes a lot of pride in his craftsmanship. The shop itself was extremely clean and well organized, which gave me a lot of confidence in the quality of work being done. I highly recommend Song Auto Detail to anyone looking for top-quality PPF or detailing work.",
  name: "Martin Casillas",
} as const;
