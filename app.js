//Toglogch haruulah 0 1
var activePlayer = 1;

//toglogchiin tsugluulsan onoog hadgalah 
var scores = [0, 0];

//toglogchiin eeljind tsugluulah onoo
var roundScore = 0;

//shoonii ali tal buusnig hadgalah huvisagch

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

var diceDom = document.querySelector('.dice');
diceDom.style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function (){
    var diceNumber = Math.floor( Math.random() * 6)+ 1;
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + diceNumber+'.png';
});

