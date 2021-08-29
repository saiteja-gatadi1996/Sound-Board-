const sounds=['applause','boo','gasp','tada','victory','wrong'];

sounds.forEach(sound=>{
    const btn=document.createElement('button').classList.add('btn').innerText=sound;
    
    btn.addEventListener('click',()=>{
        stopSongs()
        document.getElementById(sound).play()
    })
    document.getElementById('buttons').append(btn)
})

function stopSongs(){
    sounds.forEach(sound=>{
        const song= document.getElementById(sound)

        song.pause()
        //this is how we stop the song
        song.currentTime=0;
    })}