Video and description

https://youtu.be/OgVIILCXqos

All starts in index.html file, when in the js we call initLowRezCanvas method, passing the resolution of the canvas.

In this method we check if canvas exists, calculate the size of the canvas pixel, set key events handler and put the only sprite we have, the hero.

We set key down and up events handler, where we set the vertical or horizontal direction of hero sprite and if it's moving or not.

In the gameLoop method, executed 30 times of second, we call draw method of every sprite present in game array.

In hero's draw method we set position, depends on the direction and if the sprite is moving or not, and draw the sprite and the animation (if hero is moving up, so helicopter rotor rotating)

Contact me for any questions...

I'm preparing part 2!


