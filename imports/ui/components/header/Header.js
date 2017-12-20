import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <header>
    <div className="headerTopArea">
        <div className="container">
            <div className="row">
                <div className="col-md-5 col-sm-2 col-xs-5">
                    <div className="langOpt">
                        <span className="langIcon"><span className="langCode">en</span><i className="icofont icofont-caret-down"></i> </span>
                        <ul className="lang">
                            <li data-code="en">english</li>
                            <li data-code="bn">bengali</li>
                            <li data-code="ar">aribic</li>
                            <li data-code="da">dansk</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-7 col-sm-10 col-xs-7">
                    <ul className="topInfo">
                        <li className="call"><a href="tel:+214-5212-829"><i className="icofont icofont-ui-call"></i>+214-5212-829</a></li>
                        <li className="email"><a href="mailto:support@spark.com"><i className="icofont icofont-ui-v-card"></i>support@spark.com</a></li>
                        <li className="clientAreaLi"><span><i className="icofont icofont-user-alt-3"></i>Client area</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="headerBottomArea">
        <div className="container">
            <div className="row">
                <div className="col-md-2 col-sm-3 col-xs-9">
                    <a href="index-1.html" className="logo"><img src="img/logo.png" alt="" /></a>
                </div>
                <div className="col-md-9 menuCol col-sm-9 col-xs-9">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only"></span>
                            <i className="fa fa-navicon"></i>
                        </button>
                    </div>
                    <nav id="navbar" className="collapse navbar-collapse">
                        <ul id="nav">
                            <li className="current-menu-item"><a href="#">Home</a>
                                <ul className="sub-menu">
                                    <li><a href="index-1.html">Home Version 01</a></li>
                                    <li><a href="index-2.html">Home Version 02</a></li>
                                </ul>
                            </li>
                            <li><a href="#">hosting</a>
                                <ul className="sub-menu">
                                    <li><a href="webHosting.html">web hosting</a></li>
                                    <li><a href="cloudHosting.html">cloud hosting</a></li>
                                    <li><a href="vpnHosting.html">vpn hosting</a></li>
                                    <li><a href="sharedHosting.html">shared hosting</a></li>
                                </ul>
                            </li>
                            <li><a href="domainSearch.html">domain</a></li>
                            <li className="dropdown-megamenu"><a href="#">pages</a>
                                <ul className="mega-menu clearfix">
                                    <li className="mMenuCol">
                                        <ul className="menuRow">
                                            <li><a href="index-1.html">homepage v1</a></li>
                                            <li><a href="index-2.html">homepage v2</a></li>
                                        </ul>
                                        <ul className="menuRow">
                                            <li><a href="about.html">about</a></li>
                                            <li><a href="domainSearch.html">domain search</a></li>
                                            <li><a href="webHosting.html">web hosting</a></li>
                                            <li><a href="cloudHosting.html">cloud hosting</a></li>
                                            <li><a href="vpnHosting.html">vpn hosting</a></li>
                                        </ul>
                                    </li>
                                    <li className="mMenuCol">
                                        <ul className="menuRow">
                                            <li><a href="accountManage.html">My account</a></li>
                                            <li><a href="domainManage.html">domain settings</a></li>
                                            <li><a href="hostManage.html">hosting settings</a></li>
                                        </ul>
                                        <ul className="menuRow">
                                            <li><a href="testimonial.html">testimonial</a></li>
                                            <li><a href="faq.html">faq</a></li>
                                            <li><a href="support.html">support</a></li>
                                            <li><a href="contact.html">contact</a></li>
                                        </ul>
                                    </li>
                                    <li className="mMenuCol">
                                        <ul className="menuRow">
                                            <li><a href="cart.html">cart</a></li>
                                            <li><a href="checkout.html">checkout</a></li>
                                        </ul>
                                        <ul className="menuRow">
                                            <li><a href="blog.html">blog</a></li>
                                            <li><a href="single-blog.html">single blog</a></li>
                                        </ul>
                                        <ul className="menuRow">
                                            <li><a href="comingSoon.html">coming soon</a></li>
                                            <li><a href="404.html">404</a></li>
                                        </ul>
                                    </li>
                                    <li className="mMenuCol">
                                        <div className="menuDiscount">
                                            <div className="discountImg"><img src="img/icon/menu-img.png" alt="" /></div>
                                            <span>10% discount on</span>
                                            <div className="h3">any hosting</div>
                                            <a href="#">Try it now!</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="support.html">Support</a></li>
                            <li><a href="#">Blog</a>
                                <ul className="sub-menu">
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="single-blog.html">single blog</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-md-1 cartCol">
                    <a href="cart.html" className="cart">
                        <span className="count">3</span>
                        <i className="icofont icofont-cart-alt"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</header>

    );
  }

}

export default Header;
