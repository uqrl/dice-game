//Toglogch haruulah 0 1
var activePlayer = 0;

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
    //1-6 dotor too gargana
    var diceNumber = Math.floor( Math.random() * 6)+ 1;
    
    //shooni zurag gargaj irne
    diceDom.style.display = 'block';
    
    //buusan toond hargalzah shooni zuragig gargana.
    diceDom.src = 'dice-' + diceNumber+'.png';
    
    //1 ees ylgaatai too buuval toglogchiin eeljiin toog nemegduulne.
    if(diceNumber !== 1){

        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        
        
    } else {
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = 0;
        //1 buusan uyd toglogchiin eelj solino
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer =0);
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector(".player-1-panel").classList.toggle("active");
        diceDom.style.display = 'none';
        }
    });
    // document.querySelector("btn-hold").addEventListener('click',function(){
    //     document.getElementById('score-' + activePlayer).textContent = roundScore;
    // })
    
