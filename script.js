let email = document.querySelector('#email');
let alert = document.querySelector('#alert');
let form = document.querySelector('form');

form.addEventListener('submit', e => {
    //trims blank spaces before or after email
    let emailValue = email.value.trim();
    
    //if email is empty or doesnt match requirements...
    if (emailValue === '' || !isEmail(emailValue)){

            e.preventDefault(); //do not submit form
            alert.style.visibility = "visible"; //show red alert
            email.style.border = "2px solid red"; //show red border
            email.style.backgroundImage = "url('images/icon-error.svg')"; //add ! icon
            email.style.backgroundRepeat = "no-repeat"; // ! icon properties
            email.style.backgroundPosition = "calc(100% - 4.5rem)"; // ! icon properties
        }

    //returns true if email matches regex - returns false if it doesnt (uses a .test method)
    function isEmail(email){
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
});

//clears invalid email alerts everytime the field is clicked or hovered
email.addEventListener('click', e => {
    alert.style.visibility = "hidden";
    email.style.border = "1px solid var(--desaturated-red)";
    email.style.backgroundImage = "none";
});

email.addEventListener('focus', e => {
    alert.style.visibility = "hidden";
    email.style.border = "1px solid var(--desaturated-red)";
    email.style.backgroundImage = "none";
});
