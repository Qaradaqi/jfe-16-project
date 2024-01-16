import { Link, useParams } from "react-router-dom";
import HelemetFunc from "../../components/Helmet";
import PrimaryLayout from "../../components/Layout/PrimaryLayout";
import { Style } from "./style";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../utils/api";
import Button from "../../components/uiElements/Button";
import Loading from '../../components/Loading';
import SuggestionList from "../../components/Suggestion";

function handleGenres(name) {
  const genres = [
    {
      "id": 1,
      "name": "Crime"
    }, {
      "id": 2,
      "name": "Drama"
    }, {
      "id": 3,
      "name": "Action"
    }, {
      "id": 4,
      "name": "Biography"
    }, {
      "id": 5,
      "name": "History"
    }, {
      "id": 6,
      "name": "Adventure"
    }, {
      "id": 7,
      "name": "Fantasy"
    }, {
      "id": 8,
      "name": "Western"
    }, {
      "id": 9,
      "name": "Comedy"
    }, {
      "id": 10,
      "name": "Sci-Fi"
    }, {
      "id": 11,
      "name": "Mystery"
    }, {
      "id": 12,
      "name": "Thriller"
    }, {
      "id": 13,
      "name": "Family"
    }, {
      "id": 14,
      "name": "War"
    }, {
      "id": 15,
      "name": "Animation"
    }, {
      "id": 16,
      "name": "Romance"
    }, {
      "id": 17,
      "name": "Horror"
    }, {
      "id": 18,
      "name": "Music"
    }, {
      "id": 19,
      "name": "Film-Noir"
    }, {
      "id": 20,
      "name": "Musical"
    }, {
      "id": 21,
      "name": "Sport"
    }
  ];
  let id;
  genres.map((item) => {
    if (name === item.name) {
      id = item.id;
    }
  });
  return id;
}

export default function SingleMovie() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [genreId, setGenreID] = useState(1);
  const [data, setData] = useState({
    actors: "",
    country: "",
    director: "",
    genres: [],
    id: '',
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
  useEffect(() => {
    setGenreID(handleGenres(data.genres[0]));
  }, [data]);
  function getApi() {
    api
      .get(`movies/${id}`)
      .then((res) => {
        setLoading(false);
        setData(res.data);
        // setGenreID(handleGenres(res.data.genres[0]));
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function renderFarm() {
    return (
      <div className="full-container">
        <div className="background"></div>
        <div className="box flex align-end justify-between">
          <div className="content">
            <div className="play-btn">
              <Link className="flex align-center justify-center" to={'/'}>
                <i className="fa-solid fa-circle-play"></i>
              </Link>
            </div>
            <div className="flex align-center justify-between">
              <div className="type-country-imdb flex align-center justify-start gap-5">
                <p className="type">{data.type}</p>
                <p className="country">{data.country}</p>
                <p className="imdb flex align-center gap-5 justify-center">
                  <span>imdb: </span>
                  <span>{data.imdb_rating}</span>
                </p>
              </div>
              <div className="small-share flex align-center justify-center">
                <Link to={'/'} className="flex align-center justify-center">
                  <i className="fa-solid fa-arrow-up-from-bracket"></i>
                </Link>
              </div>
            </div>
            <div className="title flex align-center justify-start">
              <h3>{data.title}</h3>
            </div>
            <div className="year-runtime flex align-center justify-start gap-5">
              <span>{data.year}</span>
              <span> ▪ </span>
              <span>{data.runtime}</span>
            </div>
            <div className="btn flex align-center gap-5">
              {window.innerWidth > 740 && <Button href={'/'} type='primary' size='large' icon={'fa-solid fa-play'}>Watch Now</Button>}
              <Button href={'/'} type='dark' size='large' icon={'fa-solid fa-plus'}>Add to Watchlist</Button>
            </div>
            <div className="genres">
              <span>{data.genres && data.genres.join(' ▪ ')}</span>
            </div>
            <div className="director flex align-center justify-start">
              <h3>Directed by</h3>
              <span>{data.director}</span>
            </div>
            <div className="actors flex align-center justify-start">
              <h3>Starring</h3>
              <span>{data.actors}</span>
            </div>
            <div className="plot flex align-center">
              <p>{data.plot}</p>
            </div>
          </div>
          <div className="share">
            <Button href={'/'} type={'dark'} size={'medium'} icon={'fa-solid fa-arrow-up-from-bracket'}>Share</Button>
          </div>
        </div>
      </div>
    );
  }
  console.log(genreId);
  return (
    <PrimaryLayout>
      <HelemetFunc title={'Crackle - Watch Movies Online, Free TV Shows, &amp; Original Online Series'} />
      <Style poster={data.images ? data.images[0] : data.poster}>
        {loading ? <div className="flex align-center justify-center">
          <Loading />
        </div> : renderFarm()}
        <SuggestionList genreId={genreId} movieId={data.id} />
      </Style>
    </PrimaryLayout>
  );
}