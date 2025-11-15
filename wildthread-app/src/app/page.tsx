import { AutomationPipeline } from "@/components/automation-pipeline";
import { IntegrationStack } from "@/components/integration-stack";
import { MetricCard } from "@/components/metric-card";
import { PlaybookGrid } from "@/components/playbook-grid";
import { ProductShowcase } from "@/components/product-showcase";
import { SectionHeader } from "@/components/section-header";
import { InsightFeed } from "@/components/insight-feed";
import { TaskBoard } from "@/components/task-board";
import { WeeklyCalendar } from "@/components/weekly-calendar";

const missionMetrics = [
  {
    label: "Revenue Run Rate",
    value: "$18.6K /mo",
    delta: "+12.4% vs last 14d",
    trend: "up" as const,
    caption: "10 best-sellers drive 72% of sales volume; 4 new launches scheduled.",
  },
  {
    label: "Ad ROAS (Meta)",
    value: "3.4x",
    delta: "+0.8 uplift",
    trend: "up" as const,
    caption: "Advantage+ campaigns synced with Monday drop go-live.",
  },
  {
    label: "Design Pipeline",
    value: "18 concepts",
    delta: "5 ready to launch",
    trend: "steady" as const,
    caption: "Next triple drop ready through Printify x Bella Canvas 3001.",
  },
  {
    label: "Order SLAs",
    value: "97.8%",
    delta: "-0.4% variance",
    trend: "down" as const,
    caption: "2 delayed US orders auto-escalated to Printify supplier liaison.",
  },
];

const missionPlaybooks = [
  {
    id: "pb-1",
    title: "Empowerment Capsule Drops",
    objective:
      "Weekly releases themed around feminist milestones, optimized for Etsy micro-trends and TikTok hooks.",
    kpis: [
      "30% week-over-week sales velocity",
      "25% save-to-cart rate milestone",
      "Sub-24h supplier dispatch",
    ],
    automations: [
      "Pinterest keyword miner",
      "Canva template filler",
      "Etsy SEO refresh",
      "Klaviyo launch flow",
    ],
    status: "deployed" as const,
  },
  {
    id: "pb-2",
    title: "Wildflower Vintage Revival",
    objective:
      "Reskin botanical archives into seasonal color stories and bundle listings for high AOV.",
    kpis: [
      "AOV > $48 via bundle incentives",
      "Printify margin > 38%",
      "Organic traffic +22%",
    ],
    automations: [
      "Palette generator",
      "Product photography AI",
      "Bundle upsell builder",
      "Etsy attribute sync",
    ],
    status: "testing" as const,
  },
  {
    id: "pb-3",
    title: "Creator Collab Flywheel",
    objective:
      "Recruit micro-influencers via automated DMs, deliver co-branded art packs, and track affiliate payouts.",
    kpis: [
      "5 affiliate capsules per month",
      "Influencer ROAS 2.8x",
      "Payoneer payout accuracy 100%",
    ],
    automations: [
      "Instagram DM agent",
      "Affiliate code generator",
      "Payoneer bulk transfer",
      "UGC content ingestion",
    ],
    status: "queued" as const,
  },
];

