import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

const apiUrl = "http://192.168.0.211:5000/read";

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
      <h1>asd</h1>
      <form>
            <table>
                <tr>
                  <td>Evento</td>
                    <td>
                      <input type="Text" placeholder= "Evento" name = ""></input>
                    </td>
                </tr>
                <tr>
                  <td>Es especial?</td>
                    <td>
                      <input type="radio" name = "especial"></input>Si
                      <input type="radio" name = "especial"></input>No
                    </td>
                </tr>
                <tr>
                    <td>
                      <input type="submit" value="submit" />
                    </td>
                </tr>
            </table>
      </form>
    </>
  

  );
}

export default App;