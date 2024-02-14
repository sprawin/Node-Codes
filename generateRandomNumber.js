function generateRandomNumber(min,max){
    console.log(Math.random());
    return Math.floor(
        Math.random()*(max-min+1)+min
    );
}
