import companyLogo from "./assets/logo.png";
import './header.css';

export default function Header () {
    return (
    <div className="headerBar">
          <img src={companyLogo}></img>
    </div>
    );
}