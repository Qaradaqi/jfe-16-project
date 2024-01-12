import { Style } from "./style";

export default function GenreCard(props) {
  const { id, name } = props;
  function handleClassName() {
    let result;
    if (parseInt(id-1) % 6 === 0) {
      result = 'card-poster item-0';
      console.log(id)
    } else if (parseInt(id-1) % 6 === 1) {
      result = 'card-poster item-1';
    } else if (parseInt(id-1) % 6 === 2) {
      result = 'card-poster item-2';
    } else if (parseInt(id-1) % 6 === 3) {
      result = 'card-poster item-3';
    } else if (parseInt(id-1) % 6 === 4) {
      result = 'card-poster item-4';
    } else if (parseInt(id-1) % 6 === 5) {
      result = 'card-poster item-5';
    }
    return result;
  }
  return (
    <Style href={'/'} className="card flex flex-column align-center justify-center nowrap">
      <div className="card-content flex align-center wrap">
        <div className="card-frame"></div>
        <div className={`${handleClassName()} flex align-end`}>
          <p>{name}</p>
        </div>
      </div>
    </Style>
  );
}