import Counter from "./Counter";

const About = () => {
  return (
    <section id="about" className="about-area rel z-1">
      <div className="for-bgc-black py-50 rpy-100">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-7">
              <div className="about-content-part rel z-2 rmb-55">
                <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">About Me</span>
                  <h2>
                    Full Stack <span>Java Development</span> with Scalable, Cloud-Native Solutions
                  </h2>
                  <p>
                    I’m a versatile Full Stack Java Developer with over 6 Months of experience building scalable, high-performance enterprise applications. 
                    I specialize in developing microservices using Java, Spring Boot, and secure APIs, while delivering rich frontend experiences with Angular, React, and Vue.js.
                    <br />
                
                  </p>
                </div>

                <ul className="list-style-one two-column wow fadeInUp delay-0-2s">
                  <li>Java, Spring Boot, Microservices</li>
                  <li>Angular, React, Vue.js</li>
                  <li>Kafka, Redis, RESTful APIs</li>
                  <li>Docker, Kubernetes (EKS, AKS)</li>
                  <li>CI/CD with Jenkins, GitHub Actions</li>
                  <li>Monitoring: Prometheus, CloudWatch, ELK</li>
                </ul>

                <div className="about-info-box mt-25 wow fadeInUp delay-0-2s">
                  <div className="info-box-item">
                    <i className="far fa-envelope" />
                    <div className="content">
                      <span>Email Me</span>
                      <br />
                      <a href="mailto:vineethgoudvgs789@gmail.com ">vineethgoudvgs789@gmail.com</a>
                    </div>
                  </div>
                  <div className="info-box-item">
                    <i className="far fa-phone" />
                    <div className="content">
                      <span>Call Me</span>
                      <br />
                      <a href="callto:+91 9704373531 ">+91 9704373531</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="about-image-part wow fadeInUp delay-0-3s">
   
                <div className="about-btn btn-one wow fadeInRight delay-0-4s">
                  <img src="assets/images/about/btn-image1.png" alt="Image" />
                  <h6>Full Stack Java Developer</h6>
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="dot-shape">
                  <img src="assets/images/shape/about-dot.png" alt="Shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-lines">
        <span /><span /><span /><span /><span />
        <span /><span /><span /><span /><span />
      </div>
    </section>
  );
};

export default About;
