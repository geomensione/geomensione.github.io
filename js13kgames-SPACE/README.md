https://guides.github.com/features/mastering-markdown/

mondo in 3d con nave aliena che spara raggio traente per recuperare umani. Sono dalla parte degli alieni e mi sposto sulla superficie della terra. Ci saranno cose che mi impediranno di prendere gli umani, potrò potenziare e cambiare la dimensione della nave e del raggio

# resources:

https://threejs.org

https://cdnjs.com/libraries/three.js

# js13kgames-SPACE 

project wip https://geomensione.github.io/js13kgames-SPACE

Hit enemies https://geomensione.github.io/js13kgames-SPACE/v1.html

Score https://geomensione.github.io/js13kgames-SPACE/v2.html

Healt and game over https://geomensione.github.io/js13kgames-SPACE/v3.html

material, scale hero, collision detection https://geomensione.github.io/js13kgames-SPACE/v4.html

game play https://geomensione.github.io/js13kgames-SPACE/v5.html

titles https://geomensione.github.io/js13kgames-SPACE/v6.html

background shader https://geomensione.github.io/js13kgames-SPACE/v7.html https://threejsfundamentals.org/threejs/lessons/threejs-shadertoy.html

game level engine https://geomensione.github.io/js13kgames-SPACE/v8.html 

# ToDo

music (audioloader)

fire

"real" game over

use of x11 colors https://en.wikipedia.org/wiki/X11_color_names

# GAME PLAY

GROW: hit only blue sphere of the same size or smaller then hero

when hero grows, velocity increase else became slow

also enemies have different size and velocity

yellow enemies are bonus to change shape

s -> inizia livello 1 ->invece dei random guardo i valori in levels e se sono > 1 allora li passo a enemy. fino a quando non saranno creati tutti i valori del livello continuo a crearli. ogni volta che prendo un bug il punteggio del livello incrementa e se diventa uguale al numero dei bug del livello allora passo il livello ed il punteggio viene sommato a quello globale. Se finiscono i livelli allora game over. Se perdo tutte le vite perché prendo troppi rossi o neri, allora game over. Le vite si incrementano con quelli viola.

# Params

color and size of planet, color and size and shape and velocity and number of enemies, velocity and shape of hero.

# background shader

https://codepen.io/Fyrestar/pen/abOEOda

https://discourse.threejs.org/t/how-do-i-use-my-own-custom-shader-as-a-scene-background/13598/10

https://webgl-shaders.com/index.html

https://thebookofshaders.com/

https://github.com/patriciogonzalezvivo/glslCanvas

https://threejsfundamentals.org/threejs/lessons/threejs-shadertoy.html

https://webglfundamentals.org/webgl/lessons/webgl-shaders-and-glsl.html

https://developer.mozilla.org/en-US/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders

https://glslsandbox.com/

Pass data to shader via uniform

https://threejs.org/docs/#api/en/materials/ShaderMaterial.uniforms

# Background css houdini

https://houdini.how/

# procedural planet 

https://blogg.bekk.no/procedural-planet-in-webgl-and-three-js-fc77f14f5505 https://github.com/holgerl

https://bl.ocks.org/duhaime/801daaa005c373eab6847741bd3f497a

# a similar game 

https://playcanv.as/p/3G3RnfUz/

# SPRITES

https://threejs.org/examples/?q=spr#webgl_sprites

# 3D CSS

https://stackoverflow.com/questions/44492158/three-js-spherical-coordinates-formula

# js13kgames webpack starter

https://github.com/sz-piotr/js13k-webpack-starter

# scale

https://discourse.threejs.org/t/scaling-different-objects-to-a-particular-size/19672/2

https://discourse.threejs.org/t/does-three-have-any-kind-of-independent-unit-i-understand-that-a-unit-in-three-is-abstract-but-scale-set-seems-to-be-relative-to-the-models-imported-size/16019/3

# plane tangent

https://www.tutorialguruji.com/javascript/three-js-building-a-tangent-plane-through-point-on-a-sphere/

# music

https://sfbgames.itch.io/chiptone

# theme game off 2021 -> BUG!

https://itch.io/jam/game-off-2021
