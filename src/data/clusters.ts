import type { CareerCluster } from "./types";

export const CLUSTERS: CareerCluster[] = [
  {
    id: "business-services",
    name: "Business Services",
    tagline: "Keep organizations running",
    description:
      "How a business is organized, staffed, and supported behind the scenes. If you like systems, records, and making sure nothing falls through the cracks, this is your lane.",
    exampleRoles: [
      "Administrative assistant",
      "Office manager",
      "Operations coordinator",
      "Human resources assistant",
    ],
    icon: "briefcase",
  },
  {
    id: "communication-services",
    name: "Communication Services",
    tagline: "Get the message across",
    description:
      "Planning, writing, and delivering messages through media. Built for people who would rather be shaping how information reaches an audience than what happens next.",
    exampleRoles: [
      "Public relations specialist",
      "Content creator",
      "News reporter",
      "Corporate communications manager",
    ],
    icon: "broadcast",
  },
  {
    id: "consumer-services",
    name: "Consumer Services",
    tagline: "Serve the person buying",
    description:
      "Understanding what customers actually want and making sure they get it. Every event here is judged on how well you understand the buyer, not just the product.",
    exampleRoles: [
      "Retail manager",
      "Customer experience specialist",
      "Merchandiser",
      "Event coordinator",
    ],
    icon: "cart",
  },
  {
    id: "entrepreneurship",
    name: "Entrepreneurship",
    tagline: "Build something from scratch",
    description:
      "Turning an idea into an actual business. You invent the product, price it, pitch it, and defend it to judges who act as investors.",
    exampleRoles: [
      "Small business owner",
      "Franchise operator",
      "Freelance designer",
      "Startup founder",
    ],
    icon: "rocket",
  },
  {
    id: "financial-services",
    name: "Financial Services",
    tagline: "Work with money and markets",
    description:
      "Managing money, investments, and financial risk. Strong fit if you are the person in the group who reads the fine print and enjoys a spreadsheet.",
    exampleRoles: [
      "Financial advisor",
      "Accountant",
      "Insurance agent",
      "Investment analyst",
    ],
    icon: "bank",
  },
  {
    id: "hospitality-tourism",
    name: "Hospitality & Tourism",
    tagline: "Make experiences happen",
    description:
      "Hotels, restaurants, events, and travel. You plan the service, staff it, price it, and then have to sell the whole experience to a skeptical judge.",
    exampleRoles: [
      "Hotel manager",
      "Event planner",
      "Restaurant manager",
      "Travel agent",
    ],
    icon: "concierge",
  },
  {
    id: "marketing",
    name: "Marketing",
    tagline: "Sell the product and the idea",
    description:
      "Researching a market, then building a campaign that moves it. The largest DECA cluster and the one with the widest range of event styles.",
    exampleRoles: [
      "Marketing manager",
      "Brand manager",
      "Social media strategist",
      "Sales manager",
    ],
    icon: "megaphone",
  },
];

export const CLUSTER_MAP: Record<string, CareerCluster> = Object.fromEntries(
  CLUSTERS.map((cluster) => [cluster.id, cluster]),
);

export const FORMATS = [
  {
    id: "individual",
    name: "Individual",
    blurb: "You go alone. Research and prep are all on you, and you defend your plan in a 7 minute interview with judges.",
  },
  {
    id: "team",
    name: "Team",
    blurb: "2 to 5 members split one role. The prep is heavy, but you get to divide and conquer with friends.",
  },
  {
    id: "written",
    name: "Written",
    blurb: "Papers judged anonymously by coaches, no interview. The lowest pressure entry point and the best first event.",
  },
  {
    id: "leadership",
    name: "Leadership",
    blurb: "You plan and run a project for your own chapter or the whole state, then present the impact to judges.",
  },
] as const;

export const SKILLS = [
  {
    id: "presenting",
    name: "Talking to strangers",
    blurb: "You are comfortable explaining something out loud to people who just met you.",
  },
  {
    id: "creative",
    name: "Creative and visual",
    blurb: "Design, video, graphics, or concepts that make people look twice.",
  },
  {
    id: "numbers",
    name: "Numbers and analysis",
    blurb: "Budgets, charts, and data points feel satisfying rather than scary.",
  },
  {
    id: "people",
    name: "Working with people",
    blurb: "Reading a room, networking, and keeping teammates and customers happy.",
  },
  {
    id: "writing",
    name: "Writing and research",
    blurb: "Digging for information and turning it into something tight and clear.",
  },
  {
    id: "hands-on",
    name: "Hands-on building",
    blurb: "Physical work, demos, and making something rather than only describing it.",
  },
  {
    id: "organizing",
    name: "Organizing and detail",
    blurb: "Timelines, checklists, and catching the detail nobody else caught.",
  },
  {
    id: "tech",
    name: "Tech and tools",
    blurb: "Spreadsheets, social platforms, and software you actually like using.",
  },
] as const;

export const EXPERIENCE_LEVELS = [
  {
    id: "brand-new",
    name: "Brand new",
    blurb: "This is my first DECA event. I have never competed.",
  },
  {
    id: "some-deca",
    name: "Been here before",
    blurb: "I have competed at a district, state, or chapter event already.",
  },
  {
    id: "experienced",
    name: "Experienced",
    blurb: "I know what a role does and I want a real challenge this season.",
  },
] as const;

export const COMMITMENTS = [
  { id: "light", name: "Light", blurb: "Roughly 2 to 3 hours a week." },
  { id: "moderate", name: "Moderate", blurb: "Roughly 4 to 6 hours a week." },
  { id: "heavy", name: "Heavy", blurb: "7+ hours a week. I want to go deep." },
] as const;