const automationPipelines = [
  {
    title: "Design-to-Listing Autopilot",
    stages: [
      {
        id: "stage-1",
        name: "Trend Radar",
        description:
          "Scrapes Pinterest, TikTok, and Etsy search data hourly to surface high-converting empowerment phrases and botanical motifs.",
        owner: "WildThreadBot",
        cadences: ["Hourly refresh", "Notion trend digest", "24h archive"],
        status: "stable" as const,
      },
      {
        id: "stage-2",
        name: "Design Lab",
        description:
          "Generates artwork variations with style constraints, exports print-ready PNGs, and pushes to shared Canva templates.",
        owner: "Design Agent",
        cadences: ["Daily 10 new assets", "Auto QA checklist"],
        status: "optimizing" as const,
      },
      {
        id: "stage-3",
        name: "Listing Orchestrator",
        description:
          "Drafts Etsy listings with SEO tags, pricing logic, and A/B copy ready for scheduled publish windows.",
        owner: "Listing Agent",
        cadences: ["Mon/Wed/Fri publish", "SEO refresh 14d"],
        status: "stable" as const,
      },
    ],
  },
  {
    title: "Order-to-Cash Flow",
    stages: [
      {
        id: "stage-4",
        name: "Order Sync",
        description:
          "Polls Etsy orders, batches to Printify with supplier routing (US vs international) and handles size/color variations.",
        owner: "Ops Agent",
        cadences: ["Every 15 min", "Low-stock alerts"],
        status: "stable" as const,
      },
      {
        id: "stage-5",
        name: "Fulfillment QA",
        description:
          "Checks Printify production statuses, flags delays >12h, and opens supplier tickets with annotated issue logs.",
        owner: "QA Agent",
        cadences: ["3x daily sweeps", "Auto escalation"],
        status: "optimizing" as const,
      },
      {
        id: "stage-6",
        name: "Payoneer Settlements",
        description:
          "Bundles payouts, reconciles transaction fees, and schedules weekly transfers to the Pakistani bank account.",
        owner: "Finance Agent",
        cadences: ["Thurs payout", "Net margin dashboard"],
        status: "launching" as const,
      },
    ],
  },
];

const taskColumns = [
  {
    title: "Build",
    subtitle: "Product Engineering",
    color: "emerald",
    items: [
      {
        id: "task-1",
        title: "Train new motif style guide on Pakistani heritage patterns",
        owner: "Design Agent",
        cadence: "Bi-weekly",
        playbook: "Empowerment Capsule Drops",
        dependencies: ["Pinterest miner dataset", "Customer reviews sentiment"],
      },
      {
        id: "task-2",
        title: "Refresh Etsy shipping profiles with 2024 USPS rates",
        owner: "Ops Agent",
        cadence: "Quarterly",
        playbook: "Order SLA Guardrails",
      },
    ],
  },
  {
    title: "Launch",
    subtitle: "Growth Engine",
    color: "violet",
    items: [
      {
        id: "task-3",
        title: "Deploy Monday 'Riot of Roses' drop with 6 listings",
        owner: "Launch Agent",
        cadence: "Weekly",
        playbook: "Empowerment Capsule Drops",
      },
      {
        id: "task-4",
        title: "Spin up TikTok Spark Ads using UGC library batch 003",
        owner: "Growth Agent",
        cadence: "Daily",
        playbook: "Creator Collab Flywheel",
        dependencies: ["UGC approval queue"],
      },
    ],
  },
  {
    title: "Scale",
    subtitle: "Aftercare & Loyalty",
    color: "sky",
    items: [
      {
        id: "task-5",
        title: "Email retention flow: 'Sisterhood Circle' storytelling arc",
        owner: "CRM Agent",
        cadence: "Weekly",
        playbook: "Creator Collab Flywheel",
      },
      {
        id: "task-6",
        title: "Automate Etsy review request w/ gratitude postcard",
        owner: "Support Agent",
        cadence: "Per order",
        playbook: "Order SLA Guardrails",
      },
    ],
  },
];

const calendarData = [
  {
    day: "Monday",
    theme: "Drop Day",
    focus: "Launch empowerment capsule drop + paid traffic blitz.",
    entries: [
      {
        channel: "Etsy",
        deliverable: "Publish 6 listings with auto A/B hero imagery.",
        automation: "Scheduled",
        assets: ["SEO tags", "Mockups", "Bundles"],
      },
      {
        channel: "Email",
        deliverable: "Klaviyo launch narrative featuring founder story.",
        automation: "Flow Trigger",
        assets: ["Story angles", "CTA blocks", "Payoneer promo"],
      },
    ],
  },
  {
    day: "Wednesday",
    theme: "Community",
    focus:
      "Deepen relationships via UGC highlights and Instagram Reels programming.",
    entries: [
      {
        channel: "TikTok",
        deliverable: "3-part styling reel with micro-influencer voiceover.",
        automation: "Auto Post",
        assets: ["UGC clips", "Caption bank", "Hashtag cluster"],
      },
      {
        channel: "Instagram",
        deliverable: "Carousel on feminist history fact tied to collection.",
        automation: "Buffer Queue",
        assets: ["Canva carousel", "Story polls"],
      },
    ],
  },
  {
    day: "Friday",
    theme: "Monetize",
    focus: "Flash sale + payweek offer to boost paid conversions.",
    entries: [
      {
        channel: "SMS",
        deliverable: "2-step text flow with exclusive bundle code.",
        automation: "Postscript",
        assets: ["Copy variations", "Link tracking"],
      },
      {
        channel: "Etsy Ads",
        deliverable: "Bid adjustments + pause underperforming keywords.",
        automation: "Bid Script",
        assets: ["Keyword snapshot", "Budget tiers"],
      },
    ],
  },
];

