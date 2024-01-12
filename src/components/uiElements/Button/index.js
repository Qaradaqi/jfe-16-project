import { Link } from "react-router-dom";
import { Style } from "./style";

export default function Button(props) {
  const { type, size, icon, children, href } = props;
  return (
    <Style type={type} size={size}>
      <Link className="btn-content flex align-center gap-5 justify-center" to={href}>
        <div className="flex align-center gap-5 justify-center">
          {icon && <i className={icon}></i>}
          <span>{children}</span>
        </div>
      </Link>
    </Style>
  );
}