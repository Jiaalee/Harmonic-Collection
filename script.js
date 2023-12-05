function changeImage() {
    var images = ["img/Group 83 (1).svg", "img/Group 84 (1).svg", "img/Group 85.svg", "img/Group 86.svg", "img/Group 87.svg"]; // Array of image paths
    var imgElement = document.getElementById('clickableImage');
    var currentIndex = images.indexOf(imgElement.src); // Get the index of the current image
  
    // Get a random index that is not the current index
    var randomIndex = currentIndex;
    while (randomIndex === currentIndex) {
      randomIndex = Math.floor(Math.random() * images.length);
    }
  
    imgElement.src = images[randomIndex]; // Change the image source to the randomly selected image
  }
  