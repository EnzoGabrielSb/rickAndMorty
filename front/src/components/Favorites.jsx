import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../redux/actions";

const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handlerFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  
  return (
    <div>
      <div>
        <select onChange={handleOrder}>
          <option value="order" disabled="disabled">
            Order By
          </option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>

        <select onChange={handlerFilter}>
          <option value="" disabled="disabled">
            Filter By
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknow">Unknow</option>
          <option value="Genderless">Genderless</option>
        </select>
      </div>

      {myFavorites.map((char) => {
        return (
          <div key={char.id}>
            <Link to={`/detail/${char.id}`}>
              <h2>{char.name}</h2>
            </Link>
            <h2>{char.species}</h2>
            <h2>{char.gender}</h2>
            <img src={char.image} alt={char.name} />
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
