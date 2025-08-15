import Link from "next/link";

const Services = ({ extraClass }) => {
  const services = [
    {
      id: 1,
      title: "Full Stack Web Application Development",
      text: "Build end-to-end applications using Java, Spring Boot for backend and React, Angular, or Vue.js for the frontend. Deliver scalable, secure, and responsive user experiences.",
    },
    {
      id: 2,
      title: "Microservices Architecture",
      text: "Design and implement loosely coupled microservices with Spring Cloud, JPA, and Kafka. Focus on fault-tolerance, observability, and distributed systems best practices.",
    },
    {
      id: 3,
      title: "RESTful API Design & Integration",
      text: "Develop and consume REST APIs using Spring MVC, OAuth2, and Swagger. Secure endpoints using JWT and enable seamless integration with third-party services.",
    },
    {
      id: 4,
      title: "Cloud-Native Deployment",
      text: "Containerize applications using Docker and deploy to AWS (EKS, EC2, RDS) or Azure (AKS, App Services) with Helm, Terraform, and GitHub Actions for CI/CD.",
    },
    {
      id: 5,
      title: "Frontend Engineering",
      text: "Create dynamic UIs with Angular, React, or Vue. Use Material UI, Bootstrap, and responsive design principles to ensure accessibility and mobile-first performance.",
    },
    {
      id: 6,
      title: "Performance Monitoring & Debugging",
      text: "Integrate tools like Prometheus, CloudWatch, and ELK Stack for real-time monitoring and debugging. Improve system resilience and reduce downtime.",
    },
  ];

  return (
    <section
      id="services"
      className={`services-area pt-5 rpt-100 pb-5 rpb-70 rel z-1 ${extraClass}`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">My Experience</span>
              <h2>
                Full Stack <span>Java Developer</span> Services
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {services.map((service) => (
            <div className="col-lg-6" key={service.id}>
              <div className="service-item wow fadeInUp delay-0-2s">
                <div className="number">
                  {service.id >= 9 ? service.id : `0${service.id}`}.
                </div>
                <div className="content">
                  <h4>{service.title}</h4>
                  <p>{service.text}</p>
                </div>
                
                  <a className="details-btn">
                    <i className="fas fa-arrow-right" />
                  </a>
                
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        {/* 
        <div className="text-center mt-40">
          <Link href="/contact" legacyBehavior>
            <a className="theme-btn">
              Let's Build Your Project <i className="fas fa-arrow-right" />
            </a>
          </Link>
        </div> 
        */}
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

export default Services;
