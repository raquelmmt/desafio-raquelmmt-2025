import { Animal } from "./animal";

class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const animal1 = new Animal("Rex", "cão", "RATO,BOLA");
    const animal2 = new Animal("Mimi", "gato", "BOLA,LASER");
    const animal3 = new Animal("Fofo", "gato", "BOLA,RATO,LASER");
    const animal4 = new Animal("Zero", "gato", "RATO,BOLA");
    const animal5 = new Animal("Bola", "cão", "CAIXA,NOVELO");
    const animal6 = new Animal("Bebe", "cão", "LASER,RATO,BOLA");
    const animal7 = new Animal("Loco", "jabuti", "SKATE,RATO");

    const animais = [animal1, animal2, animal3, animal4, animal5, animal6, animal7]
    const listaOrdemAnimais = ordemAnimais.split(',');

    const animaisEncontrados = [];
    for(const nomeAnimal of listaOrdemAnimais){
      for(const animal of animais){
        if(nomeAnimal === animal.nome) {
          animaisEncontrados.push(animal)
        }
      }
    }

    if (animaisEncontrados.length === 0) {
      return {
        erro: 'Animal inválido',
        lista: null
      };
    }

    const lista = [];

    for(const animalEncontrado of animaisEncontrados){
      const listaBrinquedos =  animalEncontrado.brinquedos.split(',')
      const listaBrinquedosP1 = brinquedosPessoa1.split(',')
      const listaBrinquedosP2 = brinquedosPessoa2.split(',')

      if(isContemNaOrdem(listaBrinquedos, listaBrinquedosP1) && !isContemNaOrdem(listaBrinquedos, listaBrinquedosP2)){
        lista.push(`${animalEncontrado.nome} - pessoa 1`)
      } else if (isContemNaOrdem(listaBrinquedos, listaBrinquedosP2)&& !isContemNaOrdem(listaBrinquedos, listaBrinquedosP1)){
        lista.push(`${animalEncontrado.nome} - pessoa 2`)
      } else {
        lista.push(`${animalEncontrado.nome} - abrigo`)
      }
    }

    return {
      lista: lista.sort()
    };
  }
}

function isContemNaOrdem(lista1, lista2) {
  let index = 0; 
  
  for (const item of lista2) {
    if (item === lista1[index]) {
      index++;

      if (index === lista1.length) {
        return true; 
      }
    }
  }

  return false; 
}

export { AbrigoAnimais as AbrigoAnimais };