var GameOver;
var activePlayer, scores, roundScore;
var diceDom = document.querySelector('.dice');
function newGame(){
    //Toglogch haruulah 0 1
    GameOver = false;
activePlayer = 0;

//toglogchiin tsugluulsan onoog hadgalah 
scores = [0, 0];
//toglogchiin eeljind tsugluulah onoo
roundScore = 0;

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

diceDom.style.display = 'none';
document.getElementById('name-0').textContent = "Player 1";
document.getElementById('name-1').textContent = "Player 2";
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');
}
newGame();
document.querySelector('.btn-roll').addEventListener('click', function (){
    if(GameOver === false){
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
        switchToNextPlayer();
        }
    }
    });
    document.querySelector(".btn-hold").addEventListener('click',function(){
        if(GameOver === false){
            scores[activePlayer] = scores[activePlayer] + roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        
        if(scores[activePlayer]>= 100){
            GameOver = true;
            document.getElementById('name-'+activePlayer).textContent = "Winner!!!";
            document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
            document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
        } else  {
            switchToNextPlayer();
        }
        
        }
        
    });
    
    function switchToNextPlayer(){
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = 0;
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector(".player-1-panel").classList.toggle("active");
        diceDom.style.display = 'none';
    }
// new game event listener
document.querySelector('.btn-new').addEventListener('click', newGame);

