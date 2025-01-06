function createCard(data,parent) {
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

    parent.append(card);
}