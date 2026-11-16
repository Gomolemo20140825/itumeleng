export const PROFILE = {
  name: "Itumeleng D. Kgongwane",
  short: "Itumeleng Kgongwane",
  credentials: ["MS Finance", "MBA", "PGDip", "BSc Chem Eng"],
  role: "Lead Engineer, Sappi R&D",
  location: "Pretoria, South Africa",
  email: "kgongwane@icloud.com",
  phone: "+27 82 973 0324",
  phoneHref: "tel:+27829730324",
  linkedin: "https://www.linkedin.com/in/itumelengidk/",
  intro:
    "Chemical engineer and finance strategist. For two decades I've turned process breakthroughs into EBITDA, NPV and market share.",
  statement: "A lead engineer who speaks the language of the balance sheet.",
  bio: [
    "I'm Itumeleng D. Kgongwane, a Lead Engineer at Sappi R&D with an MS Finance (Fordham) and an MBA (GIBS).",
    "I manage a team of scientists across manufacturing, process and product innovation, and apply AI and machine learning to lift efficiency, cut quality defects and reduce fixed costs. My edge is the handover most organisations get wrong: taking a product from the lab to the mill floor, then into a business case the board can fund.",
  ],
  memberships: [
    "Institute of Directors SA, Member",
    "Sappi Global Sustainability Task Force",
  ],
};

export const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Who's This" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Hit Me Up" },
];

export const LEDGER = [
  {
    value: "R87M",
    label:
      "EBITDA in the first two years after launching sustainable packaging grades",
  },
  {
    value: "R203M",
    label: "15-year NPV from scaling microfibrillated cellulose at Stanger Mill",
  },
  {
    value: "3.94",
    label: "GPA, MS Finance, Summa Cum Laude, Fordham Gabelli",
  },
];

export const AWARDS = [
  {
    year: "2024",
    title: "General Manager's Award",
    note: "Stage-gate (Accolade) financial metrics roll-out",
  },
  {
    year: "2022",
    title: "Sappi Global Gold Technical Innovation Award",
    note: "Graz, Austria, 9 May 2022",
  },
  {
    year: "2021",
    title: "Sappi Annual Value Award",
    note: "Project execution with speed during COVID-19",
  },
  {
    year: "2013",
    title: "Global Catalyst Compass Award nominee",
    note: "BASF inventory optimisation project",
  },
];

export const ADVISORY_AREAS = [
  {
    title: "Technical due diligence",
    body: "Independent assessment of process and materials assets before capital is committed.",
  },
  {
    title: "R&D commercialisation",
    body: "Business cases and pricing models that take a product from the lab to a funded launch.",
  },
  {
    title: "Process, energy and cost optimisation",
    body: "Finding the water, steam, energy and raw-material savings hiding in a running plant.",
  },
  {
    title: "Sustainability strategy",
    body: "ESG frameworks that turn compliance requirements into market opportunity.",
  },
  {
    title: "Equity and market analysis",
    body: "Analysis of industrials by someone who has run the processes behind the numbers.",
  },
];

export type TimelineEntry = {
  period: string;
  title: string;
  org: string;
  summary: string;
  metrics: string[];
  details: string[];
};

