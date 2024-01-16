import { useState, useRef, useCallback, Fragment, useEffect } from "react";
import HelemetFunc from "../../components/Helmet";
import PrimaryLayout from "../../components/Layout/PrimaryLayout";
import { Style } from "./style";
import useMovieData from "./useMovieData";
import MovieCard from "../../components/uiElements/Card";
import Loading from "../../components/Loading";


const sortItems = [
  {
    id: 1,
    title: 'Latest',
  },
  {
    id: 2,
    title: 'Alphabetical (A-Z)',
  },
  {
    id: 3,
    title: 'Reverse Alpha (Z-A)',
  },
];

export default function Movies() {
  const [genre, setGenre] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState(1);
  const containerRef = useRef(null);
  const items = [
    {
      "id": 0,
      "name": "All Movies",
      onClick: () => (setGenre(0)),
    },
    {
      "id": 1,
      "name": "Crime",
      onClick: () => (setGenre(1)),
    }, {
      "id": 2,
      "name": "Drama",
      onClick: () => (setGenre(2)),
    }, {
      "id": 3,
      "name": "Action",
      onClick: () => (setGenre(3)),
    }, {
      "id": 4,
      "name": "Biography",
      onClick: () => (setGenre(4)),
    }, {
      "id": 5,
      "name": "History",
      onClick: () => (setGenre(5)),
    }, {
      "id": 6,
      "name": "Adventure",
      onClick: () => (setGenre(6)),
    }, {
      "id": 7,
      "name": "Fantasy",
      onClick: () => (setGenre(7)),
    }, {
      "id": 8,
      "name": "Western",
      onClick: () => (setGenre(8)),
    }, {
      "id": 9,
      "name": "Comedy",
      onClick: () => (setGenre(9)),
    }, {
      "id": 10,
      "name": "Sci-Fi",
      onClick: () => (setGenre(10)),
    }, {
      "id": 11,
      "name": "Mystery",
      onClick: () => (setGenre(11)),
    }, {
      "id": 12,
      "name": "Thriller",
      onClick: () => (setGenre(12)),
    }, {
      "id": 13,
      "name": "Family",
      onClick: () => (setGenre(13)),
    }, {
      "id": 14,
      "name": "War",
      onClick: () => (setGenre(14)),
    }, {
      "id": 15,
      "name": "Animation",
      onClick: () => (setGenre(15)),
    }, {
      "id": 16,
      "name": "Romance",
      onClick: () => (setGenre(16)),
    }, {
      "id": 17,
      "name": "Horror",
      onClick: () => (setGenre(17)),
    }, {
      "id": 18,
      "name": "Music",
      onClick: () => (setGenre(18)),
    }, {
      "id": 19,
      "name": "Film-Noir",
      onClick: () => (setGenre(19)),
    }, {
      "id": 20,
      "name": "Musical",
      onClick: () => (setGenre(20)),
    },];
  const {
    loading,
    error,
    hasMore,
    data,
    pageData } =
    useMovieData(genre, pageNumber);

  useEffect(() => {
    setSort(1);
  }, [genre]);

  const observer = useRef();
  const lastMovieElementRef = useCallback((node) => {
    if (loading) {
      return;
    }
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    });
    if (node) {
      observer.current.observe(node);
    }
  }, [loading, hasMore]);
  function handleLeftSidebar() {
    return (
      <ul className="sidebar-items flex flex-column align-start justify-center">
        {items.map((item, index) => {
          return (
            <li onClick={() => {
              setGenre(item.id);
              setPageNumber(1);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} className={item.id === genre ? 'sidebar-item selected flex align-center justify-start' : 'sidebar-item flex align-center justify-start'} key={index}>
              {item.name}
            </li>
          );
        })}
      </ul>
    );
  }
  function renderFarm() {
    return (
      <Fragment>
        {data.map((item, index) => {
          if (data.length === index + 1) {
            return (
              <div ref={lastMovieElementRef} className="item flex align-center justify-center" key={index}>
                <MovieCard id={item.id} title={item.title} poster={item.poster} />
              </div>
            );
          } else {
            return (
              <div className="item flex align-center justify-center" key={index}>
                <MovieCard id={item.id} title={item.title} poster={item.poster} />
              </div>
            );
          }
        })}
      </Fragment>
    );
  }
  function sortMenu() {
    return (
      <div className="sort-menu">
        <div className="sort-menu-title flex flex-column align-start justify-center">
          <h3>Sort By</h3>
        </div>
        <ul className="sort-menu-items flex flex-column align-start justify-center">
          {sortItems.map((item, index) => {
            return (
              <li className={sort === item.id ? 'selected sort-menu-item flex align-center justify-start gap-5' : 'sort-menu-item flex align-center justify-start gap-5'} key={index} onClick={() => { setSort(item.id); setIsOpen(!isOpen); }}>
                {sort === item.id ? <i className="fa-solid fa-circle-check"></i> : <i className="fa-regular fa-circle"></i>}
                <span>{item.title}</span>
              </li>
            );
          })}
        </ul>
      </div >
    );
  }
  function renderFarmPagination() {
    return (
      pageData[pageNumber - 1].map((item, index) => {
        if (pageData[pageNumber - 1].length === index + 1) {
          return (
            <div ref={lastMovieElementRef} className="item flex align-center justify-center" key={index}>
              <MovieCard id={item.id} title={item.title} poster={item.poster} />
            </div>
          );
        } else {
          return (
            <div className="item flex align-center justify-center" key={index}>
              <MovieCard id={item.id} title={item.title} poster={item.poster} />
            </div>
          );
        }
      })
    );
  }
  // console.log(data);
  console.log(pageData);

  return (
    <PrimaryLayout>
      <HelemetFunc title={'Crackle - Watch Movies Online, Free TV Shows, &amp; Original Online Series'} />
      <Style>
        <div className="full-container">
          <div className="content flex align-start">
            <div className="left-sidebar">
              <div className="left-sidebar-menu">
                {handleLeftSidebar()}
              </div>
            </div>
            <div className="right-content flex align-center justify-center">
              {loading ?
                <div className="flex align-center justify-center">
                  <Loading />
                </div>
                : <div className="items flex align-center wrap">
                  <div className="movies-title flex align-start justify-between">
                    <div className="title-h">{items[genre].name}</div>
                    <div className="responsive-menu-btn align-center justify-center gap-5">
                      <span>Select Category</span>
                      <i className="fa-solid fa-angle-down"></i>
                    </div>
                    <div className="title-sort flex flex-column align-end justify-center gap-5">
                      <div className="sort-btn flex align-center justify-end gap-10" onClick={() => { setIsOpen(!isOpen); }}>
                        <span>Sort: {sortItems[sort - 1].title}</span>
                        <svg width="16" height="15" viewBox="0 0 24 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.2857 4.14285H10.2857C9.83104 4.14285 9.39501 3.96224 9.07351 3.64075C8.75202 3.31926 8.57141 2.88322 8.57141 2.42856C8.57141 1.97391 8.75202 1.53787 9.07351 1.21638C9.39501 0.894891 9.83104 0.714279 10.2857 0.714279H22.2857C22.7404 0.714279 23.1764 0.894891 23.4979 1.21638C23.8194 1.53787 24 1.97391 24 2.42856C24 2.88322 23.8194 3.31926 23.4979 3.64075C23.1764 3.96224 22.7404 4.14285 22.2857 4.14285Z"></path><path d="M18.4285 12.7143H6.42852C5.97386 12.7143 5.53783 12.5337 5.21634 12.2122C4.89485 11.8907 4.71423 11.4547 4.71423 11C4.71423 10.5454 4.89485 10.1093 5.21634 9.78782C5.53783 9.46633 5.97386 9.28572 6.42852 9.28572H18.4285C18.8832 9.28572 19.3192 9.46633 19.6407 9.78782C19.9622 10.1093 20.1428 10.5454 20.1428 11C20.1428 11.4547 19.9622 11.8907 19.6407 12.2122C19.3192 12.5337 18.8832 12.7143 18.4285 12.7143Z"></path><path d="M1.71429 21.2857H14.5714C15.0261 21.2857 15.4621 21.1051 15.7836 20.7836C16.1051 20.4621 16.2857 20.0261 16.2857 19.5714C16.2857 19.1168 16.1051 18.6807 15.7836 18.3592C15.4621 18.0378 15.0261 17.8571 14.5714 17.8571H1.71429C1.25963 17.8571 0.823594 18.0378 0.502103 18.3592C0.180612 18.6807 0 19.1168 0 19.5714C0 20.0261 0.180612 20.4621 0.502103 20.7836C0.823594 21.1051 1.25963 21.2857 1.71429 21.2857Z"></path>
                        </svg>
                      </div>
                      {isOpen && sortMenu()}
                    </div>
                  </div>
                  {renderFarm()}
                </div>
              }
            </div>
          </div>
        </div>
      </Style>
    </PrimaryLayout>
  );
}