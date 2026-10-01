import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Download, Mail, Menu, X } from "lucide-react";

const impact = [
  ["$13.1M", "Annualized benefits"],
  ["$44M", "OPEX savings"],
  ["30%", "Faster transactions"],
  ["75%", "Fewer curation steps"],
];

const caseStudies = [
  {
    number: "01",
    title: "Reimagining Digital Checkout",
    context: "Keurig Dr Pepper · eCommerce",
    role: "eCommerce Product Manager",
    product: "B2C digital commerce",
    team: "Product · UX · Engineering · Payments · Analytics",
    scope: "Cart · Checkout · Payments · Experimentation",
    challenge: "Turning checkout friction into a measurable conversion opportunity across B2C commerce.",
    problem: "The digital purchase journey had material cart abandonment and mobile conversion friction, creating an opportunity to simplify checkout while strengthening payment capabilities.",
    customerProblem: "High-intent shoppers were encountering friction late in the purchase journey, particularly around checkout and payment completion.",
    businessProblem: "Abandonment at the bottom of the funnel limited conversion efficiency and reduced the return on traffic already acquired.",
    evidence: ["Cart abandonment was approximately 40% before the improvement program", "Mobile conversion presented a meaningful optimization opportunity", "Checkout usability and the payment experience were key parts of the purchase journey"],
    hypothesis: "If we reduce checkout friction and improve the payment experience, more high-intent shoppers will complete their purchase, particularly on mobile.",
    alternatives: ["Redesign the full commerce journey", "Focus first on checkout and payment friction", "Prioritize promotional incentives instead of UX changes"],
    decision: "Focus first on checkout and payment friction, modernizing the cart and checkout experience while expanding payment capabilities and using conversion outcomes as the measure of success.",
    why: "This concentrated investment at the highest-intent stage of the funnel and allowed the team to validate impact before committing to a broader commerce redesign.",
    ownership: ["Shaped the checkout and conversion opportunity around measurable outcomes", "Aligned product, UX, engineering and payment stakeholders", "Partnered on STRIPE UI integration and checkout improvements", "Used A/B testing and customer feedback to validate UX changes", "Tracked conversion, cart abandonment, AOV and digital adoption"],
    execution: ["Focused scope on the highest-friction purchase steps", "Coordinated checkout UX, payment integration and technical dependencies", "Used experimentation to validate changes rather than relying on opinion", "Monitored post-launch behavioral and conversion metrics"],
    metrics: ["40% → 32%", "+12%", "+8%"],
    metricLabels: ["Cart abandonment", "Mobile conversion", "Conversion lift"],
    outcome: "Cart abandonment improved from 40% to 32%, mobile conversion increased 12%, and broader experimentation contributed to an 8% conversion lift.",
    learning: "Conversion optimization works best as an evidence loop: identify friction, isolate the highest-value opportunity, release focused changes, measure behavior, and iterate.",
    journey: ["Browse", "Product", "Cart", "Checkout", "Payment", "Confirmation"],
    focus: 3,
  },
  {
    number: "02",
    title: "Modernizing Omnichannel Retail",
    context: "Rogers Communications · Internal Platforms",
    role: "Product Manager, Internal Platforms",
    product: "Omnichannel retail platform",
    team: "Product · Sales · Marketing · UX · Engineering · Enablement",
    scope: "Digital sales enablement · Retail workflows · Platform modernization",
    challenge: "Replacing legacy sales workflows with a faster platform while protecting a high-value omnichannel business.",
    problem: "Legacy retail tooling introduced workflow inefficiency, transaction delays and revenue leakage across assisted sales channels.",
    customerProblem: "Frontline users needed a faster, simpler workflow to complete assisted sales transactions reliably.",
    businessProblem: "Legacy workflows increased operating effort and constrained sales productivity, creating a material modernization opportunity.",
    evidence: ["Retail workflows carried measurable transaction-time inefficiency", "Platform investment required a clear financial case and benefits model", "Modernization touched multiple commercial, operational and technology stakeholders"],
    hypothesis: "If core assisted-sales workflows are simplified on a modern platform, transaction efficiency can improve while reducing operating cost and protecting revenue.",
    alternatives: ["Continue optimizing the legacy platform", "Modernize selected high-value workflows", "Execute a broader platform transformation"],
    decision: "Prioritize platform modernization and workflow simplification around measurable transaction efficiency, sales performance and operating-cost outcomes.",
    why: "The roadmap connected platform investment directly to user productivity, financial benefits and business continuity instead of treating modernization as a technology-only initiative.",
    ownership: ["Owned and prioritized a multi-million-dollar digital sales enablement roadmap", "Connected business objectives to platform investments and technical delivery", "Aligned Sales, Marketing, UX, Engineering and Enablement stakeholders", "Used operational and journey KPIs to assess platform performance and adoption"],
    execution: ["Managed roadmap priorities against benefits, dependencies and delivery risk", "Aligned commercial and technical teams around shared success measures", "Sequenced modernization to protect business continuity", "Tracked adoption and operational impact after rollout"],
    metrics: ["$13.1M", "~143%", "$44M", "30%"],
    metricLabels: ["Annualized benefits", "Roadmap ROI", "OPEX savings", "Faster transactions"],
    outcome: "A $5.4M CAPEX roadmap delivered $13.1M in annualized benefits, while the Oneview rollout reduced transaction time by 30% and delivered $44M in OPEX savings.",
    learning: "Platform modernization becomes a product strategy when investment decisions are explicitly connected to user workflow, adoption, business continuity and financial outcomes.",
  },
  {
    number: "03",
    title: "Scaling a Global Product Catalog",
    context: "Walmart Canada · Omnichannel",
    role: "Omnichannel Product Manager",
    product: "Global Omni Item platform",
    team: "Product · Merchandising · Technology · Supplier ecosystem",
    scope: "Catalog · Item lifecycle · Supplier enablement · Global standards",
    challenge: "Simplifying item lifecycle management for a massive supplier ecosystem across channels and markets.",
    problem: "Fragmented legacy item-management workflows created complexity for suppliers and merchandising teams and constrained speed-to-market across omnichannel operations.",
    customerProblem: "Suppliers and merchandising users had to navigate excessive steps and fragmented processes to create and maintain product information.",
    businessProblem: "Complex item workflows slowed assortment changes and made it harder to operate consistently at global catalog scale.",
    evidence: ["Item curation required excessive workflow steps", "Product information needed to operate across a large supplier ecosystem", "A scalable solution had to balance global standards with market implementation needs"],
    hypothesis: "If item creation and lifecycle workflows are standardized on a shared platform, suppliers and merchandising teams can reduce effort and respond to the market faster.",
    alternatives: ["Continue maintaining market-specific legacy workflows", "Incrementally consolidate individual item processes", "Adopt a standardized global product model and platform"],
    decision: "Consolidate legacy item-management workflows into a cloud-native, multilingual platform and simplify the item lifecycle around reusable global standards.",
    why: "A shared model created greater long-term leverage than preserving market-specific processes while still allowing implementation needs to be translated into the global platform.",
    ownership: ["Helped lead the Canadian rollout of the Global Omni Item platform", "Standardized product intake and lifecycle practices within a broader global product model", "Focused roadmap decisions on workflow simplification, scale and supplier usability", "Partnered within a cross-market product practice serving a large supplier ecosystem"],
    execution: ["Translated local needs into the global product model", "Coordinated rollout priorities across product and operational stakeholders", "Focused implementation on supplier usability and reduced process complexity", "Measured workflow reduction and speed-to-market improvements"],
    metrics: ["75%", "50%", "1B+", "15,000+"],
    metricLabels: ["Fewer curation steps", "Faster market response", "Item pipeline", "Suppliers"],
    outcome: "The program reduced curation steps by 75%, enabled 50% faster market response, and supported a centralized catalog pipeline managing 1B+ items across a 15,000+ supplier ecosystem.",
    learning: "At platform scale, simplification matters as much as capability. Reusable standards create leverage only when local users and workflows can successfully adopt them.",
  },
];

