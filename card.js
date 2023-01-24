//import api from "./api.js";



const myCard = document.querySelector ("#myCard");

console.log('hola desde MainPage:..');

export const createCard = (personaje, cardAlone) => {
    const {image, name, id, status, species, type } = personaje;
    
    //myCard.className = "card m-3 ";
    //myCard.style = "width: 21rem";
    const cardBody = document.createElement ("div");
    cardBody.className = cardAlone?"card  m-3 card-body d-block me-auto ms-auto" :" card  m-3 card-body";
    cardBody.style = cardAlone?"width: 60vw":"width: 30vw";
    
    cardBody.style.marginBottom = "1rem";
    cardBody.style.backgroundColor = "#808B96";

    const cardImage = document.createElement ("div"); 
    const img = document.createElement ("img");
    img.src = `${image}`;
    img.className = "rounded d-block mx-auto w-75";
    img.classList.add = "mx-auto d-block";

    const cardText = document.createElement ("div");
    const nombre = document.createElement ("h6");
    nombre.textContent = name;
    nombre.className = "card-title text-center fs-3";

    const idCharacter = document.createElement ("p");
    idCharacter.className = "card-title text-center";
    idCharacter.textContent = `ID : ${id}`;

    const statusCharacter = document.createElement ("p");
    statusCharacter.className = "card-title text-center";
    statusCharacter.textContent = `Status : ${status}`;

    const specie = document.createElement ("p");
    specie.className = "card-title text-center";
    specie.textContent = `Specie : ${species}`;

    const typeCharacter = document.createElement ("p");
    typeCharacter.className = "card-title text-center";
    typeCharacter.textContent = `Type : ${type}`;

    const button = document.createElement ("button");
    button.classList = "btn btn-primary d-block ms-auto me-auto"
    button.textContent = "PERSONAJE";

    button.addEventListener ( "click", () =>{
        //window.location.assign(`./newPage.html?id=${id}`);
        //characterAlone ();
        //console.log(id);
        //button.href = "./newPage.html"
        window.location.assign(`./newPage.html?id=${id}`);

    } )

    myCard.appendChild (cardBody);
    cardBody.appendChild (cardImage);
    cardImage.appendChild (img);
    cardBody.appendChild (cardText)
    cardText.appendChild (nombre);
    cardText.appendChild (idCharacter);
    cardText.appendChild (statusCharacter);
    cardText.appendChild (specie);
    cardText.appendChild (typeCharacter);
    cardText.appendChild (button);    

}

export const character = (list) => {
    list.forEach(element => {
        //console.log (element);
        createCard (element);

        
    });
};
//character (api);

