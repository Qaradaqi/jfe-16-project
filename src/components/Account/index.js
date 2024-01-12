import Button from "../uiElements/Button";
import { Style } from "./style";

export default function AccountBanner() {
  return (
    <Style>
      <div className="full-container">
        <div className="flex align-center justify-center">
          <div className="account-box-content flex align-center justify-between">
            <div className="left-box flex flex-column ">
              <div className="title">
                <h3>Create your free account</h3>
              </div>
              <ul className="items flex flex-column">
                <li className="item flex align-center gap-10">
                  <i className="icon fa-solid fa-circle-check"></i>
                  <span>Manage parental controls for kids and teens</span>
                </li>
                <li className="item flex align-center gap-10">
                  <i className="icon fa-solid fa-circle-check"></i>
                  <span>Build your own free watchlist</span>
                </li>
                <li className="item flex align-center gap-10">
                  <i className="icon fa-solid fa-circle-check"></i>
                  <span>Save your watch progress</span>
                </li>
              </ul>
            </div>
            <div className="right-box flex flex-column gap-10">
              <Button href='/' type='primary' size='large'>Create Account</Button>
              <Button href='/' type='dark' size='large'>Sign In</Button>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}