export const MARGIN_TRACK: TimelineEntry[] = [
  {
    period: "Aug 2026",
    title: "MS Finance, Summa Cum Laude",
    org: "Fordham Gabelli School of Business, New York",
    summary:
      "GPA 3.94. Corporate finance and investment applications, fund strategies and performance, fintech, global finance.",
    metrics: ["GPA 3.94", "Summa Cum Laude"],
    details: [
      "Upskilled straight into agentic AI to automate finance and strategy workflows",
      "Built an automated market-intelligence workflow: three daily briefs from the FT, Bloomberg and WSJ (overnight, US pre-open, US post-open)",
    ],
  },
  {
    period: "Dec 2025",
    title: "MBA",
    org: "Gordon Institute of Business Science (GIBS), Sandton",
    summary:
      "Distinctions in Decision Making, Entrepreneurial Finance and Financial Modelling.",
    metrics: ["3 Distinctions"],
    details: [
      "Electives: strategy execution with the balanced scorecard, AI-driven leadership, sales and business development, negotiation",
    ],
  },
  {
    period: "2024 to 2025",
    title: "Business Development: MFC Corrugator Adhesive",
    org: "Sappi R&D",
    summary:
      "Applied MBA strategy and finance tools from opportunity identification to customer trials, sizing TAM/SAM/SOM and building the pricing model.",
    metrics: ["−60% variability", "+141% bond strength"],
    details: [
      "Business Model Canvas used to win executive buy-in",
      "Business case and pricing model built from customer research, literature and competitor data",
      "Trials delivered a 10 m/min machine-speed increase on heavier boards",
    ],
  },
  {
    period: "Nov 2024",
    title: "PGDip and General Manager's Award",
    org: "GIBS and Sappi",
    summary:
      "Distinctions in Financial & Management Accounting, Corporate Finance and Macroeconomics. Awarded for supporting the Accolade stage-gate roll-out.",
    metrics: ["3 Distinctions", "GM's Award"],
    details: [
      "Helped teams set, quantify and interpret financial metrics across project categories",
      "Applied business project on SDG 13, Target 13.3.1",
    ],
  },
  {
    period: "2023 to present",
    title: "Sappi Global Sustainability Task Force",
    org: "Group strategy, with the Director & Head of Sustainability",
    summary:
      "Built the sustainability criteria framework for Sappi Southern Africa's full portfolio using EN 13432, turning compliance into market opportunity.",
    metrics: ["2030 targets", "USA, EU, RSA"],
    details: [
      "Portfolio scope: pulp, containerboard, kraft bag, graphic paper, tissue, cellulose and lignin",
      "Standardised sustainability scoring of new and existing products for the Sappi Sustainability Report",
    ],
  },
];

export const MOLECULE_TRACK: TimelineEntry[] = [
  {
    period: "Jan 2023 to present",
    title: "Lead Engineer",
    org: "Sappi R&D, Pretoria",
    summary:
      "Leads a team of scientists. Scaled microfibrillated cellulose (MFC) at Stanger Mill with Sappi Europe R&D (Netherlands).",
    metrics: ["R24M EBITDA p.a.", "R203M NPV"],
    details: [
      "Established the energy input for superior MFC performance from South African pulps",
      "Bagasse-derived MFC offset raw material at ~R1,000/t while maintaining quality",
      "Direct report nominated for the 2024 South African TIA for the implementation",
    ],
  },
  {
    period: "Mar 2017 to Dec 2022",
    title: "Senior Engineer",
    org: "Sappi R&D, Pretoria",
    summary:
      "Spearheaded sustainable packaging grades to offset the digitisation-driven decline of graphic paper. Launched September 2020.",
    metrics: ["R36M → R51M EBITDA", "Global Gold TIA"],
    details: [
      "Market share from zero to 16% in year one; now 25–30%",
      "Annual Value Award (Nov 2021) for speed of execution during COVID-19",
      "Won the South African and then the global TIA against Sappi Europe and North America",
    ],
  },
  {
    period: "Jul 2013 to Feb 2017",
    title: "Process Engineer",
    org: "Sappi Enstra, Springs",
    summary:
      "Acted as both production and technical manager. Built a quasi-dynamic dashboard tracking water, steam and energy daily.",
    metrics: ["R20M saved", "15 → 9 ML/day water"],
    details: [
      "Filler-increase chemistry offset expensive imported fibre carrying exchange-rate risk",
      "Coordinated chemical trials through management of change",
    ],
  },
  {
    period: "Jan 2011 to Jun 2013",
    title: "Process Project Engineer",
    org: "BASF Environmental Catalyst & Metal Solutions, Port Elizabeth",
    summary:
      "Virtual cross-cultural project with BASF Germany's SAP team and Dimension Data to unlock optimal use of PGM recycle inventory.",
    metrics: ["−45% recycle inventory"],
    details: [
      "Wrote pseudo-algorithms translated into SAP and Oracle logic",
      "Nominated for the Global Catalyst Compass Award",
    ],
  },
  {
    period: "Jan 2009 to Dec 2010",
    title: "Junior Process Engineer",
    org: "BASF, Port Elizabeth",
    summary:
      "Re-engineered a 'two-tank process' that eliminated back-pressure defects on asymmetric soot-filter technology.",
    metrics: ["+27% throughput", "Production record"],
    details: [
      "Used the 5Ms to resolve a 25% defect rate",
      "Coordinated technology transfer with the German R&D centre",
    ],
  },
  {
    period: "2005 to 2007",
    title: "BSc Chemical Engineering, then Metallurgist",
    org: "Wits University and Anglo Coal, Bank Colliery",
    summary:
      "Graduated in chemical engineering and learnt the unit operations of a thermal coal processing plant.",
    metrics: ["BSc Chem Eng"],
    details: [
      "Project Management, Wits Plus (2008)",
      "Intermediate Leadership Program, NMMU (2013)",
    ],
  },
];

