import Button from "../../components/uiElements/Button";
import { Style } from "./style";
import PrimaryLayout from '../../components/Layout/PrimaryLayout';
import HelmetFunc from '../../components/Helmet';

export default function NotFound() {
  return (
    <PrimaryLayout>
      <HelmetFunc title={'Crackle - Watch Movies Online, Free TV Shows, &amp; Original Online Series'} />
      <Style>
        <div className="full-container">
          <div className="content flex flex-column justify-center align-center gap-10">
            <div className="title flex align-center justify-center">
              <i className="fa-solid fa-triangle-exclamation title-icon"></i>
              <h3 className="title-h">Well this doesn't Crackle</h3>
            </div>
            <div className="body">
              <p>Sorry, we weren't able to find that page.</p>
            </div>
            <div className="desc">
              <p>Error Code   404 - Page Not Found</p>
            </div>
            <div className="btn">
              <Button href={'/'} type={'dark'} size={'large'} icon={'fa-solid fa-house'}>Go to Homefeed</Button>
            </div>
          </div>
        </div>
      </Style>
    </PrimaryLayout>
  );
}