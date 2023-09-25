import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./Testimonials.css"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alexa Young",
      location: "CA",
      text: "Banky makes banking a breeze! Their product is user-friendly and accessible 24/7, allowing me to manage my finances wherever I go. It's the modern banking solution I've been waiting for!"
    },
    {
      name: "Morgan James",
      location: "NY",
      text: "Banky has transformed how I handle my finances. With their convenient services, I can bank from home or on the move. It's safe, efficient, and perfect for my busy lifestyle!"
    },
    {
      name: "Lisa Driver",
      location: "MI",
      text: "Thanks to Banky, banking while traveling is no longer a worry. Their seamless services make managing money abroad a breeze. Highly recommended for globetrotters!"
    }
  ];

  return (
    <div className="container my-5">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h5 className="mb-3">
                    {testimonial.name}, {testimonial.location}
                  </h5>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    {testimonial.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Testimonials;
