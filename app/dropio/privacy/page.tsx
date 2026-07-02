import type { Metadata } from "next";
import { Main } from "@/app/components/layout/main";
import { DotGrid } from "@/app/components/ui/dot-grid";

export const metadata: Metadata = {
  title: "Privacy Policy — Dropio",
  description:
    "Dropio does not collect any personal data. All your information stays on your device.",
};

const sections = [
  {
    id: "01",
    title: "Data We Collect",
    body: "Dropio does not collect any personal data. All information you enter — subscription names, amounts, categories, and dates — is stored exclusively on your device using Apple's SwiftData framework. This data never leaves your device and is not accessible to us.",
  },
  {
    id: "02",
    title: "Local Notifications",
    body: "Dropio uses local notifications to remind you of upcoming subscription renewals. These notifications are generated entirely on your device and do not involve any external servers or data transmission.",
  },
  {
    id: "03",
    title: "Purchases",
    body: "If you choose to unlock the full version of Dropio, the transaction is processed entirely by Apple through the App Store. We do not have access to your payment information. Apple's privacy policy governs all purchase data.",
  },
  {
    id: "04",
    title: "Third-Party Services",
    body: "Dropio does not integrate with any third-party analytics, advertising, or tracking services. We do not sell, share, or transmit your data to any third party.",
  },
  {
    id: "05",
    title: "Data Storage",
    body: "All your data is stored locally on your device. If you delete the app, all associated data is permanently removed. We have no ability to recover deleted data.",
  },
  {
    id: "06",
    title: "Data Ownership & Export",
    body: "Your subscriptions and payment history belong to you. From Settings → Data, you can export your information at any time. Exports are generated locally on your device, and nothing is shared with us or any third party unless you choose to do so.",
  },
  {
    id: "07",
    title: "Children's Privacy",
    body: "Dropio does not knowingly collect data from children under 13. The app does not require account creation or any personal information to function.",
  },
];

export default function DriopioPrivacyPage() {
  return (
    <Main>
      {/* Hero */}
      <section className="relative flex-1 flex items-center overflow-hidden border-b border-border min-h-[60vh]">
        <DotGrid />
        <div className="container relative py-24">
          <div className="max-w-2xl">
            <p className="font-nothing-subtitle text-xs text-caption mb-12">
              Dropio · Privacy Policy
            </p>

            <h1 className="heading-44 uppercase mb-10">
              Your data
              <br />
              stays yours.
            </h1>

            <p className="font-mono text-sm text-caption uppercase tracking-widest">
              Last updated: July 2026
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-b border-border">
        <div className="container py-16">
          <p className="font-sans text-xl text-body max-w-2xl leading-relaxed">
            Dropio is a subscription tracking app designed to help you manage
            your personal finances. We are committed to protecting your privacy.
            This policy explains what data we collect, how we use it, and your
            rights.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="border-b border-border">
        <div className="container py-16">
          <div className="divide-y divide-border">
            {sections.map((section) => (
              <div
                key={section.id}
                className="py-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-16 items-start"
              >
                <span className="font-mono text-xs text-disabled uppercase tracking-widest w-8 shrink-0 pt-1">
                  {section.id}
                </span>
                <div className="flex flex-col gap-4">
                  <h2 className="font-sans text-lg font-medium text-title">
                    {section.title}
                  </h2>
                  <p className="font-sans text-base text-body leading-relaxed max-w-xl">
                    {section.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-b border-border">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-16 items-start">
            <span className="font-mono text-xs text-disabled uppercase tracking-widest w-8 shrink-0 pt-1">
              08
            </span>
            <div className="flex flex-col gap-4">
              <h2 className="font-sans text-lg font-medium text-title">
                Contact
              </h2>
              <p className="font-sans text-base text-body leading-relaxed max-w-xl">
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <a
                href="mailto:support@oscarcastaneda.dev"
                className="font-mono text-base text-success hover:text-green-400 hover:underline transition-colors duration-200"
              >
                support@oscarcastaneda.dev
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="py-8">
        <div className="container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-nothing-subtitle text-sm text-caption">
            Dropio is a manual subscription tracking app for iPhone.
          </p>
          <p className="font-nothing-subtitle text-sm text-caption">
            Built by Permanent Software.
          </p>
        </div>
      </div>
    </Main>
  );
}
