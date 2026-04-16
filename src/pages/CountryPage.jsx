import { useParams, useNavigate } from 'react-router-dom';
import useCountry from '../hooks/useCountry';
import '../styles/App.css';

function CountryPage() {
  const { code } = useParams();
  const navigate = useNavigate();
  const { country, loading, error } = useCountry(code);

  if (loading) {
    return (
      <div className="country-page">
        <p className="page-status">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="country-page">
        <p className="page-status page-status--error">{error}</p>
      </div>
    );
  }

  if (!country) return null;

  const {
    name,
    flags,
    population,
    region,
    subregion,
    capital,
    languages,
    currencies,
    borders
  } = country;

  const languageList = languages ? Object.values(languages).join(', ') : 'N/A';
  const currencyList = currencies
    ? Object.values(currencies).map(c => c.name).join(', ')
    : 'N/A';
  const borderList = borders && borders.length > 0 ? borders : null;

  return (
    <div className="country-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        &larr; Back
      </button>

      <div className="country-page__layout">
        <img
          src={flags?.svg}
          alt={`${name?.common} flag`}
          className="country-page__flag"
        />

        <div className="country-page__info">
          <h2 className="country-page__name">{name?.common}</h2>
          <p className="country-page__official">{name?.official}</p>

          <div className="country-page__details">
            <div>
              <p><strong>Population:</strong> {population?.toLocaleString()}</p>
              <p><strong>Region:</strong> {region}</p>
              <p><strong>Subregion:</strong> {subregion}</p>
              <p><strong>Capital:</strong> {capital?.[0] ?? 'N/A'}</p>
            </div>
            <div>
              <p><strong>Languages:</strong> {languageList}</p>
              <p><strong>Currencies:</strong> {currencyList}</p>
            </div>
          </div>

          {borderList && (
            <div className="country-page__borders">
              <strong>Border Countries: </strong>
              <div className="borders-list">
                {borderList.map(border => (
                  <span key={border} className="border-badge">
                    {border}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
