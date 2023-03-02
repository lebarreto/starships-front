import React, { useState, KeyboardEvent } from "react";
import { useMount } from "react-use";
import "./styles.css";
import SearchBar from "../../components/SearchBar";
import Table from "../../components/Table";
import api from "../../services/api";

function Main() {
  const [starships, setStarships] = useState([]);

  const getStarships = async (name?: string) => {
    const response = await api.get("starships", {
      params: {
        name,
      },
    });

    const { data } = response;

    if (!data) {
      return;
    }

    setStarships(data);
  };

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    const text = (event.target as HTMLInputElement).value;
    getStarships(text);
  };

  useMount(getStarships);

  return (
    <div className="App">
      <header className="App-header">
        <p>Naves do Star Wars</p>
      </header>
      <main className="App-main">
        <SearchBar
          title="Filtro de naves"
          placeholder="Busque as naves espaciais por nome"
          onSearch={(event: KeyboardEvent<HTMLInputElement>) =>
            handleSearch(event)
          }
        />
        <div className="App-table">
          <Table starships={starships} />
        </div>
      </main>
    </div>
  );
}

export default Main;
