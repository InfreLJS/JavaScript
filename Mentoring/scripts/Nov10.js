"use strict"

let numOfPlayers = 2;
let numOfEnemies = 0;
let width = 20;
let height = 20;
let maxSpeed = 10000;
let accel = 0.5;

var charImg = new Image();
charImg.src = "images/보노보노.jpg";
var itemImg = new Image();
itemImg.src = "images/보노보노.jpg";

var canvas;
var context;

function init() {
    canvas = document.getElementById("screen");
    context = canvas.getContext("2d");

    for (var i = 0; i < numOfPlayers; i++) {
        var e = Entity(charImg, width, height, maxSpeed, accel);
        e.x = Math.random() * canvas.width;
        e.y = Math.random() * canvas.height;
    }
    for (var i = 0; i < numOfEnemies; i++) {
        var t = Item(itemImg, width, height);
        t.x = Math.random() * canvas.width;
        t.y = Math.random() * canvas.height;
    }

    loop();
}

function loop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < Entity.list.length; i++) {
        Entity.list[i].draw(context);
        Entity.list[i].update();
        if (keys[32]) {
            Entity.list[i].drawLine();
        }
        if (keys[37]) {
            Entity.list[i].move(180);
        }
        if (keys[38]) {
            Entity.list[i].move(270);
        }
        if (keys[39]) {
            Entity.list[i].move(0);
        }
        if (keys[40]) {
            Entity.list[i].move(90);
        }
    }

    for (var i = 0; i < Item.list.length; i++) {
        Item.list[i].draw(context);
    }

    requestAnimationFrame(loop);
}
