var image = document.getElementById('board');
image.addEventListener('click', moveForward)

function moveForward() {
    var input = document.getElementById('board');
    if (input.src.match("Media/startingposition.png")) {
        input.src="Media/move1a.png";
    } else if (input.src.match("Media/move1a.png")) {
        input.src="Media/move1b.png";
    } else if (input.src.match("Media/move1b.png")) {
        input.src="Media/move2a.png";
    } else if (input.src.match("Media/move2a.png")) {
        input.src="Media/move2b.png";
    } else if (input.src.match("Media/move2b.png")) {
        input.src="Media/startingposition.png";
    }
}