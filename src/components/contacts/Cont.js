import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../home_page/css/fontAwesome.css';
//import '../home_page/css/hero-slider.css';
//import '../home_page/css/owl-carousel.css';
//import '../home_page/css/datepicker.css';
//import '../home_page/css/tooplate-style.css';

const Contacts = () => {
  return (
    <div>
      <section className="page-heading" id="top">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="logo">
                <img src="src/assets/img/logo.png" alt="Flight Template" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="page-direction-button">
                <a href="/">
                  <i className="fa fa-home"></i> Go Back Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Contact Information</h2>
                <p>Feel free to reach out to us for any inquiries or assistance.</p>
              </div>
            </div>
            <div className="col-md-6">
              <img src="src/assets/img/contact-01.jpg" alt="Contact" />
            </div>
            <div className="col-md-6">
              <img src="src/assets/img/contact-02.jpg" alt="Contact" />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Leave us a message</h2>
              </div>
            </div>
            <div className="col-md-6 offset-md-3">
              <form id="contact" action="#" method="post">
                <div className="row">
                  <div className="col-md-6">
                    <input name="name" type="text" className="form-control" placeholder="Your name..." required />
                  </div>
                  <div className="col-md-6">
                    <input name="email" type="email" className="form-control" placeholder="Your email..." required />
                  </div>
                  <div className="col-md-12">
                    <textarea name="message" rows="6" className="form-control" placeholder="Your message..." required></textarea>
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="btn">Submit Your Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <iframe
                src="https://www.google.com/maps/embed?..."
                width="100%"
                height="500"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="primary-button">
                <a href="#" className="scroll-top">Back To Top</a>
              </div>
            </div>
            <div className="col-md-12">
              <ul className="social-icons">
                <li><a href="https://www.facebook.com/tooplate"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fa fa-rss"></i></a></li>
                <li><a href="#"><i className="fa fa-behance"></i></a></li>
              </ul>
            </div>
            <div className="col-md-12">
              <p>
                &copy; 2025 Flight Tour and Travel Company | Design:{' '}
                <a href="http://www.code-projects.org" target="_blank" rel="noopener noreferrer">
                  <em>Code Projects</em>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contacts;
