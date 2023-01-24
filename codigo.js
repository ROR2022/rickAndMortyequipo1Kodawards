console.log('hola desde MainPage:..');
console.log('version casi definitiva...');

import api from "./api.js";
import { character } from "./card.js";
import { getAllData } from "./backFuntions.js";

//character (api);

const dataCharacters= await getAllData();


character(dataCharacters.results);
