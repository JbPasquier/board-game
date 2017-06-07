import pry from 'pryjs';
import Board from './board';
import Player from './player';
import Dice from './dice';
import Game from './game';


var board = new Board(24);
board.build();
var initiative = Math.round(Math.random());
var greg = new Player("Greg", !!initiative);
var lea = new Player("Lea", !initiative);
var dice = new Dice();

var game = new Game(board, [greg, lea], dice);
game.play();
eval(pry.it);
