function searchSong() {
  searchInput = document.getElementById("searchInput");
  console.log(searchInput.value);

  fetch(`https://api.lyrics.ovh/suggest/${searchInput.value}`)
    .then((response) => response.json())
    .then((response) => {
      showSongs(response.data);
      console.log(response.data);
    });
}
function showSongs(song) {
  let songContainer = document.getElementById("song-container");
  songContainer.innerHTML = "";
  song.forEach((data) => {
    let songDiv = document.createElement("div");
    songDiv.className =
      "music music sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto m-4 p-4 rounded-2xl bg-stone-50/20 md:flex justify-between align-center";
    songDiv.innerHTML = `
            <div class="detail flex w-full justify-center md:justify-start md:w-1/2 items-center">
                <img src="${data.album.cover}" class="w-16 h-16 rounded-md">
                <div class="">
                    <p class="song-title mx-4 text-cyan-50 text-xl tracking-wider ">${data.title}</p>
                    <p class="artist mx-4 text-cyan-200 text-xs">${data.artist.name}</p>
                </div>
            </div>
            <div class="play items-center md:w-1/2 mt-3 md:mt-0 mx-auto flex">
                <audio controls class="bg-none mx-auto">
                    <source src="${data.preview}">
                </audio>
            </div>`;

    songContainer.appendChild(songDiv);
    //   console.log(songContainer);
  });
}

{
  /* <div class="detail flex items-center">
      <img src="${data.album.cover}" class="w-16 h-16 rounded-md">
      <div>
        <p class="song-title mx-4 text-cyan-50 text-xl tracking-wider">${data.title}</p>
        <p class = "artist mx-4 text-cyan-300 text-xs">${data.artist.name}</p>
      </div>  
    </div>
    <div class="play items-center flex">
      <audio controls >
        <source src = '${data.preview}'>
      </audio>
    </div> */
}
