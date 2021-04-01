let readlinesync=require('readline-sync').question
let varx=parseInt(readlinesync("enter the 1st number :"))
let vary=parseInt(readlinesync("enter the 2nd number :"))
if (varx%vary==0){
    console.log("Divisible hai")
}else{
    console.log("Divisible nhi hai")
}