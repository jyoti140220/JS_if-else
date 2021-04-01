let num=require('readline-sync');
let number=parseInt(num.question("enter the number :"));
if (number<10){
    console.log("10 se chota h");
}else if (number>10 && number<20){
    console.log("20 se chota h");
}else{
    console.log("20 se bda h");
}