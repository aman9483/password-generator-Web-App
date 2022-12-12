const PassContainer = document.querySelector('.password-inner-part');

const Button = document.querySelector('#generator');

function PassG (){

const Password = 'ABCDEFDHIJKLMNOPQRSTWXYZ'+'abcdefghijklmnopqrwxyz@#&$0123456789';


let pass = ' ';

for(let i =1 ; i<=10; i++){

const char = Math.floor(Math.random()*Password.length+1);

   pass += Password.charAt(char);


}

return pass;

}


Button.addEventListener("click", ()=>{

    PassContainer.innerHTML = PassG();

    let music = new Audio('music/mixkit-arcade-game-jump-coin-216.wav');

    music.play();
       
});


