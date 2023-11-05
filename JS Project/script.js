document.getElementById("play_button").addEventListener("click", shuffleImages);

function shuffleImages() {
  let images = document.getElementsByTagName("img");
  let images_src = [];

  // Create array of the images' src attributes
  for (let i = 0; i < images.length; i++) {
    images_src.push(images[i].src);
  }

  // Use Fisher-Yates shuffle algorithm to shuffle src attributes
  for (let i = images_src.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = images_src[i];
    images_src[i] = images_src[j];
    images_src[j] = temp;
  }
  
  // Set the images' src attributes to the shuffled src attributes
  for (let i = 0; i < images.length; i++) {
    images[i].src = images_src[i];
  }
}