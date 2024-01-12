import { Style } from "./style";
import { Link } from "react-router-dom";

export default function FooterItems({ column }) {
  function renderFarm() {
    return (
      column.items.map((item, id) => {
        return (
          <li className="col-item" key={id}>
            <Link className="flex align-center" to={item.link}>
              <span>{item.title}</span>
            </Link>
          </li>
        );
      })
    );
  }
  return (
    <Style>
      <div className="flex flex-column">
        <h3 className="col-title">{column.title}</h3>
        <ul className="col-items flex flex-column">
          {renderFarm()}
        </ul>
      </div>
    </Style>
  );
}