var scores_1 = [ 1, 2, 3];
var scores_2 = [ 4, 6, 7];

var total = scores_1.concat(scores_2);

var score_3 = [ 10, ...total, 40];

console.log(score_3.slice(0));