var $lastBall = $(".ball") ,
    $getBallBtn = $(".getBall-btn"),
    totalNumbers = 90 ,
    $cardNums = $(".cardBoard div") ;
    crossedNums = 0 ;

$getBallBtn.on("click" , getNewBall ) ;
$cardNums.on("click" , crossNumber ) ;



var allBalls = new Array(totalNumbers) ;

for(var i = 0 ; i < allBalls.length ; i++ ) {
    allBalls[i] = i + 1 ;
}




function getNewBall() {

    if(allBalls.length > 0 ) {
        var index =  Math.floor(Math.random() * allBalls.length) ;

        var droppedBall = allBalls[index] ;

        allBalls.splice(index,1) ;

        $lastBall.text(droppedBall) ;
    }
    else {
        $lastBall.text("end") ;
        $getBallBtn.remove();

    }

}





var allNumbers = new Array(totalNumbers) ;

for(var i = 0 ; i < allNumbers.length ; i++ ) {
    allNumbers[i] = i + 1 ;
}

for(var i = 0 ; i<15 ; i++) {

    var numIndex = Math.floor( Math.random() * allNumbers.length ) ;

    var numCarton = allNumbers[numIndex] ;

    $(".cardBoard div").eq(i).text(numCarton) ;

    allNumbers.splice(numIndex,1)
}




function crossNumber() {
    $(this).addClass("crossed") ;
    $(this).off("click") ;
    crossedNums++ ;

    if(crossedNums === $cardNums.length){
        alert("BINGO!");
    }
}