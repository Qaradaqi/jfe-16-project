import { Link } from "react-router-dom";
import { Style } from "./style";

export default function FooterSocial() {
  return (
    <Style className="flex align-center justify-evenly">
      <li>
        <Link to={'/'}>
        <i className="fa-brands fa-square-facebook"></i>
        </Link>
      </li>
      <li>
        <Link to={'/'} className="flex align-center justify-center">
        <i className="fa-brands fa-twitter"></i>
        </Link>
      </li>
      <li>
        <Link to={'/'} className="flex align-center justify-center">
        <i className="fa-brands fa-instagram"></i>
        </Link>
      </li>
      <li>
        <Link to={'/'} className="flex align-center justify-center">
        <i className="fa-brands fa-youtube"></i>
        </Link>
      </li>
      <li>
        <Link to={'/'} className="flex align-center justify-center">
        <i className="fa-brands fa-linkedin"></i>
        </Link>
      </li>
    </Style>
  )
}