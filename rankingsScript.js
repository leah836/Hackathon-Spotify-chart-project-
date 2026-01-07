var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Spotify%20Charts/Top%2050%20USA.csv"
var rank = getColumn(url,1);
var song = getColumn(url,2);
var artist = getColumn(url,3)

//function used for the clear button 
function clearButton(){
    document.getElementById("outputBox").innerHTML = " ";
}

//function for the button that leads the the find by artist page
function findByArtist(){
    location.replace("artist.html");
}

//function for the button that leads to the mini game 
function game(){
    location.replace("minigame.html");
}

//creates the drop down for all of the ranks 1-49
var dropdown = document.getElementById("rank");
for(var i = 0; i < rank.length; i++){
    var option = document.createElement("option");
    option.innerHTML = rank[i]
    dropdown.appendChild(option);
}

/*function that loops through the rank list to find the match to the input
and makes the output box = the artist and song of that same index*/
function getResultsB(selectedRank){

document.getElementById("outputBox").innerHTML = " "

for(var i = 0; i < rank.length; i++){
    if(rank[i] == selectedRank){
        document.getElementById("outputBox").innerHTML += song[i] + " "+ "-"+" ";
        document.getElementById("outputBox").innerHTML += artist[i] + "<br>";
        
    }
}
}
