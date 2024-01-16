import { Style } from "./style";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import Loading from "../Loading";
import MovieCard from "../uiElements/Card";
import Button from "../uiElements/Button";


export default function SuggestionList({ genreId, movieId }) {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState({
    data: [],
    metadata: {
      "current_page": 1,
      "per_page": 1,
      "page_count": 1,
      "total_count": 1,
    }
  });
  useEffect(() => {
    setLoading(true);
    getApi();
  }, [genreId]);
  function getApi() {
    api
      .get(`genres/${genreId}/movies`, { params: { page: 1, per_page: 8 } })
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
      <ul className="suggest-list flex justify-start wrap">
        {movies.data.slice(0, 9).map((item, index) => {
          return (item.id !== movieId && <li className="suggest-item" key={index}>
            <MovieCard id={item.id} title={item.title} poster={item.poster} />
          </li>
          );
        })}
      </ul>
    );
  }
  return (
    <Style>
      <div className="title flex align-center justify-start">
        <h3>You Might Also Like</h3>
      </div>
      {loading ? <div className="flex align-center justify-center">
        <Loading />
      </div> : renderFarm()}
    </Style>
  );
}