import api from "./api.js";
import { createCard } from "./card.js";

const mySearch = window.location.search;
const tempUrl = new URLSearchParams(mySearch);
const id= parseInt (tempUrl.get('id'));

console.log (id);

const characterAlone = ( (id) => {
    const newdata = api.find ((element) => element.id === id);
    
    console.log ("prueba", newdata);
    createCard (newdata, true);

});



characterAlone (id);