"use strict"

function hitTestCircle(target1, target2, distance) {
    if (Math.sqrt(Math.pow(target1.x - target2.x, 2) + Math.pow(target1.y - target2.y, 2)) < distance) {
        return true;
    } else {
        return false;
    }
}