const integrationData = [
  {
    name: "Printify HQ",
    provider: "Printify",
    role: "Routes orders to Bella+Canvas / Monster Digital depending on region and handles quality scoring.",
    automation: [
      "Supplier scoring matrix",
      "Late order escalation tickets",
      "Variant duplication guard",
    ],
    status: "live" as const,
  },
  {
    name: "Etsy Growth Brain",
    provider: "Etsy",
    role: "Optimizes listing tags, pricing, and ad budgets through hourly performance sync.",
    automation: [
      "Pricing elasticity monitor",
      "Competitor keyword watch",
      "Merchandising bundler",
    ],
    status: "live" as const,
  },
  {
    name: "Payoneer Cash Hub",
    provider: "Payoneer",
    role: "Consolidates multi-currency settlements and distributes to Pakistani bank with fee optimization.",
    automation: [
      "FX rate guardrails",
      "Weekly sweep scheduler",
      "Fee reconciliation ledger",
    ],
    status: "syncing" as const,
  },
  {
    name: "Shopify Future Bridge",
    provider: "Shopify",
    role: "Pre-configured channel for future expansion; syncs catalog and inventory from Etsy base.",
    automation: [
      "Theme content sync",
      "Product warm cache",
      "Checkout UX checklist",
    ],
    status: "backlog" as const,
  },
  {
    name: "Customer Soul Desk",
    provider: "Gorgias",
    role: "Aggregates support tickets, auto drafts responses, and feeds review highlights into marketing.",
    automation: [
      "Sentiment macros",
      "Review request trigger",
      "Refund guardrails",
    ],
    status: "live" as const,
  },
  {
    name: "Finance Command",
    provider: "Notion + Airtable",
    role: "Produces margin dashboards, cash flow forecasts, and tax-ready exports.",
    automation: [
      "Cost of goods tracker",
      "Tax remittance queue",
      "Profitability alerts",
    ],
    status: "syncing" as const,
  },
];

const insightFeed = [
  {
    id: "insight-1",
    category: "marketing" as const,
    title: "Meta lookalike audience outperforming interest stack by 42%",
    impact:
      "ROAS uplift expected to add $3.2K incremental revenue over next 14 days.",
    action:
      "Shift $120/day budget from underperforming interest ad set to lookalike 2% expansion and refresh creative on Sunday.",
    confidence: 0.78,
  },
  {
    id: "insight-2",
    category: "product" as const,
    title: "Terra-cotta colorway seeing 3x save rate vs classic white",
    impact:
      "Update hero imagery on top 5 listings; adjust Printify routing to include orange Bella+Canvas inventory.",
    action:
      "Auto-generate new mockups, push to Etsy via Listing Orchestrator, and reorder color priority by Monday 9am EST.",
    confidence: 0.82,
  },
  {
    id: "insight-3",
    category: "finance" as const,
    title: "Payoneer fee reduction available for payouts scheduled Thursdays",
    impact:
      "Projected to save $186 per month in transaction fees when volume exceeds $15K.",
    action:
      "Lock Thursday payout cadence, consolidate smaller transfers, and notify finance ledger for new baseline.",
    confidence: 0.91,
  },
  {
    id: "insight-4",
    category: "operations" as const,
    title: "Printify supplier 'Monster Digital' trending on-time risk",
    impact:
      "If unaddressed, SLA could dip 3.5% this week with 18 US orders affected.",
    action:
      "Deploy backup supplier for XL sizes, send preventive quality brief, and reroute flagged orders.",
    confidence: 0.68,
  },
];

