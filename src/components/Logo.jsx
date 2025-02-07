import { Image } from "react-bootstrap";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <a className="navbar-brand" href="#">
      <Image src={logo} style={{ width: "100px", height: "55px" }} />
    </a>
  );
};

export default Logo;
