var Rover = {
    x: 0,
    y: 0,
    direction: "N",
    goForward: function() {
        switch (Rover.direction) {
            case "N":
            [Rover.x][Rover.y++];
            break;
            case "S":
            [Rover.x][Rover.y--];
            break;
            case "E":
            [Rover.x++][Rover.y];
            break;
            case "W":
            [Rover.x--][Rover.y];
            break;
        }
        reset();
        var node = document.getElementById("coordinates");
        node.innerHTML = "coordinates: [" + Rover.x + "]";
        node.innerHTML += "[" + Rover.y + "]";
        node.innerHTML += " direction: [" + Rover.direction + "]";

    },
    goBackward: function() {
        switch (Rover.direction) {
            case "N":
            [Rover.x][Rover.y--];
            break;
            case "S":
            [Rover.x][Rover.y++];
            break;
            case "E":
            [Rover.x--][Rover.y];
            break;
            case "W":
            [Rover.x++][Rover.y];
            break;
        }
        reset();
        var node = document.getElementById("coordinates");
        node.innerHTML = "coordinates: [" + Rover.x + "]";
        node.innerHTML += "[" + Rover.y + "]";
        node.innerHTML += " direction: [" + Rover.direction + "]";
    },
    goRight: function() {
        if (Rover.direction === "N") {
            Rover.direction = "E";
        } else if (Rover.direction === "E") {
            Rover.direction = "S";
        } else if (Rover.direction === "S") {
            Rover.direction = "W";
        } else {
            Rover.direction = "N";
        }
        var node = document.getElementById("coordinates");
        node.innerHTML = "coordinates: [" + Rover.x + "]";
        node.innerHTML += "[" + Rover.y + "]";
        node.innerHTML += " direction: [" + Rover.direction + "]";
    },
    goLeft: function() {
        if (Rover.direction === "N") {
            Rover.direction = "W";
        } else if (Rover.direction === "W") {
            Rover.direction = "S";
        } else if (Rover.direction === "S") {
            Rover.direction = "E";
        } else {
            Rover.direction = "N";
        }
        var node = document.getElementById("coordinates");
        node.innerHTML = "coordinates: [" + Rover.x + "]";
        node.innerHTML += "[" + Rover.y + "]";
        node.innerHTML += " direction: [" + Rover.direction + "]"
    }
};


function reset() {
    if (Rover.x > 10) {
        Rover.x = 0;
    } else if (Rover.x < 0) {
        Rover.x = 10;
    }

    if (Rover.y > 10) {
        Rover.y = 0;
    } else if (Rover.y < 0) {
        Rover.y = 10;
    }
}


var fw = document.getElementById('forward');
fw.onclick = Rover.goForward;


var bw = document.getElementById('backwards');
bw.onclick = Rover.goBackward;

var lf = document.getElementById('left');
lf.onclick = Rover.goLeft;

var rt = document.getElementById('right');
rt.onclick = Rover.goRight;

var node = document.getElementById("coordinates");
node.innerHTML = "coordinates: [" + Rover.x + "]";
node.innerHTML += "[" + Rover.y + "]";
node.innerHTML += " direction: [" + Rover.direction + "]";
