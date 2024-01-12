import { Fragment, useEffect, useRef, useState } from "react";
import HelemetFunc from "../../components/Helmet";
import PrimaryLayout from "../../components/Layout/PrimaryLayout";
import { Style } from "./style";
import { Link, createSearchParams, useSearchParams } from "react-router-dom";
import { api } from '../../utils/api';
import MovieCard from "../../components/uiElements/Card";
import Loading from '../../components/Loading';

export default function Search() {
  const input = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    data: [],
    metadata: {
      current_page: 1,
      per_page: 10,
      page_count: 1,
      total_count: 1,
    },
  });
  useEffect(() => {
    input.current.focus();
    let q = searchParams.get('q');
    if (q) {
      setLoading(true);
      getApi(q);
    }
  }, []);
  function getApi(search) {
    api
      .get("movies", { params: { q: search } })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });

  }
  const handleChange = (event) => {
    const { value } = event.target;
    setLoading(true);
    getApi(value);
    setSearchParams(createSearchParams({ q: value }));

  };
  function renderFarm() {
    return (
      <div className="result flex aling-start justify-between">
        <ul className="list flex flex-column">
          {data.data.map((item, index) => {
            return (
              <li className="list-item flex align-center" key={index}>
                <Link className="item-link flex aling-center" to={`/movies/${item.id}`}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="items flex align-center justify-start wrap">
          {data.data.map((item, index) => {
            return (
              <li className="item flex align-center" key={index}>
                <MovieCard id={item.id} title={item.title} poster={item.poster} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  return (
    <PrimaryLayout>
      <HelemetFunc title={'Crackle - Watch Movies Online, Free TV Shows, &amp; Original Online Series'} />
      <Style>
        <div className="full-container">
          <div className="flex align-center justify-start">
            <Link className="flex align-center justify-center" to={'/'}>
              <i className="icon fa-solid fa-arrow-left"></i>
            </Link>
            <div className="input-box flex align-center">
              <input ref={input} onChange={handleChange} className="input" type="text" name="input" value={searchParams.get('q') && searchParams.get('q')} />
            </div>
          </div>
          {loading ? <div className="flex justify-center align-center">
            <Loading />
          </div> : <Fragment>
            {searchParams.get('q') && <div className="result-title">
              <h3>Results</h3></div>}
            {(data.data.length > 0 && searchParams.get('q')) ? renderFarm() :
              (data.data.length === 0 && searchParams.get('q')) && <div className="no-result flex align-center gap-10">
                <i className="fa-solid fa-triangle-exclamation"></i>
                <span>{`No results found for "${searchParams.get('q')}"`}</span>
              </div>}
          </Fragment>}
        </div>
      </Style>
    </PrimaryLayout>
  );
}