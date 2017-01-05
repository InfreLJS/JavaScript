window.addEventListener("load", init, false);

function init() {
    try {
        canvas = document.getElementById("canvas");
        context = canvas.getContext("2d");

        button1 = document.getElementById("astarButton1");
        button2 = document.getElementById("astarButton2");
        button3 = document.getElementById("astarButton3");

        // 테스트용 버튼 3개의 클릭 메소드.
        // 각각 시작점, 끝점을 정해주고 시작점을 1(검은색), 끝점을 2(빨간색)로 설정한 뒤 astar메소드 실행시킴.
        button1.onclick = function() {
            console.log("AStar Button1 Clicked");
            astarStartX = 0;
            astarStartY = 0;
            astarEndX = 49;
            astarEndY = 49;
            map[astarStartY][astarStartX] = 1;
            map[astarEndY][astarEndX] = 2;
            astar(astarStartX, astarStartY, astarEndX, astarEndY);
        }

        button2.onclick = function() {
            console.log("AStar Button2 Clicked");
            astarStartX = 10;
            astarStartY = 10;
            astarEndX = 28;
            astarEndY = 39;
            map[astarStartY][astarStartX] = 1;
            map[astarEndY][astarEndX] = 2;
            astar(astarStartX, astarStartY, astarEndX, astarEndY);
        }

        button3.onclick = function() {
            console.log("AStar Button3 Clicked");
            astarStartX = 47;
            astarStartY = 39;
            astarEndX = 5;
            astarEndY = 21;
            map[astarStartY][astarStartX] = 1;
            map[astarEndY][astarEndX] = 2;
            astar(astarStartX, astarStartY, astarEndX, astarEndY);
        }

        setInterval(function() { // 화면에 그려줌.
            context.save();
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = "rgba(0,0,0,1)";
            context.fillRect(0, 0, map[0].length * tileSize, map.length * tileSize);
            for (var y = 0; y < map.length; y++) {
                for (var x = 0; x < map[0].length; x++) {
                    if (map[y][x] == 1) {
                        context.fillStyle = "rgba(0,0,0,1)";
                        context.fillRect(x * tileSize + 1, y * tileSize + 1, tileSize - 2, tileSize - 2);
                    } else if (map[y][x] == 2) {
                        context.fillStyle = "rgba(255,0,0,1)";
                        context.fillRect(x * tileSize + 1, y * tileSize + 1, tileSize - 2, tileSize - 2);
                    } else if (map[y][x] == 3) {
                        context.fillStyle = "rgba(255,255,0,1)";
                        context.fillRect(x * tileSize + 1, y * tileSize + 1, tileSize - 2, tileSize - 2);
                    } else if (map[y][x] == 4) {
                        context.fillStyle = "rgba(255,0,255,1)";
                        context.fillRect(x * tileSize + 1, y * tileSize + 1, tileSize - 2, tileSize - 2);
                    } else if (map[y][x] == 999) {
                        context.fillStyle = "rgba(255,55,255,1)";
                        context.fillRect(x * tileSize + 1, y * tileSize + 1, tileSize - 2, tileSize - 2);
                    } else {
                        context.fillStyle = "rgba(255,255,255,1)";
                        context.fillRect(x * tileSize + 1, y * tileSize + 1, tileSize - 2, tileSize - 2);
                    }
                }
            }
            context.fillStyle = "rgba(0,0,0,1)";
            context.restore();
        }, 100);
    } catch (e) { // 예외처리.
        if (e instanceof TypeError) {
            console.log("TypeError가 발생했습니다.");
        } else if (e instanceof ReferenceError) {
            console.log("ReferenceError가 발생했습니다.");
        }
    }
}
