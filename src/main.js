import $ from 'jquery';
import 'bootstrap';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import { Game } from './game.js';
import { Player } from './player.js'

$(document).ready(function(){
  const game = new Game();
  game.refreshResources();

  const player1 = new Player(player1);
  const player2 = new Player(player2);

  player1.active = true;


  let $resources = $(".resource");
  $resources.each(function(index){
    $(this).append("<img src='" + game.currentResources[index].imgSrc + "'> ");
  });

  $('.resource').on("click", function(){
    const resource = $(this).children("img").attr("src");
    const allMatchingResources = $(".resource img[src='"+ resource +"']")

    allMatchingResources.remove();

    if(player1.active) {
      player1.collectResources(resource, allMatchingResources.length);
      player1.active = false;
      player2.active = true;
    } else {
      player2.collectResources(resource, allMatchingResources.length);
      player2.active = false;
      player1.active = true;
    }

    game.refreshResources();

  });

});
