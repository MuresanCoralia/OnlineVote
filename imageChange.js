function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 5000);
}

var images = [], x = -1;
images[0] = "poza1.jpg";
images[1] = "poza2.jpg";
images[2] = "poza3.jpg";
images[3] = "poza4.jpg";