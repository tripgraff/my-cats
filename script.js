const container = document.querySelector('.container');
fetch("http://localhost:3000/cats")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(cat => {
            createCard(cat, container);
        });
    })