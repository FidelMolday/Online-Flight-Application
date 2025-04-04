import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../css/fontAwesome.css';
//import '../css/hero-slider.css';
//import '../css/owl-carousel.css';
//import '../css/datepicker.css';
//import '../css/tooplate-style.css';

function HomePage() {
  const [formData, setFormData] = useState({
    from: '',
    departure: '',
    returnDate: '',
    trip: 'round',
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="banner" id="top">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="left-side">
              <div className="logo">
                <img src="img/logo.png" alt="Flight Template" />
              </div>
              <div className="tabs-content">
                <h4>Choose Your Direction:</h4>
                <ul className="social-links">
                  <li>
                    <a href="http://facebook.com">
                      Find us on <em>Facebook</em> <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="http://youtube.com">
                      Our <em>YouTube</em> Channel <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="http://instagram.com">
                      Follow our <em>Instagram</em> <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="page-direction-button">
                <a href="contact.html">
                  <i className="fa fa-phone"></i> Contact Us Now
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-5 col-md-offset-1">
            <section id="first-tab-group" className="tabgroup">
              <div id="tab1">
                <div className="submit-form">
                  <h4>
                    Check availability for <em>direction</em>:
                  </h4>
                  <form id="form-submit" onSubmit={handleSubmit}>
                    <div className="row">
                      {/* From Field */}
                      <div className="col-md-6">
                        <fieldset>
                          <label htmlFor="from">From:</label>
                          <select name="from" value={formData.from} onChange={handleChange} required>
                            <option value="">Select a location...</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="India">India</option>
                            <option value="Japan">Japan</option>
                            <option value="Korea">Korea</option>
                            <option value="Laos">Laos</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Vietnam">Vietnam</option>
                          </select>
                        </fieldset>
                      </div>

                      {/* Departure Date */}
                      <div className="col-md-6">
                        <fieldset>
                          <label htmlFor="departure">Departure date:</label>
                          <input
                            name="departure"
                            type="text"
                            className="form-control date"
                            id="departure"
                            placeholder="Select date..."
                            required
                            value={formData.departure}
                            onChange={handleChange}
                          />
                        </fieldset>
                      </div>

                      {/* Return Date */}
                      <div className="col-md-6">
                        <fieldset>
                          <label htmlFor="returnDate">Return date:</label>
                          <input
                            name="returnDate"
                            type="text"
                            className="form-control date"
                            id="returnDate"
                            placeholder="Select date..."
                            required
                            value={formData.returnDate}
                            onChange={handleChange}
                          />
                        </fieldset>
                      </div>

                      {/* Trip Type */}
                      <div className="col-md-6">
                        <div className="radio-select">
                          <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-6">
                              <label htmlFor="round">Round</label>
                              <input
                                type="radio"
                                name="trip"
                                id="round"
                                value="round"
                                checked={formData.trip === 'round'}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6">
                              <label htmlFor="oneway">Oneway</label>
                              <input
                                type="radio"
                                name="trip"
                                id="oneway"
                                value="one-way"
                                checked={formData.trip === 'one-way'}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="col-md-6">
                        <fieldset>
                          <button type="submit" id="form-submit" className="btn">
                            Order Ticket Now
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default HomePage;
