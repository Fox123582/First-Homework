let err = 'Errors:\n';
let attemps = 3;

while(err === 'Errors:\n' || attemps > 0){
    err = 'Errors:\n';
    let email = prompt('Enter email');
    let password = prompt('Enter password');
    /////////EMAIL///////
    let countSymbol = 0;

    if(email.length > 15){
        err = err + 'too long email\n';
    } 
    if(email.startsWith(' ') || email.endsWith(' ') || email.startsWith('@' || email.endsWith('@'))){
        err = err + 'odd space or @ not in the right position\n';
    }
    if(!email.endsWith('.com')){
        err = err + 'email dont have .com at the end\n';
    }
    for (i = 0; i < email.length; i++){
        if(email[i] === '@'){
            countSymbol++;
        }
    }
    if(countSymbol >= 2){
        err = err + 'there is an extra element @\n';
    } else if (countSymbol === 0){
        err = err + 'there is no element @\n';
    }
    /////////EMAIL///////
    /////////PASWORD////
    let countLet = 0;
    for(i = 0; i < password.length; i++){
        if(password[i].charCodeAt() >= 65 && password[i].charCodeAt() <= 90){
           countLet++;
        }
    }
    if(countLet < 1){
        err = err + 'password dont have an uppercase letter\n';
    }
    
    if(password.length < 4){
        err = err + 'password too short\n';
    } else if(password.length > 12){
        err = err + 'password too long\n';
    }
    /////////PASWORD////
    /////////RESULT////////////
    if(err === 'Errors:\n'){
        document.write(`<pre> 
        Your account sucessfully registered!
        email: ${email}
        password: ${password}
        </pre>`)
        break;
    } else {
        attemps--;
        alert(`${err}Attemps: ${attemps}`)
    }
}
if(attemps === 0){
    alert('Your attemps are over :(')
}


