// https://compressjpeg.com/

function generateRandomImage() {
    const imageContainer = document.getElementById('image-container');
    const randomIndex = Math.floor(Math.random() * 2) + 1;
    const imageUrl = '/img/redpanda/red' + randomIndex + '-min.JPG';
    const randomImage = document.getElementById('random-image');
    randomImage.src = imageUrl;
    console.log(imageUrl);
}
generateRandomImage();
  

