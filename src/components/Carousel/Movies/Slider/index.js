import { useEffect, useState, useRef } from "react";
import { Style } from "./style";
import { api } from "../../../../utils/api";
import MovieCard from "../../../uiElements/Card";
import Loading from "../../../Loading";
import { Link } from "react-router-dom";

export default function Movies({ name, id, page }) {
  const sliderRef = useRef(null);
  const slide = useRef(null);
  const [loading, setLoading] = useState(false);
  const [trans, setTrans] = useState(0);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const [movies, setMovies] = useState({
    data: [],
    metadata: {
      "current_page": 1,
      "per_page": 20,
      "page_count": 1,
      "total_count": 1,
    }
  });
  useEffect(() => {
    setLoading(true);
    getApi();
  }, []);
  useEffect(() => {
    if (slide.current) {
      if (movies.data.length * slide.current.offsetWidth < window.innerWidth) {
        setDisablePrev(true);
        setDisablePrev(true);
      }
    }
  }, [slide.current]);
  useEffect(() => {
    if (trans != 0) {
      setDisablePrev(false);
    } else {
      setDisablePrev(true);
    }

    if (slide.current) {
      if (Math.abs(trans) >= slide.current.offsetWidth * (movies.data.length - (Math.floor(window.innerWidth / slide.current.offsetWidth) - 1))) {
        setDisableNext(true);
      } else {
        setDisableNext(false);
      }
    }
  }, [trans]);
  function getApi() {
    api
      .get(`genres/${id}/movies`, { params: { page: page, per_page: movies.metadata.per_page } })
      .then((res) => {
        setLoading(false);
        setMovies(res.data);
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
      movies.data.map((item, id) => {
        return (
          <li ref={(element) => (id === 0 && (slide.current = element))} className="item flex" key={id}>
            <MovieCard poster={item.poster} id={item.id} title={item.title} />
          </li>
        );
      })
    );
  }
  return (
    <Style>
      <div className='full-container'>
        <div className='title-box flex align-center justify-between'>
          <h3 className='genre-title'>{name}</h3>
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