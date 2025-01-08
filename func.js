function createCard(data,parent, arr) {
    const card = document.createElement('div');
    card.className = "card";
    card.setAttribute('data-id', data.id);

    const pic = document.createElement('div');
    pic.className = "card__pic";
    pic.style.backgroundImage = `url(${data.img_link || 'img/adopt.png'})`

    const name = document.createElement('div');
    name.className = "card__name";
    name.innerHTML = data.name;

    const age = document.createElement('div');
    age.className = "card__age";
    age.innerHTML = data.age || 'no';

    const rate = document.createElement('div');
    rate.className = "card__rate";
    rate.innerHTML = '<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>'
    
    card.append(pic, name, age, rate)
    card.addEventListener('click', function() {
        showPopup(arr, 'card');
    });
    parent.append(card);
}

function showPopup(list, type, content) {
    let el = list.filter(el => el.dataset.type === type)[0];
    // switch (type) {
    //     case "card":
    //     case "info":
    //     case "form":
    // }
    el.classList.add('active');
    el.parentElement.classList.add('active');
}

function addCat(e, api, popupList, store) {
    e.preventDefault();
    let body = {};
    for (let i = 0; i < e.target.elements.length; i++) {
        let el = e.target.elements[i];
        if (el.name) {
            if (el.type === 'checkbox'){
                body[el.name] = el.checked;
            } else if (el.value) {
                body[el.name] = el.value
            }
        }
        // console.log(fetch(`http://localhost:3000/cats/${e.target.elements.id.value}`))
    }
    api.addCat(body)
        .then(res => res.JSON)
        .then(data => {
            // localStorage.setItem('cat', JSON.stringify(body))
            createCard(body, document.querySelector('.container'));
            store.push(body);
            localStorage.setItem('cats', JSON.stringify(store));
            e.target.reset();
            document.querySelector('.popup__wrapper').classList.remove('active');
            // showPopup(popupList, 'info', data.message);
        })
}