console.log("Welcome to Spotify");

//Initialize the variables
let songIndex = 0;
let audioElement=new Audio("songs/1.mp3");
// audioElement.play();

let masterPlay=document.getElementById('masterPlay');
let myProgressBar= document.getElementById("myProgressBar");
let gif= document.getElementById("gif");
let masterSongName = document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {SongName:"waariye", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {SongName:"cielo", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {SongName:"DEAF KEV", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {SongName:"different Heaven", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {SongName:"Janji heroes", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {SongName:"Rabba", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {SongName:"Sakhiyaan", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {SongName:"Bhuladena", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {SongName:"Tumhari kasam", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"}, 
    {SongName:"Na Jaana", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].SongName;
})
//audioElement.play()

//Handle play/pause click
masterPlay.addEventListener ('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity=0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress; 
})
myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}

// songItemPlay.addEventListener ('click', ()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         songItemPlay.classList.remove("fa-circle-play");
//         songItemPlay.classList.add("fa-circle-pause");
//         gif.style.opacity=1;
//     }
//     else{
//         audioElement.pause();
//         songItemPlay.classList.remove("fa-circle-pause");
//         songItemPlay.classList.add("fa-circle-play");
//         gif.style.opacity=0;
//     }
// })


Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{

    element.addEventListener('click', (e)=>{
        makeAllPlays();
        // console.log(e.target);
        songIndex=parseInt(e.target.id);
        masterSongName.innerText = songs[songIndex].SongName;
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].SongName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    })

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].SongName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    })