Here the second part of this game's evolution.

On init method, I push only one asset (https://github.com/geomensione/geomensione.github.io/blob/c241605258bc194f2d1ff875c7de98d4c2e289f8/LOWREZJAM-2/js/Utils.js#L49): in its draw method, using a data structure that represents the screen layout (https://github.com/geomensione/geomensione.github.io/blob/c241605258bc194f2d1ff875c7de98d4c2e289f8/LOWREZJAM-2/assets/rock.js#L6) it adds level element and the hero.

In the move function, I always check if hero collides with level entities ( for example, https://github.com/geomensione/geomensione.github.io/blob/c241605258bc194f2d1ff875c7de98d4c2e289f8/LOWREZJAM-2/assets/hero.js#L44 )


