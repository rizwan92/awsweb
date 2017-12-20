import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <div>
      <footer className="secPdngT animated">
          <div className="container">
              <div className="row">
                  <div className="col-sm-3">
                      <div className="footerInfo">
                          <a href="index-1.html" className="footerLogo">
                              <img src="img/footerLogo.png" alt="" />
                          </a>
                          <div className="footerTxt">
                              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eui smod tincidunt ut laoreet dolore magna.</p>
                          </div>
                          <ul className="footerLinkIcon">
                              <li><a href="#"><i className="icofont icofont-social-facebook"></i></a></li>
                              <li><a href="#"><i className="icofont icofont-social-twitter"></i></a></li>
                              <li><a href="#"><i className="icofont icofont-social-google-plus"></i></a></li>
                              <li><a href="#"><i className="icofont icofont-social-tumblr"></i></a></li>
                              <li><a href="#"><i className="icofont icofont-social-yelp"></i></a></li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-sm-3">
                      <div className="widget">
                          <div className="h4">Important Links</div>
                          <ul className="footerLink">
                              <li><a href="#">Support</a></li>
                              <li><a href="#">Privacy & Policy</a></li>
                              <li><a href="#">Terms & Conditions</a></li>
                              <li><a href="#">VPN Service</a></li>
                              <li><a href="#">Dedicated Server</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-sm-3">
                      <div className="widget">
                          <div className="h4">out pertners</div>
                          <ul className="footerLink">
                              <li><a href="#">ThemeForest</a></li>
                              <li><a href="#">GraphicRiver</a></li>
                              <li><a href="#">AudioJungle</a></li>
                              <li><a href="#">3DOcean</a></li>
                              <li><a href="#">CodeCanayon</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-sm-3">
                      <div className="contactInfo">
                          <div className="h4">contact with us</div>
                          <span className="call"><a href="tel:+214-5212-829"><i className="icofont icofont-ui-call"></i>+214-5212-829</a></span>
                          <span className="email"><a href="mailto:support@spark.com"><i className="icofont icofont-ui-v-card"></i>support@spark.com</a></span>
                          <a href="" className="contactBtn Btn">Send us a message</a>

                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-12">
                      <div className="copyrightTxt">
                          <p>&copy; Copyright 2016 Spark, </p>
                          <p>All Rights Reserved</p>
                      </div>
                  </div>
              </div>
          </div>
      </footer>

      </div>
    );
  }

}

export default Footer;
