import {
  Workflow,
  Bot,
  Rocket,
  Megaphone,
  ShoppingBag,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  category: string;
  icon: LucideIcon;
  description: string;
  startingPrice: string;
  deliveryTime: string;
  heroFeatures: string[];
  fullScope: { title: string; features: string[] }[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "gohighlevel-setup",
    title: "GoHighLevel & CRM Setup",
    category: "CRM & Automation",
    icon: Workflow,
    description:
      "Professional GoHighLevel workspace built to sell - custom pipeline setup, automated workflows, and conversion elements all done correctly from the first day.",
    startingPrice: "$997",
    deliveryTime: "7-14",
    heroFeatures: [
      "Custom Pipeline & Stages",
      "Automated SMS/Email Follow-ups",
      "Calendar & Booking Integration",
      "Client Onboarding Workflows",
      "Full handover with training",
    ],
    fullScope: [
      {
        title: "Workspace & Branding",
        features: [
          "Custom domain setup",
          "White-label branding",
          "User roles & permissions",
          "Twilio & Mailgun integration",
        ],
      },
      {
        title: "Pipelines & Automations",
        features: [
          "Sales pipeline creation",
          "Lead capture workflows",
          "Missed call text-back",
          "Appointment reminders",
        ],
      },
      {
        title: "Templates & Funnels",
        features: [
          "High-converting funnel import",
          "Email template design",
          "SMS template library",
          "Form & survey creation",
        ],
      },
      {
        title: "Training & Handover",
        features: [
          "1-on-1 team training",
          "Custom SOP documentation",
          "30 days post-launch support",
          "Strategy consultation",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Requirements",
        desc: "Audit of current systems, target market, and workflow requirements confirmed.",
      },
      {
        step: "02",
        title: "Architecture & Strategy",
        desc: "Mapping out pipelines, tags, custom fields, and automation logic.",
      },
      {
        step: "03",
        title: "Build & Integration",
        desc: "Configuring the workspace, connecting domains, and building workflows.",
      },
      {
        step: "04",
        title: "Testing & QA",
        desc: "Rigorous testing of all forms, funnels, and automated sequences.",
      },
      {
        step: "05",
        title: "Launch & Training",
        desc: "System goes live. 60-minute team training session on managing the CRM.",
      },
    ],
    faqs: [
      {
        q: "Do I need a GoHighLevel subscription?",
        a: "Yes, you will need your own GoHighLevel account. We can help you set it up if you don't have one.",
      },
      {
        q: "Can you migrate my data from another CRM?",
        a: "Yes, we handle data migration from ActiveCampaign, HubSpot, Pipedrive, and others.",
      },
      {
        q: "Do you provide ongoing support?",
        a: "We include 30 days of post-launch support. Ongoing maintenance packages are available.",
      },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI Automation & Chatbots",
    category: "AI Solutions",
    icon: Bot,
    description:
      "Intelligent conversational agents that engage prospects 24/7, qualify leads, and book appointments directly to your calendar without human intervention.",
    startingPrice: "$1,497",
    deliveryTime: "10-21",
    heroFeatures: [
      "Custom AI Knowledge Base",
      "Website & Social Integration",
      "Lead Qualification Logic",
      "Direct Calendar Booking",
      "Human Handoff Protocols",
    ],
    fullScope: [
      {
        title: "Bot Architecture",
        features: [
          "Custom prompt engineering",
          "Brand voice alignment",
          "Fallback protocols",
          "Multi-language support",
        ],
      },
      {
        title: "Knowledge Base",
        features: [
          "Website scraping",
          "PDF/Document ingestion",
          "FAQ mapping",
          "Dynamic response generation",
        ],
      },
      {
        title: "Integrations",
        features: [
          "Website widget setup",
          "Instagram/FB Messenger",
          "WhatsApp Business API",
          "CRM lead syncing",
        ],
      },
      {
        title: "Optimization",
        features: [
          "Conversation analytics",
          "Drop-off tracking",
          "Response tuning",
          "A/B testing flows",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Use Case Definition",
        desc: "Identifying the core goal (support, lead gen, booking) and target platforms.",
      },
      {
        step: "02",
        title: "Knowledge Training",
        desc: "Feeding the AI with your company data, FAQs, and brand guidelines.",
      },
      {
        step: "03",
        title: "Flow Design",
        desc: "Mapping conversational paths, qualification questions, and human handoff triggers.",
      },
      {
        step: "04",
        title: "Beta Testing",
        desc: "Internal testing to refine responses and ensure accurate information delivery.",
      },
      {
        step: "05",
        title: "Deployment",
        desc: "Going live on your website and social channels with real-time monitoring.",
      },
    ],
    faqs: [
      {
        q: "What AI models do you use?",
        a: "We primarily build on OpenAI's GPT-4 and Anthropic's Claude, depending on the specific use case and required response speed.",
      },
      {
        q: "Will the bot sound like a robot?",
        a: "No, we heavily prompt the AI to match your specific brand voice, tone, and personality.",
      },
      {
        q: "Can it actually book meetings?",
        a: "Yes, we integrate directly with Calendly, GoHighLevel, or other scheduling tools to book appointments natively in the chat.",
      },
    ],
  },
  {
    slug: "funnels-landing-pages",
    title: "Funnels & Landing Pages",
    category: "Conversion Design",
    icon: Rocket,
    description:
      "Strategically designed sales funnels and opt-in pages optimized for maximum conversion rates. We build pages that turn clicks into clients.",
    startingPrice: "$799",
    deliveryTime: "5-10",
    heroFeatures: [
      "High-Converting Copywriting",
      "Custom Brand Design",
      "Mobile-First Optimization",
      "Fast Loading Speeds",
      "A/B Testing Setup",
    ],
    fullScope: [
      {
        title: "Strategy & Copy",
        features: [
          "Offer positioning",
          "Direct response copywriting",
          "Headline optimization",
          "Trust-building elements",
        ],
      },
      {
        title: "Design & Build",
        features: [
          "Custom UI/UX design",
          "Mobile responsiveness",
          "Custom graphics/icons",
          "Platform setup (GHL, ClickFunnels)",
        ],
      },
      {
        title: "Tracking & Tech",
        features: [
          "Facebook Pixel setup",
          "Google Analytics integration",
          "Conversion tracking",
          "Domain connection",
        ],
      },
      {
        title: "Optimization",
        features: [
          "Speed optimization",
          "SEO fundamentals",
          "A/B test configuration",
          "Heatmap setup",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Offer Breakdown",
        desc: "Analyzing your offer, target audience, and primary conversion goal.",
      },
      {
        step: "02",
        title: "Wireframing & Copy",
        desc: "Drafting the page structure and writing persuasive direct-response copy.",
      },
      {
        step: "03",
        title: "Visual Design",
        desc: "Bringing the wireframe to life with your brand colors, typography, and imagery.",
      },
      {
        step: "04",
        title: "Development",
        desc: "Building the functional page in your chosen platform and ensuring mobile perfection.",
      },
      {
        step: "05",
        title: "Launch & Track",
        desc: "Connecting domains, verifying tracking pixels, and pushing live.",
      },
    ],
    faqs: [
      {
        q: "Do you write the copy?",
        a: "Yes, direct response copywriting is included. We just need details about your offer and audience.",
      },
      {
        q: "What platforms do you build on?",
        a: "We specialize in GoHighLevel, WordPress, ClickFunnels, and custom React/Next.js builds.",
      },
      {
        q: "Do you guarantee conversion rates?",
        a: "While we use proven frameworks that typically convert well above industry averages, specific rates depend heavily on your traffic quality and offer.",
      },
    ],
  },
  {
    slug: "facebook-ads",
    title: "Facebook Ads & Lead Gen",
    category: "Paid Advertising",
    icon: Megaphone,
    description:
      "End-to-end ad campaigns and predictable client acquisition systems to generate qualified appointments on autopilot.",
    startingPrice: "$1,500/mo",
    deliveryTime: "7",
    heroFeatures: [
      "Campaign Strategy & Setup",
      "Ad Creative & Copywriting",
      "Advanced Audience Targeting",
      "Pixel & Conversion Tracking",
      "Weekly Performance Reports",
    ],
    fullScope: [
      {
        title: "Campaign Strategy",
        features: [
          "Competitor analysis",
          "Offer formulation",
          "Budget allocation",
          "Funnel mapping",
        ],
      },
      {
        title: "Creative Development",
        features: [
          "Image/Video ad creation",
          "Direct response ad copy",
          "Multiple variations for testing",
          "Thumb-stopping hooks",
        ],
      },
      {
        title: "Technical Setup",
        features: [
          "Business Manager audit",
          "Meta Pixel installation",
          "Conversions API (CAPI) setup",
          "Custom audience creation",
        ],
      },
      {
        title: "Management",
        features: [
          "Daily monitoring",
          "Bid optimization",
          "A/B testing creatives",
          "Scaling winning ads",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Onboarding & Audit",
        desc: "Reviewing past account performance and gaining necessary access.",
      },
      {
        step: "02",
        title: "Strategy & Creative",
        desc: "Developing the campaign angle and producing the ad assets.",
      },
      {
        step: "03",
        title: "Tracking Verification",
        desc: "Ensuring the Pixel and Conversions API are firing correctly.",
      },
      {
        step: "04",
        title: "Campaign Launch",
        desc: "Setting campaigns live in a testing phase to gather initial data.",
      },
      {
        step: "05",
        title: "Optimize & Scale",
        desc: "Killing losing ads, iterating on winners, and increasing budget profitably.",
      },
    ],
    faqs: [
      {
        q: "Does the price include ad spend?",
        a: "No, the starting price is our management fee. Ad spend is billed directly to your card by Meta.",
      },
      {
        q: "What is the minimum recommended ad spend?",
        a: "We recommend a minimum of $1,500 - $3,000/month in ad spend to gather enough data for optimization.",
      },
      {
        q: "Do you guarantee leads?",
        a: "We guarantee the implementation of a proven system, but cannot guarantee specific lead costs as they vary by industry and offer.",
      },
    ],
  },
  {
    slug: "shopify-wordpress",
    title: "Shopify & WordPress Development",
    category: "Web Development",
    icon: ShoppingBag,
    description:
      "Professional e-commerce stores and custom websites. Fast, SEO-ready, and fully manageable platforms built for scale.",
    startingPrice: "$1,997",
    deliveryTime: "14-30",
    heroFeatures: [
      "Premium Theme Customization",
      "Mobile-Optimized Design",
      "SEO-Ready Architecture",
      "Speed Optimization",
      "Payment Gateway Setup",
    ],
    fullScope: [
      {
        title: "Design & Layout",
        features: [
          "Custom homepage design",
          "Product/Service page layouts",
          "Responsive mobile design",
          "Brand color integration",
        ],
      },
      {
        title: "E-commerce/Functionality",
        features: [
          "Product uploads",
          "Cart & Checkout optimization",
          "Shipping rules",
          "Tax configuration",
        ],
      },
      {
        title: "Performance",
        features: [
          "Image compression",
          "Code minification",
          "Caching setup",
          "Core Web Vitals optimization",
        ],
      },
      {
        title: "Marketing & SEO",
        features: [
          "On-page SEO fundamentals",
          "Email capture popups",
          "Abandoned cart setup",
          "Analytics integration",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        desc: "Understanding your brand, product catalog, and required functionalities.",
      },
      {
        step: "02",
        title: "Design Phase",
        desc: "Creating mockups for the homepage and key internal pages.",
      },
      {
        step: "03",
        title: "Development",
        desc: "Building the site, installing necessary plugins/apps, and configuring settings.",
      },
      {
        step: "04",
        title: "Content & Products",
        desc: "Uploading your content, products, and setting up collections.",
      },
      {
        step: "05",
        title: "Testing & Launch",
        desc: "Testing purchases, forms, and speed before pointing the domain.",
      },
    ],
    faqs: [
      {
        q: "Which platform is better for me?",
        a: "If you are primarily selling physical products, Shopify is usually best. For service businesses or complex content sites, WordPress is preferred.",
      },
      {
        q: "Will I be able to edit the site myself?",
        a: "Yes, we build using user-friendly builders or native editors and provide training on how to make updates.",
      },
      {
        q: "Do you provide hosting?",
        a: "Shopify includes hosting. For WordPress, we can recommend premium hosts or set it up on your preferred provider.",
      },
    ],
  },
  {
    slug: "project-management",
    title: "Project Management & SOPs",
    category: "Operations",
    icon: ClipboardList,
    description:
      "Streamlining your agency's delivery process, managing remote teams, and creating clear SOPs to ensure consistent results.",
    startingPrice: "$1,200",
    deliveryTime: "14",
    heroFeatures: [
      "Task Management Setup (ClickUp/Asana)",
      "Standard Operating Procedures (SOPs)",
      "Team Onboarding Systems",
      "Delivery Optimization",
      "Automated Status Updates",
    ],
    fullScope: [
      {
        title: "Workspace Setup",
        features: [
          "ClickUp/Asana architecture",
          "Custom statuses & fields",
          "Dashboard creation",
          "Client portals",
        ],
      },
      {
        title: "SOP Creation",
        features: [
          "Process mapping",
          "Step-by-step documentation",
          "Video walkthroughs",
          "Template creation",
        ],
      },
      {
        title: "Automation",
        features: [
          "Task dependencies",
          "Automated assignments",
          "Client update emails",
          "Slack/Discord integration",
        ],
      },
      {
        title: "Team Alignment",
        features: [
          "Role definition",
          "KPI tracking setup",
          "Onboarding flows",
          "Communication guidelines",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Process Audit",
        desc: "Interviewing your team to understand current bottlenecks and workflows.",
      },
      {
        step: "02",
        title: "Architecture Design",
        desc: "Designing the ideal hierarchy in your project management tool.",
      },
      {
        step: "03",
        title: "Documentation",
        desc: "Extracting knowledge from founders and documenting it into actionable SOPs.",
      },
      {
        step: "04",
        title: "System Build",
        desc: "Configuring the software, templates, and automations.",
      },
      {
        step: "05",
        title: "Rollout",
        desc: "Training the team on the new system and enforcing adoption.",
      },
    ],
    faqs: [
      {
        q: "What tools do you work with?",
        a: "We primarily build in ClickUp, Asana, Monday.com, and Notion.",
      },
      {
        q: "Can you manage our team ongoing?",
        a: "Yes, we offer Fractional Project Management services on a monthly retainer.",
      },
      {
        q: "How do you create SOPs if you don't know our business?",
        a: "We conduct structured interviews and screen-recording sessions with your experts to extract the process, then we format and document it professionally.",
      },
    ],
  },
];

export const serviceCards = services.map(({ slug, title, icon, description }) => ({
  slug,
  title,
  icon,
  description,
}));
