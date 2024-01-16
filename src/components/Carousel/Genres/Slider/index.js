import { useEffect, useState, useRef } from "react";
import { Style } from "./style";
import { api } from "../../../../utils/api";
import MovieCard from "../../../uiElements/Card";
import Loading from "../../../Loading";
import { Link } from "react-router-dom";
import GenreCard from "../../../uiElements/GenreCard";

export default function Genres({ name, id, page }) {
  const sliderRef = useRef(null);
  const slide = useRef(null);
  const [loading, setLoading] = useState(false);
  const [trans, setTrans] = useState(0);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    setLoading(true);
    getApi();
    if (slide.current) {
      if (genres.data.length * slide.current.offsetWidth <= 0.9*(window.innerWidth)) {
        console.log(genres.data.length * slide.current.offsetWidth)
        setDisablePrev(true);
        setDisablePrev(true);
      }
    }
  }, []);

  useEffect(() => {
    if (trans != 0) {
      setDisablePrev(false);
    } else {
      setDisablePrev(true);
    }
    if (slide.current) {
      if (Math.abs(trans) >= slide.current.offsetWidth * (genres.data.length - (Math.floor(window.innerWidth / slide.current.offsetWidth) - 1))) {
        setDisableNext(true);
      } else {
        setDisableNext(false);
      }
    }
  }, [trans]);
  function getApi() {
    api
      .get(`genres`)
      .then((res) => {
        setLoading(false);
        setGenres(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function handleLeftTranslate() {
    setTrans((trans) => (trans - slide.current.offsetWidth * (Math.floor(window.innerWidth / slide.current.offsetWidth) - 1)));
  };
  function handleRightTranslate() {
    setTrans((trans) => (trans + slide.current.offsetWidth * (Math.floor(window.innerWidth / slide.current.offsetWidth) - 1)));
  };

  function renderFarm() {
    return (
      genres.map((item, id) => {
        return (
          <li ref={(element) => (id === 0 && (slide.current = element))} className="item flex" key={id}>
            <GenreCard id={item.id} name={item.name} />
          </li>
        );
      })
    );
  }
  return (
    <Style>
      <div className='full-container'>
        <div className='title-box flex align-center justify-between'>
          <h3 className='genre-title'>Movie Genres</h3>
          <Link className='see-all flex align-center gap-5' to={'/'}>
            <span>See All</span>
            <i className='fa-solid fa-arrow-right'></i>
          </Link>
        </div>
        <div className='items'>
          {
            loading
              ?
              <div className='flex align-center justify-center'>
                <Loading />
              </div>
              :
              <div className="slider-container">
                <ul ref={sliderRef} className="items-slider flex align-center gap-5" style={{ transform: `translateX(${trans}px)`, transitionDuration: '200ms' }}>
                  {renderFarm()}
                </ul>
                <div className="nav-btn flex flex-column align-center justify-center">
                  <button disabled={disableNext} onClick={handleLeftTranslate} className={disableNext ? 'disable next flex align-center justify-center' : 'next flex align-center justify-center'}>
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                  <button disabled={disablePrev} onClick={handleRightTranslate} className={disablePrev ? 'disable prev flex align-center justify-center' : 'prev flex align-center justify-center'} >
                    <i className="fa-solid fa-angle-left"></i>
                  </button>
                </div>
              </div>
          }
        </div>
      </div>
    </Style>
  );
}