const experience = [
  ["2025 – Present", "Enercare Inc.", "Sr Product Lead", "Offer & pricing platforms · modernization · personalization"],
  ["2024 – 2025", "Keurig Dr Pepper", "eCommerce Product Manager", "B2C/B2B commerce · payments · subscriptions · connected devices"],
  ["2022 – 2024", "Rogers Communications", "Product Manager, Internal Platforms", "Omnichannel retail · digital sales enablement · platform modernization"],
  ["2021 – 2022", "Walmart Canada", "Omnichannel Product Manager", "Global catalog · supplier enablement · omnichannel transformation"],
  ["2019 – 2021", "Unilever Canada", "Digital Product Owner", "SaaS · order management · analytics · Agile delivery"],
  ["2012 – 2019", "Honeywell International", "Senior Business Analyst / Data Science", "Enterprise platforms · APIs · analytics · automation"],
];

const principles = [
  ["01", "Discover", "Fall in love with the problem, not the requested feature."],
  ["02", "Define", "Turn ambiguity into a measurable outcome."],
  ["03", "Prioritize", "Make trade-offs explicit."],
  ["04", "Deliver", "Give teams context, not just requirements."],
  ["05", "Measure", "Define success before shipping."],
  ["06", "Iterate", "Treat launch as the beginning of learning."],
];

