import { useEffect, useState } from "react";
import { api } from '../../utils/api';

export default function GenresApi() {
  const [genres, setGenres] = useState([{
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
  },]);
  useEffect(() => {
    getApi();
  }, []);

  function getApi() {
    api
      .get('genres')
      .then((res) => {
        setGenres(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (genres);
}
