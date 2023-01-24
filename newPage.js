import api from "./api.js";
import { getOneCharacter } from "./backFuntions.js";
import { createCard } from "./card.js";

const mySearch = window.location.search;
const tempUrl = new URLSearchParams(mySearch);
const id= parseInt (tempUrl.get('id'));

console.log (id);

const characterAlone = ( async (id) => {
    //const newdata = api.find ((element) => element.id === id);
    const newdata= await getOneCharacter(id);
    console.log ("prueba", newdata);
    createCard (newdata, true);

});



characterAlone (id);