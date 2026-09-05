"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { BookingButton } from "@/components/booking-button";
import { Reveal } from "@/components/reveal";

const dfyPackages = [
  {
    name: "Starter",
    price: "$4,999",
    description: "One-time investment",
    features: [
      "Idea Validation & Market Research",
      "Basic Competitor Analysis",
      "Full E-commerce Website",
      "Pricing Strategy",
      "30 Days Technical Support",
    ],
    popular: false,
  },
  {
    name: "Grow",
    price: "$7,999",
    description: "One-time investment",
    features: [
      "Everything in Starter",
      "Facebook & Instagram Ads Setup",
      "Logo & Brand Kit",
      "Product Sales Video (1 unit)",
      "60 Days Technical Support",
    ],
    popular: true,
  },
  {
    name: "Business PRO",
    price: "$9,999",
    description: "One-time investment",
    features: [
      "Everything in Grow",
      "3 Product Videos + 5 Graphics",
      "Server-Side Tracking + Advanced Funnels",
      "AI Chatbot Auto-Reply Setup",
      "90 Days Full Support",
    ],
    popular: false,
  },
];

const aiPackages = [
  {
    name: "AI Starter",
    price: "$1,499",
    description: "One-time setup",
    features: [
      "Custom AI Chatbot for Website",
      "Basic Lead Qualification",
      "FAQ Auto-Replies",
      "Email Notification Setup",
      "14 Days Support",
    ],
    popular: false,
  },
  {
    name: "AI Growth",
    price: "$2,999",
    description: "One-time setup",
    features: [
      "Everything in AI Starter",
      "CRM Integration (GoHighLevel/HubSpot)",
      "Appointment Booking Bot",
      "SMS Missed Call Text-Back",
      "30 Days Support",
    ],
    popular: true,
  },
  {
    name: "AI Enterprise",
    price: "$4,999",
    description: "One-time setup",
    features: [
      "Everything in AI Growth",
      "Multi-Channel AI (FB, IG, WhatsApp)",
      "Zapier / Make Advanced Workflows",
      "Custom Voice AI Agent",
      "60 Days Full Support",
    ],
    popular: false,
  },
];

type Tab = "dfy" | "ai";

export function PackagesSection() {
  const [tab, setTab] = useState<Tab>("dfy");
  const packages = tab === "dfy" ? dfyPackages : aiPackages;

  return (
    <section id="packages" className="py-16 md:py-24 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-block px-4 py-1.5 bg-[rgba(232,135,58,0.1)] text-[#e8873a] font-bold text-xs uppercase tracking-widest rounded-full mb-4 border border-[rgba(232,135,58,0.3)] font-display">
              Our Packages
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-[#f5ecd9] font-display">
              Zero to First Sales Packages
            </h2>
            <p className="text-[#9aa3b8] text-lg max-w-2xl mx-auto mb-10">
              All packages include a complete done-for-you business setup. We
              handle everything from day one.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12 relative z-10">
              <button
                onClick={() => setTab("dfy")}
                className={`relative px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 border-2 cursor-pointer ${
                  tab === "dfy"
                    ? "bg-gradient-to-r from-[#e8873a] to-[#b85f1e] border-[#e8873a] text-white shadow-md"
                    : "bg-transparent border-[rgba(245,236,217,0.15)] text-[#9aa3b8] hover:border-[#e8873a]/50 hover:text-[#e8873a]"
                }`}
              >
                Done-For-You Packages
              </button>
              <button
                onClick={() => setTab("ai")}
                className={`relative px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 border-2 cursor-pointer ${
                  tab === "ai"
                    ? "bg-gradient-to-r from-[#e8873a] to-[#b85f1e] border-[#e8873a] text-white shadow-md"
                    : "bg-transparent border-[rgba(245,236,217,0.15)] text-[#9aa3b8] hover:border-[#e8873a]/50 hover:text-[#e8873a]"
                }`}
              >
                AI Services
              </button>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 100}>
              <div
                className={`relative rounded-3xl p-8 border transition-all duration-300 h-full flex flex-col ${
                  pkg.popular
                    ? "bg-[rgba(21,30,54,0.7)] border-transparent shadow-xl shadow-[rgba(232,135,58,0.15)] md:-translate-y-4 conic-border"
                    : "bg-[rgba(21,30,54,0.45)] border-[rgba(245,236,217,0.08)] shadow-sm"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#e8873a] to-[#b85f1e] text-white px-6 py-1.5 rounded-full text-xs font-bold shadow-md whitespace-nowrap">
                    ⭐ Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <div
                    className={`text-xs font-bold uppercase tracking-widest mb-2 ${
                      pkg.popular ? "text-[#e8873a]" : "text-[#9aa3b8]"
                    }`}
                  >
                    {pkg.name}
                  </div>
                  <div className="text-5xl font-black text-[#f5ecd9] mb-1 font-display">
                    {pkg.price}
                  </div>
                  <div className="text-[#9aa3b8] text-sm">
                    {pkg.description}
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-[#cbd2e1] min-w-0"
                    >
                      <Check className="w-5 h-5 text-[#35c8c2] shrink-0 mt-0.5" />
                      <span className="break-words">{feature}</span>
                    </li>
                  ))}
                </ul>
                <BookingButton
                  className={`w-full py-4 rounded-xl font-semibold text-sm ${
                    pkg.popular
                      ? ""
                      : "bg-transparent border-2 border-[#35c8c2] text-[#35c8c2] hover:bg-[rgba(53,200,194,0.1)]"
                  }`}
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
