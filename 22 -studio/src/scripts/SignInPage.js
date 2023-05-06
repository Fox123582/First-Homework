import {deletePerson} from "./saveInLocalStaragePersonIn.js";
export function reDraw(){
    const logInBut = document.querySelector('.logIn')
    const wrapForRegistration = document.querySelector('.wrapForRegistration')
    let person = JSON.parse(localStorage.getItem('loggedInPerson')) || []
    let cart = document.querySelector('.cart')

    if (person.email){
        let accountA = document.querySelector('.logIn')
        logInBut.innerText = person.name
        const createA = document.createElement('a')
        createA.innerText = 'Log out'
        createA.classList.add('logOut')
        wrapForRegistration.append(createA)
        if (window.location.pathname === '/index.html'){
            accountA.href = './html/account.html'
            cart.href = './html/shoppingCart.html'
        } else cart.href = './shoppingCart.html'

        logOut(createA)
    }

}
function logOut(a){
    a.addEventListener('click',()=>{
        deletePerson()
    })
}