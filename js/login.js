const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const userNameBox = document.querySelector("#user-name");
const HIDDENCLASS = "hidden";
const USERNAME_KEY = "username";

function loginSubmit(e){
    e.preventDefault();
    loginForm.classList.add(HIDDENCLASS);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintName(username);
    

}
function paintName(username){
    userNameBox.innerText = `Hello! I love ${username} :)`;
    userNameBox.classList.remove(HIDDENCLASS);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDENCLASS);
    loginForm.addEventListener("submit",loginSubmit);
}else{
    paintName(savedUsername);
}


