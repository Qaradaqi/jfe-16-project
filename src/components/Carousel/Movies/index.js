import { Style } from './style';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { FreeMode, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import MovieCard from '../../uiElements/Card';
import Loading from '../../Loading';
import { api } from '../../../utils/api';
import { Link } from 'react-router-dom';


export default function MovieSlider({ name, id, page }) {
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
            freeMode
            navigation
            effect='fade'
            spaceBetween={8}
            speed={200}
            slidesPerView={'auto'}
            breakpointsBase="window"
            modules={[FreeMode, Navigation]}
            breakpoints={{
              100: {
                width: 132,
                height: 198,
              },
              740: {
                width: 200,
                height: 300,
              },
              1024: {
                width: 244,
                height: 366,
              }
            }}
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
