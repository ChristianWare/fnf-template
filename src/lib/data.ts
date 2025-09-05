import Project1 from "../../public/images/howItWorks.jpg";
import Project2 from "../../public/images/speed.jpg";
import Project3 from "../../public/images/faqii.jpg";

export const process = [
  {
    id: 1,
    title: "Discovery & Goal Alignment",
    desc: "30-minute kickoff to define outcomes (fewer no-shows, higher AOV, faster checkout) and align on success metrics and timeline.",
  },
  {
    id: 2,
    title: "Services, Staff & Policy Mapping",
    desc: "Inventory services, durations, buffers, staff skills, rooms/resources, blackout rules, and time zones. Refine cancellation/no-show policies so they’re clear and enforceable.",
  },
  {
    id: 3,
    title: "Offer Architecture & Booking UX",
    desc: "Structure your catalog (core services, add-ons, bundles, memberships, gift cards) and set deposit levels/upsell points. Design the one-screen flow (service → pro → date/time → pay), mobile-first.",
  },
  {
    id: 4,
    title: "Visual Design & Build",
    desc: "Create a branded UI (type, color, components) focused on clarity and accessibility. Implement the site and booking engine with availability, buffers, waitlists, and multi-location/staff logic; ship SEO schema.",
  },
  {
    id: 5,
    title: "Payments, Intake & Integrations",
    desc: "Configure Stripe/Square/PayPal with deposits, tips, invoices, and card-on-file. Create intake forms and email/SMS templates; connect calendar sync (Google/Outlook/iCloud), Zoom/Meet, and marketing tools.",
  },
  {
    id: 6,
    title: "QA, Launch & 30-Day Optimization",
    desc: "Test across devices, validate analytics events, and tune accessibility/performance. Go live with training, then monitor KPIs and iterate on copy, deposits, and layout for better conversion.",
  },
] as const;

export const footerData = [
  {
    id: 1,
    title: "Shop",
    options: [
      {
        id: 1.1,
        option: "All Honey Varieties",
      },
      {
        id: 1.2,
        option: "Gift Boxes",
      },
      {
        id: 1.3,
        option: "Raw & Unfiltered",
      },
      {
        id: 1.4,
        option: "Accessories & Tools",
      },
      {
        id: 1.5,
        option: "Honey Recipe Booklets",
      },
    ],
  },
  {
    id: 2,
    title: "Discover",
    options: [
      {
        id: 2.1,
        option: "FAQ",
      },
      {
        id: 2.2,
        option: "Recipes",
      },
      {
        id: 2.3,
        option: "Our Story",
      },
      {
        id: 2.4,
        option: "Blog",
      },
    ],
  },
  {
    id: 3,
    title: "Connect",
    options: [
      {
        id: 3.1,
        option: "hello@goldendrips.com",
      },
      {
        id: 3.2,
        option: "Wholesale Inquiries",
      },
      {
        id: 3.3,
        option: "My Account",
      },
      {
        id: 3.4,
        option: "Careers",
      },
    ],
  },
] as const;

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

export const 
projects = [
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
  },
  {
    id: 2,
    title: "Chuxly",
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
  },
  {
    id: 4,
    title: "Elite Retreat Rentals",
    slug: "elite-retreat-rentals",
    src: Project3,
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
  },
] as const;

export const pricingData = [
  {
    id: 1,
    service: "Solo Starter Booking",
    headline: "One-person calendar, zero double-bookings",
    desc: "Perfect for solo stylists, consultants, and single-property hosts who need a simple booking flow with card-on-file payments. Go live in two weeks.",
    descii:
      "Built for independent pros who want to stop back-and-forth scheduling and double-bookings. A branded calendar with deposits, automated reminders, and easy rescheduling reduces no-shows and protects your income. Move from DMs to a reliable, professional booking experience—without the overhead of staff or multiple locations.",
    price: "$2,900", 
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
    service: "Team Booking Platform",
    headline: "Up to 15 stylists, trainers, or practitioners—one dashboard",
    desc: "Built for salons, fitness studios, and clinics where clients choose a staff member and pay a deposit. Launch timeline: four weeks.",
    descii:
      "For growing teams—up to 15 stylists, trainers, or practitioners—who need a shared booking hub. Staff get color-coded schedules while admins control deposits and permissions; clients choose their provider at checkout and the front desk manages bookings without touching financial data. Upsells at checkout and Google/365 sync lift revenue and keep availability accurate.",
    price: "$5,500",
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
    service: "Rental Fleet & Inventory Booking",
    headline: "Real-time stock, deposits, and damage-hold authorisations",
    desc: "For car-hire companies, equipment rental shops, or kayak fleets that rent assets by time or day. Launch timeline: five weeks.",
    descii:
      "Built for car hire, equipment shops, and adventure outfitters renting physical assets. Real-time inventory with maintenance/blackout controls prevents overbooking, while Stripe damage-hold pre-authorizations and QR check-in/out streamline handovers and protect revenue. Automated late-return fees and scalable options grow with your fleet.",
    price: "$6,900",
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
    service: "Multi-Location Booking",
    headline: "One backend, many branches or villas",
    desc: "Ideal for spa chains, franchise gyms, or vacation-rental portfolios with 2-10 locations. Launch timeline: six weeks.",
    descii:
      "Centralize multiple branches or properties under one backend. Guests pick a location first, while each branch keeps its own pricing, tax, and currency, and HQ tracks utilization and revenue in a single dashboard. Dynamic pricing rules help maximize occupancy as you scale.",
    price: "$7,900",
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
  // {
  //   id: 5,
  //   service: "Custom Enterprise Booking",
  //   headline: "Bespoke architecture for unique booking models",
  //   desc: "For enterprise chains or complex use-cases—think 50+ locations, hybrid rentals, or regulated medical workflows—where off-the-shelf logic won’t cut it. Timeline and cost are scoped after a technical discovery sprint.",
  //   descii:
  //     "For large or regulated operations that need bespoke logic. We begin with a discovery sprint, then design custom architecture—HIPAA-ready intake, multi-tenant roles, enterprise hosting/SLAs, and deep ERP/CRM integrations. Includes monitoring and priority support; pricing is tailored to your scope.",
  //   price: "$Custom Quote",
  //   servicesInclude: [
  //     {
  //       id: 5.1,
  //       serviceName: "Discovery sprint",
  //       description:
  //         "Two-week deep dive into API landscape, compliance needs, and workflow mapping.",
  //     },
  //     {
  //       id: 5.2,
  //       serviceName: "Bespoke feature engineering",
  //       description:
  //         "Custom modules such as insurance underwriting, multi-tenant role layers, or HIPAA-secure intake forms.",
  //     },
  //     {
  //       id: 5.3,
  //       serviceName: "Dedicated SLA & hosting",
  //       description:
  //         "24-7 monitoring, 99.9 % uptime, and priority support response under 2 hours.",
  //     },
  //     {
  //       id: 5.4,
  //       serviceName: "Enterprise integrations",
  //       description:
  //         "Real-time data bridges to ERP, CRM, PMS, or proprietary internal systems.",
  //     },
  //   ],
  //   addonSectionData: [
  //     {
  //       id: 5.01,
  //       expansionblock: "Compliance Tier",
  //       details: "SOC 2, HIPAA, or GDPR audit package",
  //       price: "POA",
  //     },
  //     {
  //       id: 5.02,
  //       expansionblock: "Scalability Tier",
  //       details: "Horizontal scaling for 1 000+ concurrent bookings",
  //       price: "POA",
  //     },
  //   ],
  // },
] as const;
