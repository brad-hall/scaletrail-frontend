'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "@/app/img/scaletrail.svg"
import { Check } from "lucide-react";


export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navbar */}
      <header className="w-full border-b bg-background sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <h1
            style={{ letterSpacing: -2, fontSize: 28 }}
            className="flex items-baseline gap-1 text-2xl font-bold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 bg-clip-text text-transparent"
          >
            ScaleTrail
            <Image src={Logo} alt="ScaleTrail logo" width={30} height={30} className="relative top-[1px]" />
          </h1>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-blue-500">Home</a>
            <a href="#pricing" className="text-sm font-medium hover:text-blue-500">Pricing</a>
            <a href="#faq" className="text-sm font-medium hover:text-blue-500">FAQ</a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline">Log In</Button>
            <Button>Sign Up</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {menuOpen && (
          <div className="md:hidden border-t bg-background px-6 py-4 flex flex-col gap-4">
            <a href="#" className="text-sm font-medium hover:text-blue-500">Home</a>
            <a href="#pricing" className="text-sm font-medium hover:text-blue-500">Pricing</a>
            <a href="#faq" className="text-sm font-medium hover:text-blue-500">FAQ</a>
            <div className="flex gap-3 pt-2">
              <Button variant="outline" className="flex-1">Log In</Button>
              <Button className="flex-1">Sign Up</Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6 py-20">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-blue-300 to-pink-500 bg-clip-text text-transparent">
          ScaleTrail
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Helping early-stage businesses scale smarter — from infrastructure, to
          sales, to hiring.
        </p>
        <div className="mt-8 flex gap-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">Infrastructure</h3>
              <p className="text-muted-foreground">
                Build a rock-solid foundation with cloud, security, and scalable
                systems tailored to your growth.
              </p>
              <ul>
                <li>Terraform Templates for Linode, AWS, and GCP</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">Sales</h3>
              <p className="text-muted-foreground">
                Accelerate revenue with proven playbooks, CRM optimization, and
                go-to-market strategy.
              </p>
              <ul>
                <li>CRM Integrations</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">Hiring</h3>
              <p className="text-muted-foreground">
                Attract and retain the right talent with processes that scale as
                quickly as your company does.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 text-center" id="pricing">
        <h2 className="text-3xl font-bold mb-4">
          Ready to scale your startup?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Join dozens of founders who trust ScaleTrail to guide them from seed
          stage to success.
        </p>
        <Button size="lg">Book a Demo</Button>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Simple, founder-friendly pricing</h2>
          <p className="text-muted-foreground mt-2">
            Start free. Upgrade as you grow. No lock-in.
          </p>
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
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 mt-0.5" />
                  Core templates (infra, GTM, hiring)
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 mt-0.5" />
                  1–2 integrations (e.g., Jira or Notion)
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 mt-0.5" />
                  3 seats included
                </li>
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

          {/* Growth (Most Popular) */}
          <Card className="rounded-2xl shadow-sm border-blue-200 dark:border-blue-400 flex flex-col relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge className="rounded-full px-3 py-1 text-xs">Most Popular</Badge>
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

      {/* FAQ Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto" id="faq">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">How does ScaleTrail work?</h3>
            <p className="text-muted-foreground">
              We provide tailored strategies and resources to help startups grow across infrastructure, sales, and hiring.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Can I try before committing?</h3>
            <p className="text-muted-foreground">
              Yes — book a demo with us to see how ScaleTrail can fit your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} ScaleTrail. All rights reserved.
      </footer>
    </div>
  );
}
