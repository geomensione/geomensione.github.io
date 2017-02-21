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
            tones.play(note, 1);
        }
        prevTime = now;
        requestAnimationFrame(play);
    }

}
