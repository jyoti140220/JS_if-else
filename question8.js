let readlinesync=require('readline-sync').question
let varx=parseInt(readlinesync("enter the number :"))
if (varx%5==0 && varx%15==0){
    console.log("Divisible hai");
}else{
    console.log("Divisible nhi hai")
}