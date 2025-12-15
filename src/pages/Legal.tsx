import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, FileText, Lock, AlertTriangle } from "lucide-react";

export default function Legal() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Legal & <span className="gradient-text">Compliance</span>
            </h1>
            <p className="text-muted-foreground">
              Transparency and ethics are at the core of ShadowTrace
            </p>
          </div>

          {/* Important Notice */}
          <GlassCard className="mb-8 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Ethical Use Disclaimer</h3>
                <p className="text-sm text-muted-foreground">
                  This platform uses <strong>publicly available OSINT sources only</strong>. 
                  We do not engage in real-time tracking, access private databases, or perform 
                  invasive surveillance. All data is approximate and intended for educational, 
                  investigative, and legitimate security purposes only.
                </p>
              </div>
            </div>
          </GlassCard>

          <Tabs defaultValue="terms" className="space-y-6">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="terms" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Terms of Service
              </TabsTrigger>
              <TabsTrigger value="privacy" className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Privacy Policy
              </TabsTrigger>
              <TabsTrigger value="compliance" className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Compliance
              </TabsTrigger>
            </TabsList>

            <TabsContent value="terms">
              <GlassCard className="prose prose-invert max-w-none">
                <h2 className="text-xl font-semibold mb-4">Terms of Service</h2>
                <p className="text-muted-foreground mb-4">Last updated: December 2024</p>

                <h3 className="text-lg font-medium mt-6 mb-3">1. Acceptance of Terms</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  By accessing or using ShadowTrace, you agree to be bound by these Terms of Service. 
                  If you do not agree, do not use our services.
                </p>

                <h3 className="text-lg font-medium mt-6 mb-3">2. Permitted Use</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  ShadowTrace is designed for legitimate purposes including:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mb-4 space-y-1">
                  <li>Security research and threat intelligence</li>
                  <li>Due diligence and background verification</li>
                  <li>Fraud prevention and investigation</li>
                  <li>Academic and educational research</li>
                  <li>Journalism and fact-checking</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">3. Prohibited Activities</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  You may NOT use ShadowTrace for:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mb-4 space-y-1">
                  <li>Stalking, harassment, or intimidation</li>
                  <li>Unauthorized surveillance of individuals</li>
                  <li>Circumventing legal restrictions or court orders</li>
                  <li>Any illegal activities under applicable law</li>
                  <li>Violating the privacy rights of others</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">4. Data Accuracy</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  All information provided is sourced from publicly available data and may not be 
                  100% accurate. ShadowTrace does not guarantee the accuracy, completeness, or 
                  timeliness of any information.
                </p>

                <h3 className="text-lg font-medium mt-6 mb-3">5. Limitation of Liability</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  ShadowTrace shall not be liable for any direct, indirect, incidental, or 
                  consequential damages arising from the use of our services.
                </p>
              </GlassCard>
            </TabsContent>

            <TabsContent value="privacy">
              <GlassCard className="prose prose-invert max-w-none">
                <h2 className="text-xl font-semibold mb-4">Privacy Policy</h2>
                <p className="text-muted-foreground mb-4">Last updated: December 2024</p>

                <h3 className="text-lg font-medium mt-6 mb-3">Information We Collect</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We collect only the minimum information necessary to provide our services:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mb-4 space-y-1">
                  <li>Account information (email, name)</li>
                  <li>Search queries (for history and analytics)</li>
                  <li>Usage data (anonymized for service improvement)</li>
                  <li>Payment information (processed by secure third-party)</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">How We Use Your Data</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground mb-4 space-y-1">
                  <li>To provide and improve our services</li>
                  <li>To process payments and prevent fraud</li>
                  <li>To communicate service updates</li>
                  <li>To comply with legal obligations</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">Data Retention</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Search history is retained based on your plan (30 days to 1 year). 
                  You can delete your data at any time from your account settings.
                </p>

                <h3 className="text-lg font-medium mt-6 mb-3">Your Rights</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Under GDPR and CCPA, you have the right to:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mb-4 space-y-1">
                  <li>Access your personal data</li>
                  <li>Request correction or deletion</li>
                  <li>Object to processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent</li>
                </ul>
              </GlassCard>
            </TabsContent>

            <TabsContent value="compliance">
              <GlassCard className="prose prose-invert max-w-none">
                <h2 className="text-xl font-semibold mb-4">Compliance & Certifications</h2>

                <h3 className="text-lg font-medium mt-6 mb-3">Regulatory Compliance</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <h4 className="font-medium mb-2">GDPR Compliant</h4>
                    <p className="text-xs text-muted-foreground">
                      Full compliance with EU General Data Protection Regulation
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <h4 className="font-medium mb-2">CCPA Compliant</h4>
                    <p className="text-xs text-muted-foreground">
                      California Consumer Privacy Act compliance
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-medium mt-6 mb-3">Data Sources</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  ShadowTrace only uses publicly available and legally obtainable data sources:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mb-4 space-y-1">
                  <li>Public WHOIS records</li>
                  <li>Public DNS records</li>
                  <li>Public social media profiles</li>
                  <li>Public phone number databases</li>
                  <li>Public IP geolocation services</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">Security Measures</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground mb-4 space-y-1">
                  <li>256-bit SSL encryption</li>
                  <li>Regular security audits</li>
                  <li>SOC 2 Type II compliant infrastructure</li>
                  <li>No storage of sensitive search queries</li>
                </ul>
              </GlassCard>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}
