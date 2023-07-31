document.addEventListener("DOMContentLoaded", function () {
    const videoContainer = document.getElementById("video-container");
    const imageContainer = document.getElementById("image-container");
    const backgroundVideo = document.getElementById("background-video");

    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const speed = connection.downlink;

    const thresholdSpeed = 2;

    if (speed >= thresholdSpeed) {
        videoContainer.style.display = "block";
        imageContainer.style.display = "none";
        backgroundVideo.play();
    } else {
        videoContainer.style.display = "none";
        imageContainer.style.display = "block";
    }

})