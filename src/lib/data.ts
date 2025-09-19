import Project1 from "../../public/images/thunder.jpg";
import Project2 from "../../public/images/road.webp";
import Project3 from "../../public/images/dog.jpg";
import Project4 from "../../public/images/er.png";
import BookingSystem from "../../public/images/bookingSystemii.png";
import AppointmentAlerts from "../../public/images/AppointmentAlerts.png";
import NoShow from "../../public/images/NoShow.png";

export const process = [
  {
    id: 1,
    title: "Project Discovery",
    desc: "Focused conversations and light research to understand your services, audience, and goals—then define simple success metrics to guide the build.",
  },
  {
    id: 2,
    title: "Strategy & Creative Direction",
    desc: "We turn insights into a clear plan: refine your offer, name straightforward options, and outline the few easy steps clients take to book.",
  },
  {
    id: 3,
    title: "Design & Project Build",
    desc: "We craft an on-brand website and a smooth one-screen booking flow (service → pro → time → pay), built with precision, accessibility, and attention to detail.",
  },
  {
    id: 4,
    title: "Launch & Handoff",
    desc: "We go live with a calm, confidence-building experience and show your team exactly how to manage bookings day-to-day.",
  },
  {
    id: 5,
    title: "Project Scale & Optimization",
    desc: "We monitor early results and fine-tune copy, layout, and offer structure to lift conversions—then support growth with add-ons, memberships, and campaigns.",
  },
] as const;

export const footerData = [
  {
    id: 1,
    title: "Quick Links",
    options: [
      {
        id: 1.1,
        option: "Home",
        href: "/",
      },
      // {
      //   id: 1.2,
      //   option: "About",
      // },
      {
        id: 1.3,
        option: "Work",
        href: "/work",
      },
      {
        id: 1.4,
        option: "Pricing",
        href: "/pricing",
      },
      {
        id: 1.5,
        option: "Blog",
        href: "/blog",
      },
      // {
      //   id: 1.6,
      //   option: "Contact",
      // },
    ],
  },
  {
    id: 2,
    title: "Legal",
    options: [
      {
        id: 2.1,
        option: "Terms and Conditions",
        href: "/terms",
      },
      {
        id: 2.2,
        option: "Privacy Policy",
        href: "/privacy",
      },
      {
        id: 2.3,
        option: "Accessibility",
        href: "/accessibility",
      },
      // {
      //   id: 2.4,
      //   option: "Careers",
      // },
    ],
  },
  {
    id: 3,
    title: "Company",
    options: [
      {
        id: 3.1,
        option: "Contact Us",
        href: "/contact",
      },
      {
        id: 3.2,
        option: "About",
        href: "/about",
      },
      // {
      //   id: 3.3,
      //   option: "Support",
      // },
      // {
      //   id: 3.4,
      //   option: "FAQs",
      // },
    ],
  },
];

