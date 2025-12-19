var url ="https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Spotify%20Charts/Top%2050%20USA.csv"
var position = getColumn(url,1)
var trackName = getColumn(url,2)
var artist = getColumn(url,3)
var popularity = getColumn(url,4)

function getResults(selectedArtist){
    var selectedArtist = document.getElementById('artistName').value;
    console.log(selectedArtist)

    var matchingTrack = [];
    var matchingPosition = [];
    for(var i=0; i < artist.length; i++){
        if(artist[i] == selectedArtist){
            matchingTrack.push(trackName[i])
            matchingPosition.push(position[i])

        }
    }
    console.log(matchingPosition);
    

    document.getElementById("outputBox").innerHTML = "";
    for(var i=0; i < matchingTrack.length; i++){
    var artistname = document.createElement("p");
    artistname.innerHTML = matchingTrack[i];


    var trackPosition = document.createElement("p");
    trackPosition.innerHTML = matchingPosition[i];

    document.getElementById("outputBox").appendChild(artistname);
    document.getElementById("outputBox").appendChild(trackPosition);
}
console.log(trackPosition)
console.log(artistname)
}

function game(){
    location.replace("minigame.html");
}
