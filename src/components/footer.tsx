"use client";

import {
  Globe,
  Link2,
  Code,
  Play,
  MessageCircle,
  Mail,
  Phone,
  CalendarDays,
  Clock,
} from "lucide-react";
import { siteConfig } from "@/lib/site";
import { WalleRobot } from "@/components/walle-robot";

const socialIcons: Record<string, typeof Globe> = {
  Facebook: Globe,
  LinkedIn: Link2,
  GitHub: Code,
  YouTube: Play,
  WhatsApp: MessageCircle,
};

export function Footer() {
  const services = [
    "GoHighLevel Setup",
    "AI Automation",
    "Funnel Design",
    "Facebook Ads",
    "Shopify/WordPress",
    "Project Management",
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Case Studies", href: "/#portfolio" },
    { name: "Pricing", href: "/#packages" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="bg-[#0d1220] text-[#9aa3b8] border-t border-[rgba(245,236,217,0.08)]">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="space-y-6">
            <a
              href="#home"
              className="text-3xl font-black tracking-tighter text-[#f5ecd9] cursor-pointer group font-display"
            >
              Mahmudul
              <span className="text-[#e8873a] inline-block transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                .
              </span>
            </a>
            <div className="w-24">
              <WalleRobot className="w-24 h-24 animate-float-slow" />
            </div>
            <p className="text-sm leading-relaxed">
              GoHighLevel Expert & AI Automation Specialist. Building growth
              systems for service businesses worldwide — one tidy cube at a
              time.
            </p>
            <div className="flex flex-wrap gap-3">
              {siteConfig.socials.map((social) => {
                const Icon = socialIcons[social.label] ?? MessageCircle;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="p-2.5 bg-[#161b2b] rounded-lg border border-transparent hover:border-[#35c8c2] hover:text-white transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <div className="inline-flex items-center gap-2 bg-[#161b2b] px-4 py-2 rounded-full border border-[rgba(245,236,217,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#35c8c2] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#35c8c2]" />
              </span>
              <span className="text-xs font-medium text-[#f5ecd9]">
                Available for new missions
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-[#f5ecd9] text-[12px] font-bold uppercase tracking-[0.5px] mb-6 font-display">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="/services"
                    className="text-sm hover:text-[#35c8c2] transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#f5ecd9] text-[12px] font-bold uppercase tracking-[0.5px] mb-6 font-display">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-[#35c8c2] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#f5ecd9] text-[12px] font-bold uppercase tracking-[0.5px] mb-6 font-display">
              Stay Updated
            </h4>
            <form
              className="mb-6 flex flex-col sm:flex-row gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-[#161b2b] border border-[rgba(245,236,217,0.1)] rounded-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:border-[#35c8c2] text-[#f5ecd9] flex-1"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#e8873a] to-[#b85f1e] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:from-[#f2a35f] hover:to-[#c96f2a] transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
            <div className="flex items-center gap-3 text-sm">
              <CalendarDays size={18} className="text-[#35c8c2]" />
              <span>{siteConfig.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0a0e1a] border-y border-[rgba(245,236,217,0.08)]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 hover:text-white transition-colors"
            >
              <Mail size={20} className="text-[#35c8c2]" />
              <span>{siteConfig.email}</span>
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-white transition-colors"
            >
              <Phone size={20} className="text-[#35c8c2]" />
              <span>{siteConfig.phone}</span>
            </a>
            <div className="flex items-center gap-3">
              <CalendarDays size={20} className="text-[#35c8c2]" />
              <span>Book a free 30-min call</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={20} className="text-[#35c8c2]" />
              <span>Response within 24 hours</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#5f6b8a]">
          <p>
            © {new Date().getFullYear()} Mahmudul Hasan. All rights reserved.
            Built with rust &amp; love 🤖
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
