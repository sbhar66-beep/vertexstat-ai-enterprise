"use client";

const useCases = [
  {
    title: "Healthcare AI Transformation",
    industry: "Healthcare",
    description:
      "AI solutions for clinical operations, patient access, revenue cycle, workforce training, and operational automation.",
    outcomes: ["Clinical workflow automation", "Patient access optimization", "Revenue cycle insights", "Training and education AI", "Operational analytics"],
  },
  {
    title: "BankIQ Agent — Ask the Bank",
    industry: "Community Banking",
    description:
      "A secure agentic AI interface that allows bank employees to ask natural-language questions across lending, deposits, compliance, finance, and operations data.",
    outcomes: ["Natural-language banking analytics", "Loan maturity and risk insights", "Deposit outflow and retention analysis", "Executive and board-ready reporting", "Compliance and audit support"],
  },
  {
    title: "IT Operations AI",
    industry: "Enterprise Operations",
    description:
      "AI-powered automation for incident management, root cause analysis, observability, ticket triage, and service reliability.",
    outcomes: ["Incident triage automation", "Root cause analysis", "SRE support", "Operational dashboards", "Cost and performance insights"],
  },
  {
    title: "PMO Automation",
    industry: "Program Management",
    description:
      "Agentic AI for portfolio reporting, RAID tracking, executive status summaries, roadmap management, and delivery governance.",
    outcomes: ["Automated status reporting", "RAID and dependency tracking", "Executive summaries", "Portfolio health scoring", "Delivery risk alerts"],
  },
];

const caseStudies = [
  { title: "Banking Intelligence Pilot", metric: "70% faster reporting", desc: "Natural-language analytics across loans, deposits, compliance, and finance views." },
  { title: "PMO Reporting Automation", metric: "5 hrs saved weekly", desc: "Automated executive summaries, RAID review, portfolio health scoring, and dependency alerts." },
  { title: "Clinical Operations Optimization", metric: "18% backlog reduction", desc: "Patient access bottleneck detection, staffing visibility, and authorization delay tracking." },
];

