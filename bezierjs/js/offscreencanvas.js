onmessage = function(evt) {
  var canvas = evt.data.canvas;
  var gl = canvas.getContext("webgl");

  // ... some drawing using the gl context ...
};