const productConcepts = [
  {
    id: "concept-1",
    name: "Lunar Sisterhood",
    storyline:
      "Celestial empowerment art blending Urdu calligraphy with moon phases for nightfall rituals.",
    basePrice: "$13.12",
    retailPrice: "$34",
    margin: "39%",
    keywords: ["feminist", "moon magic", "urdu calligraphy", "self love"],
    launchStatus: "queued" as const,
  },
  {
    id: "concept-2",
    name: "Riot of Roses",
    storyline:
      "Vintage wildflower sketches layered with protest typography celebrating revolutionary women.",
    basePrice: "$12.76",
    retailPrice: "$38",
    margin: "41%",
    keywords: ["wildflower", "vintage botanical", "riot grrrl", "bold"],
    launchStatus: "live" as const,
  },
  {
    id: "concept-3",
    name: "Desert Dreamscape",
    storyline:
      "Boho desert gradients with empowerment mantras for festival-ready tees.",
    basePrice: "$12.02",
    retailPrice: "$36",
    margin: "38%",
    keywords: ["boho", "festival", "empowerment", "sunrise"],
    launchStatus: "design" as const,
  },
  {
    id: "concept-4",
    name: "Sisterhood Atlas",
    storyline:
      "Map-inspired collage celebrating global feminist movements, tuned for travel & wanderlust niches.",
    basePrice: "$13.45",
    retailPrice: "$40",
    margin: "39%",
    keywords: ["travel", "map art", "feminist history", "wanderlust"],
    launchStatus: "queued" as const,
  },
  {
    id: "concept-5",
    name: "Bloom Without Permission",
    storyline:
      "Hand-inked florals paired with bold serif manifestos to inspire unapologetic growth.",
    basePrice: "$12.98",
    retailPrice: "$35",
    margin: "37%",
    keywords: ["hand drawn", "affirmation", "botanical", "empowerment"],
    launchStatus: "design" as const,
  },
  {
    id: "concept-6",
    name: "Waves for Women",
    storyline:
      "Abstract ocean lines symbolizing collective strength, optimized for coastal audiences.",
    basePrice: "$12.88",
    retailPrice: "$34",
    margin: "36%",
    keywords: ["ocean", "collective", "sisterhood", "minimalist"],
    launchStatus: "queued" as const,
  },
];

