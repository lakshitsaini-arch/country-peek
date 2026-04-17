import { Link } from 'react-router-dom';
import { useFavourites } from '../context/FavouritesContext';
import CountryCard from '../components/CountryCard';

function Favourites() {
  const { favourites } = useFavourites();

  if (favourites.length === 0) {
    return (
      <div className="home" style={{ padding: '40px 24px', textAlign: 'center' }}>
        <h2>No saved countries</h2>
        <p style={{ margin: '20px 0' }}>You have not saved any countries yet.</p>
        <Link to="/" style={{ textDecoration: 'underline', color: 'inherit' }}>Go back and explore</Link>
      </div>
    );
  }

  return (
    <div className="home">
      <div className="cards-grid">
        {favourites.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
