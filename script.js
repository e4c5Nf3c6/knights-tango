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


/* var expand1 = document.getElementById('expand1');
expand1.addEventListener('click', expand);

function expand() {
    var childList = expand1.getElementsByTagName('ol');
    for (var x = 0; x < childList.length; x++) {
        var currentState = childList[x].style.display;
        if (currentState.match("none")) {
            childList[x].style.display="block";
        }
        else {
            childList[x].style.display="none";
        }
    }
}
*/