const Eyebrow = ({ children, light = false }) => <p className={`text-xs font-black uppercase tracking-[0.28em] ${light ? "text-[#d8ff6b]" : "text-[#52705e]"}`}>{children}</p>;

export default function App() {
  const [activeCase, setActiveCase] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const scroll = id => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };
  const openCase = i => { setActiveCase(i); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const closeCase = () => { setActiveCase(null); setTimeout(() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }), 20); };

  if (activeCase !== null) {
    const c = caseStudies[activeCase];
    return <main className="min-h-screen bg-[#f7f5ef] text-[#14211b]">
      <nav className="sticky top-0 z-40 border-b border-[#14211b]/10 bg-[#f7f5ef]/95 backdrop-blur"><div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5"><button onClick={closeCase} className="flex items-center gap-2 text-sm font-bold"><ArrowLeft size={17}/> All case studies</button><span className="text-xs font-black tracking-[0.12em]">SUNANDA MURTHYRAJU</span></div></nav>
      <header className="mx-auto max-w-6xl px-6 pb-20 pt-20"><Eyebrow>{c.context}</Eyebrow><p className="mt-8 font-mono text-sm text-[#52705e]">CASE STUDY {c.number}</p><h1 className="mt-4 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-7xl">{c.title}</h1><p className="mt-7 max-w-3xl text-xl leading-8 text-[#65736b]">{c.challenge}</p><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[["My role",c.role],["Product",c.product],["Team",c.team],["Scope",c.scope]].map(([k,v])=><div key={k} className="rounded-2xl bg-white p-5 shadow-sm"><p className="text-xs font-black uppercase tracking-wider text-[#52705e]">{k}</p><p className="mt-2 text-sm font-bold leading-6">{v}</p></div>)}</div></header>

      <section className="bg-[#14211b] text-white"><div className="mx-auto max-w-6xl px-6 py-20"><Eyebrow light>01 · Opportunity</Eyebrow><div className="mt-8 grid gap-10 lg:grid-cols-3"><div><h2 className="text-3xl font-black">The problem</h2><p className="mt-4 leading-7 text-white/70">{c.problem}</p></div><div><h3 className="text-xl font-black">Customer problem</h3><p className="mt-4 leading-7 text-white/70">{c.customerProblem}</p></div><div><h3 className="text-xl font-black">Business problem</h3><p className="mt-4 leading-7 text-white/70">{c.businessProblem}</p></div></div></div></section>

      {c.journey && <section className="mx-auto max-w-6xl px-6 py-20"><Eyebrow>02 · Customer journey</Eyebrow><h2 className="mt-5 text-4xl font-black">Where the opportunity lived.</h2><div className="mt-10 flex flex-col gap-2 md:flex-row md:items-center">{c.journey.map((step,i)=><React.Fragment key={step}><div className={`flex-1 rounded-2xl p-5 text-center font-bold ${i===c.focus ? "bg-[#d8ff6b] ring-2 ring-[#14211b]" : "bg-white"}`}>{step}{i===c.focus&&<span className="mt-1 block text-[10px] uppercase tracking-wider">Primary focus</span>}</div>{i<c.journey.length-1&&<ArrowRight className="mx-auto rotate-90 text-[#52705e] md:rotate-0" size={18}/>}</React.Fragment>)}</div></section>}

      <section className="mx-auto max-w-6xl px-6 py-20"><Eyebrow>{c.journey ? "03" : "02"} · Evidence</Eyebrow><h2 className="mt-5 text-4xl font-black">Signals that shaped the opportunity.</h2><div className="mt-10 grid gap-4 md:grid-cols-3">{c.evidence.map((x,i)=><div key={x} className="rounded-3xl bg-white p-7 shadow-sm"><span className="font-mono text-xs text-[#52705e]">0{i+1}</span><p className="mt-8 text-lg font-bold leading-7">{x}</p></div>)}</div></section>

      <section className="bg-[#e9ede4]"><div className="mx-auto max-w-6xl px-6 py-20"><Eyebrow>Hypothesis</Eyebrow><blockquote className="mt-7 max-w-5xl text-3xl font-black leading-tight tracking-tight sm:text-4xl">“{c.hypothesis}”</blockquote></div></section>

      <section className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-2"><div><Eyebrow>Options considered</Eyebrow><div className="mt-7 space-y-3">{c.alternatives.map((x,i)=><div key={x} className="flex gap-4 rounded-2xl border border-[#14211b]/10 bg-white p-5"><span className="font-mono text-xs text-[#52705e]">0{i+1}</span><p className="font-semibold">{x}</p></div>)}</div></div><div><Eyebrow>Product decision</Eyebrow><h2 className="mt-5 text-3xl font-black">The choice and why.</h2><p className="mt-6 text-xl leading-9">{c.decision}</p><p className="mt-5 leading-7 text-[#65736b]">{c.why}</p></div></section>

      <section className="bg-white"><div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-2"><div><Eyebrow>My ownership</Eyebrow><h2 className="mt-5 text-3xl font-black">What I owned.</h2><ul className="mt-7 space-y-4">{c.ownership.map(x=><li key={x} className="flex gap-3 leading-7"><span className="font-bold text-[#52705e]">→</span>{x}</li>)}</ul></div><div><Eyebrow>Execution</Eyebrow><h2 className="mt-5 text-3xl font-black">From decision to delivery.</h2><ul className="mt-7 space-y-4">{c.execution.map(x=><li key={x} className="flex gap-3 leading-7"><span className="font-bold text-[#52705e]">→</span>{x}</li>)}</ul></div></div></section>

      <section className="mx-auto max-w-6xl px-6 py-20"><Eyebrow>Results</Eyebrow><h2 className="mt-5 text-4xl font-black">Measured impact.</h2><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{c.metrics.map((m,i)=><div key={m+c.metricLabels[i]} className="rounded-3xl bg-[#d8ff6b] p-7"><p className="text-3xl font-black">{m}</p><p className="mt-2 text-sm font-bold">{c.metricLabels[i]}</p></div>)}</div><p className="mt-10 max-w-4xl text-xl leading-9">{c.outcome}</p></section>
      <section className="bg-[#14211b] text-white"><div className="mx-auto max-w-6xl px-6 py-20"><Eyebrow light>Reflection</Eyebrow><h2 className="mt-5 text-4xl font-black">What I learned.</h2><p className="mt-7 max-w-4xl text-xl leading-9 text-white/70">{c.learning}</p><p className="mt-8 text-sm text-white/45">Selected details are presented at a portfolio level. Sensitive implementation details are intentionally omitted.</p></div></section>
      <section className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-16 sm:flex-row sm:justify-between"><button onClick={closeCase} className="flex items-center gap-2 font-bold"><ArrowLeft size={17}/> Back to work</button>{activeCase<caseStudies.length-1&&<button onClick={()=>openCase(activeCase+1)} className="flex items-center gap-2 rounded-full bg-[#14211b] px-5 py-3 font-bold text-white">Next case study <ArrowRight size={17}/></button>}</section>
    </main>;
  }

  return <main className="min-h-screen bg-[#f7f5ef] text-[#14211b] selection:bg-[#d8ff6b]">
    <nav className="sticky top-0 z-40 border-b border-[#14211b]/10 bg-[#f7f5ef]/95 backdrop-blur"><div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10"><button onClick={()=>scroll("home")} className="text-sm font-black tracking-[0.12em]">SUNANDA MURTHYRAJU</button><div className="hidden items-center gap-7 text-sm font-semibold md:flex">{[["About","about"],["Impact","impact"],["Work","work"],["Approach","approach"],["Experience","experience"]].map(([l,id])=><button key={id} onClick={()=>scroll(id)}>{l}</button>)}<a href="/Sunanda-Murthyraju-Product-Manager-Resume.pdf" download className="flex items-center gap-1"><Download size={15}/> Resume</a><button onClick={()=>scroll("contact")} className="rounded-full bg-[#14211b] px-5 py-2.5 text-white">Let's talk</button></div><button className="md:hidden" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Menu">{menuOpen?<X/>:<Menu/>}</button></div>{menuOpen&&<div className="border-t border-[#14211b]/10 px-6 py-5 md:hidden">{[["About","about"],["Impact","impact"],["Work","work"],["Approach","approach"],["Experience","experience"],["Contact","contact"]].map(([l,id])=><button key={id} onClick={()=>scroll(id)} className="block py-2 text-lg font-semibold">{l}</button>)}<a href="/Sunanda-Murthyraju-Product-Manager-Resume.pdf" download className="block py-2 text-lg font-semibold">Resume</a></div>}</nav>

    <section id="home" className="mx-auto grid min-h-[82vh] max-w-7xl content-center px-6 py-20 lg:px-10"><Eyebrow>Product Leader · Digital Commerce · Platforms</Eyebrow><h1 className="mt-8 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-8xl">Turning complex product problems into <span className="text-[#52705e]">measurable growth.</span></h1><p className="mt-8 max-w-3xl text-lg leading-8 text-[#405047]">Product leader specializing in digital commerce, platform transformation and customer experiences across B2C, B2B and omnichannel ecosystems.</p><div className="mt-10 flex flex-wrap gap-3"><button onClick={()=>scroll("work")} className="flex items-center gap-2 rounded-full bg-[#d8ff6b] px-6 py-3 font-bold">View case studies <ArrowRight size={17}/></button><a href="/Sunanda-Murthyraju-Product-Manager-Resume.pdf" download className="flex items-center gap-2 rounded-full border border-[#14211b]/20 px-6 py-3 font-bold"><Download size={17}/> Download resume</a></div></section>

    <section id="about" className="bg-[#14211b] text-white"><div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10"><div><Eyebrow light>About</Eyebrow><h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Customer value, business value and technical reality belong in the same conversation.</h2></div><div className="space-y-6 text-lg leading-8 text-white/70"><p>I lead digital products across B2C, B2B and omnichannel ecosystems, from product vision and roadmaps through launch, adoption and optimization.</p><p>My experience spans commerce, pricing, subscriptions, payments, connected products and enterprise platforms. I bring together customer insight, analytics, experimentation and cross-functional delivery to make product decisions grounded in evidence.</p></div></div></section>

    <section id="impact" className="mx-auto max-w-7xl px-6 py-20 lg:px-10"><Eyebrow>Selected impact</Eyebrow><div className="mt-10 grid gap-px overflow-hidden rounded-3xl bg-[#14211b]/10 sm:grid-cols-2 lg:grid-cols-4">{impact.map(([n,l])=><div key={l} className="bg-white p-8"><p className="text-4xl font-black text-[#52705e]">{n}</p><p className="mt-2 font-bold">{l}</p></div>)}</div></section>

    <section id="work" className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><Eyebrow>Selected work</Eyebrow><h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Product decisions with business impact.</h2><div className="mt-14 grid gap-5 lg:grid-cols-3">{caseStudies.map((c,i)=><article key={c.number} className="flex flex-col rounded-3xl bg-white p-7 shadow-sm"><span className="font-mono text-xs text-[#52705e]">{c.number}</span><p className="mt-8 text-xs font-black uppercase tracking-wider text-[#52705e]">{c.context}</p><h3 className="mt-2 text-2xl font-black">{c.title}</h3><p className="mt-4 flex-1 leading-7 text-[#65736b]">{c.challenge}</p><div className="mt-6 flex flex-wrap gap-2">{c.metricLabels.slice(0,2).map((l,j)=><span key={l} className="rounded-full bg-[#edf0e8] px-3 py-1.5 text-xs font-bold">{c.metrics[j]} {l}</span>)}</div><button onClick={()=>openCase(i)} className="mt-8 flex items-center gap-2 font-black">Read full case study <ArrowRight size={17}/></button></article>)}</div></section>

    <section id="approach" className="bg-[#e9ede4]"><div className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><Eyebrow>Product philosophy</Eyebrow><h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">How I build products.</h2><div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-[#14211b]/15 sm:grid-cols-2 lg:grid-cols-3">{principles.map(([n,t,d])=><div key={n} className="bg-[#f7f5ef] p-8"><span className="font-mono text-xs text-[#52705e]">{n}</span><h3 className="mt-8 text-2xl font-black">{t}</h3><p className="mt-3 leading-7 text-[#65736b]">{d}</p></div>)}</div></div></section>

    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><Eyebrow>Product toolbox</Eyebrow><div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">{[["Strategy","Vision · Roadmaps · MVP · OKRs · Portfolio governance"],["Growth & Discovery","Journey optimization · Market research · A/B testing · Usability"],["Digital Platforms","eCommerce · SaaS · CRM · OMS · Payments · APIs · Cloud"],["Data & Delivery","GA4 · Adobe · FullStory · SQL · Agile · ADO · Jira · Figma"]].map(([t,d])=><div key={t}><h3 className="border-t-2 border-[#14211b] pt-4 text-lg font-black">{t}</h3><p className="mt-3 leading-7 text-[#65736b]">{d}</p></div>)}</div></section>

    <section id="experience" className="border-y border-[#14211b]/10 bg-white"><div className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><Eyebrow>Experience</Eyebrow><h2 className="mt-5 text-4xl font-black">A career across commerce, platforms and transformation.</h2><div className="mt-12 space-y-4">{experience.map(([date,company,role,scope])=><div key={company} className="grid gap-3 rounded-2xl bg-[#f7f5ef] p-6 md:grid-cols-[150px_1fr_1fr]"><p className="text-sm font-bold text-[#52705e]">{date}</p><div><h3 className="text-xl font-black">{role}</h3><p>{company}</p></div><p className="text-[#65736b]">{scope}</p></div>)}</div><div className="mt-10 rounded-3xl bg-[#14211b] p-8 text-white"><Eyebrow light>Education & credentials</Eyebrow><p className="mt-4 text-lg font-bold">Harvard Business School · CLIMB Credential</p><p className="mt-2 text-white/65">Master's in Information Technology · PSM I · Six Sigma Green Belt · AI Product Management</p></div></div></section>

    <footer id="contact" className="bg-[#d8ff6b]"><div className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><p className="text-xs font-black uppercase tracking-[0.3em]">Contact</p><h2 className="mt-5 max-w-3xl text-5xl font-black tracking-[-0.04em] sm:text-6xl">Let's build something customers value.</h2><p className="mt-6 max-w-xl text-lg leading-8">I'm interested in product opportunities where customer problems, growth, business strategy and technology come together.</p><div className="mt-10 flex flex-wrap gap-3"><a href="mailto:sunandamurthyraju@gmail.com" className="flex items-center gap-2 rounded-full bg-[#14211b] px-5 py-3 font-bold text-white"><Mail size={17}/> Email</a><a href="https://www.linkedin.com/in/sunandasky/" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-[#14211b]/25 px-5 py-3 font-bold"><Linkedin size={17}/> LinkedIn</a></div><p className="mt-16 text-xs font-semibold opacity-60">© 2026 Sunanda Murthyraju · Product Leader</p></div></footer>
  </main>;
}
