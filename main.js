let button1 = document.querySelector(".btn");
let image = document.querySelector(".card-img-top");
let url = 'https://dog.ceo/api/breeds/image/random';

button1.addEventListener('click', () => {
    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            image.src = data.message;
        })
})




let form = document.querySelector("form");
let textInput = document.querySelector("#textInput");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let url = `https://goweather.herokuapp.com/weather/${textInput.value}`;
    fetch(encodeURI(url))
    .then((response) => {
        return response.json();   
    }).then((data) => {

    });
})