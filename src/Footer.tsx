import Logos from './assets/vector.png'
import facebook from './assets/facebook.png'
import twitter from './assets/twitter.png'
import insta from './assets/insta.png'


function Footer(){
    return (
        <footer>
            <div className="left flex">
                <div className="site flex">
                    <div className="top flex">
                        <img 
                            src={Logos}
                            alt="Travlog logo"
                        />
                        <p>Travlog</p>
                    </div>
                    <p className="detail">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical Latin literature from 45 BC.
                    </p>
                </div>
                <div className="socials flex">
                    <img 
                        src={facebook} 
                        alt="Facebook"
                    />
                    <img 
                        src={twitter}
                        alt="Twitter"
                    />
                    <img 
                        src={insta}
                        alt="Instagram"
                    />
                </div>
            </div>
            <div className="right flex">
                <div className="company flex">
                    <h6>Company</h6>
                    <p>About</p>
                    <p>Career</p>
                    <p>Mobile</p>
                </div>
                <div className="contact flex">
                    <h6>Contact</h6>
                    <p>Why Travlog?</p>
                    <p>Partner with us</p>
                    <p>FAQ’s</p>
                    <p>Blog</p>
                </div>
                <div className="meet flex">
                    <h6>Meet Us</h6>
                    <p>+00 92 1234 56789</p>
                    <p>info@travlog.com</p>
                    <div>
                        <p>205. R Street, New York</p>
                        <p>BD23200</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
