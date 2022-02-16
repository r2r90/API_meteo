// f54ab98552596ec4de24ad829410eb8a

let ville = 'Abovyan';
// appeler le function recupererLaTemperature(ville);

let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click',() => {
    ville = prompt('Quelle ville veux tu voir gros?');
    recevoirTemperature(ville);
})

function recevoirTemperature(ville) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=f54ab98552596ec4de24ad829410eb8a&units=metric';

let requete = new XMLHttpRequest();
requete.open('GET', url);
requete.responseType = 'json';
requete.send();

requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
        if (requete.status === 200) {
            let reponse = requete.response;
            let temperature = reponse.main.temp;
            let name = reponse.name;
            document.querySelector('#temperature_label').textContent = temperature;
            document.querySelector('#ville').textContent = ville;
        }
        else {
            alert('Un probleme est intervenu, passez plus tard.')
        }
    }
} 
}