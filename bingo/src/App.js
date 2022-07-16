import logo from './logo.svg';
import './App.css';
const axios = require('axios');



const apiUrl = 'http://localhost:5000/read'

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

function App() {
  return (

    

  );
}

export default App;