//SOURCE: https://spotifycharts.com/
var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Spotify%20Charts/Top%2050%20USA.csv"
var rank = getColumn(url,1);
var song = getColumn(url,2);
var artist = getColumn(url,3)

//function used for the clear button 
function clearButton(){
    //resets the output box to nothing 
    document.getElementById("outputBox").innerHTML = " ";
}

//create a list of all of the artists without doubles 
var uniqueArtists = [];
//loop through the list of artists
//for each artist, check if it is in the new list and if not, add it
for(var i = 0; i < artist.length; i++){
    if(!uniqueArtists.includes(artist[i])){
        uniqueArtists.push(artist[i])
    }
}
console.log(uniqueArtists);

//create a dropdown with all of the artists
var dropdown = document.getElementById("artist");
//loop through the uniqueArtists list 
//for each artist create a new option in the dropdown 
for(var i = 0; i < uniqueArtists.length; i++){
    var option = document.createElement("option");
    option.innerHTML = uniqueArtists[i]
    dropdown.appendChild(option);
}

//function that finds the songs and the ranks from the artist input 
function getResultsA(){
//creating a variable for the specific artist selected
var selectedArtist = document.getElementById("artist").value;
console.log(selectedArtist);

//resetting the outputbox to nothing before every loop 
document.getElementById("outputBox").innerHTML = " "

//loop through artists
for(var i = 0; i < artist.length; i++){
    //find when the selected artist is the same as the artist in the list
    if(artist[i] == selectedArtist){
        //give the song and the rank at the same index as the artist in the artist list
        document.getElementById("outputBox").innerHTML += rank[i] + ". ";
        document.getElementById("outputBox").innerHTML += song[i] + "<br><br>";
        
    }
}

}

//function for the button that leads the the find by rankings page
function rankings(){
    location.replace("rankings.html");
}

//function for the button that leads to the mini game 
function game(){
    location.replace("minigame.html");
}

