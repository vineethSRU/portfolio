"use client";
import { About2 } from '@/components/About';
import { Services2 } from '@/components/Services';
import { Blog2 } from "@/components/Blog";
import { Clients2 } from "@/components/Clients";
import { Contact2 } from "@/components/Contact";
import { Hero2 } from "@/components/Hero";
import LetsTalk from "@/components/LetsTalk";
import { Pricing2 } from "@/components/Pricing";
import { Projects2 } from "@/components/Projects";
import { Resume2 } from "@/components/Resume";
import ScrollTop from "@/components/ScrollTop";
import { Skill2 } from "@/components/Skill";
import NoxfolioLayout from "@/layout/NoxfolioLayout";

const Index2 = () => {
  return (
    <NoxfolioLayout header={2} footer={2} onePageMenu={true}>
      {/* Hero Section */}
      <Hero2 />

      {/* About Section */}
      <About2 />

      {/* Headline Section */}
      <div className="headline-area-h2 rel z-2 py-25">
        <div className="headline-wrap">
          <span className="marquee-wrap">
            {/* ... keep your repeated marquee blocks here ... */}
          </span>
        </div>
      </div>

      {/* Resume */}
      <Resume2 />

      {/* Services */}
      <Services2 />

      {/* Skills */}
      <Skill2 />

      {/* Another Headline Section */}
      <div className="headline-area rel z-2 py-25">
        <div className="headline-wrap">
          <span className="marquee-wrap">
            {/* ... marquee content ... */}
          </span>
        </div>
      </div>

      {/* Projects */}
      <Projects2 />

      {/* Awards */}
      <section
        id="awward"
        className="awward-area rel z-1 pt-140 rpt-100 pb-140 rpb-100"
      >
        <div className="container">
          <div className="row no-gap">
            {/* ... award boxes content ... */}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <Pricing2 />

      {/* Clients */}
      <Clients2 />

      {/* Contact */}
      <Contact2 />

      {/* Bottom Headline */}
      <div className="headline-area pt-60 bgc-black rel z-2">
        <div className="headline-wrap">
          <span className="marquee-wrap style-two pb-20">
            {/* ... marquee content ... */}
          </span>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* Blog */}
      <Blog2 />

      {/* Let's Talk */}
      <LetsTalk />

      {/* Scroll to Top */}
      <ScrollTop />
    </NoxfolioLayout>
  );
};

export default Index2;
