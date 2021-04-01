let num=require('readline-sync').question
let water=parseInt(num("enter the level of water :"))
if (water<=1){
    console.log("pani bharna h")
}else if (water>1 && water<10){
    console.log("pani nhi bhrna h")
}else if (water>10){
    console.log("overflow")
}