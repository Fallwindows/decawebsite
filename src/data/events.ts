import type { DecaEvent } from "./types";

export const EVENTS: DecaEvent[] = [
  {
    id: "business-services-cde",
    name: "Business Services",
    cluster: "business-services",
    format: "individual",
    summary:
      "Role play a manager solving a workplace problem, then defend your choices in a formal interview.",
    whatYouDo:
      "You get a scenario with a real office headache, act as the manager, work through the problem, and then explain your decisions to a panel of judges.",
    skills: ["presenting", "people", "organizing", "writing"],
    level: "brand-new",
    commitment: "light",
    prepTip:
      "Focus on communication skills and professional appearance. This event rewards polish over deep business knowledge.",
  },
  {
    id: "consultant-cde",
    name: "Consultant",
    cluster: "business-services",
    format: "individual",
    summary:
      "Act as an outside consultant diagnosing a struggling business and pitching a fix.",
    whatYouDo:
      "You interview a client who has a problem, research the industry, build a recommendation, and present it to judges who will push back on your plan.",
    skills: ["presenting", "people", "writing", "numbers"],
    level: "some-deca",
    commitment: "moderate",
    prepTip:
      "Practice thinking out loud. Interviewing the client is the hardest part and the judges weigh it heavily.",
  },
  {
    id: "chamber-of-commerce",
    name: "Chamber of Commerce",
    cluster: "business-services",
    format: "team",
    summary:
      "Serve as a chamber supporting local business owners, then present your plan to community leaders.",
    whatYouDo:
      "Your team acts as a local chamber of commerce, developing initiatives that help small businesses in your area thrive.",
    skills: ["people", "writing", "organizing", "presenting"],
    level: "some-deca",
    commitment: "moderate",
    prepTip:
      "Interview three or four local business owners before conference. Specific local detail is what separates a top score.",
  },
  {
    id: "international-business",
    name: "International Business",
    cluster: "business-services",
    format: "written",
    summary:
      "Write about expanding a real U.S. business into a foreign market, using that country's actual trade rules.",
    whatYouDo:
      "You research a target country, choose a real company, and write a paper on how it should enter that market legally and profitably.",
    skills: ["writing", "numbers", "organizing"],
    level: "brand-new",
    commitment: "light",
    prepTip:
      "Pick a country with a straightforward customs process. Judge feedback is written, so you can learn a lot from one paper.",
  },
  {
    id: "communication-services-cde",
    name: "Communication Services",
    cluster: "communication-services",
    format: "individual",
    summary:
      "Deliver a professional communication to a workplace audience and defend your strategy.",
    whatYouDo:
      "You build a real message for a real audience, present it, then explain to judges how you chose every word, channel, and medium.",
    skills: ["presenting", "writing", "creative", "people"],
    level: "brand-new",
    commitment: "light",
    prepTip:
      "The interview is half the score. Practice explaining your reasoning out loud, not just delivering the message.",
  },
  {
    id: "communication-strategies",
    name: "Communication Strategies for Professional Employee",
    cluster: "communication-services",
    format: "written",
    summary:
      "Write about the internal communication problem facing a professional employee in a specific industry.",
    whatYouDo:
      "You choose an industry, pick a communication breakdown within it, and write a paper proposing a full communication strategy.",
    skills: ["writing", "organizing", "people"],
    level: "brand-new",
    commitment: "light",
    prepTip:
      "This is the lowest pressure competitive entry point. Great first event if you have not competed at all.",
  },
  {
    id: "online-community",
    name: "Online Community",
    cluster: "communication-services",
    format: "team",
    summary:
      "Design and manage a social media presence for an organization across a full competitive season.",
    whatYouDo:
      "Your team runs a simulated online community, creating a platform, content calendar, and engagement plan, then reporting the results.",
    skills: ["tech", "creative", "organizing", "writing"],
    level: "some-deca",
    commitment: "heavy",
    prepTip:
      "Build a real sample calendar with real content. Judges reward accounts that look alive, not empty shells.",
  },
  {
    id: "apparel-and-fashion",
    name: "Apparel & Fashion",
    cluster: "consumer-services",
    format: "individual",
    summary:
      "Present a complete fashion look and defend your cost, coordination, and consumer reasoning.",
    whatYouDo:
      "You build a total look for a real scenario, price it out, and explain the choices to judges who ask about trends and value.",
    skills: ["creative", "numbers", "presenting", "organizing"],
    level: "brand-new",
    commitment: "moderate",
    prepTip:
      "Know current trends and be able to justify every dollar in your budget. Budget accuracy is scored separately.",
  },
  {
    id: "hospitality-digital-strategies",
    name: "Hospitality & Tourism Digital Strategies",
    cluster: "consumer-services",
    format: "individual",
    summary:
      "Plan how a hospitality business uses social and digital channels to reach and convert guests.",
    whatYouDo:
      "You analyze a hospitality business, then write and present a digital marketing strategy with measurable goals.",
    skills: ["tech", "creative", "writing", "presenting"],
    level: "some-deca",
    commitment: "moderate",
    prepTip:
      "Bring real screenshots of competitor accounts. Live platform examples carry more weight than theory.",
  },
  {
    id: "entrepreneurship-plan",
    name: "Entrepreneurship Plan",
    cluster: "entrepreneurship",
    format: "written",
    summary:
      "Write a full business plan for a company you actually want to start.",
    whatYouDo:
      "You develop your own business concept, including product, market research, pricing, marketing, and financial projections.",
    skills: ["writing", "numbers", "organizing", "creative"],
    level: "brand-new",
    commitment: "moderate",
    prepTip:
      "Build it around something you genuinely care about. Judges can tell the difference between a business you understand and one you researched overnight.",
  },
  {
    id: "virtual-business-challenge",
    name: "Virtual Business Challenge",
    cluster: "entrepreneurship",
    format: "team",
    summary:
      "Run a simulated online business end to end and report on what worked.",
    whatYouDo:
      "Your team operates a digital business from product development through pricing, promotion, and performance analysis.",
    skills: ["tech", "numbers", "creative", "organizing"],
    level: "some-deca",
    commitment: "moderate",
    prepTip:
      "Pick a product you can price from real market data. The financial summary is scored and vague numbers lose points.",
  },
  {
    id: "money-management",
    name: "Money Management",
    cluster: "financial-services",
    format: "individual",
    summary:
      "Build and defend a real budget for a specific scenario, then interview about your financial decisions.",
    whatYouDo:
      "You receive a financial profile and a life event, construct a budget and investment plan, and defend it to judges.",
    skills: ["numbers", "presenting", "writing", "organizing"],
    level: "brand-new",
    commitment: "light",
    prepTip:
      "Learn the interviewer's actual rubrics. Money Management rewards clean structure and defensible reasoning over complex investments.",
  },
  {
    id: "personal-finance",
    name: "Personal Finance",
    cluster: "financial-services",
    format: "individual",
    summary:
      "Get a client financial scenario and build an investment portfolio, then defend it in an interview.",
    whatYouDo:
      "You are handed a client's income, debts, and goals, then construct an investment strategy and explain it to judges.",
    skills: ["numbers", "presenting", "writing"],
    level: "some-deca",
    commitment: "moderate",
    prepTip:
      "Diversification and risk tolerance are the core concepts. Be ready to justify why you rejected the alternatives.",
  },
  {
    id: "financial-services-strategies",
    name: "Financial Services Strategies",
    cluster: "financial-services",
    format: "written",
    summary:
      "Write about a financial risk facing a real company and recommend how to protect itself.",
    whatYouDo:
      "You choose a company facing a financial challenge, analyze it, and write a paper recommending a specific strategy.",
    skills: ["writing", "numbers", "organizing"],
    level: "brand-new",
    commitment: "light",
    prepTip:
      "Use real financial statements, which are public. Judges reward papers grounded in actual company data.",
  },
  {
    id: "hospitality-and-tourism-cde",
    name: "Hospitality & Tourism",
    cluster: "hospitality-tourism",
    format: "individual",
    summary:
      "Take a hospitality management role, work through a guest service scenario, then interview about it.",
    whatYouDo:
      "You act as a hospitality manager resolving a guest complaint or service failure, then explain your service recovery plan.",
    skills: ["people", "presenting", "organizing"],
    level: "brand-new",
    commitment: "light",
    prepTip:
      "Practice guest recovery language. Staying calm and courteous under a difficult scenario is the scored behavior.",
  },
  {
    id: "hospitality-team",
    name: "Hospitality Team",
    cluster: "hospitality-tourism",
    format: "team",
    summary:
      "Operate a hospitality business simulation with a real budget and service standards.",
    whatYouDo:
      "Your team runs a hotel or restaurant scenario, managing service quality, staffing, and the budget simultaneously.",
    skills: ["people", "organizing", "numbers", "hands-on"],
    level: "some-deca",
    commitment: "heavy",
    prepTip:
      "Split roles early and rehearse handoffs. Team events are usually lost in coordination, not content.",
  },
  {
    id: "sports-and-entertainment",
    name: "Sports & Entertainment",
    cluster: "hospitality-tourism",
    format: "team",
    summary:
      "Plan and manage a live event or sports season from ticket sales through event day.",
    whatYouDo:
      "Your team takes over a sports or entertainment property and manages sales, marketing, sponsorships, and event operations.",
    skills: ["people", "numbers", "organizing", "hands-on"],
    level: "experienced",
    commitment: "heavy",
    prepTip:
      "Bring a real budget that balances revenue and cost. This is one of the hardest events in the catalog.",
  },
  {
    id: "marketing-cde",
    name: "Marketing",
    cluster: "marketing",
    format: "individual",
    summary:
      "Build a full marketing campaign for a product and defend it to a panel of judges.",
    whatYouDo:
      "You research a target market, create a complete campaign across multiple channels, and present it in a formal interview.",
    skills: ["presenting", "creative", "writing", "numbers"],
    level: "brand-new",
    commitment: "moderate",
    prepTip:
      "The most popular event in DECA, so the bar is high. A clear, specific target market beats a clever but vague concept.",
  },
  {
    id: "sales-cde",
    name: "Sales",
    cluster: "marketing",
    format: "individual",
    summary:
      "Run a real product demonstration and knowledge check, then close the sale to a judge.",
    whatYouDo:
      "You are tested on product knowledge, demonstrate the product, and must actually persuade a judge to buy it.",
    skills: ["presenting", "people", "hands-on", "organizing"],
    level: "brand-new",
    commitment: "light",
    prepTip:
      "Learn the product inside out. The knowledge portion is pass fail, and you cannot improvise your way past it.",
  },
  {
    id: "creative-marketing",
    name: "Creative Marketing",
    cluster: "marketing",
    format: "team",
    summary:
      "Receive a live marketing brief at the conference and execute it on the spot.",
    whatYouDo:
      "Judges hand your team a prompt with an audience, budget, and deadline, and you build the campaign during the event itself.",
    skills: ["creative", "presenting", "tech", "organizing"],
    level: "experienced",
    commitment: "moderate",
    prepTip:
      "You cannot prepare the brief, so rehearse the process. Teams that bring templates and clear role splits handle the surprise far better.",
  },
  {
    id: "marketing-team",
    name: "Marketing Team",
    cluster: "marketing",
    format: "team",
    summary:
      "Create a complete marketing plan for a specific industry and defend it as a consulting team.",
    whatYouDo:
      "Your team researches a sector, develops a full marketing strategy, and presents it as outside consultants to judges.",
    skills: ["presenting", "creative", "numbers", "writing"],
    level: "some-deca",
    commitment: "moderate",
    prepTip:
      "Agree on your story arc before you start researching. Judges notice when five different ideas are presented in a row.",
  },
  {
    id: "advertising-campaign",
    name: "Advertising Campaign",
    cluster: "marketing",
    format: "individual",
    summary:
      "Design a full advertising campaign with a clear audience, message, and set of deliverables.",
    whatYouDo:
      "You build a campaign from research through finished assets, then present the thinking behind every creative choice.",
    skills: ["creative", "presenting", "tech", "writing"],
    level: "some-deca",
    commitment: "moderate",
    prepTip:
      "Bring polished visual assets. The quality of what you show is part of the score, not just decoration.",
  },
  {
    id: "advanced-strategic-marketing",
    name: "Advanced Strategic Marketing",
    cluster: "marketing",
    format: "written",
    summary:
      "Write a deep marketing strategy paper on a niche problem for advanced competitors.",
    whatYouDo:
      "You tackle a narrow strategic marketing problem and produce a long researched paper defending a specific recommendation.",
    skills: ["writing", "numbers", "organizing"],
    level: "experienced",
    commitment: "heavy",
    prepTip:
      "Intended for members who have already qualified in another marketing event. Approach it like a real strategy paper.",
  },
  {
    id: "marketing-strategies",
    name: "Marketing Strategies",
    cluster: "marketing",
    format: "written",
    summary:
      "Write about the marketing challenge facing a specific industry, backed by research.",
    whatYouDo:
      "You pick an industry, analyze its current marketing landscape, and write a paper proposing a realistic strategy.",
    skills: ["writing", "creative", "numbers"],
    level: "brand-new",
    commitment: "light",
    prepTip:
      "One of the most approachable written events. Judge feedback is detailed, which makes it a great learning year.",
  },
  {
    id: "knowledge-skills",
    name: "Knowledge Skills",
    cluster: "business-services",
    format: "team",
    summary:
      "A fast buzzer round on business and industry knowledge, purely on speed and recall.",
    whatYouDo:
      "Your team competes in individual and team rounds of rapid fire questions covering business topics.",
    skills: ["people", "writing"],
    level: "some-deca",
    commitment: "light",
    prepTip:
      "Study with your teammates. This event is decided by shared preparation and team chemistry more than individual talent.",
  },
  {
    id: "career-development",
    name: "Career Development",
    cluster: "business-services",
    format: "individual",
    summary:
      "Interview for a specific job posting and pitch yourself as the candidate in a formal interview.",
    whatYouDo:
      "You research a real career path, then interview and present your plan to become qualified for that exact job.",
    skills: ["presenting", "writing", "people", "organizing"],
    level: "brand-new",
    commitment: "light",
    prepTip:
      "Apply the strategy to your own real career goal. Judges spot insincere career plans immediately.",
  },
  {
    id: "professionalism",
    name: "Professionalism",
    cluster: "business-services",
    format: "individual",
    summary:
      "Work through workplace etiquette and professional image scenarios and defend your choices.",
    whatYouDo:
      "You respond to realistic professional situations, then interview with judges about workplace behavior.",
    skills: ["people", "presenting", "organizing"],
    level: "brand-new",
    commitment: "light",
    prepTip:
      "A great first event. Preparation is simple and the interview is the scored portion, so practice speaking clearly.",
  },
  {
    id: "leadership-development",
    name: "Leadership Development Event",
    cluster: "entrepreneurship",
    format: "leadership",
    summary:
      "Plan a project that creates measurable impact for your chapter, district, or state.",
    whatYouDo:
      "You identify a problem in your chapter or community, build and run a project to address it, and report the results.",
    skills: ["organizing", "people", "presenting", "writing"],
    level: "some-deca",
    commitment: "heavy",
    prepTip:
      "The only event where your impact keeps going after conference. Choose something you can actually finish.",
  },
];

export const EVENT_MAP: Record<string, DecaEvent> = Object.fromEntries(
  EVENTS.map((event) => [event.id, event]),
);