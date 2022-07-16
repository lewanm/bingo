const apiUrl = 'http://localhost:5000/read'

fetch(apiUrl)
.then(response => response.json())
.then(data => {

    console.log({data})
    const element = document.getElementById('caja')

    const category1 = document.createElement('p')
    category1.textContent = data[2].nombre
    element.appendChild(category1)



})
.catch(err => console.log({err}))