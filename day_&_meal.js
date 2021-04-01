let readlinesync=require('readline-sync').question
let day=readlinesync("enter the day :-");
let meal=readlinesync("enter the meal :-")
if (day=="monday"){
    if (meal=="breakfast"){
        console.log("poha")
    }else if (meal=="lunch"){
        console.log("rajma chwal")
    }else if (meal=="dinner"){
        console.log("sabji roti")
    }
}else if (day=="tuesday"){
    if (meal=="breakfast"){
        console.log("megi")
    }else if (meal=="lunch"){
        console.log("thupka")
    }else if (meal=="dinner"){
        console.log("puri sabji")
    }
}else if (day=="sunday"){
    if (meal=="breakfast"){
        console.log("paratha")
    }else if (meal=="lunch"){
        console.log("pulav")
    }else if (meal=="dinner"){
        console.log("dal roti")
    }
}else{
    if (meal=="breakfast"){
        console.log("sprauts")
    }else if (meal=="lunch"){
        console.log("dal chwal")
    }else if (meal=="dinner"){
        console.log("panir roti")
    }

}