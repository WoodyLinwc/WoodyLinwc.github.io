// https://compressjpeg.com/

function generateRandomImage() {
    const imageContainer = document.getElementById('image-container');
    const randomIndex = Math.floor(Math.random() * 2) + 1;
    const imageUrl = `/img/redpanda/red${randomIndex}-min.jpg`;
    // const imageUrl = `https://github.com/WoodyLinwc/WoodyLinwc.github.io/blob/main/img/redpanda/red${randomIndex}-min.JPG`;
    const randomImage = document.getElementById('random-image');
    const temp = imageUrl;
    randomImage.src = temp;
}
generateRandomImage();

