import { useMutation, useQuery } from "@apollo/client";
import { GET_COUNTRIES, ADD_COUNTRY } from "../api/example";
import "../style/Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export function HomePage() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const [addCountry] = useMutation(ADD_COUNTRY, {
    refetchQueries: [{ query: GET_COUNTRIES }],
  });

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [emoji, setEmoji] = useState("");

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  const handleAdd = async () => {
    if (!name || !code || !emoji) return alert("Tous les champs sont requis !");
    try {
      await addCountry({
        variables: {
          data: {
            name,
            code,
            emoji,
          },
        },
      });
      setName("");
      setCode("");
      setEmoji("");
    } catch (err: any) {
      alert("Erreur lors de l'ajout : " + err.message);
    }
  };

  return (
    <div className="home">
      <section className="form-section">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Emoji"
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
        />
        <input
          type="text"
          placeholder="Code"
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
        />
        <button onClick={handleAdd}>Add</button>
      </section>

      <section className="country-list">
        {data.countries.map((country: any) => (
          <Link
            to={`/country/${country.code}`}
            className="country-card"
            key={country.id}
          >
            <p>{country.name}</p>
            <span className="emoji">{country.emoji}</span>
          </Link>
        ))}
      </section>
    </div>
  );
}