export const footerData2 = [
  {
    id: 4,
    title: "Privacy Policy",
  },
  {
    id: 5,
    title: "Terms & Conditions",
  },
  {
    id: 6,
    title: "Cookie Preferences",
  },
  {
    id: 7,
    title: "Legal Information",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Thundertrails Bike Rentals",
    slug: "thundertrails",
    src: Project1,
    description:
      "Thundertrails started in 2019 renting premium mountain and e-bikes to riders exploring desert singletrack and high-country trails. Demand outgrew their manual, message-based booking flow—double-bookings, missed deposits, and no-shows were common. We built a direct-booking platform that fills calendars (not inboxes) with real-time availability, deposits, and guided add-ons like helmet, rack, or child-seat rentals.",
    tags: [
      { id: 1.98, tag: "Bike Rentals" },
      { id: 1.99, tag: "Booking Platform" },
    ],
    h1: "From DMs to deposits: a direct-booking system for premium bike rentals",
    year: 2025,
    platform: "Direct Booking",
    tech: "Next.js + Stripe + iCal/Google Sync + Twilio",
    href: "https://thunder-wix.vercel.app/",
    challenge: [
      {
        id: 1.1,
        challengeDetail:
          "Inventory conflicts and double-bookings across walk-ins, phone calls, and marketplace listings. No centralized calendar or automated cutoff for same-day rentals.",
      },
      {
        id: 1.2,
        challengeDetail:
          "High no-show rate due to pay-at-pickup; staff spent hours chasing confirmations and manual waivers.",
      },
      {
        id: 1.3,
        challengeDetail:
          "Upsells (protective gear, racks, premium batteries) were offered ad-hoc and rarely captured at checkout.",
      },
    ],
    results: [
      {
        id: 1.4,
        resultDetail:
          "Introduced deposit-secured checkout with automated SMS/email reminders and e-waivers. No-shows down 62%; waiver completion before pickup up 94%.",
      },
      {
        id: 1.5,
        resultDetail:
          "Live inventory with per-model buffers and blackout windows eliminated conflicts. Staff scheduling and maintenance holds sync to Google Calendar.",
      },
      {
        id: 1.6,
        resultDetail:
          "In-flow add-ons increased average order value by 37%. Guided trail add-ons and damage-waiver toggle boosted attachment rate to 58%.",
      },
    ],
    stats: [
      { id: 1, title: "No-show reduction", desc: "-62%" },
      { id: 2, title: "Increase in AOV", desc: "+37%" },
      { id: 3, title: "Waivers completed pre-arrival", desc: "94%" },
      { id: 4, title: "Double-booking incidents", desc: "0 after launch" },
    ],
    src2: Project1,
    src3: Project2,
  },
  {
    id: 2,
    title: "Nier Transportation",
    slug: "nier-transportation",
    src: Project2,
    description:
      "Nier Transportation provides high-end black-car service across Phoenix and all of Arizona—airport transfers, hourly charters, and long-distance city-to-city. They needed a luxury-grade booking experience with instant quotes, vehicle selection, deposits, and chauffeur/vehicle dispatch—without endless phone tag.",
    tags: [
      { id: 2.98, tag: "Transportation" },
      { id: 2.99, tag: "Black-Car / Chauffeur" },
    ],
    h1: "A luxury booking flow for Phoenix’s black-car service—built for speed and zero friction",
    year: 2025,
    platform: "Direct Booking",
    tech: "Next.js + Stripe + Maps/Distance Matrix + iCal/365 + Twilio",
    href: "https://nier.vercel.app/",
    challenge: [
      {
        id: 2.1,
        challengeDetail:
          "Manual quoting slowed conversions. Airport/point-to-point pricing required zones, distance tiers, surcharges, and wait-time logic.",
      },
      {
        id: 2.2,
        challengeDetail:
          "Last-minute cancellations and no-shows impacted utilization. No card-on-file or deposit policy enforced at booking.",
      },
      {
        id: 2.3,
        challengeDetail:
          "Dispatching chauffeurs and vehicles required juggling texts, spreadsheets, and separate calendars with frequent assignment errors.",
      },
    ],
    results: [
      {
        id: 2.4,
        resultDetail:
          "Instant quote engine with live distance/time pricing, airport surcharges, and gratuity presets increased completed bookings by 54%.",
      },
      {
        id: 2.5,
        resultDetail:
          "Deposit-first checkout and tiered cancellation windows cut late cancels by 49%. Automated SMS with driver/vehicle details reduced support calls.",
      },
      {
        id: 2.6,
        resultDetail:
          "Role-based dispatch assigns vehicles and chauffeurs, pushes events to 365/Google calendars, and blocks conflicts. On-time pickup rate reached 98.7%.",
      },
    ],
    stats: [
      { id: 1, title: "Completed bookings", desc: "+54%" },
      { id: 2, title: "Late cancellations", desc: "-49%" },
      { id: 3, title: "On-time pickup rate", desc: "98.7%" },
      { id: 4, title: "Quote-to-book time", desc: "-68%" },
    ],
    src2: Project1,
    src3: Project2,
  },
  {
    id: 3,
    title: "Muchacho Grooming",
    slug: "muchacho-grooming",
    src: Project3,
    description:
      "Muchacho Grooming is a boutique dog spa offering bath, full-groom, de-shed, nail care, and add-ons like blueberry facials and paw balm. They needed a polished booking flow with stylist scheduling, breed/size pricing, deposits to reduce no-shows, and an easy reschedule link for pet parents.",
    tags: [
      { id: 3.98, tag: "Dog Spa" },
      { id: 3.99, tag: "Salon Booking" },
    ],
    h1: "A no-stress spa booking flow for pups—and their humans",
    year: 2025,
    platform: "Direct Booking",
    tech: "Next.js + Stripe + Prisma/PostgreSQL + NextAuth + Twilio",
    href: "https://muchacho-grooming-demo.vercel.app/",
    challenge: [
      {
        id: 3.1,
        challengeDetail:
          "Breed/size complexity made quoting inconsistent. Staff capacity and service durations varied by stylist and service.",
      },
      {
        id: 3.2,
        challengeDetail:
          "High day-of cancellations and no-shows from pay-later flow; phones tied up with reschedule calls.",
      },
      {
        id: 3.3,
        challengeDetail:
          "Upsells (teeth brushing, de-shed, paw balm) were forgotten at the counter instead of captured online.",
      },
    ],
    results: [
      {
        id: 3.4,
        resultDetail:
          "Smart pricing by breed/size with service-duration templates. Calendar shows only realistic time slots per stylist.",
      },
      {
        id: 3.5,
        resultDetail:
          "Deposit-required checkout with automated reminders and self-serve reschedule link cut no-shows by 58% and phone time by 41%.",
      },
      {
        id: 3.6,
        resultDetail:
          "Add-on step in flow increased attachment rate to 63% and lifted AOV by 29%.",
      },
    ],
    stats: [
      { id: 1, title: "No-show reduction", desc: "-58%" },
      { id: 2, title: "AOV lift from add-ons", desc: "+29%" },
      { id: 3, title: "Phone time reduction", desc: "-41%" },
      { id: 4, title: "Online reschedules self-serve", desc: "87%" },
    ],
    src2: Project1,
    src3: Project2,
  },
  {
    id: 4,
    title: "Elite Retreat Rentals",
    slug: "elite-retreat-rentals",
    src: Project4,
    description:
      "Elite Retreat Rentals manages three luxury vacation properties in the Phoenix metro. We built a direct booking experience with real-time calendars, dynamic pricing, digital guidebooks, and a guest portal—reducing reliance on OTAs while improving margins and stay quality.",
    tags: [
      { id: 4.98, tag: "Hospitality" },
      { id: 4.99, tag: "Booking Platform" },
    ],
    h1: "A premium direct-booking engine for luxury vacation rentals in Phoenix",
    year: 2025,
    platform: "Direct Booking",
    tech: "Next.js + Prisma/PostgreSQL + Stripe + iCal/OTA Sync + NextAuth",
    href: "https://case-study-one-git-main-christianwares-projects.vercel.app/",
    challenge: [
      {
        id: 4.1,
        challengeDetail:
          "OTA fees eroded margins and limited brand storytelling; manual calendars created double-booking risk.",
      },
      {
        id: 4.2,
        challengeDetail:
          "No integrated upsells for add-on experiences (early check-in, private chef, pool heat), leaving revenue on the table.",
      },
      {
        id: 4.3,
        challengeDetail:
          "Guest communication was scattered across email threads; property ops (cleaning, maintenance) weren’t synced.",
      },
    ],
    results: [
      {
        id: 4.4,
        resultDetail:
          "Direct bookings now drive 78% of reservations. Integrated OTA/iCal sync eliminated conflicts and stabilized occupancy.",
      },
      {
        id: 4.5,
        resultDetail:
          "Add-on marketplace increased ancillary revenue by 45%; dynamic pricing improved shoulder-season occupancy by 41%.",
      },
      {
        id: 4.6,
        resultDetail:
          "Guest portal centralizes messages, digital guidebooks, and check-in. Ops calendar syncs cleans/turnovers to reduce misses.",
      },
    ],
    stats: [
      { id: 1, title: "Bookings made directly", desc: "78%" },
      { id: 2, title: "Profit-margin increase", desc: "+32%" },
      { id: 3, title: "Increase in avg. stay length", desc: "+2.4 nights" },
      { id: 4, title: "Occupancy lift in slow periods", desc: "+41%" },
    ],
    src2: Project1,
    src3: Project2,
  },
] as const;


