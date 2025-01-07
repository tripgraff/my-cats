const container = document.querySelector('.container');
const btn = document.querySelector('.add__btn');
const popupList = document.querySelectorAll('.popup');
const popBox = document.querySelector('.popup__wrapper');

fetch("http://localhost:3000/cats")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(cat => {
            createCard(cat, container, Array.from(popupList));
        });
    })


popupList.forEach(p => {
    p.firstElementChild.addEventListener('click', e => {
        p.classList.remove('active');
        popBox.classList.remove('active');
    });
});

btn.addEventListener('click', e => {
    showPopup(Array.from(popupList), 'add')
});

popBox.addEventListener('click', function(e) {
    if (e.target === this) {
        popBox.classList.remove('active');
        popupList.forEach(p => {
            if (p.classList.contains('active')) {
                p.classList.remove('active');
            }
        })
    }
})