function changeImage() {
    var images = ["img/Group 83 (1).svg", "img/Group 84 (1).svg", "img/Group 85.svg", "img/Group 86.svg", "img/Group 87.svg"];
    var imgElement = document.getElementById('clickableImage');
    var currentIndex = images.indexOf(imgElement.src);
  
    var randomIndex = currentIndex;
    while (randomIndex === currentIndex) {
      randomIndex = Math.floor(Math.random() * images.length);
    }
  
    imgElement.src = images[randomIndex];
  }
  
  function changeImage2() {
    var images = ["img/Group 73 copy 2.svg", "img/Group 74 copy.svg"];
    var imgElement = document.getElementById('clickableImage2');
    var currentIndex = images.indexOf(imgElement.src);
  
    var randomIndex = currentIndex;
    while (randomIndex === currentIndex) {
      randomIndex = Math.floor(Math.random() * images.length);
    }
  
    imgElement.src = images[randomIndex];
    
    var container = document.getElementById('imageContainer');
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';

  imgElement.style.width = '350px'; // Set the width to 150 pixels
  imgElement.style.height = '800px'; // Set the height to 150 pixels

  }

  function changeImage3() {
    var images = ["img/Group 88.svg", "img/Group 89.svg", "img/Group 90.svg", "img/Group 91.svg", "img/Group 92.svg"];
    var imgElement = document.getElementById('clickableImage3');
    var currentIndex = images.indexOf(imgElement.src);
  
    var randomIndex = currentIndex;
    while (randomIndex === currentIndex) {
      randomIndex = Math.floor(Math.random() * images.length);
    }
  
    imgElement.src = images[randomIndex];
  }