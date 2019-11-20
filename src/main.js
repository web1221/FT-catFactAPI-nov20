import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $('#btn').click(function() {

    fetch(`https://cat-fact.herokuapp.com/facts`)
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonifiedResponse) {
        getElements(jsonifiedResponse);
      });

   const getElements = function(response) {
     let i = Math.floor(Math.random() * Math.floor(50));
      $('.showCatFact').text(`${response.all[i].text}`);
    }
  });
});
