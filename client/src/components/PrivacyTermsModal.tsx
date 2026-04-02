import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface PrivacyTermsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function PrivacyTermsModal({ open, onOpenChange }: PrivacyTermsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh]" data-testid="modal-privacy-terms">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Privacy Policy & Terms of Service</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Last updated: October 22, 2025
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[calc(90vh-120px)] pr-4">
          <div className="space-y-6 text-sm leading-relaxed">
            <p className="text-muted-foreground">
              Welcome to Mise en POP. We build technology that empowers hospitality professionals — from bartenders to brand teams — to connect, collaborate, and grow.
            </p>
            
            <p className="text-muted-foreground">
              By using our website or products (including Jenry and Bar Connect), you agree to the following terms and acknowledge how we handle your information.
            </p>

            <section>
              <h3 className="font-semibold text-lg text-foreground mb-3">1. Information We Collect</h3>
              <p className="text-muted-foreground mb-2">
                We collect only what helps us operate and improve our services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Account details:</strong> name, email, and optional profile information.</li>
                <li><strong>Usage data:</strong> basic analytics such as page views and device type.</li>
                <li><strong>Location data (Jenry app only):</strong> used to show relevant hospitality activity, never shared publicly without your consent.</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                We never sell your personal information.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg text-foreground mb-3">2. How We Use Your Information</h3>
              <p className="text-muted-foreground mb-2">
                We use the data we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Operate, maintain, and improve our services.</li>
                <li>Communicate updates, support messages, and new features.</li>
                <li>Protect the safety and integrity of our platform.</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                You can opt out of non-essential emails at any time.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg text-foreground mb-3">3. Cookies & Analytics</h3>
              <p className="text-muted-foreground">
                We use cookies and similar technologies to understand how visitors use our site. You can disable cookies in your browser settings, but some features may not work properly.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg text-foreground mb-3">4. Data Security</h3>
              <p className="text-muted-foreground">
                We use industry-standard encryption and secure storage to protect your data. While no system is 100% secure, we continuously review our practices to safeguard your information.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg text-foreground mb-3">5. Your Rights</h3>
              <p className="text-muted-foreground mb-2">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access, correct, or delete your data.</li>
                <li>Request a copy of the data we hold.</li>
                <li>Withdraw consent to data processing.</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                To make a request, contact <a href="mailto:privacy@miseenpop.com" className="text-primary hover:underline">privacy@miseenpop.com</a>.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg text-foreground mb-3">6. Use of Our Services</h3>
              <p className="text-muted-foreground mb-2">
                You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Use Mise en POP products responsibly and in compliance with applicable laws.</li>
                <li>Not misuse, copy, or reverse-engineer our software.</li>
                <li>Respect the privacy and safety of others within the community.</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                We may update or suspend services as we evolve.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg text-foreground mb-3">7. Intellectual Property</h3>
              <p className="text-muted-foreground">
                All content, trademarks, and software belong to Mise en POP, unless otherwise noted. You may not reuse or distribute our materials without written permission.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg text-foreground mb-3">8. Limitation of Liability</h3>
              <p className="text-muted-foreground">
                Our services are provided "as is." To the fullest extent allowed by law, Mise en POP is not liable for any indirect or incidental damages arising from use of our website or products.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg text-foreground mb-3">9. Updates to This Policy</h3>
              <p className="text-muted-foreground">
                We may revise this policy from time to time. If we make significant changes, we'll post a clear notice on our website or within our apps.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg text-foreground mb-3">10. Contact Us</h3>
              <p className="text-muted-foreground">
                For questions or concerns, please contact:<br />
                📧 <a href="mailto:info@miseenpop.com" className="text-primary hover:underline">info@miseenpop.com</a>
              </p>
            </section>

            <div className="pt-4 border-t text-center text-muted-foreground text-xs">
              <p>&copy; 2025 Mise en POP. All rights reserved.</p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
