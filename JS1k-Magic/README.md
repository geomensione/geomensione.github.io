Exposes the canvas in window.a, the body in window.b, the canvas 2d or 3d context in window.c, and the document in window.d

the canvas is optional and fullscreen by default, configurable in submit form

WebGL shim (same as last year) and 3d context are also configurable

calling the demo restart function (top.reload()), is exactly the same as pressing the reload button and reinitialize the iframe

normalization of vendor prefixed API's (please notify me if something needs unprefixing/normalization)

Don't touch top or parent. Exception: top.reload(). You're allowed to adjust the url hash as long as you don't reload the page.
