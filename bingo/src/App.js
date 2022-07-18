import './App.css';
const axios = require('axios');



//const apiUrl = 'http://localhost:5000/read'

function App() {
  const cajas =[
    {
      "id": 2,
      "nombre": '"voy a hacer un té"',
      "especial": 0
    },
    {
      "id": 3,
      "nombre": "maltrato animal",
      "especial": 0
    },
    {
      "id": 4,
      "nombre": "carvu nword",
      "especial": 0
    },
    {
      "id": 5,
      "nombre": "wea loca",
      "especial": 0
    },
    {
      "id": 6,
      "nombre": "dani es gay",
      "especial": 0
    },
    {
      "id": 2,
      "nombre": "voy a hacer un té",
      "especial": 0
    },
    {
      "id": 3,
      "nombre": "maltrato animal",
      "especial": 0
    },
    {
      "id": 4,
      "nombre": "carvu nword",
      "especial": 0
    },
    {
      "id": 5,
      "nombre": "wea loca",
      "especial": 0
    },
    {
      "id": 6,
      "nombre": "dani es gay",
      "especial": 0
    },
    {
      "id": 2,
      "nombre": "voy a hacer un té",
      "especial": 0
    },
    {
      "id": 3,
      "nombre": "maltrato animal",
      "especial": 0
    },
    {
      "id": 4,
      "nombre": "carvu NO nword",
      "especial": 1
    },
    {
      "id": 5,
      "nombre": "wea loca",
      "especial": 0
    },
    {
      "id": 6,
      "nombre": "dani es gay",
      "especial": 0
    },
    {
      "id": 2,
      "nombre": "voy a hacer un té",
      "especial": 0
    },
    {
      "id": 3,
      "nombre": "maltrato animal",
      "especial": 0
    },
    {
      "id": 4,
      "nombre": "carvu nword",
      "especial": 0
    },
    {
      "id": 5,
      "nombre": "wea loca",
      "especial": 0
    },
    {
      "id": 6,
      "nombre": "dani es gay",
      "especial": 0
    },
    {
      "id": 2,
      "nombre": "voy a hacer un té",
      "especial": 0
    },
    {
      "id": 3,
      "nombre": "maltrato animal",
      "especial": 0
    },
    {
      "id": 4,
      "nombre": "carvu nword",
      "especial": 0
    },
    {
      "id": 5,
      "nombre": "wea loca",
      "especial": 0
    },
    {
      "id": 6,
      "nombre": "dani es gay",
      "especial": 0
    },
  ];
  return (
    <>
      <h1>Mi bingo</h1>
      <section className="container">
        {cajas.map((caja) => (
          <article className={caja.especial === 1 ? "caja caja-especial" : "caja caja-normal"} key={caja.id}>
            {caja.nombre}
          </article>
        ))}
      </section>
    </>
  );
}

export default App;