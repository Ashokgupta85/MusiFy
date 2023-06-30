let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songLabel=document.getElementById('songLabel');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Love me-justin bieber", filepath:"songs/1.mp3", coverPath:"covers/1.jfif"},
    {songName:"Jo Humsafar Hum Nahi Hai", filepath:"songs/2.mp3", coverPath:"covers/2.jfif"},
    {songName:"Kithe Chaliye Tu", filepath:"songs/3.mp3", coverPath:"covers/3.jfif"},
    {songName:"Dil Galti Kar Baitha Hai", filepath:"songs/4.mp3", coverPath:"covers/4.jfif"},
    {songName:"Believer", filepath:"songs/5.mp3", coverPath:"covers/5.jfif"},
    {songName:"O Saathi", filepath:"songs/6.mp3", coverPath:"covers/6.jfif"},
    {songName:"Ranjha", filepath:"songs/7.mp3", coverPath:"covers/7.jfif"},
    {songName:"Tujhi Pe Mera Haq Hai", filepath:"songs/8.mp3", coverPath:"covers/8.jfif"},

]
songItems.forEach((element, i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
       element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
            console.log('timeupdate');

            progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
            myProgressBar.value=progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        
})
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
            makeAllPlays();
             songIndex=parseInt(e.target.id);
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src=`songs/${songIndex+1}.mp3`;
            songLabel.innerText=songs[songIndex].songName;
            audioElement.currentTime=0;
            audioElement.play();
            gif.style.opacity=1;
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0;
    }else{
        songIndex=songIndex+1;
    }

    audioElement.src=`songs/${songIndex+1}.mp3`;
    songLabel.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }else{
        songIndex=songIndex-1;
    }

    audioElement.src=`songs/${songIndex+1}.mp3`;
    songLabel.innerText=songs[songInde].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    
})