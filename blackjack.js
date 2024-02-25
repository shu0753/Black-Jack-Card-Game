var pcard=document.getElementById('pcard')
var ptotal=document.getElementById("ptotal")
var ctotal=document.getElementById("ctotal")
var startbtn=document.getElementById("startbtn")
var btn=document.getElementById("btn")
var message=document.getElementById("message")
var storage=[]
var PlayerSum=[]
var computerstorage=[]
var computerSum=[]
var game=true
var name= "Shubham"
var stake= '1000'
// -------------------random number------------------------
function ra(){
   var number=Math.floor(Math.random()*13+1)
   if (number==1){
    return 11
   }
   else if(number>10){
    return 10
   }
   else{
     return number
   }
}
// ------------Start game----------------
function start(){
    storage=[]
    computerstorage=[]
    var PlayerCardOne=ra()
    var PlayerCardTwo=ra()
    var computerCardOne=ra()
    var computerCardTwo=ra()
    // PlayerSum=0
    computerstorage.push(computerCardOne)
    computerstorage.push(computerCardTwo)
    storage.push(PlayerCardOne)
    storage.push(PlayerCardTwo)
    PlayerSum=PlayerCardOne+PlayerCardTwo
    // for(var i=0;i<storage.length;i++){
    //  PlayerSum+=storage[i]
    // }
    computerSum=computerCardOne+computerCardTwo
    print()
    btn.style.display=`block`
    startbtn.style.display=`none`
}
// -----------------printing function-----------------

function print(){
     pcard.innerHTML=`player cards:`
    for(i=0;i<storage.length;i++){
        pcard.innerHTML+=` ${storage[i]}`
    }
    ctotal.innerHTML=`Computer Total:${computerSum}`
    ptotal.innerHTML=`Player Total: ${PlayerSum}`
    if(PlayerSum==21){
        message.innerHTML=`~${name} Won Rs.${stake*2} and The Game~`
        message.style.color=`yellow`
    }
    else if(PlayerSum>21){
        message.innerHTML=`Sorry ${name} you Lost The Game and Rs.${stake}`
        message.style.color=`black`
    }
    else{
        message.innerHTML=`Do You Want New Card ?`
        message.style.color=`orange`
    }
}
// ------------new card--------------------

function newCard(){
    if(PlayerSum<21 && game==true){
    var playerCardThree=ra()
    storage.push(playerCardThree)
    PlayerSum +=playerCardThree
    print()
    }
    if(PlayerSum==21){
        cnewCard()
    }
}
// -----------------computer new card-------------
function cnewCard(){
    var computerCardThree=ra()
    if(computerSum<17){
    var computerCardThree=ra()
    computerstorage.push(computerCardThree)
    computerSum +=computerCardThree
    print()
   }
   if((PlayerSum>computerSum && PlayerSum<=21) || (PlayerSum<computerSum && computerSum>21)){
    message.innerHTML=`~${name} Won ${stake*2} The Game~`
    message.style.color=`yellow`
   }
   else if((PlayerSum<computerSum && computerSum<=21) || (PlayerSum>computerSum && computerSum<21)){
    message.innerHTML=`Sorry ${name} you Lost The Game and ${stake} `
    message.style.color=`black`
   }
   else{
    message.innerHTML=`DRAW ~_~`
    message.style.color=`orange`
   }
   game=false
}
