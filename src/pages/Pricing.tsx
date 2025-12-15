import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Check, Zap, Building, Shield } from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "Perfect for getting started",
    price: "$0",
    period: "forever",
    searches: "10 searches/day",
    icon: Zap,
    features: [
      "5 OSINT modules",
      "Basic risk scoring",
      "JSON export",
      "Community support",
      "Single user",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Starter",
    description: "For individual investigators",
    price: "$29",
    period: "/month",
    searches: "200 searches/month",
    icon: Shield,
    features: [
      "All Free features",
      "Advanced analytics",
      "API access (1,000 calls)",
      "Email support",
      "Search history (30 days)",
      "Custom reports",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Pro",
    description: "For security professionals",
    price: "$99",
    period: "/month",
    searches: "1,000 searches/month",
    icon: Shield,
    features: [
      "All Starter features",
      "Bulk lookups",
      "API access (10,000 calls)",
      "Priority support",
      "Search history (1 year)",
      "Team members (up to 5)",
      "Webhooks",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For organizations",
    price: "Custom",
    period: "",
    searches: "Unlimited searches",
    icon: Building,
    features: [
      "All Pro features",
      "Unlimited team members",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "On-premise option",
      "Custom training",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    q: "What counts as a search?",
    a: "Each OSINT lookup (phone, email, IP, username, or domain) counts as one search. Viewing previous results doesn't use searches.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes! All plans are month-to-month with no long-term commitment. Cancel anytime from your dashboard.",
  },
  {
    q: "Is the data legal to use?",
    a: "Yes. We only use publicly available sources and comply with GDPR, CCPA, and other privacy regulations.",
  },
  {
    q: "Do you offer refunds?",
    a: "We offer a 14-day money-back guarantee on all paid plans if you're not satisfied.",
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-cyber opacity-30" />
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade when you need more power. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <GlassCard
                key={index}
                glow={plan.popular}
                className={`relative flex flex-col ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                    <plan.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1 mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-primary mt-2">{plan.searches}</p>
                </div>

                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to="/register">
                  <Button
                    className={`w-full ${plan.popular ? "cyber-glow" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <GlassCard key={index}>
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <GlassCard glow className="max-w-3xl mx-auto text-center py-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of professionals using ShadowTrace for ethical intelligence.
            </p>
            <Link to="/register">
              <Button size="lg" className="cyber-glow">
                Start Free Trial
              </Button>
            </Link>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
}
