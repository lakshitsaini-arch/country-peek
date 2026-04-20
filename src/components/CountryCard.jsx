import { Link } from "react-router-dom";
import { useFavourites } from "../context/FavouritesContext";

function CountryCard({ country }) {
  const { name, flags, population, region, capital, cca3 } = country;
  const { favourites, dispatch } = useFavourites();

  const isSaved = favourites.some((f) => f.cca3 === cca3);

  const handleFavouriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isSaved) {
      dispatch({ type: "REMOVE_FAVOURITE", payload: cca3 });
    } else {
      dispatch({ type: "ADD_FAVOURITE", payload: country });
    }
  };

  return (
    <Link to={`/country/${cca3}`} className="card">
      <img
        src={flags.svg}
        alt={`${name.common} flag`}
        className="card__flag"
      />

      <div className="card__body">
        <h3 className="card__name">{name.common}</h3>
        <p>Population: {population.toLocaleString()}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital?.[0] ?? "N/A"}</p>
        <button
          className={`fav-btn ${isSaved ? "fav-btn--saved" : ""}`}
          onClick={handleFavouriteClick}
          aria-label={isSaved ? `Remove ${name.common} from favourites` : `Save ${name.common} to favourites`}
          aria-pressed={isSaved}
        >
          {isSaved ? "♥ Saved" : "♡ Save"}
        </button>
      </div>
    </Link>
  );
}

export default CountryCard;