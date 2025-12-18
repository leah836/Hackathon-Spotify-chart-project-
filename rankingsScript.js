var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Spotify%20Charts/Top%2050%20USA.csv"
var rank = getColumn(url,1);
var song = getColumn(url,2);
var artist = getColumn(url,3)

function clearButton(){
    document.getElementById("outputBox").innerHTML = " ";
}

function findByArtist(){
    location.replace("artist.html");
}

var dropdown = document.getElementById("rank");
for(var i = 0; i < rank.length; i++){
    var option = document.createElement("option");
    option.innerHTML = rank[i]
    dropdown.appendChild(option);
}

function getResultsB(){
var selectedRank = document.getElementById("rank").value;
console.log(selectedRank);

document.getElementById("outputBox").innerHTML = " "

for(var i = 0; i < rank.length; i++){
    if(rank[i] == selectedRank){
        document.getElementById("outputBox").innerHTML += song[i] + " "+ "-"+" ";
        document.getElementById("outputBox").innerHTML += artist[i] + "<br>";
        
    }
}
}