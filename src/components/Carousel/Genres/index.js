import { Style } from './style';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import Loading from '../../Loading';
import { api } from '../../../utils/api';
import { Link } from 'react-router-dom';
import GenreCard from '../../uiElements/GenreCard';
let itemsPerView = 9;
let slidesToMovePerClick = 8;

export default function GenresSlider() {
  const swiperRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    setLoading(true);
    getApi();
  }, []);
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
  function renderFarm() {
    return (
      genres.map((item, id) => {
        return (
          <SwiperSlide key={id} >
            <GenreCard id={item.id} name={item.name} />
          </SwiperSlide>
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
          <Swiper
            modules={[Navigation]}
            navigation={true}
            spaceBetween={8}
            slidesPerView={itemsPerView}
            slidesPerGroup={slidesToMovePerClick}
            speed={200} 
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpointsBase='window'
            breakpoints={{
              100: {
                slidesPerView: 2,
                slidesPerGroup: 1,
              },
              512: {
                slidesPerView: 4,
                slidesPerGroup: 3,
              },
              740: {
                slidesPerView: 5,
                slidesPerGroup: 4,
              },
              835: {
                slidesPerView: 6,
                slidesPerGroup: 5,
              },
              1024: {
                slidesPerView: 7,
                slidesPerGroup: 6,
              },
              1366: {
                slidesPerView: 9,
                slidesPerGroup: 8,
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
