import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { CatFacts } from './catfacts.js';


$(document).ready(function() {

  let catFacts = new CatFacts();

  $('#btn').click(async function() {
    console.log(catFacts);
    (async () => {
      let catFacts = new CatFacts();
      const response = await catFacts.getCatFacts();
      getElements(response)
    })();
    const getElements = function(response) {
      let i = Math.floor(Math.random() * Math.floor(50));
      $('.showCatFact').text(`${response.all[i].text}`);
    }
  });
});
