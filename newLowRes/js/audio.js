function soundtrack() {

    var timing = 250;
    var notes = [ "C#", "D#", "F#", "D#"];
    var prevTime = tones.getTimeMS();
    var elapsed = 0;

    play();


    function play() {
        var now = tones.getTimeMS();
        elapsed += now - prevTime;
        if(elapsed > timing) {
            while(elapsed > timing) elapsed -= timing;
            var note = notes[Math.floor(Math.random() * notes.length)];
            var octave = Math.floor(Math.random() * 10);
            tones.play(note, octave);
        }
        prevTime = now;
        requestAnimationFrame(play);
    }

}
