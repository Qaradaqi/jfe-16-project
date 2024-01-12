import { Style } from "./style";

export default function MovieCard(props) {
  const { id, title, poster } = props;
  return (
    <Style href={`/movies/${id}`} className="card flex flex-column align-center justify-center nowrap">
      <div className="card-content flex align-center wrap">
        <div className="card-frame"></div>
        <div className="card-poster">
          <img className="poster" src={poster} />
        </div>
        <div className="card-btn flex align-center justify-center">
          <i className="fa-solid fa-circle-play"></i>
        </div>
      </div>
      <div className="card-title">
        <span>{title}</span>
      </div>
    </Style>
  );
}