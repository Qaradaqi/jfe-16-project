import { useEffect, useState } from "react";
import { api } from "../../../utils/api";

export default function useMovieData(genre, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [pageData, setPageData] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
    setPageData([]);
  }, [genre]);
  useEffect(() => {
    setLoading(true);
    setError(false);
    getApi(genre, pageNumber);
  }, [genre, pageNumber]);
  function getApi(genre = 0, pageNumber = 1) {
    if (genre === 0) {
      api
        .get('movies', { params: { page: pageNumber } })
        .then((res) => {
          setLoading(false);
          setData((prevData) => {
            return [...prevData, ...res.data.data];
          });
          setPageData((prevData) => {
            return (
              [...prevData, res.data.data]
            );
          });
          setHasMore(res.data.data.length > 0);
        })
        .catch((err) => {
          setLoading(false);
          setError(true);
        });
    } else {
      api
        .get(`genres/${genre}/movies`, { params: { page: pageNumber } })
        .then((res) => {
          setLoading(false);
          setData((prevData) => {
            return [...prevData, ...res.data.data];
          });
          setPageData((prevData) => {
            return (
              [...prevData, res.data]
            );
          });
          setHasMore(res.data.data.length > 0);
        })
        .catch((err) => {
          setLoading(false);
          setError(true);
        });
    }
  }
  return ({ loading, data, pageData, error, hasMore });
}