export const pricingData = [
  {
    id: 1,
    service: "Solo",
    headline: "One-person calendar, zero double-bookings",
    desc: "Perfect for solo stylists, consultants, and single-property hosts who need a simple booking flow with payments.",
    descii:
      "Built for independent pros who want to stop back-and-forth scheduling and double-bookings. A branded calendar with deposits, automated reminders, and easy rescheduling reduces no-shows and protects your income. Move from DMs to a reliable, professional booking experience—without the overhead of staff or multiple locations.",
    price: "$375/mo",
    servicesInclude: [
      {
        id: 1.1,
        serviceName: "Single-resource calendar",
        description: "One master calendar with day, week, and agenda views.",
      },
      {
        id: 1.2,
        serviceName: "Stripe deposit checkout",
        description:
          "Collect non-refundable deposits or full payment at booking.",
      },
      {
        id: 1.3,
        serviceName: "SMS / email reminders",
        description: "24 h and 2 h nudges reduce no-shows fast.",
      },
      {
        id: 1.4,
        serviceName: "Guest reschedule link",
        description: "Clients manage changes without DMing you.",
      },
    ],
    addonSectionData: [
      {
        id: 1.01,
        expansionblock: "Extra Reminder Tier",
        details: "Add a 7-day “Are you still coming?” SMS",
        price: "$100",
      },
      {
        id: 1.02,
        expansionblock: "Gift-Card Module",
        details: "Sell digital gift cards from the same checkout",
        price: "$200",
      },
    ],
  },
  {
    id: 2,
    service: "Team",
    headline: "Up to 15 stylists, trainers, or practitioners—one dashboard",
    desc: "Built for salons, fitness studios, and clinics where clients choose a staff member and pay a deposit.",
    descii:
      "For growing teams—up to 15 stylists, trainers, or practitioners—who need a shared booking hub. Staff get color-coded schedules while admins control deposits and permissions; clients choose their provider at checkout and the front desk manages bookings without touching financial data. Upsells at checkout and Google/365 sync lift revenue and keep availability accurate.",
    price: "$450/mo",
    servicesInclude: [
      {
        id: 2.1,
        serviceName: "Multi-staff calendar",
        description: "Colour-coded schedules for up to 15 team members.",
      },
      {
        id: 2.2,
        serviceName: "Google / 365 sync",
        description:
          "Two-way sync keeps personal and booking calendars aligned.",
      },
      {
        id: 2.3,
        serviceName: "Upsell add-ons",
        description: "Offer treatments or extras during checkout.",
      },
      {
        id: 2.4,
        serviceName: "Role-based access",
        description:
          "Front-desk staff manage bookings without touching financials.",
      },
    ],
    addonSectionData: [
      {
        id: 2.01,
        expansionblock: "Resource Tier",
        details: "Each additional 5 staff calendars beyond 15",
        price: "$600",
      },
      {
        id: 2.02,
        expansionblock: "Membership Module",
        details: "Auto-bill recurring packages with usage tracking",
        price: "$1,200",
      },
      // {
      //   id: 2.03,
      //   expansionblock: "CRM Link",
      //   details: "Push booking data to HubSpot or Klaviyo",
      //   price: "$800",
      // },
    ],
  },
  {
    id: 3,
    service: "Rental/Fleet",
    headline: "Real-time stock, deposits, and damage-hold authorisations",
    desc: "For car-hire companies, equipment rental shops, or kayak fleets that rent assets by time or day.",
    descii:
      "Built for car hire, equipment shops, and adventure outfitters renting physical assets. Real-time inventory with maintenance/blackout controls prevents overbooking, while Stripe damage-hold pre-authorizations and QR check-in/out streamline handovers and protect revenue. Automated late-return fees and scalable options grow with your fleet.",
    price: "$525/mo",
    servicesInclude: [
      {
        id: 4.1,
        serviceName: "Inventory manager",
        description:
          "Track availability, maintenance blocks, and blackout dates.",
      },
      {
        id: 4.2,
        serviceName: "Damage-hold payments",
        description:
          "Pre-authorise security deposits on Stripe, auto-release at return.",
      },
      {
        id: 4.3,
        serviceName: "QR check-in",
        description:
          "Scan items out and in via mobile to update stock instantly.",
      },
      {
        id: 4.4,
        serviceName: "Late-return fees",
        description: "Automatic overtime charges keep customers accountable.",
      },
    ],
    addonSectionData: [
      {
        id: 4.01,
        expansionblock: "Insurance API",
        details: "Real-time policy issuance at checkout",
        price: "$1,500",
      },
      {
        id: 4.02,
        expansionblock: "Fleet Size Tier",
        details: "Every additional block of 25 rental units beyond 50",
        price: "$700",
      },
      // {
      //   id: 4.03,
      //   expansionblock: "Analytics Tier",
      //   details: "Custom Power BI or Looker Studio dashboards",
      //   price: "$900",
      // },
    ],
  },
  {
    id: 4,
    service: "Multi-Location",
    headline: "One backend, many branches or villas",
    desc: "Ideal for spa chains, franchise gyms, or vacation-rental portfolios with 2-10 locations.",
    descii:
      "Centralize multiple branches or properties under one backend. Guests pick a location first, while each branch keeps its own pricing, tax, and currency, and HQ tracks utilization and revenue in a single dashboard. Dynamic pricing rules help maximize occupancy as you scale.",
    price: "$650/mo",
    servicesInclude: [
      {
        id: 3.1,
        serviceName: "Location switcher",
        description: "Guests pick branch or property before choosing services.",
      },
      {
        id: 3.2,
        serviceName: "Per-location pricing",
        description: "Each branch sets its own fees, tax, and currency.",
      },
      {
        id: 3.3,
        serviceName: "Central admin",
        description: "HQ dashboard shows combined utilisation and revenue.",
      },
      {
        id: 3.4,
        serviceName: "Dynamic pricing",
        description:
          "Yield-management rules raise or lower prices automatically.",
      },
    ],
    addonSectionData: [
      {
        id: 3.01,
        expansionblock: "Location Tier",
        details: "Each extra branch or property beyond the first 10",
        price: "$800",
      },
      {
        id: 3.02,
        expansionblock: "Accounting API",
        details: "Sync payouts to Xero or QuickBooks",
        price: "$1,800",
      },
    ],
  },
  {
    id: 5,
    service: "Custom",
    headline: "Bespoke architecture for unique booking models",
    desc: "For enterprise chains or complex use-cases—think 50+ locations, hybrid rentals, or regulated medical workflows—where off-the-shelf logic won’t cut it. Timeline and cost are scoped after a technical discovery sprint.",
    descii:
      "For large or regulated operations that need bespoke logic. We begin with a discovery sprint, then design custom architecture—HIPAA-ready intake, multi-tenant roles, enterprise hosting/SLAs, and deep ERP/CRM integrations. Includes monitoring and priority support; pricing is tailored to your scope.",
    price: "$Custom Quote",
    servicesInclude: [
      {
        id: 5.1,
        serviceName: "Discovery sprint",
        description:
          "Two-week deep dive into API landscape, compliance needs, and workflow mapping.",
      },
      {
        id: 5.2,
        serviceName: "Bespoke feature engineering",
        description:
          "Custom modules such as insurance underwriting, multi-tenant role layers, or HIPAA-secure intake forms.",
      },
      {
        id: 5.3,
        serviceName: "Dedicated SLA & hosting",
        description:
          "24-7 monitoring, 99.9 % uptime, and priority support response under 2 hours.",
      },
      {
        id: 5.4,
        serviceName: "Enterprise integrations",
        description:
          "Real-time data bridges to ERP, CRM, PMS, or proprietary internal systems.",
      },
    ],
    addonSectionData: [
      {
        id: 5.01,
        expansionblock: "Compliance Tier",
        details: "SOC 2, HIPAA, or GDPR audit package",
        price: "POA",
      },
      {
        id: 5.02,
        expansionblock: "Scalability Tier",
        details: "Horizontal scaling for 1 000+ concurrent bookings",
        price: "POA",
      },
    ],
  },
] as const;

