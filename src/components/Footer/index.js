import FooterItems from "./items";
import FooterSocial from "./socialMedia";
import { Style } from "./style";


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
  return (
    <Style>
      <div className="flex justify-around align-start">
        <FooterItems column={firstColumn} />
        <FooterItems column={secondColumn} />
        <FooterItems column={thirdColumn} />
        <FooterSocial />
      </div>
      <p className="copyright">
        &copy; 2024 Crackle Plus, LLC. All rights reserved.
      </p>
    </Style>
  );
}