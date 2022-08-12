console.log("Welcome to SANGEET");
let SongIndex = 1;
let audioElement = new Audio("SONGS/1.mp3");
let playit = document.getElementById("playit");
let myprogressbar = document.getElementById("myProgressBar");
let gift = document.getElementById("gift");
let current = document.getElementsByClassName("current");
let songItems = Array.from(document.getElementsByClassName("songitem"));
let songs = [
  {
    songName: "Jannat Ve",
    filePath: "SONGS/1.mp3",
    coverPath: "COVERS/cover1.jpg"
  },
  {
    songName: "Closer",
    filePath: "SONGS/2.mp3",
    coverPath: "COVERS/cover2.jpg"
  },
  {
    songName: "Believer",
    filePath: "SONGS/3.mp3",
    coverPath: "COVERS/cover3.jpg"
  },
  {
    songName: "Tum Hi Ho",
    filePath: "SONGS/4.mp3",
    coverPath: "COVERS/cover4.jpg"
  },
  {
    songName: "Phir Le Aaya Dil",
    filePath: "SONGS/5.mp3",
    coverPath: "COVERS/cover5.jpg"
  },
  {
    songName: "Side To Side",
    filePath: "songs/6.mp3",
    coverPath: "COVERS/cover6.jpg"
  },
  {
    songName: "Tera Chehra",
    filePath: "SONGS/7.mp3",
    coverPath: "COVERS/cover7.jpg"
  },
];

songItems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener("click",(e)=>{
      if (audioElement.paused || audioElement.currentTime <= 0)
      { makeAllPlays();
        SongIndex = parseInt(e.target.id)+1;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src="SONGS/"+SongIndex+".mp3";
        audioElement.currentTime=0;
        audioElement.play();
        gift.style.opacity = 1;
        current.innerText = songs[SongIndex-1].songName;
        playit.classList.remove("fa-play-circle");
        playit.classList.add("fa-pause-circle");
      }
      else{
        audioElement.pause();
        e.target.classList.remove('fa-pause-circle');
        e.target.classList.add('fa-play-circle');
        playit.classList.remove("fa-pause-circle");
        playit.classList.add("fa-play-circle");
        gift.style.opacity = 0;
      }
    })
})

playit.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    playit.classList.remove("fa-play-circle");
    playit.classList.add("fa-pause-circle");
    gift.style.opacity = 1;
  } else {
    makeAllPlays();
    audioElement.pause();
    playit.classList.remove("fa-pause-circle");
    playit.classList.add("fa-play-circle");
    gift.style.opacity = 0;
  }
});
document.getElementById("next").addEventListener('click',()=>{
    makeAllPlays();
    if(SongIndex==7)
    {
      SongIndex=1;
    }
    else
    {
      SongIndex+=1;
    }
    audioElement.src="SONGS/"+SongIndex+".mp3";
    audioElement.currentTime=0;
    audioElement.play();
    gift.style.opacity = 0;
    gift.style.opacity = 1;
    playit.classList.remove("fa-play-circle");
    playit.classList.add("fa-pause-circle");
})
document.getElementById("prev").addEventListener('click',()=>{
  makeAllPlays();
  if(SongIndex==1)
  {
    SongIndex=7;
  }
  else
  {
    SongIndex-=1;
  }
  audioElement.src="SONGS/"+SongIndex+".mp3";
  audioElement.currentTime=0;
  audioElement.play();
  gift.style.opacity = 0;
  gift.style.opacity = 1;
  playit.classList.remove("fa-play-circle");
  playit.classList.add("fa-pause-circle");
})
audioElement.addEventListener("timeupdate", () => {
  progress = parseFloat(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myprogressbar.value = progress;
});
myprogressbar.addEventListener("change", () => {
  audioElement.currentTime =
    (myprogressbar.value * audioElement.duration) / 100;
});
