'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from "@/components/ui/card";
import Image from "next/image";
import Logo from "@/app/img/scaletrail.svg";
import { Check, ArrowRight, Menu, X } from "lucide-react";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  // --- inside LandingPage() component, above the return ---
  const stackFilters = ["All", "Infra-first", "PLG", "Sales-led", "Budget", "Enterprise"];
  const [stackFilter, setStackFilter] = useState("All");

  const stacks = [
    {
      id: "aws-jira-hubspot",
      title: "AWS + Jira + HubSpot",
      category: "Infra-first",
      desc: "Production-ready infra with sprint + CRM wiring.",
      bullets: [
        "Terraform (VPC, ECS/ECR, ALB, RDS) + CI/CD",
        "Jira projects/boards & sprint templates",
        "HubSpot pipeline + playbooks",
      ],
    },
    {
      id: "gcp-linear-notion",
      title: "GCP + Linear + Notion",
      category: "PLG",
      desc: "Fast product loops with docs that ship.",
      bullets: [
        "GCP Terraform (GKE/Cloud Run) + Observability",
        "Linear roadmap/backlog templates",
        "Notion PRDs & launch checklists",
      ],
    },
    {
      id: "linode-jira-apollo",
      title: "Linode + Jira + Apollo",
      category: "Sales-led",
      desc: "Efficient infra + outbound engine.",
      bullets: [
        "Linode Terraform + backups/monitoring",
        "Jira delivery workflows",
        "Apollo sequences & ICP templates",
      ],
    },
    {
      id: "vercel-linear-notion",
      title: "Vercel + Linear + Notion",
      category: "PLG",
      desc: "Frontend speed with tight product ops.",
      bullets: [
        "Vercel preview environments",
        "Linear cycles & issue templates",
        "Notion release notes hub",
      ],
    },
    {
      id: "render-trello-mailchimp",
      title: "Render + Trello + Mailchimp",
      category: "Budget",
      desc: "Lean stack for scrappy teams.",
      bullets: [
        "Render autoscaling services",
        "Trello boards for delivery",
        "Mailchimp onboarding/launch flows",
      ],
    },
    {
      id: "aws-linear-salesforce",
      title: "AWS + Linear + Salesforce",
      category: "Enterprise",
      desc: "Scale-up foundations with enterprise CRM.",
      bullets: [
        "AWS Terraform with guardrails (IAM/SOC2)",
        "Linear triage & on-call runbooks",
        "Salesforce pipeline + handoff automations",
      ],
    },
  ];

  const filteredStacks =
    stackFilter === "All" ? stacks : stacks.filter(s => s.category === stackFilter);


  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navbar */}
      <header className="w-full border-b bg-background sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand */}
          <a href="#" aria-label="ScaleTrail Home" className="flex items-baseline gap-2">
            <h1
              style={{ letterSpacing: -2, fontSize: 28 }}
              className="flex items-baseline gap-2 text-2xl font-bold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 bg-clip-text text-transparent"
            >
              ScaleTrail
              <Image src={Logo} alt="ScaleTrail logo" width={30} height={30} className="relative top-[1px]" />
            </h1>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#how-it-works" className="text-sm font-medium hover:text-blue-500">How it works</a>
            <a href="#features" className="text-sm font-medium hover:text-blue-500">Features</a>
            <a href="#features" className="text-sm font-medium hover:text-blue-500">Marketplace</a>
            <a href="#plans" className="text-sm font-medium hover:text-blue-500">Pricing</a>
            <a href="#faq" className="text-sm font-medium hover:text-blue-500">FAQ</a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline">Log In</Button>
            <Button asChild>
              <a href="#signup" className="inline-flex items-center gap-1">
                Sign Up <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {menuOpen && (
          <div className="md:hidden border-t bg-background px-6 py-4 flex flex-col gap-4">
            <a href="#how-it-works" className="text-sm font-medium hover:text-blue-500">How it works</a>
            <a href="#features" className="text-sm font-medium hover:text-blue-500">Features</a>
            <a href="#plans" className="text-sm font-medium hover:text-blue-500">Pricing</a>
            <a href="#faq" className="text-sm font-medium hover:text-blue-500">FAQ</a>
            <div className="flex gap-3 pt-2">
              <Button variant="outline" className="flex-1">Log In</Button>
              <Button className="flex-1" asChild>
                <a href="#signup">Sign Up</a>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="signup" className="flex flex-col items-center justify-center text-center px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-blue-300 to-pink-500 bg-clip-text text-transparent">
            Ship like a Series&nbsp;B, from day zero.
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground">
            Prewired playbooks and integrations for infrastructure, growth, and hiring—so you execute in days, not months.
          </p>

          {/* Email capture */}
          <form
            className="mt-8 flex w-full max-w-xl mx-auto gap-3 flex-col sm:flex-row"
            onSubmit={(e) => { e.preventDefault(); /* handle submit */ }}
          >
            <input
              type="email"
              required
              placeholder="Work email"
              aria-label="Work email"
              className="flex-1 rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button size="lg" type="submit" className="rounded-xl">
              Get Started
            </Button>
          </form>

          {/* Trust bar */}
          <div className="mt-8 text-xs uppercase tracking-wide text-muted-foreground">Trusted by operators from</div>
          <div className="mt-3 flex items-center justify-center gap-6 opacity-80">
            <div className="h-6 w-20 bg-muted rounded" />
            <div className="h-6 w-20 bg-muted rounded" />
            <div className="h-6 w-20 bg-muted rounded" />
            <div className="h-6 w-20 bg-muted rounded" />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
          {[
            { title: "Pick your stack", desc: "Choose templates for AWS/GCP/Linode, Jira/Linear, HubSpot/Notion, and ATS/HR." },
            { title: "Wire the workflows", desc: "Prebuilt automations connect leads, sprints, docs, and hiring into one flow." },
            { title: "Track in one pane", desc: "Founder dashboard shows pipeline, sprint health, hiring, and infra status." },
          ].map((s, i) => (
            <Card key={i} className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle>{i + 1}. {s.title}</CardTitle>
                <CardDescription>{s.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Infrastructure</h3>
              <p className="text-muted-foreground mb-4">
                Rock-solid cloud, security, and scalable systems.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> Terraform templates for Linode, AWS, GCP</li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> CI/CD & observability boilerplates</li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> Security guardrails out of the box</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Sales & Growth</h3>
              <p className="text-muted-foreground mb-4">
                Proven playbooks that convert.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> CRM integrations (HubSpot, Apollo)</li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> Outbound & PLG funnels prebuilt</li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> Metrics dashboards that matter</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Hiring</h3>
              <p className="text-muted-foreground mb-4">
                Processes that scale with you.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> ATS-ready scorecards & stages</li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> Sourcing workflows & referrals</li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> Onboarding checklists & docs</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Marketplace Section */}
      <section id="marketplace" className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold">Marketplace</h2>
          <p className="text-muted-foreground mt-2">
            Pick a prewired stack and launch with best-practice templates and integrations.
          </p>
        </div>

        {/* Filters */}
        <div className="max-w-6xl mx-auto mb-8 flex flex-wrap gap-2 justify-center">
          {stackFilters.map(f => (
            <button
              key={f}
              onClick={() => setStackFilter(f)}
              className={[
                "rounded-full border px-4 py-1.5 text-sm",
                stackFilter === f ? "bg-foreground text-background" : "hover:bg-muted",
              ].join(" ")}
              aria-pressed={stackFilter === f}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Stacks */}
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredStacks.map(stack => (
            <Card key={stack.id} className="rounded-2xl shadow-sm flex flex-col">
              <CardHeader>
                <CardTitle>{stack.title}</CardTitle>
                <CardDescription>{stack.category}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{stack.desc}</p>
                <ul className="space-y-2 text-sm">
                  {stack.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto flex items-center gap-3">
                <Button asChild className="flex-1">
                  <a href={`/setup?stack=${encodeURIComponent(stack.id)}`}>Use this stack</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={`/stacks/${encodeURIComponent(stack.id)}`}>Details</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="max-w-6xl mx-auto text-center text-sm text-muted-foreground mt-6">
          More stacks coming soon — suggest one at <a className="underline" href="mailto:hello@scaletrail.com">hello@scaletrail.com</a>.
        </p>
      </section>

      {/* Social Proof / Testimonial */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 md:p-8">
              <blockquote className="text-xl md:text-2xl leading-relaxed">
                “ScaleTrail cut our tool setup from 6 weeks to 5 days—pipeline and sprints finally talk to each other.”
              </blockquote>
              <div className="mt-4 text-sm text-muted-foreground">— Founder, Seed-stage SaaS</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Conversion CTA */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-3">Ready to scale your startup?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          Join founders who execute in days, not months.
        </p>
        <Button size="lg" asChild>
          <a href="#plans" className="inline-flex items-center gap-2">See Plans <ArrowRight className="h-5 w-5" /></a>
        </Button>
      </section>

      {/* Pricing */}
      <section id="plans" className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Simple, founder-friendly pricing</h2>
          <p className="text-muted-foreground mt-2">Start free. Upgrade as you grow. No lock-in.</p>
        </div>

        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Free */}
          <Card className="rounded-2xl shadow-sm flex flex-col">
            <CardHeader>
              <CardTitle>Free</CardTitle>
              <CardDescription>For hackers & idea-stage teams</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-4xl font-extrabold tracking-tight">$0</div>
              <ul className="space-y-2 text-sm text-left">
                <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> Core templates (infra, GTM, hiring)</li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> 1–2 integrations (Jira/Notion)</li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> 3 seats included</li>
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full" variant="outline">Get Started</Button>
            </CardFooter>
          </Card>

          {/* Starter */}
          <Card className="rounded-2xl shadow-sm flex flex-col">
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <CardDescription>Seed-ready operations in a box</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-4xl font-extrabold tracking-tight">
                $79<span className="text-base font-medium text-muted-foreground">/mo</span>
              </div>
              <ul className="space-y-2 text-sm text-left">
                <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> Unlimited templates</li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> 5–10 integrations</li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> Founder dashboard</li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> Up to 10 seats</li>
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full">Start Trial</Button>
            </CardFooter>
          </Card>

          {/* Growth (Most Popular tag without Badge dep) */}
          <Card className="rounded-2xl shadow-sm flex flex-col relative ring-1 ring-blue-200 dark:ring-blue-400">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] px-3 py-1 rounded-full border bg-background">
              Most Popular
            </div>
            <CardHeader>
              <CardTitle>Growth</CardTitle>
              <CardDescription>Scale from 10 → 25+ people</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-4xl font-extrabold tracking-tight">
                $249<span className="text-base font-medium text-muted-foreground">/mo</span>
              </div>
              <ul className="space-y-2 text-sm text-left">
                <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> Advanced workflows & API</li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> Deeper CRM/ATS integrations</li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> Analytics & reporting</li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> Priority support</li>
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full">Choose Growth</Button>
            </CardFooter>
          </Card>

          {/* Pro */}
          <Card className="rounded-2xl shadow-sm flex flex-col">
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>Serious ops for 25–100 employees</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-4xl font-extrabold tracking-tight">
                $799<span className="text-base font-medium text-muted-foreground">/mo</span>
              </div>
              <ul className="space-y-2 text-sm text-left">
                <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> SSO/SOC2 & security controls</li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> Custom playbooks & mappings</li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> White-glove onboarding</li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> Up to 100 seats</li>
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full" variant="secondary">Talk to Sales</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Enterprise band */}
        <div className="max-w-6xl mx-auto mt-6">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">Enterprise</h3>
                <p className="text-sm text-muted-foreground">
                  Series B+ scaleups needing custom workflows, security reviews, and SLAs.
                </p>
              </div>
              <div className="text-left md:text-right">
                <div className="text-lg font-bold">Custom pricing</div>
                <p className="text-sm text-muted-foreground">Security, compliance, & dedicated success</p>
              </div>
              <Button size="lg">Contact Sales</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 max-w-4xl mx-auto" id="faq">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">How does ScaleTrail work?</h3>
            <p className="text-muted-foreground">
              We provide prewired templates and integrations that connect your tools and workflows so you can execute faster.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Can I try before committing?</h3>
            <p className="text-muted-foreground">
              Yes — start on Free or take a 14-day trial on any paid plan.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Do you replace Jira/Notion?</h3>
            <p className="text-muted-foreground">
              No. We act as the glue—connecting Jira/Linear, Notion/HubSpot, ATS/HR, and your cloud so they work together.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} ScaleTrail. All rights reserved.
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed md:hidden bottom-0 left-0 right-0 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-3">
        <div className="max-w-7xl mx-auto px-2">
          <Button className="w-full" asChild>
            <a href="#plans" className="inline-flex items-center justify-center gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
