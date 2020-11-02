/*******************************************************************************
 * 
 *                      SNACKS 02/11/20
 * 
 *******************************************************************************/

$(document).ready( function() {

 /**
  * 
  * JSnack 1
  * Creare un array di oggetti
  * Ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
  * nome e peso.
  * Stampare a schermo la bici con peso minore con handlebars.
  * 
  */

  var bicicles = [{nome: 'bolt', peso: 25, colore: 'rosso'}, {nome: 'mountainview', peso: 45, colore: 'nero'}, {nome: 'feather', peso: 15, colore: 'giallo'}];
  var biciLeggera = {nome: '', peso: 0};

  for (var key in bicicles) {
    if (biciLeggera.peso == 0) {
        biciLeggera.peso = bicicles[key].peso;
    } else if (biciLeggera.peso > bicicles[key].peso) {
        biciLeggera.peso = bicicles[key].peso;
        biciLeggera.nome = bicicles[key].nome;
    }

  }

  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);
  var code = $('.content');

  var data = {
      title: 'Bici più leggera nel DB',
      nome: biciLeggera.nome,
      peso: biciLeggera.peso,
  }

  var html = template(data);
  code.append(html);





 /**
  * 
  * JSnack 2
  * Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
  * Chiedere due numeri all'utente per definire la posizione iniziale e
  * finale dal quale estrarre i valori dall'array originale.
  * Il nuovo array deve contenere gli elementi dell'array originale aventi
  * la posizione (indice array) compresa tra i due numeri inseriti dall'utente.
  * 
  */



 /**
  * 
  * JSnack 3
  * Creiamo un array di oggetti (scelti da voi)
  * Creiamo una copia da questo array di partenza e aggiungiamo ai singoli
  * elementi una nuova proprietà position che contiene una lettera casuale.
  * Non dobbiamo modificare l'array iniziale.
  * 
  */


});