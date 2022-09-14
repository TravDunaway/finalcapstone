const namesContainer = document.querySelector('#names-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/names`

const namesCallback = ({ data: names }) => displaynames(names)
const errCallback = err => console.log(err.response.data)

const getAllnames = () => axios.get(baseURL).then(namesCallback).catch(errCallback)
const createname = body => axios.post(baseURL, body).then(namesCallback).catch(errCallback)
const deletename = id => axios.delete(`${baseURL}/${id}`).then(namesCallback).catch(errCallback)
const updatename = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(namesCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let rating = document.querySelector('input[name="ratings"]:checked')
   

    let bodyObj = {
        title: title.value,
        rating: rating.value, 
    }

    createname(bodyObj)

    title.value = ''
    rating.checked = false
}

function createnameCard(name) {
    const nameCard = document.createElement('div')
    nameCard.classList.add('name-card')

    nameCard.innerHTML = `
    <p class="name-title">${name.title}</p>
    <div class="btns-container">
        <button onclick="updatename(${name.id}, 'minus')">-</button>
        <p class="name-rating">${name.rating} stars</p>
        <button onclick="updatename(${name.id}, 'plus')">+</button>
    </div>
    <button onclick="deletename(${name.id})">delete</button>
    `
    namesContainer.appendChild(nameCard)
}

function displaynames(arr) {
    namesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createnameCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllnames()