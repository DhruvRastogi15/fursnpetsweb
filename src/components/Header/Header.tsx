import AppLogo from "../Assets/AppLogo.png"
import AppPoster from "../Assets/AppPoster.jpeg"
export default function Header() {
    return (
        <div>
            <div style={{ flexDirection: 'row',flex:1 }}>
                <h1 style={{fontFamily:'cursive'}}>Furs N Pets</h1>
                <img style={{  }} src={AppLogo} loading="lazy" alt="logo"></img>
            </div>
            {/* <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link>
        <Link to="contact">Contact Us</Link>
      </nav> */}
        </div>
    );
}

