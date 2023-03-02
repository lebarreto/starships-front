import React from "react";
import "./styles.css";

interface IStarships {
  name: string;
  model: string;
  manufacturer: string;
}

interface ITableProps {
  starships: IStarships[];
}

function Table({ starships }: ITableProps) {
  return (
    <table id="table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Modelo</th>
          <th>Fabricante</th>
        </tr>
      </thead>
      <tbody>
        {starships &&
          starships.map((starship: IStarships, index: number) => (
            <tr key={`${starship.name}-${index}`}>
              <td>{starship.name}</td>
              <td>{starship.model}</td>
              <td>{starship.manufacturer}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
