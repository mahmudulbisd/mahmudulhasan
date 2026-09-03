import { Hero } from "@/components/home/hero";
import { QuoteMarquee } from "@/components/home/quote-marquee";
import { BrandsStats } from "@/components/home/brands-stats";
import { ServicesSection } from "@/components/home/services-section";
import { PackagesSection } from "@/components/home/packages-section";
import { Methodology } from "@/components/home/methodology";
import { ExperienceSection } from "@/components/home/experience-section";
import { CaseStudiesSection } from "@/components/home/case-studies-section";
import { BlogSection } from "@/components/home/blog-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CtaSection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <QuoteMarquee />
      <BrandsStats />
      <div id="services">
        <ServicesSection />
      </div>
      <PackagesSection />
      <Methodology />
      <div id="about">
        <ExperienceSection />
      </div>
      <div id="portfolio">
        <CaseStudiesSection />
      </div>
      <BlogSection />
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="contact">
        <CtaSection />
      </div>
    </>
  );
}
