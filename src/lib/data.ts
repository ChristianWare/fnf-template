import Project1 from "../../public/images/equipment.jpg";
import Project2 from "../../public/images/road.webp";
import Project3 from "../../public/images/dog.jpg";
import Project4 from "../../public/images/erRentals.png";
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
    title: "Thundertrails",
    slug: "thundertrails",
    src: Project1,
    video: "/videos/thunder.mp4",
    description:
      "Passion for mountain biking, outdoor adventure, and premium gear inspired the founders of Thundertrails to launch their specialized bike shop in 2019. What began as a local favorite for cycling enthusiasts has rapidly grown into one of the region's premier destinations for high-performance mountain bikes and accessories. With a loyal customer base and growing reputation, Thundertrails needed a digital presence that matched their in-store experience and could support their expansion plans.",
    tags: [
      {
        id: 1.98,
        tag: "Ecommerce",
      },
      {
        id: 1.99,
        tag: "Online Shop",
      },
    ],
    h1: "Revolutionizing Thundertrails' online presence with a cutting-edge ecommerce platform",
    year: 2025,
    platform: "Wix E-commerce",
    tech: "Next.js",
    href: "https://thunder-wix.vercel.app/",
    challenge: [
      {
        id: 1.1,
        challengeDetail:
          "Thundertrails' previous website was outdated, with limited functionality and poor performance that failed to showcase their premium bike collection properly. The slow loading times and clunky navigation were frustrating customers and limiting online sales potential. The brand needed a robust digital solution that could handle complex product configurations while delivering an exceptional user experience.",
      },
      {
        id: 1.2,
        challengeDetail:
          "We completely overhauled the website architecture and design to create an immersive digital showroom for their bikes and accessories. The new design incorporates dynamic product visualization, interactive bike customization tools, and seamless integration with their inventory management system. Every aspect of the user interface was crafted to highlight the technical specifications and quality that Thundertrails' products are known for.",
      },
      {
        id: 1.3,
        challengeDetail:
          "Beyond products, Thundertrails has always been deeply connected to the mountain biking community, sponsoring events and producing trail guides. The previous website couldn't effectively feature this content. We developed a content strategy that integrates their blog, event calendar, and trail maps with the shopping experience, strengthening customer engagement and establishing Thundertrails as an authority in the mountain biking world.",
      },
    ],
    results: [
      {
        id: 1.4,
        resultDetail:
          "The new ecommerce platform dramatically improved performance metrics across the board. Page load times decreased by 65% (based on Largest Contentful Paint measurements), while the conversion rate increased by 38%. The enhanced product visualization and customization features contributed to a 42% increase in average order value, and overall sales grew by 92% compared to the previous year.",
      },
      {
        id: 1.5,
        resultDetail:
          "Thundertrails has successfully elevated its brand positioning in the digital space, aligning with its premium in-store experience. The integrated content strategy has boosted organic traffic by 55% and increased newsletter signups by 143%. The platform's scalable architecture now provides Thundertrails with the foundation they need to expand their online presence nationally while maintaining the personalized service their customers expect.",
      },
    ],
    stats: [
      { id: 1, title: "Decrease in page‑load time", desc: "‑65%" },
      { id: 2, title: "Lift in conversion rate", desc: "+38%" },
      { id: 3, title: "Increase in average order value", desc: "+42%" },
      { id: 4, title: "Growth in year‑over‑year sales", desc: "+92%" },
    ],
    src2: Project1,
    src3: Project2,
  },
  {
    id: 2,
    title: "Nier Transportation",
    slug: "chuxly",
    src: Project2,
    video: "/videos/chuxly.mp4",
    description:
      "Founded by audio engineers with a passion for exceptional sound quality, Chuxly emerged in 2021 as a boutique brand dedicated to creating premium headphones and portable speakers. Combining cutting-edge acoustic technology with elegant, minimalist design, Chuxly quickly gained recognition among audiophiles and style-conscious consumers alike. As demand for their products grew beyond their flagship store, Chuxly needed an online platform that could communicate the unique sensory experience of their products while handling their expanding inventory and customer base.",
    tags: [
      {
        id: 2.98,
        tag: "Ecommerce",
      },
      {
        id: 2.99,
        tag: "Audio Equipment",
      },
    ],
    h1: "Elevating the digital experience for Chuxly's premium audio equipment",
    year: 2025,
    platform: "Shopify",
    tech: "Next.js",
    href: "https://www.chuxly.com/",
    challenge: [
      {
        id: 2.1,
        challengeDetail:
          "Chuxly faced the unique challenge of selling high-end audio products online where customers couldn't physically experience the sound quality. Their initial website lacked the immersive elements needed to convey the exceptional audio experience and craftsmanship that justified the premium pricing. The site also struggled with inventory management as their product line expanded, resulting in frustrating out-of-stock situations and missed sales opportunities.",
      },
      {
        id: 2.2,
        challengeDetail:
          "We reimagined the entire customer journey to create a virtual showroom that emphasizes the sensory qualities of Chuxly's products. The redesigned platform features interactive 3D product models, audio demonstrations with comparative sound samples, and detailed acoustic specifications presented through intuitive visualizations. Each product page tells the story of the design philosophy and engineering precision behind the item, helping customers understand the value proposition beyond mere specifications.",
      },
      {
        id: 2.3,
        challengeDetail:
          "To build credibility and foster community engagement, we developed an integrated content hub featuring expert reviews, listening guides, and artist collaborations. The platform now includes a subscription-based exclusive content section where members get early access to limited edition releases and personalized audio profiles. The robust backend system connects seamlessly with their inventory and manufacturing systems, providing real-time stock updates and production timelines for custom orders.",
      },
    ],
    results: [
      {
        id: 2.4,
        resultDetail:
          "The enhanced digital experience has transformed Chuxly's online sales performance. The immersive product presentations and technical demonstrations have reduced return rates by 47% and increased conversion rates by 58% for their highest-priced items. Overall, online revenue has increased by 126% within six months of launch, with the average time spent on product pages increasing from 45 seconds to over 3 minutes.",
      },
      {
        id: 2.5,
        resultDetail:
          "The content strategy has established Chuxly as a thought leader in the audio space, with their listening guides and technical articles generating significant organic traffic and social media engagement. The membership program has exceeded expectations with over 10,000 subscribers in the first quarter, creating a reliable revenue stream and valuable customer insights. With the robust and scalable architecture in place, Chuxly is now expanding into international markets with localized content and payment options.",
      },
    ],
    stats: [
      { id: 1, title: "Reduction in product return rate", desc: "‑47%" },
      { id: 2, title: "Conversion lift on flagship items", desc: "+58%" },
      { id: 3, title: "Increase in online revenue", desc: "+126%" },
      { id: 4, title: "Avg. time on product page", desc: "3 min 05 s" },
    ],
    src2: Project1,
    src3: Project2,
  },
  {
    id: 3,
    title: "Golden Drips",
    slug: "golden-drips",
    src: Project3,
    video: "/videos/honey.mp4",
    description:
      "Golden Drips began as a family-owned apiary in 2018, producing small-batch, artisanal honey varieties from carefully selected floral sources. Their commitment to sustainable beekeeping practices and exceptionally pure, unprocessed honey products quickly earned them a devoted following at farmers' markets and specialty food stores. As demand for their premium honey and bee pollen products surged, Golden Drips recognized the need to expand their reach beyond local markets while maintaining the artisanal quality and personal connection that defined their brand.",
    tags: [
      {
        id: 3.98,
        tag: "Ecommerce",
      },
      {
        id: 3.99,
        tag: "Artisanal Food",
      },
    ],
    h1: "Crafting a luxurious digital storefront for Golden Drips' premium honey collection",
    year: 2025,
    platform: "WooCommerce",
    tech: "Next.js",
    href: "https://golden-tau-ten.vercel.app/",
    challenge: [
      {
        id: 3.1,
        challengeDetail:
          "Golden Drips' existing online presence consisted of a basic informational website and third-party marketplace listings that failed to communicate the premium nature of their products or the story behind their sustainable beekeeping practices. The brand struggled to differentiate themselves in the growing artisanal honey market and lacked the digital infrastructure to handle direct-to-consumer sales efficiently, especially for their subscription offerings and gift packages.",
      },
      {
        id: 3.2,
        challengeDetail:
          "We developed a richly textured digital experience that captures the sensory aspects of Golden Drips' honey varieties through high-definition macro photography, color profiles, and detailed tasting notes. The custom-designed product pages highlight the specific floral sources, harvesting locations, and seasonal characteristics that make each honey variety unique. An interactive flavor wheel helps customers discover products based on their taste preferences, while the sustainable practices section immerses visitors in the brand's environmental commitments through video documentaries and illustrated guides.",
      },
      {
        id: 3.3,
        challengeDetail:
          "To enhance the gifting experience, we created a custom gift builder that allows customers to create personalized honey collections with custom labels and packaging options. The subscription management system provides flexible delivery schedules and seasonal product rotations based on customer preferences. Behind the scenes, the platform integrates with their inventory and production systems to manage the seasonality of their products and ensure availability aligns with harvesting cycles.",
      },
    ],
    results: [
      {
        id: 3.4,
        resultDetail:
          "Golden Drips has successfully transitioned from a primarily wholesale business model to a thriving direct-to-consumer brand. Online sales now account for 65% of total revenue, with a 173% increase in year-over-year growth. The average order value has increased by 89% compared to their previous marketplace listings, and the subscription program now has over 5,000 active members with a remarkable 92% retention rate after six months.",
      },
      {
        id: 3.5,
        resultDetail:
          "The brand storytelling elements have significantly strengthened Golden Drips' market positioning, with engagement metrics showing that 78% of first-time visitors explore the sustainability content before making a purchase. Their educational content on bee conservation has generated substantial media coverage and partnership opportunities with environmental organizations. The platform's scalability has enabled Golden Drips to expand their product line to include limited edition seasonal releases and collaborations with other artisanal food producers, further cementing their reputation as leaders in the premium honey market.",
      },
    ],
    stats: [
      { id: 1, title: "Year‑over‑year online growth", desc: "+173%" },
      { id: 2, title: "Revenue now DTC (direct‑to‑consumer)", desc: "65%" },
      { id: 3, title: "Increase in average order value", desc: "+89%" },
      { id: 4, title: "Subscription program retention", desc: "92%" },
    ],
    src2: Project1,
    src3: Project2,
  },
  {
    id: 4,
    title: "Elite Retreat Rentals",
    slug: "elite-retreat-rentals",
    src: Project4,
    video: "/videos/rentals.mp4",
    description:
      "Elite Retreat Rentals was established in 2022 by a team of hospitality veterans with a vision to transform the vacation rental experience in Phoenix, Arizona. Their portfolio features three meticulously designed luxury properties, each offering a unique aesthetic and amenities while maintaining consistent high standards of comfort and service. As the Phoenix tourism market became increasingly competitive, Elite Retreat Rentals sought to break away from dependency on third-party booking platforms by creating a direct booking system that would showcase their properties' distinctive features and allow for a more personalized guest experience.",
    tags: [
      {
        id: 4.98,
        tag: "Hospitality",
      },
      {
        id: 4.99,
        tag: "Booking Platform",
      },
    ],
    h1: "Designing a seamless direct booking experience for Elite Retreat Rentals' luxury properties",
    year: 2025,
    platform: "n/a",
    tech: "Next.js + MongoDB + Node.js",
    href: "https://case-study-one-git-main-christianwares-projects.vercel.app/",
    challenge: [
      {
        id: 4.1,
        challengeDetail:
          "Elite Retreat Rentals was losing substantial revenue to third-party booking fees while struggling with the limitations these platforms imposed on property presentation and guest communication. Their existing website was primarily informational with basic contact forms, requiring manual reservation management and payment processing. Without a proper calendar synchronization system, they frequently encountered double-booking issues and missed opportunities during peak seasons when managing listings across multiple platforms.",
      },
      {
        id: 4.2,
        challengeDetail:
          "We developed a comprehensive direct booking platform that showcases each property through immersive virtual tours, 4K video walkthroughs, and interactive floor plans that allow potential guests to visualize their stay before booking. The intuitive booking engine features real-time availability, dynamic pricing based on seasonality and demand, and a streamlined checkout process with multiple payment options. Each property listing highlights its unique character through neighborhood guides, curated experience recommendations, and comprehensive amenity details.",
      },
      {
        id: 4.3,
        challengeDetail:
          "To enhance the guest experience beyond the booking process, we implemented a secure guest portal where visitors can manage their reservations, access digital guidebooks, arrange additional services, and communicate directly with property managers. The backend system integrates with their property management software, cleaning service schedules, and smart home systems to ensure seamless operations. A sophisticated analytics dashboard provides insights into booking patterns, revenue optimization opportunities, and guest satisfaction metrics.",
      },
    ],
    results: [
      {
        id: 4.4,
        resultDetail:
          "The direct booking platform has fundamentally transformed Elite Retreat Rentals' business model and profitability. Direct bookings now account for 78% of all reservations, representing a 210% increase compared to their previous third-party-dependent approach. The elimination of commission fees has increased profit margins by 32% while allowing for more competitive pricing strategies during off-peak seasons. The average stay duration has increased by 2.4 nights, and the enhanced presentation has contributed to a 45% increase in premium add-on services.",
      },
      {
        id: 4.5,
        resultDetail:
          "The improved guest communication system has resulted in a 98% satisfaction rating and a 67% repeat booking rate within the first year. The detailed analytics have enabled more effective marketing strategies, with targeted promotions increasing occupancy rates during traditionally slower periods by 41%. With the success of their direct booking model, Elite Retreat Rentals is now expanding their portfolio with two additional luxury properties in Scottsdale, all seamlessly integrated into their existing platform. Their reputation as a premier luxury accommodation provider in the Phoenix metropolitan area continues to grow, with features in several travel publications highlighting their innovative approach to the vacation rental experience.",
      },
    ],
    stats: [
      { id: 1, title: "Bookings made directly", desc: "78%" },
      { id: 2, title: "Profit‑margin increase", desc: "+32%" },
      { id: 3, title: "Increase in avg. stay length", desc: "+2.4 nights" },
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
