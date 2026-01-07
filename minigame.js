var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Spotify%20Charts/Top%2050%20USA.csv"

var songs = getColumn(url,2);
var artist = getColumn(url,3);
var popularities = getColumn(url,4);

var pair;
var popularity;

console.log(songs);
console.log(artist);

newRound();
function newRound() {
  pair = [];
  popularity = [];
  art = [];
  while (pair.length < 2) {
    var index = Math.floor(Math.random() * songs.length);
    console.log(index);
    const song = songs[index];
    const pop = popularities[index];
    const aname = artist[index];
    if (!pair.includes(song)) {
      pair.push(song);
      popularity.push(pop);
      art.push(aname);
    }
  }

  document.getElementById("song1Btn").textContent =
pair[0] + " "+"by" + " " + art[0];

  document.getElementById("song2Btn").textContent =
pair[1]+" "+"by"+" "+art[1];
}

function guess(choice) {
  var correct = 0; 
  if (popularity[0] < popularity[1]){
    correct=1
  }

  if (choice === correct) {
    window.location.href = "correct.html";
  } else {
    window.location.href = "wrong.html";
  }
}

//function for the button that leads the the find by rankings page
function rankings(){
    location.replace("rankings.html");
}

//function for the button that leads the the find by artist page
function findByArtist(){
    location.replace("artist.html");
}

//function for the button that leads back to the minigame.html from the wrong.html
function tryAgain(){
  location.replace("minigame.html");
}

////function for the button that leads back to the minigame.html from the correct.html
function playAgain(){
  location.replace("minigame.html");
}

