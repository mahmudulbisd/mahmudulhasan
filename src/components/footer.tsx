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
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="bg-background-alt text-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="space-y-6">
            <a
              href="#home"
              className="text-3xl font-black tracking-tight text-foreground cursor-pointer group font-display"
            >
              Mahmudul
              <span className="text-primary inline-block transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                .
              </span>
            </a>
            <div className="w-16 h-16 rounded-2xl bg-surface-2 border border-border flex items-center justify-center font-display text-2xl font-bold text-primary">
              MH
            </div>
            <p className="text-sm leading-relaxed">
              GoHighLevel CRM &amp; AI Automation Specialist helping service
              businesses turn more leads into booked clients with clean systems
              and performance marketing.
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
                    className="p-2.5 bg-surface-2 rounded-lg border border-transparent hover:border-accent hover:text-white transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <div className="inline-flex items-center gap-2 bg-surface-2 px-4 py-2 rounded-full border border-border">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-xs font-medium text-foreground">
                Available for new projects
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-foreground text-[12px] font-bold uppercase tracking-wider mb-6 font-display">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="/services"
                    className="text-sm hover:text-accent transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground text-[12px] font-bold uppercase tracking-wider mb-6 font-display">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground text-[12px] font-bold uppercase tracking-wider mb-6 font-display">
              Stay Updated
            </h4>
            <form
              className="mb-6 flex flex-col sm:flex-row gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-surface-2 border border-border rounded-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:border-accent text-foreground flex-1"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:from-primary-hover hover:to-primary transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
            <div className="flex items-center gap-3 text-sm">
              <CalendarDays size={18} className="text-accent" />
              <span>{siteConfig.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background border-y border-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 hover:text-white transition-colors min-w-0"
            >
              <Mail size={20} className="text-accent shrink-0" />
              <span className="truncate">{siteConfig.email}</span>
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-white transition-colors"
            >
              <Phone size={20} className="text-accent shrink-0" />
              <span>{siteConfig.phone}</span>
            </a>
            <div className="flex items-center gap-3">
              <CalendarDays size={20} className="text-accent shrink-0" />
              <span>Book a free 30-min call</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={20} className="text-accent shrink-0" />
              <span>Response within 24 hours</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-2">
          <p>© {new Date().getFullYear()} Mahmudul Hasan. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
