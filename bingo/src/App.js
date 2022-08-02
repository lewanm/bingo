import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

const apiUrl = "http://localhost:5000/read";

function App() {
  const [frases, setFrases] = useState([]);

  const getData = async () => {
    const response = await axios.get(apiUrl);
    setFrases(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Mi bingo</h1>
      <section className="container">
        {frases.map((frase) => (
          <article
            key={frase.id}
            className={
              frase.especial === 1
                ? "caja caja-especial"
                : "caja caja-normal"
            }
          >
            {frase.nombre}
          </article>
        ))}
      </section>
    </>
  );
}

export default App;