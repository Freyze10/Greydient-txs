
import logo from './assets/vector1.png'

function Header(){
    return (
        <header id="masthead" className="site-header">
            <div className="frame1">
                <img
                className="logo-img"
                src={logo}
                alt="logo"
                />
                <h1 className="travlog">Travlog</h1>
            </div>
            <div className="frame2">
                <button>
                <a href="#home">Home</a>
                </button>
                <button>
                <a href="#discover">Discover</a>
                </button>
                <button>
                <a href="#special">Special Deals</a>
                </button>
                <button>
                <a href="#contact">Contact</a>
                </button>
            </div>
            <div className="frame3">
                <button className="login">Log in</button>
                <button className="signup">Sign Up</button>
            </div>
        </header>
    );
};
export default Header