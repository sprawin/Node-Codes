function generateRandomNumber(min,max){
    if(max < min){
        return undefined;
    }else{
        return Math.floor(
            Math.random()*(max-min+1)+min
        );
    }
}