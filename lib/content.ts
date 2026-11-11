export const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Our Services", href: "#services" },
  { label: "For Investors", href: "#investors" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const CONTACT_EMAIL = "hello@mountaintop.co.uk";

export const PROBLEMS = [
  {
    index: "01",
    title: "Time-consuming operations",
    body: "Constant guest messages, bookings, check-ins and operational coordination take valuable time away from growing your investments.",
  },
  {
    index: "02",
    title: "Revenue left on the table",
    body: "Static pricing, poor listing optimisation and missed opportunities can reduce the performance of your properties.",
  },
  {
    index: "03",
    title: "Fragmented management",
    body: "Coordinating cleaners, maintenance teams and guest services across multiple properties creates unnecessary complexity.",
  },
  {
    index: "04",
    title: "Limited scalability",
    body: "Traditional management often requires more people, more costs and more oversight as your portfolio grows.",
  },
] as const;

export const AI_CAPABILITIES = [
  "Intelligent pricing and revenue optimisation",
  "Automated guest communication",
  "Reservation management",
  "Listing optimisation",
  "Booking and calendar coordination",
  "Performance monitoring",
  "Financial reporting",
  "Operational issue detection",
] as const;

export const HUMAN_CAPABILITIES = [
  "Professional cleaning coordination",
  "Property inspections",
  "Maintenance and repairs",
  "Check-in and check-out support",
  "Local emergency response",
  "Supplier and contractor management",
] as const;

export type ServiceIcon =
  | "revenue"
  | "guest"
  | "listing"
  | "cleaning"
  | "operations"
  | "portfolio";

export const SERVICES: {
  index: string;
  title: string;
  description: string;
  features: string[];
  icon: ServiceIcon;
}[] = [
  {
    index: "01",
    title: "Revenue Management",
    description:
      "Maximise the earning potential of every property with intelligent pricing strategies, demand analysis and continuous revenue optimisation.",
    features: [
      "Dynamic pricing",
      "Occupancy optimisation",
      "Market and competitor monitoring",
      "Seasonal pricing strategies",
      "Revenue performance analysis",
    ],
    icon: "revenue",
  },
  {
    index: "02",
    title: "Guest & Reservation Management",
    description:
      "Deliver a seamless guest experience from the first enquiry to post-stay communication.",
    features: [
      "24/7 guest communication",
      "Booking management",
      "Automated check-in instructions",
      "Guest enquiries and support",
      "Issue detection and escalation",
    ],
    icon: "guest",
  },
  {
    index: "03",
    title: "Listing & Marketing Optimisation",
    description:
      "Make every property more competitive with professionally optimised listings and continuous performance improvements.",
    features: [
      "Listing creation and optimisation",
      "Professional presentation",
      "Platform management",
      "Description and content optimisation",
      "Performance monitoring",
    ],
    icon: "listing",
  },
  {
    index: "04",
    title: "Cleaning & Property Care",
    description:
      "Keep every property guest-ready through coordinated local cleaning and property care operations.",
    features: [
      "Cleaning coordination",
      "Turnover scheduling",
      "Quality inspections",
      "Linen and inventory coordination",
      "Maintenance coordination",
    ],
    icon: "cleaning",
  },
  {
    index: "05",
    title: "Check-in & Property Operations",
    description:
      "Ensure smooth arrivals, departures and day-to-day property operations.",
    features: [
      "Check-in coordination",
      "Check-out coordination",
      "Access management",
      "Property inspections",
      "Emergency escalation",
    ],
    icon: "operations",
  },
  {
    index: "06",
    title: "Complete Portfolio Management",
    description:
      "One management partner for your entire short-term rental portfolio, with visibility into performance and operations.",
    features: [
      "Centralised portfolio management",
      "Owner reporting",
      "Financial performance tracking",
      "Operational oversight",
      "Continuous optimisation",
    ],
    icon: "portfolio",
  },
];

export const STEPS = [
  {
    index: "01",
    title: "Portfolio Assessment",
    body: "We understand your properties, current performance, objectives and operational requirements.",
  },
  {
    index: "02",
    title: "Onboarding & Setup",
    body: "We review listings, configure pricing strategies, connect operational systems and coordinate local service partners.",
  },
  {
    index: "03",
    title: "Intelligent Management",
    body: "Our AI-powered systems manage reservations, guest communication, pricing and operational workflows, with human supervision.",
  },
  {
    index: "04",
    title: "Continuous Optimisation",
    body: "We monitor performance, identify opportunities and provide ongoing reporting to help maximise your portfolio's potential.",
  },
] as const;

export const COMPARISON = [
  {
    criterion: "Operating model",
    traditional: "People-intensive operations.",
    mountainTop: "AI-powered operations with human oversight.",
  },
  {
    criterion: "Guest communication",
    traditional: "Primarily manual.",
    mountainTop: "Automated 24/7 support with human escalation.",
  },
  {
    criterion: "Pricing",
    traditional: "Periodic manual adjustments.",
    mountainTop: "Intelligent, continuous pricing optimisation.",
  },
  {
    criterion: "Reporting",
    traditional: "Periodic reporting.",
    mountainTop: "Centralised performance visibility.",
  },
  {
    criterion: "Operations",
    traditional: "Fragmented coordination.",
    mountainTop: "Integrated operational workflows.",
  },
  {
    criterion: "Scalability",
    traditional: "Often requires additional staff as portfolios grow.",
    mountainTop: "Designed to increase operational capacity through automation.",
  },
] as const;

export const BENEFITS = [
  "One management partner for your portfolio.",
  "Greater visibility into property performance.",
  "Less administrative and operational involvement.",
  "A scalable operating model as your portfolio expands.",
] as const;

export const TRUST_POINTS = [
  {
    title: "Human-supervised AI operations",
    body: "Automation handles the repetitive work, while our team reviews, approves and intervenes where judgement matters.",
    icon: "shield" as const,
  },
  {
    title: "Escalation for complex guest issues",
    body: "Sensitive or unusual situations are routed to people, not left to an automated response.",
    icon: "chat" as const,
  },
  {
    title: "Trusted local service partners",
    body: "Cleaning, inspections and maintenance are delivered by vetted partners who know the local market.",
    icon: "map" as const,
  },
  {
    title: "Structured cleaning and inspection workflows",
    body: "Every turnover follows a defined standard, with quality checks and documented outcomes.",
    icon: "clipboard" as const,
  },
  {
    title: "Transparent owner communication",
    body: "Clear reporting and a direct line to the team managing your portfolio, so you always know where things stand.",
    icon: "chart" as const,
  },
] as const;

export const FAQS = [
  {
    question: "What is Mountain Top?",
    answer:
      "Mountain Top is an AI-powered short-term rental management company that manages bookings, guest communication, revenue optimisation and property operations for investors and property owners.",
  },
  {
    question: "How is Mountain Top different from traditional Airbnb management companies?",
    answer:
      "We combine AI-powered operations with human supervision and local service partners to streamline management, improve efficiency and provide a more scalable operating model.",
  },
  {
    question: "Do I need to manage anything myself?",
    answer:
      "Our objective is to take care of the day-to-day management. We coordinate digital operations and local service partners, while keeping you informed about your properties.",
  },
  {
    question: "Does Mountain Top manage cleaning and maintenance?",
    answer:
      "Yes. We coordinate cleaning, inspections and maintenance through local operational partners.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We are focused on the United Kingdom and Ireland. Contact us to discuss your property's location and operational requirements.",
  },
  {
    question: "How much does Mountain Top charge?",
    answer:
      "Pricing depends on portfolio size, property location, operational requirements and the services required. We provide tailored proposals following an initial portfolio assessment.",
  },
  {
    question: "Can you manage an existing Airbnb portfolio?",
    answer:
      "Yes. We can assess your current setup and discuss transitioning your existing properties into our management operation.",
  },
  {
    question: "Will I retain control of my properties?",
    answer:
      "Yes. You retain ownership and visibility while Mountain Top manages the agreed operational responsibilities.",
  },
] as const;

export const PROPERTY_RANGES = ["1–4", "5–10", "11–25", "26–50", "50+"] as const;

export const PROPERTY_REGIONS = [
  "United Kingdom",
  "Ireland",
  "Both",
  "Other",
] as const;

export const MANAGEMENT_SITUATIONS = [
  "Self-managed",
  "Managed by another company",
  "Currently developing my portfolio",
  "Other",
] as const;

export const INTERESTS = [
  "Full property management",
  "Revenue optimisation",
  "Guest and reservation management",
  "Cleaning and maintenance coordination",
  "Other",
] as const;
