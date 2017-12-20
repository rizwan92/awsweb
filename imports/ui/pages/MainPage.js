import React, { Component } from 'react';

class MainPage extends Component {

  render() {
    return (
      <div>
      <div className="homeArea animated">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="homeContent">
                                <span className="topTxt">Simple &nbsp; - &nbsp; Easy to use &nbsp; - &nbsp; 10x faster!</span>
                                <span className="h2 homeTitle">Best web hosting service for your website.</span>
                                <p>Get the best speed for your website. Don’t lose anymore <br />clients for the slowest speed of your hosting service.</p>
                                <div className="homeBtn">
                                    <a href="#" className="btnOne Btn"><i className="icofont icofont-rocket-alt-2"></i>Get Started Now</a>
                                    <a href="#" className="btnTwo Btn">check pricing</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="homeImgTable">
                                <div className="homeImg">
                                    <img src="img/home-dsk-1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clouds">
                        <img src="img/clouds/cloud-1.png" alt="" className="cloud1"/>
                        <img src="img/clouds/cloud-2.png" alt="" className="cloud2"/>
                        <img src="img/clouds/cloud-3.png" alt="" className="cloud3"/>
                        <img src="img/clouds/cloud-4.png" alt="" className="cloud4"/>
                        <img src="img/clouds/cloud-5.png" alt="" className="cloud5"/>
                    </div>
                </div>
            </div>



            <div className="domainArea">
                <div className="container animated">
                    <div className="row">
                        <div className="col-md-12 clearfix">
                            <div className="domainTxt">
                                <p>Search your domain, <br />purchase one.</p>
                            </div>
                            <form action="domainSearch.html" className="domainForm" method="get">
                                <div className="domainTop">
                                    <input type="search" name="search" placeholder="Enter your domain name here"/>
                                    <input type="submit" name="submit" value="Search Domain" />
                                </div>
                                <div className="domainCheck">
                                    <span className="com"><input type="checkbox" id="com" name="com" value="com"/> .com ($8.99) <label htmlFor="com"></label></span>
                                    <span className="net"><input type="checkbox" id="net" name="net" value="net"/> .net ($4.99)<label htmlFor="net"></label></span>
                                    <span className="org"><input type="checkbox" id="org" name="org" value="org"/> .org ($11.99)<label htmlFor="org"></label></span>
                                    <span className="in"><input type="checkbox" id="in" name="in" value="in"/> .in ($8.99)<label htmlFor="in"></label></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



            <div className="serviceArea secPdng animated">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sectionTitle">
                                <div className="h2">Lots of hosting services in town. <br/>Why you should <span>choose us?</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="row service">
                        <div className="col-md-4 col-sm-4">
                            <div className="singleService">
                                <div className="serviceIcon">
                                    <img src="img/icon/gear.png" alt=""/>
                                </div>
                                <div className="serviceContent">
                                    <span className="h3">Easy to Customize</span>
                                    <p>Easily configurable with your popular CMS <br />platforms - Wordpress, Joomla & more.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="singleService">
                                <div className="serviceIcon">
                                    <img src="img/icon/cloud-up.png" alt=""/>
                                </div>
                                <div className="serviceContent">
                                    <span className="h3">99% server uptime</span>
                                    <p>Easily configurable with your popular CMS <br />platforms - Wordpress, Joomla & more.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="singleService">
                                <div className="serviceIcon">
                                    <img src="img/icon/care-support.png" alt=""/>
                                </div>
                                <div className="serviceContent">
                                    <span className="h3">24/7 customer support</span>
                                    <p>Easily configurable with your popular CMS <br />platforms - Wordpress, Joomla & more.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="singleService">
                                <div className="serviceIcon">
                                    <img src="img/icon/serv-04.png" alt=""/>
                                </div>
                                <div className="serviceContent">
                                    <span className="h3">Clean & Minimal Design</span>
                                    <p>Easily configurable with your popular CMS <br />platforms - Wordpress, Joomla & more.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="singleService">
                                <div className="serviceIcon">
                                    <img src="img/icon/serv-05.png" alt=""/>
                                </div>
                                <div className="serviceContent">
                                    <span className="h3">Secured Server</span>
                                    <p>Easily configurable with your popular CMS <br />platforms - Wordpress, Joomla & more.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="singleService">
                                <div className="serviceIcon">
                                    <img src="img/icon/serv-06.png" alt=""/>
                                </div>
                                <div className="serviceContent">
                                    <span className="h3">Live Chat Support</span>
                                    <p>Easily configurable with your popular CMS <br />platforms - Wordpress, Joomla & more.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="sectionBar"></div>


            <div className="pricingArea secPdng animated">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sectionTitle">
                                <div className="h2">Pay for what you <span>actually</span> use. No hidden charge!</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="price clearfix">
                            <div className="col-md-3 priceCol col-sm-5 col-sm-offset-1 col-md-offset-0">
                                <div className="singlePrice">
                                    <div className="priceHead">
                                        <span className="priceTitle">Personal</span>
                                        <div className="priceImg">
                                            <img src="img/icon/user.png" alt=""/>
                                        </div>
                                        <div className="currency">$1<span>/mo</span></div>
                                        <p>best for personal use</p>
                                    </div>
                                    <ul className="priceBody">
                                        <li><i className="icofont icofont-ui-check"></i>10GB Space</li>
                                        <li><i className="icofont icofont-ui-check"></i>1 Free Domain</li>
                                        <li><i className="icofont icofont-ui-check"></i>300GB SSD Disk</li>
                                        <li><i className="icofont icofont-ui-close"></i>Special Offers</li>
                                        <li><i className="icofont icofont-ui-check"></i>Unlimited Support</li>
                                    </ul>
                                    <div  className="priceBtn Btn" style={{cursor:'pointer'}} onClick={()=>{this.props.openModal()}}>Get Started now</div>
                                </div>
                            </div>
                            <div className="col-md-3 priceCol col-sm-5">
                                <div className="singlePrice active">
                                    <div className="priceHead">
                                        <span className="priceTitle">small team</span>
                                        <div className="priceImg">
                                            <img src="img/icon/users.png" alt=""/>
                                        </div>
                                        <div className="currency">$7<span>/mo</span></div>
                                        <p>best for personal use</p>
                                    </div>
                                    <ul className="priceBody">
                                        <li><i className="icofont icofont-ui-check"></i>10GB Space</li>
                                        <li><i className="icofont icofont-ui-check"></i>1 Free Domain</li>
                                        <li><i className="icofont icofont-ui-check"></i>300GB SSD Disk</li>
                                        <li><i className="icofont icofont-ui-close"></i>Special Offers</li>
                                        <li><i className="icofont icofont-ui-check"></i>Unlimited Support</li>
                                    </ul>
                                    <a href="" className="priceBtn Btn">Get Started now</a>
                                </div>
                            </div>
                            <div className="col-md-3 priceCol col-sm-5 col-sm-offset-1 col-md-offset-0">
                                <div className="singlePrice">
                                    <div className="priceHead">
                                        <span className="priceTitle">company</span>
                                        <div className="priceImg">
                                            <img src="img/icon/home.png" alt=""/>
                                        </div>
                                        <div className="currency">$15<span>/mo</span></div>
                                        <p>best for personal use</p>
                                    </div>
                                    <ul className="priceBody">
                                        <li><i className="icofont icofont-ui-check"></i>10GB Space</li>
                                        <li><i className="icofont icofont-ui-check"></i>1 Free Domain</li>
                                        <li><i className="icofont icofont-ui-check"></i>300GB SSD Disk</li>
                                        <li><i className="icofont icofont-ui-close"></i>Special Offers</li>
                                        <li><i className="icofont icofont-ui-check"></i>Unlimited Support</li>
                                    </ul>
                                    <a href="" className="priceBtn Btn">Get Started now</a>
                                </div>
                            </div>
                            <div className="col-md-3 priceCol col-sm-5">
                                <div className="singlePrice">
                                    <div className="priceHead">
                                        <span className="priceTitle">big shot</span>
                                        <div className="priceImg">
                                            <img src="img/icon/earth.png" alt=""/>
                                        </div>
                                        <div className="currency">$25<span>/mo</span></div>
                                        <p>best for personal use</p>
                                    </div>
                                    <ul className="priceBody">
                                        <li><i className="icofont icofont-ui-check"></i>10GB Space</li>
                                        <li><i className="icofont icofont-ui-check"></i>1 Free Domain</li>
                                        <li><i className="icofont icofont-ui-check"></i>300GB SSD Disk</li>
                                        <li><i className="icofont icofont-ui-close"></i>Special Offers</li>
                                        <li><i className="icofont icofont-ui-check"></i>Unlimited Support</li>
                                    </ul>
                                    <a href="" className="priceBtn Btn">Get Started now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="ctaArea secPdngB animated">
                <div className="container">
                    <div className="row ctaRow">
                        <div className="col-md-6">
                            <div className="ctaImgOne">
                                <img src="img/server.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-md-6 ctaCol">
                            <div className="ctaRight ctaTxt">
                                <div className="ctaCell">
                                    <div className="h2">Dedicated and Secured server for your website.</div>
                                    <p>Get the best speed for your website. Don’t lose anymore <br/>clients for the slowest speed of your hosting service.</p>
                                    <a href="#" className="ctaBtn Btn"><i className="icofont icofont-rocket-alt-2"></i>Get Started Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 ctaCol">
                            <div className="ctaLeft ctaTxt">
                                <div className="ctaCell">
                                    <div className="h2">Super speed for your website to impress your visitor.</div>
                                    <p>Get the best speed for your website. Don’t lose anymore <br/>clients for the slowest speed of your hosting service.</p>
                                    <div className="ctaBtn">
                                        <a href="#" className="btnOne Btn">read more</a>
                                        <a href="#" className="btnTwo Btn">Get Started Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-md-offset-1 ctaColBtm">
                            <div className="ctaImgTwo">
                                <img src="img/home-dsk-2.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="clientArea secPdng animated">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sectionTitle">
                                <div className="h2">We give <span>awesome service,</span><br/>Some of our trusted clients.</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-sm-4 col-xs-6">
                            <div className="singleClient"><a href="#"><img src="img/client-1.png" alt=""/></a></div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-xs-6">
                            <div className="singleClient"><a href="#"><img src="img/client-2.png" alt=""/></a></div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-xs-6">
                            <div className="singleClient"><a href="#"><img src="img/client-3.png" alt=""/></a></div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-xs-6">
                            <div className="singleClient"><a href="#"><img src="img/client-4.png" alt=""/></a></div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-xs-6">
                            <div className="singleClient"><a href="#"><img src="img/client-5.png" alt=""/></a></div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-xs-6">
                            <div className="singleClient"><a href="#"><img src="img/client-6.png" alt=""/></a></div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="ctaTwo">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 animated">
                            <span className="ctaTxtTwo">20,000+ People trust Sparks! Be one of them today.</span>
                            <div className="ctaBtn"><a href="#" className="btnOne Btn">Get Started now</a></div>
                        </div>
                    </div>
                </div>
            </div>

      </div>
    );
  }

}

export default MainPage;
