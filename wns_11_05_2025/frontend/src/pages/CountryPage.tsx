import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import "../style/Country.css";
import { GET_COUNTRY } from "../api/example";

export function CountryPage() {
  const { code } = useParams();
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { code },
  });

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  const country = data.country;

  return (
    <div className="country-detail">
      <h2>{country.emoji}</h2>
      <p>
        <strong>Name</strong> : {country.name} ({country.code})
      </p>
      {country.continent && (
        <p>
          <strong>Continent</strong> : {country.continent.name}
        </p>
      )}
    </div>
  );
}
