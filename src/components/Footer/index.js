import { useEffect, useState } from "react";
import FooterItems from "./items";
import FooterSocial from "./socialMedia";
import { Style } from "./style";
import FooterResponsiveItems from "./items/Responsive";


const firstColumn = {
  title: 'Learn More',
  items: [
    {
      title: 'About Crackle',
      link: '/',
    },
    {
      title: 'Supported Devices',
      link: '/',
    },
    {
      title: 'Careers',
      link: '/',
    },
    {
      title: 'Advertise With Us',
      link: '/',
    },
  ],
};
const secondColumn = {
  title: 'Get Help',
  items: [
    {
      title: 'FAQs',
      link: '/',
    },
    {
      title: 'Submit a Request',
      link: '/',
    },
  ],
};
const thirdColumn = {
  title: 'Stay Legal',
  items: [
    {
      title: 'Ad Choices',
      link: '/',
    },
    {
      title: 'Privacy Policy',
      link: '/',
    },
    {
      title: 'Terms of Service',
      link: '/',
    },
    {
      title: 'Accessibility',
      link: '/',
    },
    {
      title: 'Individual Privacy Right',
      link: '/',
    },
    {
      title: 'Do Not Sell/Do Not Share',
      link: '/',
    },
    {
      title: 'California Privacy Notice',
      link: '/',
    },
  ],
};
export default function Footer() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const updateWindowWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateWindowWidth);
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, [window.innerWidth]);
  return (
    <Style>
      <div className={width > 1024 ? `active flex justify-around align-start` : 'deactive'}>
        <FooterItems column={firstColumn} />
        <FooterItems column={secondColumn} />
        <FooterItems column={thirdColumn} />
        <div className={width > 1440 ? 'active' : 'deactive'}>
          <FooterSocial />
        </div>
      </div>
      <div className={width < 1024 ? 'active flex flex-column align-start' : 'deactive'}>
        <div className="responsive-item">
          <FooterResponsiveItems column={firstColumn} />
        </div>
        <div className="responsive-item">
          <FooterResponsiveItems column={secondColumn} />
        </div>
        <div className="responsive-item">
          <FooterResponsiveItems column={thirdColumn} />
        </div>
      </div>
      <div className={width < 1440 ? 'active' : 'deactive'}>
        <div className="second-social flex align-center justify-center">
          <FooterSocial />
        </div>
      </div>
      <p className="copyright">
        &copy; 2024 Crackle Plus, LLC. All rights reserved.
      </p>
    </Style>
  );
}