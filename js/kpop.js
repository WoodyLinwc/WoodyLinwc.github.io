const baseUrl = 'https://woodylinwc.github.io/Image-Storage/GIDLE/';
    
    // Number of images in the directory
    const numberOfImages = 1260; // Change this to the actual number of images
    
    // Function to load a random image
    function loadRandomImage() {
      // Generate a random image index
      const randomIndex = Math.floor(Math.random() * numberOfImages);
      
      // Construct the image URL
      const imageUrl = `${baseUrl}image_${randomIndex}.JPG`;

      // Set the source of the image
      document.getElementById('randomKpop').src = imageUrl;
    }

    // Initial load of a random image
    loadRandomImage();