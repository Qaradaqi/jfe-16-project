import { Style } from './style';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import MovieCard from '../../uiElements/Card';
import Loading from '../../Loading';
import { api } from '../../../utils/api';
import { Link } from 'react-router-dom';
let itemsPerView = 6;
let slidesToMovePerClick = 5;

export default function MovieSlider({ name, id, page }) {
  const swiperRef = useRef(null);
  const [loading, setLoading] = useState(false);
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
  function renderFarm() {
    return (
      movies.data.map((item, id) => {
        return (
          <SwiperSlide key={id}>
            <MovieCard poster={item.poster} id={item.id} title={item.title} />
          </SwiperSlide>
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
          <Swiper
            modules={[Navigation]}
            navigation={true}
            spaceBetween={8}
            slidesPerView={itemsPerView}
            slidesPerGroup={slidesToMovePerClick} // Move slidesToMovePerClick slides together
            speed={200} // Default transition duration
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onTransitionEnd={(swiper) => { swiper.snapGrid = [0, 1180]; }}
          >
            {loading ? <div className='flex align-center justify-center'>
              <Loading />
            </div> : renderFarm()}
          </Swiper>
        </div>
      </div>
    </Style>
  );
}