const groupedMetrics = [
  missionMetrics.slice(0, 2),
  missionMetrics.slice(2, 4),
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-20 px-6 py-20 md:px-10 lg:px-16">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-transparent p-10 text-white shadow-[0_30px_80px_-40px_rgba(45,212,191,0.45)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.35),transparent_60%)] opacity-70" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-teal-100">
              WildThreadBot Mission Control
            </span>
            <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
              Automate WildThread Co. end-to-end while the world sleeps.
            </h1>
            <p className="text-lg text-zinc-200">
              Autonomous command center for feminist print-on-demand. Launch
              collections, fuel marketing, ship orders, and sweep cash to
              Pakistan—all orchestrated by WildThreadBot.
            </p>
            <div className="flex flex-wrap gap-3 text-sm font-medium">
              <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 uppercase tracking-[0.35em]">
                Etsy + Printify + Payoneer
              </span>
              <span className="rounded-full border border-white/20 bg-emerald-400/10 px-4 py-2 uppercase tracking-[0.35em] text-emerald-100">
                Women&apos;s Empowerment
              </span>
              <span className="rounded-full border border-white/20 bg-sky-400/10 px-4 py-2 uppercase tracking-[0.35em] text-sky-100">
                Passive Income
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">
              Live Agent Loop
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center justify-between rounded-2xl border border-emerald-300/40 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
                <span>Design Agent</span>
                <span className="text-xs uppercase tracking-[0.3em]">
                  Generating art
                </span>
              </li>
              <li className="flex items-center justify-between rounded-2xl border border-sky-300/40 bg-sky-400/10 px-4 py-3 text-sm text-sky-100">
                <span>Growth Agent</span>
                <span className="text-xs uppercase tracking-[0.3em]">
                  Scheduling ads
                </span>
              </li>
              <li className="flex items-center justify-between rounded-2xl border border-rose-300/40 bg-rose-400/10 px-4 py-3 text-sm text-rose-100">
                <span>Ops Agent</span>
                <span className="text-xs uppercase tracking-[0.3em]">
                  Verifying SLAs
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeader
          eyebrow="Key Instruments"
          title="Autonomous KPI dashboard"
          description="WildThreadBot monitors revenue, marketing efficiency, product pipeline depth, and operational SLAs, surfacing deltas before they become issues."
        />
        <div className="space-y-5">
          {groupedMetrics.map((group, index) => (
            <div
              key={index}
              className="grid gap-5 md:grid-cols-2"
            >
              {group.map((metric) => (
                <MetricCard key={metric.label} {...metric} />
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeader
          eyebrow="Automation Spine"
          title="Pipelines running while you sleep"
          description="From product ideation to cash sweep, every stage is orchestrated by specialized agents with clear cadences and fallback plans."
        />
        <div className="grid gap-6 xl:grid-cols-2">
          {automationPipelines.map((pipeline) => (
            <AutomationPipeline
              key={pipeline.title}
              title={pipeline.title}
              stages={pipeline.stages}
            />
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeader
          eyebrow="Ops Sprints"
          title="Task board across Build → Launch → Scale"
          description="Kanban snapshot of agent responsibilities featuring cadence, dependencies, and linked playbooks to keep the machine compounding."
        />
        <TaskBoard columns={taskColumns} />
      </section>

      <section className="space-y-10">
        <SectionHeader
          eyebrow="Marketing Autopilot"
          title="Weekly resonance calendar"
          description="Full-funnel programming for Etsy buyers and community touchpoints mapped to automated publishing rails."
        />
        <WeeklyCalendar days={calendarData} />
      </section>

      <section className="space-y-10">
        <SectionHeader
          eyebrow="Design Lab"
          title="Product concepts queued for release"
          description="WildThreadBot maintains a forward pipeline of capsule-ready concepts with margin modeling, SEO keywords, and launch status monitoring."
        />
        <ProductShowcase concepts={productConcepts} />
      </section>

      <section className="space-y-10">
        <SectionHeader
          eyebrow="Playbook Library"
          title="Core operating playbooks"
          description="Every growth initiative is governed by an automation-first playbook tying KPIs to agents, tools, and review cadences."
        />
        <PlaybookGrid playbooks={missionPlaybooks} />
      </section>

      <section className="space-y-10">
        <SectionHeader
          eyebrow="Integration Mesh"
          title="Connected tools orchestrated by WildThreadBot"
          description="Printify, Etsy, Payoneer, and supporting platforms are wired together with observability and guardrails."
        />
        <IntegrationStack integrations={integrationData} />
      </section>

      <section className="space-y-10">
        <SectionHeader
          eyebrow="Insight Stream"
          title="Real-time calls to action"
          description="Quantified insights with recommended actions, so the owner only intervenes when leverage is highest."
        />
        <InsightFeed insights={insightFeed} />
      </section>

      <footer className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-black/40 p-10 text-sm text-zinc-300">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
              WildThread Co.
            </p>
            <h2 className="mt-2 font-display text-2xl text-white">
              Wear Your Wild. Automate the rest.
            </h2>
            <p className="mt-3 max-w-xl text-zinc-300/80">
              WildThreadBot synchronizes art, commerce, and finance to keep the
              business thriving autonomously. Review insights, approve when
              needed, and let the agents run.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-zinc-200/80">
            <span className="rounded-full border border-white/10 px-4 py-2">
              Etsy Command Hub
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2">
              Printify Quality Loop
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2">
              Payoneer Finance Desk
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
