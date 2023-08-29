import songsData from "./songsList.json" assert { type: 'json' }
const songContainer = document.querySelector(".container ul")
console.log(songsData)

var audio = new Audio(songsData[0].path)


for (let i = 0 ; i<=songsData.length-1 ; i++){
    console.log(i);
    const songItem = document.createElement("li");
    songContainer.appendChild(songItem);
    const songDiv1 = document.createElement("div");
    songItem.appendChild(songDiv1);
    const songImg = document.createElement("span")
    const listImg = songImg.classList;
    listImg.add("songimg")
    songDiv1.appendChild(songImg)
    const songName = document.createElement("span")
    songName.innerHTML = `${songsData[i].name.slice(0, 30)}`;
    songDiv1.appendChild(songName)
    
    const songDiv2 = document.createElement("div");
    songItem.appendChild(songDiv2);
    const songTime = document.createElement("span");
    songTime.innerHTML = "00:00"
    songDiv2.appendChild(songTime)
    const songIcon = document.createElement("i");
    const list = songIcon.classList;
    list.add("fa-solid");
    list.add("fa-play");
    songDiv2.appendChild(songIcon)

}