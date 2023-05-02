let clientID = ${{ secrets.UNSPLASH }};
let endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`;

let imageElement = document.querySelector("#unsplashImage");
let imageLink = document.querySelector("#imageLink");
let creator = document.querySelector("#creator");

// Function to fetch a new random image
function fetchNewImage() {
  fetch(endpoint)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      imageElement.src = jsonData.urls.regular;
      // imageLink.setAttribute("href", jsonData.links.html);
      creator.innerText = jsonData.user.name;
      creator.setAttribute("target", "_blank"); // add target attribute to open in new tab
      creator.setAttribute("href", jsonData.user.portfolio_url);
    })
    .catch(function (error) {
      console.log("Error: " + error);
    });
}

// fetch new image on image click
imageElement.addEventListener('click', fetchNewImage);

// navigate to creator's portfolio on creator click
creator.addEventListener('click', fetchNewImage);

// Fetch the first random image
fetchNewImage();