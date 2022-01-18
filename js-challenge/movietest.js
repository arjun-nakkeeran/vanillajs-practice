import {movie} from './movie.js';

let avengers = new movie('Avathar', 'Stephen Spielberg', 'sci-fi', 2005, 5);
let summary = avengers.getOverview();
console.log(summary);

console.log(avengers);