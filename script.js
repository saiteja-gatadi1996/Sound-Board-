const sounds=['applause','boo','gasp','tada','victory','wrong'];

sounds.forEach(sound=>{
    const butn=document.createElement('button') //create a nameless button
    butn.classList.add('btn') //give the button functionality
    butn.innerText=sound; //give the sound functionality

    butn.addEventListener('click',()=>{
        stopSongs()
        document.getElementById(sound).play()
    })
    document.getElementById('buttons').append(butn)
}
)



function stopSongs(){
    sounds.forEach(sound=>{
        document.getElementById(sound).pause()
        //this is how we stop the song
        // song.currentTime=0;
    })}