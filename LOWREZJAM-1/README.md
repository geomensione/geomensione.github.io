Video and description

https://youtu.be/OgVIILCXqos

All starts in index.html file, when in the js we call initLowRezCanvas method ( https://github.com/geomensione/geomensione.github.io/blob/a224e27c94e3a6560afb9505c84dcfe3b38afe12/LOWREZJAM-1/index.html#L15 ), passing the resolution of the canvas.

In this method we check if canvas exists ( https://github.com/geomensione/geomensione.github.io/blob/a224e27c94e3a6560afb9505c84dcfe3b38afe12/LOWREZJAM-1/js/Utils.js#L35 ), calculate the size of the canvas pixel ( https://github.com/geomensione/geomensione.github.io/blob/a224e27c94e3a6560afb9505c84dcfe3b38afe12/LOWREZJAM-1/js/Utils.js#L42 ), set key events handler and put the only sprite we have, the hero, in the game array ( https://github.com/geomensione/geomensione.github.io/blob/a224e27c94e3a6560afb9505c84dcfe3b38afe12/LOWREZJAM-1/js/Utils.js#L46 ) .

In the key down and up events handler we we set the vertical or horizontal direction of hero sprite and if it's moving or not ( https://github.com/geomensione/geomensione.github.io/blob/a224e27c94e3a6560afb9505c84dcfe3b38afe12/LOWREZJAM-1/js/Utils.js#L64 and https://github.com/geomensione/geomensione.github.io/blob/a224e27c94e3a6560afb9505c84dcfe3b38afe12/LOWREZJAM-1/js/Utils.js#L95 ) .

In the gameLoop method, executed 30 times of second ( https://github.com/geomensione/geomensione.github.io/blob/a224e27c94e3a6560afb9505c84dcfe3b38afe12/LOWREZJAM-1/js/Utils.js#L130 ) , we call draw method of every sprite present in game array.

In hero's draw method we set position ( https://github.com/geomensione/geomensione.github.io/blob/a224e27c94e3a6560afb9505c84dcfe3b38afe12/LOWREZJAM-1/assets/hero.js#L67 ), depends on the direction and if the sprite is moving or not, and draw the sprite ( https://github.com/geomensione/geomensione.github.io/blob/a224e27c94e3a6560afb9505c84dcfe3b38afe12/LOWREZJAM-1/assets/hero.js#L108 )  and the animation (if hero is moving up, helicopter rotor rotating [ https://github.com/geomensione/geomensione.github.io/blob/a224e27c94e3a6560afb9505c84dcfe3b38afe12/LOWREZJAM-1/assets/hero.js#L64 ] )

Contact me for any questions...

I'm preparing part 2, where I'll add screen entity, ground and wall assets, map generator.
In part 3 I'll add enemies, health, score and weapons.
In part 4 I'll add sound, splash screen, credits screen, demo screen.

So... stay tuned!


