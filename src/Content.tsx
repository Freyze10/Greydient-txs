import work from './assets/work 1.png'
import Group_1 from './assets/Group 1.png'
import circle from './assets/play-circle.5 1.png'
import tripadvisor from './assets/tripadvisor.png'
import expedia from './assets/expedia.png'
import booking from './assets/booking.png'
import airbnb from './assets/airbnb.png'
import firstframe from './assets/firstframe.png'
import orbitz from './assets/orbitz.png'
import secondframe from './assets/secondframe.png'
import arrow_left from './assets/arrow-left.png'
import thirdframe from './assets/thirdframe.png'
import arrow_right from './assets/arrow-right.png'
import paradise from './assets/paradise.png'
import star from './assets/star.png'
import fish from './assets/fish.png'
import mountain from './assets/mountain.png'
import yellow from './assets/yellow.png'
import location from './assets/location.png'
import paradise_on_earth from './assets/paradise-on-earth.png'
import coupon from './assets/coupon.png'
import calendar from './assets/calendar.png'
import vr from './assets/vr.png'
import email from './assets/email.png'



function Content(){
    return (
        <main id="primary" className="site-main">

            <div className="home flex " id="home">
                <div className="frame81 flex">
                    <div className="frame10">
                        <p>Explore the world!</p>
                        <img src={work} alt=""/>
                    </div>
                    <h1 className="travel ">
                        Travel <span>top destination</span> of the world
                    </h1>
                    <p className="sub-title">
                        We always make our customer happy by providing <br/> as many choices as possible 
                    </p>
                    <div className="frame8 flex">
                        <div className="frame7">
                            Get Started
                        </div>
                        <div className="frame6 flex">
                            <img src={circle} alt=""/>
                            <p>Watch Demo</p>
                        </div>
                    </div>
                </div>
                <div className="group1">
                    <img src={Group_1} alt=""/>
                </div>
            </div>
            <div className="frame85 flex" id="frame85">
                <img src={tripadvisor} alt=""/>
                <img src={expedia} alt=""/>
                <img src={booking} alt=""/>
                <img src={airbnb} alt=""/>
                <img src={orbitz} alt=""/>
            </div>
            <div className="services flex ">
                <div className="frame22 flex">
                    <p className="uppercase ">Services</p>
                    <h3 className="">Our top value categories for you</h3>
                </div>
                <div className="carousel">
                    <div className="car-box flex">
                        <img src={firstframe} alt=""/>
                        <div className="details flex">
                            <h5>Best Tour Guide</h5>
                            <p>What looked like a small patch of purple grass, above five feet.</p>
                        </div>
                    </div>
                    <div className="car-box flex">
                        <img src={secondframe} alt=""/>
                        <div className="details flex">
                            <h5>Easy Booking</h5>
                            <p>Square, was moving across the sand in their direction.</p>
                        </div>
                    </div>
                    <div className="car-box flex">
                        <img src={thirdframe} alt=""/>
                        <div className="details flex">
                            <h5>Weather Forecast</h5>
                            <p>What looked like a small patch of purple grass, above five feet.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="destination flex " id="discover">
                <div className="top-container flex">
                    <div className="left flex">
                        <p className="">Top Destination</p>
                        <h3 className="">Explore top destination</h3>
                    </div>
                    <div className="right flex">
                        <div className="arr-left flex">
                            <img src={arrow_left} alt=""/>
                        </div>
                        <div className="arr-right flex">
                            <img src={arrow_right} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="places-container flex ">
                    <div className="boxes ">
                        <img src={paradise} alt=""/>
                        <div className="place-details flex">
                            <div className="detail-container flex">
                                <div className="title flex">
                                    <h6>Paradise Beach, Bantayan Island</h6>
                                    <h6>$550.16</h6>
                                </div>
                                <p>Rome, Italy</p>
                            </div>
                            <div className="rating flex">
                                <h6>4.8</h6>
                                <img src={star} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="boxes ">
                        <img src={fish} alt=""/>
                        <div className="place-details flex">
                            <div className="detail-container flex">
                                <div className="title flex">
                                    <h6>Ocean with full of Colors</h6>
                                    <h6>$20.99</h6>
                                </div>
                                <p>Maldives</p>
                            </div>
                            <div className="rating flex">
                                <h6>4.5</h6>
                                <img src={star} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="boxes ">
                        <img src={mountain} alt=""/>
                        <div className="place-details flex">
                            <div className="detail-container flex">
                                <div className="title flex">
                                    <h6>Mountain View, Above the cloud</h6>
                                    <h6>$150.99</h6>
                                </div>
                                <p>United Arab Emeries </p>
                            </div>
                            <div className="rating flex">
                                <h6>5.0</h6>
                                <img src={star} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="travel-point flex ">
            <img src={yellow} alt=""/>
                <div className="travel-point-container flex">
                    <div className="travel-detail flex">
                        <div className="first flex ">
                            <p>Travel Point</p>
                            <h3>We helping you find your dream location</h3>
                        </div>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC.</p>
                    </div>
                    <div className="package flex ">
                        <div className="two-box flex ">
                            <div className="pack-box flex">
                                <h4>500+</h4>
                                <p>Holiday Package</p>
                            </div>
                            <div className="pack-box flex">
                                <h4>100</h4>
                                <p>Luxury Hotel</p>
                            </div>
                        </div>
                        <div className="two-box flex ">
                            <div className="pack-box flex">
                                <h4>7</h4>
                                <p>Premium Airlines</p>
                            </div>
                            <div className="pack-box flex">
                                <h4>2k+</h4>
                                <p>Happy Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="key-features-container flex" id="special">
                <div className="key-features flex ">
                    <div className="one flex">
                        <div className="title flex">
                            <p className="">Key features</p>
                            <h3 className="">We offer best services</h3>
                        </div>
                        <p className="parag">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature
                        from 45 BC.</p>
                    </div>
                    <div className="two ">
                        <div className="key_card flex ">
                            <img src={location} alt=""/>
                            <div className="card_detail flex">
                                <h6>We offer best services</h6>
                                <p>Lorem Ipsum is not simply random text</p>
                            </div>
                        </div>
                        <div className="key_card flex ">
                            <img src={calendar} alt=""/>
                            <div className="card_detail flex">
                                <h6>Schedule your trip</h6>
                                <p>It has roots in a piece of classNameical</p>
                            </div>
                        </div>
                        <div className="key_card flex ">
                            <img src={coupon} alt=""/>
                            <div className="card_detail flex">
                                <h6>Get discounted coupons</h6>
                                <p>Lorem Ipsum is not simply random text</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={paradise_on_earth} alt=""/>
            </div>
            <div className="testimonials-container flex " id="testimonials">
                <div className="arr-left flex">
                    <img src={arrow_left} alt=""/>
                </div>
                <div className="middle flex">
                    <div className="one flex">
                        <p className="">Testimonials</p>
                        <h3 className="">Trust our clients</h3>
                    </div>
                    <img src={vr} alt="" className="two "/>
                    <div className="three flex ">
                        <p className=""><span>Mark Smith</span> / Travel Enthusiast</p>
                        <div className="stars flex ">
                            <img src={yellow} alt=""/>
                            <img src={yellow} alt=""/>
                            <img src={yellow} alt=""/>
                            <img src={yellow} alt=""/>
                            <img src={yellow} alt=""/>
                        </div>
                    </div>
                    <p className="four">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                    in a piece of classNameical Latin literature from 45 BC.</p>
                    <div className="five flex">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
                <div className="arr-right flex">
                    <img src={arrow_right} alt=""/>
                </div>
            </div>
            <div className="contact-container flex" id="contact">
                <div className="contact flex ">
                    <div className="subscribe flex ">
                        <p className="uppercase ">subscribe to our newsletter</p>
                        <h2 className="">Prepare yourself & let’s explore the beauty of the world</h2>
                    </div>
                    <div className="email-input flex ">
                        <div className="input-field">
                            <input type="text" placeholder="Your Email"/>
                            <img src={email} alt=""/>
                        </div>
                        <div className="btn-subscribe ">Subscribe</div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Content