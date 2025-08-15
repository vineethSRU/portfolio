import Link from "next/link";
import Counter from "./Counter";

const counterData = [
  { id: 1, text: "Months Of Experience", value: "6", valueType: "plus" },
  { id: 2, text: "Project Complete", value: "6", valueType: "plus" },
  { id: 3, text: "Success Rate", value: "95", valueType: "percent" },
];

const Hero = () => {
  return (
    <section  className="main-hero-area pt-70 pb-5 rel z-1">
      <div className="container container-1620">
        <div className="row align-items-center" >
          <div className="col-lg-4 col-sm-7" id="home">
            <div className="hero-content rmb-55 wow fadeInUp delay-0-2s">
              <span className="h2">Hello, I’m </span>
              <h1>
  <b>THALLAPALLY VINEETH</b><br />
  <span className="text-base md:text-lg font-semibold text-gray-700" id="designation">
    Java Full Stack Developer
  </span>
</h1>
              <p>
                {/* We denounce with righteous indignation dislike demoralized by
                the charms of pleasure */}
Passionate Full Stack Java Developer focused on building end-to-end applications with seamless integration and automation. Committed to continuous delivery, learning, and improving development workflows</p>
              <div className="hero-btns">
                {/* <Link legacyBehavior href="/contact">
                  <a className="theme-btn">
                    Hire Me <i className="far fa-angle-right" />
                  </a>
                </Link> */}
                <Link legacyBehavior href="/contact">
      <a href="/assets/pdfs/MResumePVineeth.pdf" download="MResumePVineeth.pdf" target="_blank" rel="noopener noreferrer" className="theme-btn">
                    Download CV <i className="far fa-angle-right " />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-5 order-lg-3">
            <div className="hero-counter-wrap ms-lg-auto rmb-55 wow fadeInUp delay-0-4s">
              {counterData.map((count) => (
                <div className="counter-item counter-text-wrap" key={count.id}>
                  <Counter end={count.value} extraClass={count.valueType} />
                  <span className="counter-title">{count.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="author-image-part wow fadeIn delay-0-3s">
              <div className="bg-circle" />
              <img src="assets/images/hero/vineeth.png" alt="Author" />
              <div className="progress-shape">
                <img
                  src="assets/images/hero/progress-shape.png"
                  alt="Progress"

                />
              </div>
            </div>
          </div>
        </div>
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
    </section>
  );
};
export default Hero;
export const Hero2 = () => {
  return (
    <div   className="hero-area-two pt-150 rel z-2">
      <div className="container rel z-3" >
        <div  className="hero-two-content" >
          <span className="sub-title wow fadeInLeft delay-0-1s">
            <i className="flaticon-asterisk-1" /> Full Stack Developer
          </span>
          <span className="title wow fadeInLeft delay-0-2s">
            Hello <small>I’m</small>
          </span>
          <span className="name wow fadeInRight delay-0-4s">THALLAPALLY VINEETH</span>
          <span className="designations wow fadeInLeft delay-0-6s">
            <span>Java</span> Full Stack Developer
          </span>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7">
            <div className="author-image-part wow fadeIn delay-0-3s">
              <div className="bg-circle" />
              <img
                src="assets/images/hero/vineeth.png"
                alt="Author"
                //assets/images/hero/vineeth.png
              />
            </div>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-down">
        <img src="assets/images/hero/scroll-down.png" alt="Scroll Down" />
      </a>
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
  );
};
