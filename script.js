let form = document.getElementById('form');
let input = document.querySelector('input');
let inputClass = document.querySelector(".input")


function displayError() {

    let p = document.createElement('p');

    p.innerText = "Plese enter a valid email";
    p.className = 'invalid-email'

    inputClass.appendChild(p)
    inputClass.classList.add('error')
}
function removeError() {
    let p = inputClass.querySelector('p');
    inputClass.classList.remove('error')
    inputClass.removeChild(p)
}




function checkForm(value) {
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (emailRegex.test(value)) {
        removeError()

    } else {
        displayError()

    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkForm(input.value);
    input.value = ""
})




// if yes alert valid
// if no display error message 

// regex
// /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/