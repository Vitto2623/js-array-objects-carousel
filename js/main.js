/**
 *
 *
 *
Riprendiamo l'esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice scritto oggi insieme a lezione, che troverete direttamente nella mia repository di github a questo link: [link github]

Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto dei tre array separati, con una sola regola: non è possibile modificare l'HTML ma solamente JS e CSS.
Ricordiamo sempre l'importanza dell'integrità del dato.

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?

 *
 */


const gallery = [
    {
        item: '01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        item: '02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        item: '03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        item: '04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        item: '05.jpg',
        title:  'Paradise',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
]


let content = "";
let content2 = "";
let contatore = 0;

for ( let i = 0; i < gallery.length; i++){
    content2 += ` 
    <div class="my-thumbnails position-relative">
    <img src="img/${gallery[i].item}" class="my-border" alt="${gallery[i].title}">
    </div>`  
}

const carouselWrapper = document.querySelector('div.my-thumbnails');
carouselWrapper.innerHTML += content2

const carouselElements = document.querySelector('div.my-carousel-images');
carouselElements.innerHTML = `<img src="img/${gallery[contatore].item}" alt="${gallery[contatore].title}">`

//dentro i pulsanti next e prev devi inserire il codice incrementando o decrementando il contatore e poi metti:
//carouselElements.innerHTML = `<img src="img/${gallery[contatore].item}" alt="${gallery[contatore].title}">`

const borderOff = document.getElementsByClassName("my-border");
borderOff[0].classList.add('active-border');


const nextButton = document.querySelector('.my-next');
nextButton.addEventListener('click', function(){
    borderOff[contatore].classList.remove('active-border');
    contatore++
    if (contatore == 5){
        contatore = 0;
    }
    carouselElements.innerHTML = `<img src="img/${gallery[contatore].item}" alt="${gallery[contatore].title}">`
    borderOff[contatore].classList.add('active-border');
});

const previousButton = document.querySelector('.my-previous');
previousButton.addEventListener('click', function(){
    borderOff[contatore].classList.remove('active-border')
    contatore--
    if (contatore == -1){
        contatore = 4;
    }
    carouselElements.innerHTML = `<img src="img/${gallery[contatore].item}" alt="${gallery[contatore].title}">`
    borderOff[contatore].classList.add('active-border');
});