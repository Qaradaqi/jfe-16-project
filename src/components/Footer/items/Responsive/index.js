import { useState } from "react";
import { Style } from "./style";
import { Link } from "react-router-dom";

export default function FooterResponsiveItems({column}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
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
        <div onClick={toggleMenu} className="col-title flex align-center justify-between">
          <h3>{column.title}</h3>
          <i className="fa-solid fa-angle-down"></i>
        </div>
        {isOpen && <ul className="col-items flex flex-column">
          {renderFarm()}
        </ul>}
      </div>
    </Style>
  );
}