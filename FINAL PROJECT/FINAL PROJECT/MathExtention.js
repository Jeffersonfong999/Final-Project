//Random Intergers value for nicknameIndex
Math.randomDec = function (low,high){
    return Math.random() * (high - low) + low 
}

Math.randomInt = function (low, high){
    return Math.floor(Math.randomDec(low, high))  
}