export const questions = [
  {
    id: 36,
    question: "How long does it take to build an e-commerce website?",
    answer:
      "The timeline for building an e-commerce website depends on the complexity of your project. A basic online store can typically be launched in 4-6 weeks, while more complex sites with custom functionality may take 8-16 weeks. During our initial consultation, we'll provide a detailed timeline based on your specific requirements and business goals.",
  },
  {
    id: 36.1,
    question: "Which e-commerce platform do you recommend?",
    answer:
      "We don't believe in one-size-fits-all solutions. The best platform depends on your specific business needs, budget, and long-term goals. We have expertise in Shopify, WooCommerce, Magento, Wix, and custom solutions. During our discovery process, we'll assess your requirements and recommend the platform that offers the best balance of features, flexibility, and scalability for your business.",
  },
  {
    id: 36.2,
    question: "How much does an e-commerce website cost?",
    answer:
      "E-commerce website costs vary widely based on your business requirements. Our starter stores begin at $5,900, growth-focused stores at $7,500, and enterprise solutions at $10,000. We provide transparent, detailed quotes for each project after understanding your specific needs. Factors that affect pricing include design complexity, number of products, custom functionality, and integrations with other business systems.",
  },
  {
    id: 36.3,
    question: "Do you provide ongoing support after launch?",
    answer:
      "Absolutely! We understand that launching your store is just the beginning of your e-commerce journey. We offer flexible maintenance and support plans starting at $495 per month, which include platform updates, security patches, content updates, and technical support. We also provide growth-focused services such as conversion optimization, A/B testing, and performance enhancements for businesses looking to continuously improve their online stores.",
  },
  {
    id: 36.4,
    question:
      "What sets Fonts & Footers apart from other web development agencies?",
    answer:
      "Unlike general web developers, we specialize exclusively in e-commerce, with deep expertise across multiple business models including B2C, B2B, marketplaces, subscription services, and more. Our approach balances beautiful design with data-driven strategy, ensuring your store not only looks great but delivers measurable business results. We take a limited number of clients to provide personalized attention, and our focus on long-term partnerships means we're invested in your success far beyond the initial launch.",
  },
  {
    id: 37,
    question: "How do you handle SEO for e-commerce websites?",
    answer:
      "We build every store with SEO best practices in mind—optimizing site structure, meta titles and descriptions, heading hierarchy, and URL slugs. We also implement schema markup for products, generate XML sitemaps, set up Google Search Console, and ensure fast load times to improve crawlability and ranking.",
  },
  {
    id: 38,
    question: "Can I request design or feature changes after launch?",
    answer:
      "Absolutely. After launch, you can submit change requests through our support portal. Small tweaks are often covered by your maintenance plan, and for larger scope adjustments we’ll provide a transparent quote and timeline before starting work.",
  },
  {
    id: 39,
    question: "Which payment gateways and shipping carriers do you integrate?",
    answer:
      "We support all major payment gateways—Shopify Payments, Stripe, PayPal, Authorize.net—as well as regional options on request. For shipping, we integrate carriers like UPS, FedEx, DHL, USPS, and real-time rate calculators so your customers see accurate shipping costs at checkout.",
  },
  {
    id: 40,
    question: "Do you provide product photography or copywriting services?",
    answer:
      "Yes—we partner with professional photographers and copywriters to deliver high-quality product imagery and persuasive, SEO-driven copy. These services can be bundled into your project or added on afterward to ensure your catalog shines.",
  },
  {
    id: 41,
    question: "How do you ensure my store is secure?",
    answer:
      "Security is paramount. We enforce HTTPS across the entire site, apply regular platform and plugin updates, configure firewalls, and set up daily backups. We also follow PCI DSS guidelines to protect your customers’ payment data.",
  },
  {
    id: 42,
    question: "Will my e-commerce site be fully responsive on mobile devices?",
    answer:
      "Yes. We use a mobile-first approach and rigorously test layouts on a variety of screen sizes. Your store will adapt gracefully from large desktop monitors down to smartphones and tablets, ensuring an optimal shopping experience everywhere.",
  },
  {
    id: 43,
    question: "How do you optimize site performance and loading speed?",
    answer:
      "We optimize images (responsive sizes, WebP), implement code-splitting and lazy loading, configure browser caching, and integrate a CDN. We also run performance audits with Lighthouse or GTmetrix to identify and resolve any remaining bottlenecks.",
  },
  {
    id: 44,
    question: "Can you integrate third-party apps, plugins, or custom APIs?",
    answer:
      "Yes. Whether it’s marketing automation (Klaviyo, Mailchimp), ERP/CRM systems, subscription platforms, or custom-built APIs, we’ll architect and test integrations to work seamlessly within your store’s ecosystem.",
  },
  {
    id: 45,
    question: "What does your project management process look like?",
    answer:
      "We follow an agile workflow with clearly defined milestones. From kickoff and discovery to design, development, and launch, you’ll get weekly progress updates via Trello or Asana, plus regular video calls to review deliverables and provide feedback.",
  },
  {
    id: 46,
    question: "Do you support international stores and multi-currency pricing?",
    answer:
      "Yes. We can configure multi-currency support, local tax settings, and language translations. Using geolocation or manual selectors, customers see pricing, shipping, and content tailored to their region, boosting global conversion rates.",
  },
  {
    id: 47,
    question: "Can you migrate my existing store from another platform?",
    answer:
      "Yes—whether you’re on Magento, BigCommerce, WooCommerce, or a custom solution, we’ll handle data export, product mapping, order history transfer, and SEO redirects to ensure a seamless transition with zero downtime.",
  },
  {
    id: 48,
    question: "Do you support multilingual and multi-region stores?",
    answer:
      "Absolutely. We can implement language translations, locale-based content, currency selectors, and geolocation so customers automatically see your site in their native language and currency, boosting global engagement and sales.",
  },
  {
    id: 49,
    question: "Can you integrate inventory management or ERP systems?",
    answer:
      "Yes—we integrate with leading inventory and ERP platforms like NetSuite, SAP, TradeGecko, and Zoho. Real-time stock syncing and order routing ensure accurate inventory levels and efficient fulfillment across all sales channels.",
  },
  {
    id: 50,
    question: "What analytics and reporting do you provide?",
    answer:
      "We set up Google Analytics, enhanced e-commerce tracking, and platform-specific dashboards. You’ll get custom reports on traffic, conversion funnels, product performance, and customer lifetime value, with monthly review calls to share insights.",
  },
  {
    id: 51,
    question: "Will you provide training and documentation after launch?",
    answer:
      "Yes. We include a comprehensive onboarding session—live video training for you and your team—plus clear written documentation covering store management, order fulfillment, and marketing tasks so you can run your business with confidence.",
  },
] as const;

export const AboutUsData = [
  {
    id: 1,
    title: "Booking System",
    desc: "Within a set budget, we launch fast and learn quickly.",
    src: BookingSystem,
  },
  {
    id: 2,
    title: "Appointment Alerts",
    desc: "Scale what works so you can focus on your craft",
    src: AppointmentAlerts,
  },
  {
    id: 3,
    title: "No-show Protection",
    desc: "Multi-location/team operations",
    src: NoShow,
  },
  // {
  //   id: 4,
  //   title: "Staff Scheduling & Management",
  //   desc: "Assign staff or manager roles to your team members and let them manage their own schedules, leaves, etc. ",
  // },
  // {
  //   id: 5,
  //   title: "Reports and Analytics",
  //   desc: "Gain insights into your business performance with comprehensive reporting tools.",
  // },
  // {
  //   id: 6,
  //   title: "Payments",
  //   desc: "Accept deposits or full payments at booking via Stripe or PayPal.",
  // },
] as const;
