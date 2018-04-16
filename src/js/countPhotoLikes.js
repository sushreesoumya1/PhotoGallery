var likedBubbles=0;
var likedLandscape=0;
var likedWave=0;
var likedSunrise=0;

function countLikes(photoNum){
    
    console.log("-------------------countLikes-----------------");
    switch(photoNum){
        case 1:
        likedBubbles++;
        document.getElementById("likedBubbles").innerHTML = likedBubbles;
        break;

        case 2:
        likedLandscape++;
        document.getElementById("likedLandscape").innerHTML = likedLandscape;
        break;

        case 3:
        likedWave++;
        document.getElementById("likedWave").innerHTML = likedWave;
        break;

        case 4:
        likedSunrise++;
        document.getElementById("likedSunrise").innerHTML = likedSunrise;
        break;
    }
   
    console.log("-------------------likedBubbles : "+likedBubbles);
    console.log("-------------------likedLandscape : "+likedLandscape);
    console.log("-------------------likedWave : "+likedWave);
    console.log("-------------------likedSunrise : "+likedSunrise);

}
