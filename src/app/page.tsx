import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Identification } from "@/components/landing/Identification";
import { Positioning } from "@/components/landing/Positioning";
import { Pillars } from "@/components/landing/Pillars";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Audience } from "@/components/landing/Audience";
import { Nutritionist } from "@/components/landing/Nutritionist";
import { RealLife } from "@/components/landing/RealLife";
import { MealExample } from "@/components/landing/MealExample";
import { Benefits } from "@/components/landing/Benefits";
import { Results } from "@/components/landing/Results";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { faqData, brandInfo } from "@/data/landing";

export default function Home() {
  // Rich JSON-LD Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HealthAndBeautyBusiness",
        "@id": "https://nutribalance.com.br/#business",
        name: brandInfo.name,
        description: brandInfo.tagline,
        url: "https://nutribalance.com.br",
        telephone: "+5511999999999",
        email: brandInfo.contact.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "São Paulo",
          addressRegion: "SP",
          addressCountry: "BR",
        },
        founder: {
          "@type": "Person",
          name: brandInfo.nutritionist.name,
          jobTitle: brandInfo.nutritionist.title,
          description: brandInfo.nutritionist.philosophy,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqData.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <Identification />
        <Positioning />
        <Pillars />
        <HowItWorks />
        <Audience />
        <Nutritionist />
        <RealLife />
        <MealExample />
        <Benefits />
        <Results />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