function MiniBarChart({ data }: { data: { label: string; value: number }[] }) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="mt-5 space-y-3">
      {data.map((item) => (
        <div key={item.label}>
          <div className="mb-1 flex justify-between text-xs text-slate-400">
            <span>{item.label}</span>
            <span>{item.value}</span>
          </div>
          <div className="h-2 rounded-full bg-slate-800">
            <div className="h-2 rounded-full bg-cyan-400" style={{ width: `${(item.value / max) * 100}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function DemoCard({
  title,
  badge,
  desc,
  prompt,
  answer,
  chart,
  tags,
}: {
  title: string;
  badge: string;
  desc: string;
  prompt: string;
  answer: string;
  chart: { label: string; value: number }[];
  tags: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6 shadow-xl transition hover:-translate-y-1 hover:border-cyan-500/60">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-2xl font-bold text-cyan-400">{title}</h3>
        <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-300">{badge}</span>
      </div>
      <p className="mb-5 text-slate-300">{desc}</p>
      <div className="rounded-lg bg-slate-800 p-4 text-sm text-slate-200">
        <p className="mb-2 text-cyan-400">Example Prompt</p>
        <p>“{prompt}”</p>
      </div>
      <div className="mt-4 rounded-lg border border-slate-700 bg-slate-900 p-4 text-sm text-slate-300">{answer}</div>
      <MiniBarChart data={chart} />
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((item) => (
          <span key={item} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">VertexStat AI</p>
          <h1 className="text-4xl font-bold md:text-6xl">Enterprise AI Transformation for Healthcare, Banking & Operations</h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">We design secure, practical AI systems that improve operations, automate reporting, reduce risk, and create measurable business value.</p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#demos" className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 hover:bg-cyan-400">View AI Demos</a>
            <a href="#architecture" className="rounded-xl border border-slate-600 px-8 py-4 font-semibold hover:bg-slate-800">View Architecture</a>
            <a href="#contact" className="rounded-xl border border-cyan-500 px-8 py-4 font-semibold hover:bg-slate-800">Contact</a>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-4">
          {["90-Day AI Pilot", "Governed Agentic AI", "Executive Reporting", "Secure Data Layer"].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-700 bg-slate-800 p-5 text-center text-cyan-300">{item}</div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">What We Do</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {["AI Strategy & Roadmap", "AI Automation for Operations", "PMO & Executive Reporting AI", "Agentic AI Workflow Design", "Data & Analytics Modernization", "AI Governance & Risk Controls"].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg"><h3 className="text-xl font-semibold text-cyan-400">{item}</h3></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">AI Use Cases</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {useCases.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-700 bg-slate-950 p-6 shadow-lg">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-400">{item.industry}</p>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 text-slate-300">{item.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-300">{item.outcomes.map((outcome) => <li key={outcome}>• {outcome}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="demos" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">Interactive AI Demos</p>
            <h2 className="text-3xl font-bold md:text-4xl">Agentic AI Use Cases</h2>
            <p className="mt-4 text-slate-300">Practical AI solutions for banking operations, PMO reporting, healthcare operations, and enterprise IT transformation.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-4">
            <DemoCard title="BankIQ Agent" badge="Banking" desc="Natural-language banking intelligence across lending, deposits, finance, and compliance systems." prompt="Which commercial loans mature in the next 90 days?" answer="AI identified 42 loans maturing within 90 days with $18.7M exposure and highlighted high-risk relationships." chart={[{ label: "Loan Risk", value: 82 }, { label: "Deposit Outflow", value: 64 }, { label: "Cross-Sell", value: 71 }]} tags={["Lending AI", "Deposit Analytics", "Executive Reporting", "Compliance AI"]} />
            <DemoCard title="PMO Copilot" badge="PMO" desc="AI-powered portfolio reporting, RAID intelligence, executive summaries, and delivery governance." prompt="Generate executive portfolio summary with top risks." answer="AI detected 7 at-risk programs driven by vendor delays, budget variance, and unresolved dependencies." chart={[{ label: "At-Risk Programs", value: 7 }, { label: "Delayed Milestones", value: 12 }, { label: "Open Decisions", value: 9 }]} tags={["RAID Intelligence", "Portfolio Health", "Executive Reporting", "Governance AI"]} />
            <DemoCard title="Clinical Ops AI" badge="Healthcare" desc="AI-powered clinical operations assistant for patient access, staffing, workflow bottlenecks, and care coordination." prompt="Show staffing gaps and patient access bottlenecks." answer="AI identified appointment backlog in cardiology and staffing shortages across two clinics." chart={[{ label: "Access Delay", value: 76 }, { label: "Staffing Gap", value: 58 }, { label: "Auth Delay", value: 64 }]} tags={["Patient Access", "Clinical Workflow", "Staffing AI", "Revenue Cycle"]} />
            <DemoCard title="IT Ops AI" badge="Enterprise IT" desc="AI-driven operations intelligence for incident management, observability, root cause analysis, and SRE workflows." prompt="Identify production incidents and SLA risks." answer="AI detected API latency caused by Kubernetes node saturation and delayed autoscaling response." chart={[{ label: "API Latency", value: 91 }, { label: "Node Saturation", value: 73 }, { label: "SLA Risk", value: 68 }]} tags={["Incident AI", "Root Cause", "SRE Automation", "Observability"]} />
          </div>
        </div>
      </section>

      <section id="architecture" className="bg-slate-900 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">Agentic AI Architecture</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[{ title: "User Interface", desc: "Employees ask business questions in natural language." }, { title: "AI Orchestrator", desc: "Routes requests to the right specialized AI agents." }, { title: "Specialized Agents", desc: "Banking, PMO, healthcare, compliance, and IT operations agents." }, { title: "Governed Data Layer", desc: "Read-only approved views with RBAC and audit logging." }].map((card) => (
              <div key={card.title} className="rounded-2xl border border-slate-700 bg-slate-950 p-6"><h3 className="text-xl font-semibold text-cyan-400">{card.title}</h3><p className="mt-3 text-slate-300">{card.desc}</p></div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-950 p-6 font-mono text-sm text-slate-300">
            <p>Business User / Executive / Operations Team</p><p>↓</p><p>Natural Language Interface</p><p>↓</p><p>AI Planner / Orchestrator</p><p>↓</p><p>Banking Agent • PMO Agent • Clinical Ops Agent • IT Ops Agent • SQL Agent • Reporting Agent</p><p>↓</p><p>Core Systems • Jira • CRM • EHR • Monitoring Tools • Data Warehouse</p><p>↓</p><p>Answer + Source + Confidence + Audit Log</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">Case Studies</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {caseStudies.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-700 bg-slate-900 p-6"><p className="text-sm uppercase tracking-widest text-cyan-400">{item.metric}</p><h3 className="mt-3 text-xl font-semibold">{item.title}</h3><p className="mt-3 text-slate-300">{item.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">AI Governance Built In</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {["Role-based access control", "Read-only data views", "Audit logs and source traceability", "PII protection and masking", "Human approval for high-risk workflows", "Confidence scoring and explainability"].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-700 bg-slate-950 p-5 text-slate-300">✓ {item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-500/40 bg-cyan-500/10 p-10">
          <h2 className="text-3xl font-bold">Ready to Explore AI for Your Organization?</h2>
          <p className="mt-4 text-slate-300">Start with a practical AI assessment, roadmap, and pilot use case designed for measurable business value.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="mailto:info@vertexstat.ai" className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 hover:bg-cyan-400">Schedule Executive AI Session</a>
            <a href="/executive-ai-brief.txt" className="rounded-xl border border-slate-600 px-8 py-4 font-semibold hover:bg-slate-800">Download Executive Brief</a>
          </div>
        </div>
      </section>
    </main>
  );
}
