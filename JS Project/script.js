document.getElementById("play_button").addEventListener("click", shuffleImages);
document.getElementById("play_button").addEventListener("click", resetBoard);

let image_tiles = document.getElementsByClassName("image_tile");
for (let image_tile of image_tiles) {
  image_tile.addEventListener("click", function() {
    image_tile.classList.toggle("is_flipped");
  });
}

/** 
 * Shuffles all the image tiles on the board.
*/
function shuffleImages() {
  let images = document.getElementsByClassName("image_front");
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

/** 
 * Resets the board by flipping over all the image tiles.
*/
function resetBoard() {
  let image_tiles = document.getElementsByClassName("image_tile");

  // Flip all image tiles back over
  for (let image_tile of image_tiles) {
    image_tile.classList.add("is_flipped");
  }
}