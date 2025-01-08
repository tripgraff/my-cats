import Api from "./api.js";

const container = document.querySelector('.container');
const btn = document.querySelector('.add__btn');
const popupList = document.querySelectorAll('.popup');
const popBox = document.querySelector('.popup__wrapper');

let catsList = localStorage.getItem('cats');
if (catsList) {
    catsList = JSON.parse(catsList);
}

const addForm = document.forms.add;
addForm.addEventListener('submit', function(e) {
    addCat(e, api, Array.from(popupList), catsList);
});

let user = document.cookie;
if (!user) {
    showPopup(Array.from(popupList), 'user');
    const userfForm = document.getElementById('userForm');
    userfForm.addEventListener('submit', function(event) {
        // event.preventDefault();
        const newUser = document.getElementById('nickname').value;
        user = newUser;
        console.log(user);
        document.cookie = `user=${user}`;
        // const popup = document.querySelector('.popup[data-type="user"]')
        // popup.style.display = 'none'
    })
    // const newUser = document.getElementById('nickname').value;
    // user = newUser; 
    // user = prompt('Ник ваш', 'tripgraff');
} else {
     user = user.split('=')[1];
}

const api = new Api(user)

if (!catsList){
    api.getCats()
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('cats', JSON.stringify(data));
            data.forEach(cat => {
                createCard(cat, container, Array.from(popupList));
            });
        });
} else {
    catsList.forEach(cat => {
        createCard(cat, container, Array.from(popupList));
    });
}


popupList.forEach(p => {
    p.firstElementChild.addEventListener('click', e => {
        p.classList.remove('active');
        popBox.classList.remove('active');
    });
});

btn.addEventListener('click', e => {
    showPopup(Array.from(popupList), 'add')
});

function closePopup() {
    popBox.classList.remove('active');
    popupList.forEach(p => {
        if (p.classList.contains('active')) {
            p.classList.remove('active');
        }
    })
}

popBox.addEventListener('click', function(e) {
    if (e.target === this) {
        closePopup();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.code === 'Escape'){
        closePopup();
    }
});