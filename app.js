function rand_image(){
    var randomNumber = Math.floor(Math.random() * (6)) + 1;;
    var link=`images/dice${randomNumber}.png`;    
    return [link,randomNumber];
}

var player_1=rand_image()
var player_2=rand_image()
console.log(player_1,player_2);

if (player_1[1]>player_2[1]){
    document.getElementById("name").innerHTML="Player 1 Wins!"
}
else if (player_1[1]==player_2[1]) {
    document.getElementById("name").innerHTML="Draw!"
}
else{
    document.getElementById("name").innerHTML="Player 2 Wins!"
}



document.getElementById("random_number").innerHTML = `<img class="img1" src=${player_1[0]}>`;
document.getElementById("random_number_2").innerHTML = `<img class="img2" src=${player_2[0]}>`;

