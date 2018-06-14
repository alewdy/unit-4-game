$(document).ready(function() {

var btnOneNum=0;
var btnTwoNum=0;
var btnThreeNum=0;
var btnFourNum=0;
var wins=0;
var losses=0;
var targetNum=0;
var currentNum=0;


function reset(){
        
    btnOneNum=Math.floor(Math.random() * 12 + 1);
    btnTwoNum=Math.floor(Math.random() * 12 + 1);
    btnThreeNum=Math.floor(Math.random() * 12 + 1);
    btnFourNum=Math.floor(Math.random() * 12 + 1);
    
    if (btnTwoNum===btnOneNum){
        while (btnTwoNum===btnOneNum){
            btnTwoNum=Math.floor(Math.random() * 12 + 1);  
            }
    } if (btnThreeNum==btnOneNum||btnTwoNum==btnThreeNum){
        while (btnThreeNum==btnOneNum||btnTwoNum==btnThreeNum){
            btnThreeNum=Math.floor(Math.random() * 12 + 1);  
            }
    } if (btnFourNum===btnOneNum||btnTwoNum===btnFourNum||btnFourNum===btnThreeNum){
        while(btnFourNum===btnOneNum||btnTwoNum===btnFourNum||btnFourNum===btnThreeNum){
            btnFourNum=Math.floor(Math.random() * 12 + 1); 
            }
    }

    targetNum=Math.floor(Math.random() * 60 ) + 30;
    currentNum=0;
    $("#presult").text("Target number: " + targetNum);
    $("#scoreBox").text(currentNum);
    $("#wins").text("Wins: " + wins);
    $("#loses").text("Losses: " + losses)
}
reset();

// button click functionality
$("#btnOne").click(function(){
    $(this).finish();
    shake(this);
    currentNum+=btnOneNum;
    $("#scoreBox").text(currentNum);
   
});

$("#btnTwo").click(function(){
    $(this).finish();
    shake(this);
    currentNum+=btnTwoNum;
    $("#scoreBox").text(currentNum);
   
});

$("#btnThree").click(function(){
    $(this).finish();
    shake(this);
    currentNum+=btnThreeNum;
    $("#scoreBox").text(currentNum);
   
});

$("#btnFour").click(function(){
    $(this).finish();
    shake(this);
    currentNum+=btnFourNum;
    $("#scoreBox").text(currentNum);      
   
});

// win/loss detector tied to the crystal button class
$(".crystalBtn").click(function(){
    if (currentNum===targetNum){
        wins ++;
        alert("You escaped with your haul!");
        reset();

    }  else if (currentNum>targetNum){
        losses ++;
        alert("Lost in the cavern...");
        reset();
        
    }  
   
});

 // makes buttons wiggle when clicked
    // courtesy of  https://jsfiddle.net/macloo/g39k3h3e/

    function shake(thing) {
        var interval = 60;
        var distance = 10;
        var times = 4;
      
        for (var i = 0; i < (times + 1); i++) {
          $(thing).animate({
            left:
              (i % 2 == 0 ? distance : distance * -1)
          }, interval);
        }
        $(thing).animate({
          left: 0,
          top: 0
        }, interval);
      }
});