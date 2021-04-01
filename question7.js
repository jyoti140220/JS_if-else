let readlinesync=require('readline-sync').question
let varx=parseInt(readlinesync("enter the 1st number :"))
let vary=parseInt(readlinesync("enter the 2nd number :"))
if (varx>vary){
    console.log(`the big number ${varx}`)
}else{
    console.log(`the big number ${vary}`)
}