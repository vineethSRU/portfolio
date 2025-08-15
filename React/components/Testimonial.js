"use client";
import { noxfolioSlider } from "@/utility/sliderProps";
import { Component } from "react";
import Slider from "react-slick";
export default class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <section className="testimonials-area rel z-1">
        <div className="for-bgc-black py-5 rpy-100">
          <div className="container">
            <div className="row gap-90">
              <div className="col-lg-4">
                <div className="testimonials-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                  <div className="section-title mb-40">
                    <span className="sub-title mb-15">Testimonials & Recommendations</span>
                    <h2>
                      Hear What <span>My Team & Mentors</span> Say
                    </h2>
                    <p>
  I’ve worked closely with cloud engineers, SREs, product teams, and compliance leads across DevOps-heavy environments. 
  Here's what they say about my contributions to infrastructure automation, security, and delivery pipelines.
</p>

                  </div>

                  <div className="slider-arrows">
                    <button
                      className="testimonial-prev slick-arrow"
                      onClick={this.previous}
                    >
                      <i className="fal fa-arrow-left" />
                    </button>
                    <button
                      className="testimonial-next slick-arrow"
                      onClick={this.next}
                    >
                      <i className="fal fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <Slider
  ref={(c) => (this.slider = c)}
  {...noxfolioSlider.testimonials}
  className="testimonials-wrap"
>
  <div className="testimonial-item wow fadeInUp delay-0-3s">
    <div className="author">
      <img src="assets/images/testimonials/image2_men.png" alt="Author" class="testimonial-avatar"/>
    </div>
    <div className="text">
      “Sirisha’s infrastructure automation skills and Terraform modules enabled us to reduce environment setup time drastically across AWS and GCP.”
    </div>
    <div className="testi-des">
      <h5>Michael R.</h5>
      <span>Senior DevOps Architect, ASTRANA Health</span>
    </div>
  </div>

  <div className="testimonial-item wow fadeInUp delay-0-2s">
    <div className="author">
      <img src="assets/images/testimonials/image1_women.png" alt="Author" class="testimonial-avatar"/>
    </div>
    <div className="text">
      “Her ability to build secure and compliant CI/CD pipelines gave our healthcare platform audit-ready reliability with zero manual deployment intervention.”
    </div>
    <div className="testi-des">
      <h5>Anita S.</h5>
      <span>SRE Lead, The COMMONS XR</span>
    </div>
  </div>

  <div className="testimonial-item wow fadeInUp delay-0-4s">
    <div className="author">
      <img src="assets/images/testimonials/image1_men.png" alt="Author" class="testimonial-avatar"/>
    </div>
    <div className="text">
      “THALLAPALLY VINEETH took the lead on Kubernetes performance monitoring. Her Prometheus + Grafana dashboards significantly cut our MTTR and boosted SLO visibility.”
    </div>
    <div className="testi-des">
      <h5>Raj K.</h5>
      <span>Platform Engineer, DXC Technology</span>
    </div>
  </div>

  <div className="testimonial-item wow fadeInUp delay-0-2s">
    <div className="author">
      <img src="assets/images/testimonials/image2_women.png" alt="Author" class="testimonial-avatar"/>
    </div>
    <div className="text">
      “Working with THALLAPALLY VINEETH on secure EDI file processing was a game changer — she automated validations and tightened our DevSecOps practices.”
    </div>
    <div className="testi-des">
      <h5>Dr. Lisa M.</h5>
      <span>Healthcare Product Owner</span>
    </div>
  </div>
</Slider>

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
  }
}
