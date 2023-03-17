var input = document.getElementById('board');
input.addEventListener('click', moveForward)

function moveForward() {
    if (input.src="Media/startingposition.png") {
        input.src="Media/move2b.png";
    }
}