let dogContent = document.querySelector(".api-content");











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