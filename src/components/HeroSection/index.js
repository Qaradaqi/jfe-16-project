import { useEffect, useState } from "react";
import MovieSlider from "../Carousel/Movies";
import { Style } from "./style";
import { api } from "../../utils/api";
import GenresApi from "../Genres";
import Button from "../uiElements/Button";
import Movies from "../Carousel/Movies/Slider";

export default function HeroSection({ id, genre_id }) {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({
    actors: "",
    country: "",
    director: "",
    genres: [],
    id: 18,
    images: [],
    imdb_rating: "",
    plot: "",
    poster: "",
    title: "",
    type: "",
    year: "",
  });
  useEffect(() => {
    setLoading(true);
    getApi();
  }, []);
  function getApi() {
    api
      .get(`movies/${id}`)
      .then((res) => {
        setLoading(false);
        setMovie(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <Style poster={movie.images ? movie.images[0] : movie.poster}>
      <div className="full-container">
        <div className="background"></div>
        <div className="hero-content">
          <div className="title flex align-center">
            <h3>{movie.title}</h3>
          </div>
          <div className="hero-top flex align-center justify-start gap-10">
            <p className="type">{movie.type}</p>
            <p className="genres">{movie.genres.join(' ▪ ')}</p>
          </div>
          <div className="plot-btn flex flex-column">
            <div className="btn flex align-center gap-5">
              <Button href={'/'} type='primary' size='large' icon={'fa-solid fa-play'}>Watch Now</Button>
              <Button href={'/'} type='dark' size='large'>More Info</Button>
            </div>
            <div className="plot flex align-center">
              <p>{movie.plot}</p>
            </div>
          </div>
        </div>
        <div className="spotlight">
          <Movies id={genre_id} name={'Spotligiht'} page={1} />
        </div>
      </div>
    </Style>
  );
}