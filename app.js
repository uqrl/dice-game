//Toglogch haruulah 0 1
var activePlayer = 1;

//toglogchiin tsugluulsan onoog hadgalah 
var scores = [0, 0];

//toglogchiin eeljind tsugluulah onoo
var roundScore = 0;

//shoonii ali tal buusnig hadgalah huvisagch
var dice = Math.floor( Math.random() * 6)+ 1;

//<div class="player-score" id="score-0">43</div>
window.document.querySelector('#score-0').textContent = 0;

document.querySelector('#score-1').textContent = 0;
document.querySelector('.dice').style.display = 'none';
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;
console.log('shoo : ' + dice);

