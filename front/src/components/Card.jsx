import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite, deleteFav } from "../redux/actions";

export default function Card({ name, gender, onClose, species, image, id }) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatchEvent(deleteFav(id));
    } else {
      setIsFav(true);
      dispatch(addFavorite({ name, gender, onClose, species, image, id }));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div>
      <div>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
      </div>

      <button onClick={onClose}>X</button>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <img src={image} alt={name} />
    </div>
  );
}
