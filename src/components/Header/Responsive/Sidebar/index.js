import { useEffect, useRef } from "react";
import { Style } from "./style";
import Button from "../../../uiElements/Button";
import { Link } from "react-router-dom";


export default function Sidebar({ open, onClickOutside }) {
  const sidebar = useRef(null);
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, { capture: true });
    return () => {
      document.removeEventListener('click', handleClickOutside, { capture: true });
    };
  }, [onClickOutside]);
  useEffect(() => {
    document.body.style.overflow = 'unset';
    if (open) {
      document.body.style.overflowY = 'hidden';
    }
  }, [open]);
  const handleClickOutside = (event) => {
    if (sidebar.current && !sidebar.current.contains(event.target)) {
      onClickOutside && onClickOutside();
    }
  };
  if (!open) {
    return null;
  }
  return (
    <Style className="flex flex-column align-start">
      <div className="full-container">
        <div ref={sidebar} className="sidebar-content">
          <div className="sidebar-close flex align-center">
            <i onClick={onClickOutside} className="fa-solid fa-xmark"></i>
          </div>
          <div className="sidebar-items flex flex-column nowrap">
            <div className="item logo flex align-center">
              <Link className="flex align-center justify-center" to={'/'}>
                <svg className="img" width="226" height="40" viewBox="0 0 226 40" fill="#ff601c" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 19.9986C0 31.0447 8.95808 39.9972 20.007 39.9972H27.6774V31.3575H22.2642C13.8387 31.3575 9.49067 26.2712 9.49067 19.9986C9.49067 13.726 13.8387 8.63966 22.2642 8.63966H27.6774V0H20.007C8.95808 0 0 8.95527 0 19.9986ZM102.628 19.9986C102.628 31.0447 111.586 39.9972 122.635 39.9972H130.305V31.3575H124.892C116.466 31.3575 112.118 26.2712 112.118 19.9986C112.118 13.726 116.466 8.63966 124.892 8.63966H130.305V0H122.635C111.586 0 102.628 8.95527 102.628 19.9986ZM61.7767 13.1624C61.7767 3.80416 55.0701 0 46.8926 0H31.3575V40H40.3043V7.5745H46.6587C50.6009 7.5745 53.3765 9.78936 53.3061 13.5174C53.2356 17.1751 50.0261 19.435 46.7601 19.4773H41.8091L53.6583 40H63.0701L54.143 24.7214C58.7897 22.8954 61.7767 19.2237 61.7767 13.1624ZM181.701 0H171.923V40H196.734V31.366H181.701V0ZM209.584 31.5238V23.9239H222.895V15.4477H209.584V8.57767H224.888V0H199.806V40H225.389V31.5238H209.584ZM78.019 0L64.4959 40H74.5586L77.3709 31.3237H91.3815L94.2839 40H104.454L91.0546 0H78.019ZM79.5858 23.5379L84.4551 8.40296L89.2145 23.5379H79.5858ZM133.985 40H143.958V0H133.985V40ZM157.523 0L145.431 19.5928L157.599 40H169.575L156.066 19.6435L169.615 0H157.523Z"></path>
                </svg>
              </Link>
            </div>
            <div className="item flex align-center gap-5">
              <Button type={'default'} size={'medium'} icon={'fa-solid fa-video'} href={'/movies'}>Movies</Button>
            </div>
            <div className="item flex align-center gap-5">
              <Button type={'default'} size={'medium'} icon={'fa-solid fa-tv'}>TV Shows</Button>
            </div>
            <div className="item flex align-center gap-5">
              <Button type={'default'} size={'medium'} icon={'fa-solid fa-plus'}>Watchlist</Button>
            </div>
            <div className="item flex align-center gap-5">
              <Button type={'default'} size={'medium'} icon={'fa-solid fa-magnifying-glass'} href={'/search'}>Search</Button>
            </div>
            <div className="item flex align-center justify-end gap-5">
              <div className="btn-account flex align-center">
                <Button type={'primary'} size={'medium'}>Create Account</Button>
              </div>
              <div className="flex align-center">
                <Button type={'dark'} size={'medium'}>Sign In</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}
