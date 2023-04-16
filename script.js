getComics()
form()
formUpdate()
getAllInfo()
function getComics (){
    fetch('https://63693f7228cd16bba71904e4.mockapi.io/universes')
        .then(data => data.json())
        .then(data => {
            fulfillComicsName(data)
        })
}

function fulfillComicsName(data){
    data.forEach(el=>{
        let update = document.querySelector('.optionComicsUpdate')
        let select = document.querySelector('.optionComics')

        let createOptionUpdate = document.createElement('option')
        let createOptionSubmit = document.createElement('option')

        createOptionUpdate.value = el.name
        createOptionUpdate.innerText = el.name

        createOptionSubmit.value = el.name
        createOptionSubmit.innerText = el.name

        select.append(createOptionSubmit)
        update.append(createOptionUpdate)
    })
}

function getAllInfo (){
    fetch('https://63693f7228cd16bba71904e4.mockapi.io/heroes')
        .then(data => data.json())
        .then(data => {
            fulfillTable(data)
        })
}
function fulfillTable (data){

    data.forEach(el =>{
        let tableBody = document.querySelector('tbody')

        let createTr = document.createElement('tr')
        let createTdForName = document.createElement('td')
        let createTdForPerson = document.createElement('td')
        let createTdForCheckbox = document.createElement('td')
        let createTdForButton = document.createElement('td')
        let createInputCheckbox = document.createElement('input')
        let createButton = document.createElement('button')

        createButton.innerText = 'Delete'
        createInputCheckbox.type = 'checkbox'

        if (checkFavorite(el.favourite)){
            createInputCheckbox.checked = true
        } else createInputCheckbox.checked = false

        createInputCheckbox.addEventListener('click',()=>{
            putData(createInputCheckbox.checked,el.id)
        })

        createButton.addEventListener('click',()=>{
            deleteData(el.id)
        })


        createTdForName.innerText = el.comics
        createTdForPerson.innerText = el.name

        createTdForCheckbox.append(createInputCheckbox)
        createTdForButton.append(createButton)
        createTr.append(createTdForName,createTdForPerson,createTdForCheckbox,createTdForButton)

        tableBody.append(createTr)
    })

}



function resetTable(){
    let tableBody = document.querySelector('tbody')
    tableBody.innerHTML = ''
}
function putData(favorite,id){
    fetch(`https://63693f7228cd16bba71904e4.mockapi.io/heroes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            favourite: favorite
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
}


function formUpdate (){
    let  form = document.querySelector(`form[name='update']`)
    console.log(form)
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        let nameValue = document.querySelector('#nameUpdate').value
        let comicsValue = document.querySelector('#comicsUpdate').value
        let favoriteValue = document.querySelector('#favouriteUpdate').checked
        let newPerson = new person(nameValue,comicsValue,favoriteValue)
        checkIfExists(newPerson,true)


    })
}
function updateData(id,newPerson){
    resetTable()
    fetch(`https://63693f7228cd16bba71904e4.mockapi.io/heroes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name:newPerson.name,
            comics:newPerson.comics,
            favourite:newPerson.favourite
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
        .finally(() => getAllInfo())
}

function deleteData(id){
    resetTable()
    fetch(`https://63693f7228cd16bba71904e4.mockapi.io/heroes/${id}`,{
        method:'DELETE'
    })
        .then(response => response.json())
        .finally(()=> getAllInfo())
}



function checkFavorite (favoriteComics){
    return favoriteComics || favoriteComics === 'on';
}

function checkIfExists(newPerson,boolean) {
    fetch('https://63693f7228cd16bba71904e4.mockapi.io/heroes')
        .then(response => response.json())
        .then(data => {
            const foundPerson = data.find(item => item.name === newPerson.name)
            if (foundPerson) {
                if (boolean) {
                    updateData(foundPerson.id, newPerson)
                } else {
                    console.log(`Object with name "${newPerson.name}" already exists in the API. ID: ${foundPerson.id}`)
                }
            } else if(!boolean){
                addData(newPerson)
            }
        })
        .catch(error => console.error(error))
}



function form(){
    let  form = document.querySelector(`form[name='post']`)

    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        let nameValue = document.querySelector('#name').value
        let comicsValue = document.querySelector('#comics').value
        let favoriteValue = document.querySelector('#favourite').checked
        let newPerson = new person(nameValue,comicsValue,favoriteValue)
        checkIfExists(newPerson,false)

    })
}
class person{
    constructor(name,comics,favourite) {
        this.name = name
        this.comics = comics
        this.favourite = favourite
    }
}


function addData(newPerson){
    resetTable()
    fetch(`https://63693f7228cd16bba71904e4.mockapi.io/heroes`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPerson)
    })
        .then(response => response.json())
        .finally(()=> getAllInfo())
}

