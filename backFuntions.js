const baseUrl= 'https://rickandmortyapi.com/api/character/';

export const getAllData = async ()=> {

  try {
    const response= await fetch(`${baseUrl}`);
    const result = await response.json();
    console.log(result);
    return result
  } catch (error) {
    console.log('Ocurrio un error:',error);
    return error
  }
}

export const getOneCharacter= async(id)=>{
  try {
    const response = await fetch(`${baseUrl}${id}`);
    const result = await response.json();
    
    return result
  } catch (error) {
    console.log(error);
    return error
  }
}