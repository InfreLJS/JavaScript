window.addEventListener("load", init, false);
window.addEventListener("keydown", keyDown, false);
window.addEventListener("keyup", keyUp, false);

var keys = [];

function keyDown(e) {
    keys[e.keyCode] = true;
    console.log(e.keyCode);
}

function keyUp(e) {
    keys[e.keyCode] = false;
}
