console.log('hola desde MainPage:..');

import api from "./api.js";
import { character } from "./card.js";
import { getAllData } from "./backFuntions.js";

//character (api);

const dataCharacters= await getAllData();


character(dataCharacters.results);
