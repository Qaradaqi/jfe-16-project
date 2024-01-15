import { Fragment } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import ScrollToTop from "../../ScrollToTop";
export default function PrimaryLayout({ children }) {
  return (
    <Fragment>
      <ScrollToTop />
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
} 