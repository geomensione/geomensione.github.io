function soundtrack() {

    var timing = 250;
    var notes = [ "C", "C#" ];
    var prevTime = tones.getTimeMS();
    var elapsed = 0;

    play();

    var index = 0;

    function play() {
        var now = tones.getTimeMS();
        elapsed += now - prevTime;
        if(elapsed > timing) {
            while(elapsed > timing) elapsed -= timing;
            var note = notes[index];
            index = (index===0)?index+1:0;
            var octave = Math.floor(Math.random() * 10);
            tones.play(note, octave);
        }
        prevTime = now;
        requestAnimationFrame(play);
    }

}
