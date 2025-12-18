var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Spotify%20Charts/Top%2050%20USA.csv"
var rank = getColumn(url,1);
var song = getColumn(url,2);
var artist = getColumn(url,3)

var uniqueArtists = [];
for(var i = 0; i < artist.length; i++){
    if(!uniqueArtists.includes(artist[i])){
        uniqueArtists.push(artist[i])
    }
}
console.log(uniqueArtists);

var dropdown = document.getElementById("artist");
for(var i = 0; i < uniqueArtists.length; i++){
    var option = document.createElement("option");
    option.innerHTML = uniqueArtists[i]
    dropdown.appendChild(option);
}

function getResultsA(){
var selectedArtist = document.getElementById("artist").value;
console.log(selectedArtist);

document.getElementById("outputBox").innerHTML = " "

for(var i = 0; i < artist.length; i++){
    if(artist[i] == selectedArtist){
        document.getElementById("outputBox").innerHTML += rank[i] + " ";
        document.getElementById("outputBox").innerHTML += song[i] + "<br>";
        
    }
}

console.log(matchingRank);
console.log(matchingSong);

}
