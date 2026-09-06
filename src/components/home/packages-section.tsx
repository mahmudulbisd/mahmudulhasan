import { Check } from "lucide-react";
import { BookingButton } from "@/components/booking-button";
import { Reveal } from "@/components/reveal";

const plans = [
  {
    name: "Starter",
    price: "$4,999",
    description: "One-time · Done-for-you business setup",
    features: [
      "Idea validation & market research",
      "Full e-commerce / service website",
      "Funnel & landing page build",
      "30 days technical support",
    ],
    popular: false,
  },
  {
    name: "Grow",
    price: "$7,999",
    description: "One-time · Setup + first campaigns",
    features: [
      "Everything in Starter",
      "Facebook & Instagram ads setup",
      "Logo & brand kit",
      "60 days technical support",
    ],
    popular: true,
  },
  {
    name: "Business PRO",
    price: "$9,999",
    description: "One-time · Full growth system",
    features: [
      "Everything in Grow",
      "GoHighLevel CRM & automation",
      "AI chatbot + advanced funnels",
      "90 days full support",
    ],
    popular: false,
  },
];

export function PackagesSection() {
  return (
    <section id="packages" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary-hover font-bold text-xs uppercase tracking-widest rounded-full mb-4 border border-primary/30">
              Investment
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4 font-display">
              Clear Packages, <span className="text-gradient">No Surprises</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Pick the engagement that fits your stage — every package is
              delivered end to end, with training and support included.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 100}>
              <div
                className={`relative rounded-3xl p-8 border transition-all duration-300 h-full flex flex-col ${
                  pkg.popular
                    ? "bg-surface/70 border-transparent shadow-xl shadow-primary/20 md:-translate-y-4 ring-2 ring-primary"
                    : "bg-surface/40 border-border shadow-sm hover:border-primary/40"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-1.5 rounded-full text-xs font-bold shadow-md whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <div
                    className={`text-xs font-bold uppercase tracking-widest mb-2 ${
                      pkg.popular ? "text-primary-hover" : "text-muted"
                    }`}
                  >
                    {pkg.name}
                  </div>
                  <div className="text-4xl font-extrabold text-foreground mb-1 font-display tracking-tight">
                    {pkg.price}
                  </div>
                  <div className="text-muted text-sm">{pkg.description}</div>
                </div>
                <ul className="space-y-3.5 mb-8 flex-grow">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-[#cbd2e1] min-w-0"
                    >
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="break-words">{feature}</span>
                    </li>
                  ))}
                </ul>
                <BookingButton
                  variant={pkg.popular ? "primary" : "secondary"}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm"
                >
                  Select {pkg.name}
                </BookingButton>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
