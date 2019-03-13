import $ from 'jquery';
import 'bootstrap';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import { Game } from './game.js';
import { Player } from './player.js'


$(document).ready(function(){
  const game = new Game();

  const player = new Player();

  game.addPlayer(player);

  let currentPlayer = player;

  game.refreshResources();

  let $resources = $(".resource");

  $resources.each(function(index){
    $(this).append("<img src='" + game.currentResources[index].imgSrc + "'> ");
  });

  $('.resource').on("click", function(){
    const resource = $(this).children("img").attr("src");
    const allMatchingResources = $(".resource img[src='"+ resource +"']")
    allMatchingResources.remove();

    player.collectResources(resource, allMatchingResources.length);
  });

});