export const CASES = [
  {
    id: "sustainable-packaging",
    sector: "Packaging, Sappi R&D",
    years: "2017 to 2022",
    title: "Sustainable packaging grades",
    problem:
      "Digitisation was eroding graphic-paper demand. A new, higher-margin packaging grade had to be developed and launched across sales, marketing, technical and production, during COVID-19.",
    outcome:
      "Market share from zero to 16% in year one (now 25–30%), with R36M and R51M EBITDA in the first two years. Won Sappi's Global Gold TIA.",
    stats: [
      { v: "R87M", l: "EBITDA, years 1–2" },
      { v: "0→16%", l: "Share, year one" },
    ],
  },
  {
    id: "mfc-stanger",
    sector: "Advanced materials, Stanger Mill",
    years: "2023 to present",
    title: "MFC scale-up from bagasse pulp",
    problem:
      "Turning South African pulps into microfibrillated cellulose required pinning down the right energy input with Sappi Europe R&D, then scaling it at mill level.",
    outcome:
      "Bagasse MFC offsets raw-material input at ~R1,000/t without compromising quality, adding R24M EBITDA a year.",
    stats: [
      { v: "R203M", l: "15-year NPV" },
      { v: "R24M", l: "EBITDA p.a." },
    ],
  },
  {
    id: "mfc-adhesive",
    sector: "Business development, corrugators",
    years: "2024 to 2025",
    title: "MFC in corrugator starch adhesive",
    problem:
      "Customer pain points in corrugating adhesive (variability, bond strength, speed) needed a validated recipe and a business case strong enough to justify trials.",
    outcome:
      "Sized TAM/SAM/SOM, built the pricing model and won executive buy-in. Customer trials proved the economics on heavier boards.",
    stats: [
      { v: "+141%", l: "Bond strength" },
      { v: "−60%", l: "Process variability" },
    ],
  },
  {
    id: "enstra-filler",
    sector: "Mill operations, Sappi Enstra",
    years: "2013 to 2017",
    title: "Filler chemistry vs. FX-exposed fibre",
    problem:
      "Imported pulp fibre was expensive and carried significant exchange-rate risk, while water, steam and energy use lacked daily visibility.",
    outcome:
      "Filler-increase chemistry substituted costly fibre, and a daily resource dashboard drove water efficiency.",
    stats: [
      { v: "R20M", l: "Cost savings" },
      { v: "−40%", l: "Water (15→9 ML/day)" },
    ],
  },
  {
    id: "basf-inventory",
    sector: "Digital supply chain, BASF",
    years: "2011 to 2013",
    title: "PGM recycle inventory optimisation",
    problem:
      "System glitches across SAP and Oracle prevented optimal use of platinum-group-metal recycle inventory in automotive catalyst production.",
    outcome:
      "Mapped process, data and physical inventory; wrote pseudo-algorithms for the integrators. Nominated for the Global Catalyst Compass Award.",
    stats: [
      { v: "−45%", l: "Recycle inventory" },
      { v: "SAP", l: "Digital tracking" },
    ],
  },
  {
    id: "basf-two-tank",
    sector: "Process engineering, BASF",
    years: "2009 to 2010",
    title: "The two-tank process",
    problem:
      "Back-pressure defects on asymmetric soot-filter technology were running at 25%, capping output on a critical emissions product.",
    outcome:
      "A 5M root-cause analysis led to a reconfigured two-tank process that eliminated the defect and set a new production record.",
    stats: [
      { v: "+27%", l: "Throughput" },
      { v: "25%→0", l: "Back-pressure defects" },
    ],
  },
];
