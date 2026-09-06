import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { ServicesSection } from "@/components/home/services-section";
import { AboutMe } from "@/components/home/about-me";
import { ExperienceSection } from "@/components/home/experience-section";
import { CaseStudiesSection } from "@/components/home/case-studies-section";
import { PackagesSection } from "@/components/home/packages-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { Process } from "@/components/home/process";
import { BlogSection } from "@/components/home/blog-section";
import { CtaSection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <TrustBar />
      <div id="services">
        <ServicesSection />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <ExperienceSection />
      <div id="portfolio">
        <CaseStudiesSection />
      </div>
      <div id="packages">
        <PackagesSection />
      </div>
      <TestimonialsSection />
      <Process />
      <BlogSection />
      <div id="contact">
        <CtaSection />
      </div>
    </>
  );
}
