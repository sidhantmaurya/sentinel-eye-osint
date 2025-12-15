import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { RiskGauge } from "@/components/osint/RiskGauge";
import {
  Shield,
  Phone,
  Mail,
  Globe,
  User,
  Server,
  ArrowRight,
  Check,
  Zap,
  Lock,
  Eye,
} from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Phone Intelligence",
    description: "Carrier detection, geolocation, timezone mapping, and validation for any phone number.",
  },
  {
    icon: Mail,
    title: "Email Analysis",
    description: "Domain verification, breach detection, social profile discovery, and deliverability checks.",
  },
  {
    icon: Server,
    title: "IP Investigation",
    description: "Geolocation, ISP identification, proxy/VPN detection, and threat intelligence scoring.",
  },
  {
    icon: User,
    title: "Username Search",
    description: "Cross-platform presence detection across 100+ social networks and websites.",
  },
  {
    icon: Globe,
    title: "Domain Recon",
    description: "WHOIS data, DNS records, SSL certificates, and technology stack detection.",
  },
  {
    icon: Eye,
    title: "Risk Assessment",
    description: "AI-powered risk scoring with detailed threat analysis and recommendations.",
  },
];

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    searches: "10 searches/day",
    features: ["Basic OSINT lookups", "Risk scoring", "JSON export"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    searches: "200 searches/month",
    features: ["All Free features", "Advanced analytics", "API access", "Priority support"],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    searches: "Unlimited searches",
    features: ["All Pro features", "Custom integrations", "Dedicated support", "SLA guarantee"],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 gradient-cyber opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm">Ethical OSINT Platform</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Intelligence{" "}
              <span className="gradient-text cyber-text-glow">Redefined</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Professional-grade OSINT tools for investigators, researchers, and security professionals. 
              Ethical intelligence gathering from public sources only.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="cyber-glow text-lg px-8">
                  Start Free <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Try Demo
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold gradient-text">50K+</p>
                <p className="text-sm text-muted-foreground">Searches Daily</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold gradient-text">99.9%</p>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold gradient-text">5+</p>
                <p className="text-sm text-muted-foreground">OSINT Modules</p>
              </div>
            </div>
          </div>

          {/* Demo Preview */}
          <div className="mt-16 max-w-3xl mx-auto">
            <GlassCard glow className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 text-primary" />
                    Phone Lookup Result
                  </div>
                  <p className="font-mono text-lg">+1 (555) 123-4567</p>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-muted-foreground">Location:</span> California, USA</p>
                    <p><span className="text-muted-foreground">Carrier:</span> Verizon Wireless</p>
                    <p><span className="text-muted-foreground">Type:</span> Mobile</p>
                  </div>
                </div>
                <RiskGauge score={25} size="lg" />
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive <span className="gradient-text">OSINT Suite</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need for professional intelligence gathering, all in one platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <GlassCard key={index} className="group">
                <div className="p-2 w-fit rounded-lg bg-primary/10 mb-4 group-hover:cyber-glow-sm transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="gradient-text">ShadowTrace?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-green-500/10">
                    <Lock className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">100% Ethical & Legal</h3>
                    <p className="text-sm text-muted-foreground">
                      We only use publicly available data sources. No hacking, no private databases.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-primary/10">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Lightning Fast</h3>
                    <p className="text-sm text-muted-foreground">
                      Get comprehensive results in seconds, not minutes. Optimized for speed.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-accent/10">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">GDPR & CCPA Compliant</h3>
                    <p className="text-sm text-muted-foreground">
                      Full regulatory compliance. Your data and searches are protected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <GlassCard glow className="p-8">
                <div className="space-y-4">
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-[95%] bg-gradient-to-r from-primary to-accent rounded-full" />
                  </div>
                  <p className="text-sm text-muted-foreground">Accuracy Rate: 95%</p>
                  
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-[99%] bg-gradient-to-r from-green-400 to-primary rounded-full" />
                  </div>
                  <p className="text-sm text-muted-foreground">Uptime: 99.9%</p>
                  
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-[88%] bg-gradient-to-r from-accent to-primary rounded-full" />
                  </div>
                  <p className="text-sm text-muted-foreground">Customer Satisfaction: 88%</p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start free, upgrade when you need more. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <GlassCard
                key={index}
                glow={plan.popular}
                className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.searches}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
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

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <GlassCard glow className="max-w-3xl mx-auto text-center py-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Investigation?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Join thousands of professionals using ShadowTrace for ethical intelligence gathering.
            </p>
            <Link to="/register">
              <Button size="lg" className="cyber-glow text-lg px-8">
                Create Free Account <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
}
