import logo from "../assets/images/logo.svg";
import user from "../assets/images/user.svg";

const Header = () => {
    return (
        <header className="flex">
            <article>
                <img src={logo} alt="logo" />
            </article>
            <article>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/shop">Shop</a>
            </article>
            <article>
                <p>Login</p>
                <img src={user} alt="userImg" />
            </article>
        </header>
    )
}

export default Header;