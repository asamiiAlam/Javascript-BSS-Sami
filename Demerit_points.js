

checkSpeed(100);
function checkSPeed(speed){
    const speedLimit=70;
    const kmPerPoint=5;
    if(speed<=speedLimit){
     console.log('Ok');
    } 
    else{
        let points=Math.floor((speed-speedLimit)/kmPerPoint);
        if(points>=12)
        {
            
        }
    }

}




