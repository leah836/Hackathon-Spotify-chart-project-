let songs = [];
let pair = [];

fetch("https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Spotify%20Charts/Top%2050%20USA.csv")
  .then(res => res.text())
  .then(data => {
    const rows = data.split("\n").slice(1);

    songs = rows.map(row => {
      const cols = row.split(",");
      return {

        artist: cols[2],
        popularity: Number(cols[3])
      };
    });

    newRound();
  });

function newRound() {
  pair = [];

  while (pair.length < 2) {
    const song = songs[Math.floor(Math.random() * songs.length)];
    if (!pair.includes(song)) pair.push(song);
  }

  document.getElementById("song1Btn").textContent =
pair[0].artist;

  document.getElementById("song2Btn").textContent =
pair[1].artist;
}

function guess(choice) {
  const correct =
    pair[0].popularity > pair[1].popularity ? 1 : 2;

  if (choice === correct) {
    window.location.href = "correct.html";
  } else {
    window.location.href = "wrong.html";
  }
}