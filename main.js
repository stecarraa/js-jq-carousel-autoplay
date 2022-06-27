const givenImages = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
    ];



// immagine da cui voglio partire nell'array
let activeElementIndex = 0;


// mi vado a prendere dove visualizzare le img nel dome
const imgsWrapper = document.querySelector('.carousel-container');
const imgList = imgsWrapper.children;





for(index = 0 ; index < givenImages.length ; index++){
    // creo l'elemento html di tipo img
const newImg = document.createElement('img');

// aggiungo le classi che voglio che questo abbia
newImg.classList.add('w-100', 'rounded');

// cambio l'src dell'immagine => .setAttribute(quale attributo, contenuto dell'attributo)
newImg.setAttribute('src', givenImages[index]);

//  aggiungo l'immagine creata alla lista
imgsWrapper.append(newImg);

imgList[activeElementIndex].classList.add('active');
}


// | prendo il bottone "next"
const btnNext = document.getElementById('next-button');

btnNext.addEventListener('click', nextImage);

const btnPre = document.getElementById('prev-button')

btnPre.addEventListener('click', prevImage);

function nextImage(){
    imgList[activeElementIndex].classList.remove('active');
   
    // ? scorro di un posto l'elemento attivo
    activeElementIndex++;

    //  se siamo alla fine dell'array, non uscire ma ricomincia dal primo elemento della lista.
    if (activeElementIndex === imgList.length){
        activeElementIndex = 0;
    }

    // aggiungo la classe active al nuovo elemento attivo
    imgList[activeElementIndex].classList.add('active');

    console.log('Cliccato! L\'elemento adesso attivo è in posizione: ' + activeElementIndex);
}

function prevImage(){
    imgList[activeElementIndex].classList.remove('active');
   
    // ? scorro di un posto l'elemento attivo
    activeElementIndex--;

    //  se siamo alla fine dell'array, non uscire ma ricomincia dal primo elemento della lista.
    if (activeElementIndex === -1){
        activeElementIndex = imgList.length - 1;
    }

    // aggiungo la classe active al nuovo elemento attivo
    imgList[activeElementIndex].classList.add('active');

    console.log('Cliccato! L\'elemento adesso attivo è in posizione: ' + activeElementIndex);
}

const timer = setInterval(nextImage, 3000);