let num_matches = 0;

document.getElementById("play_button").addEventListener("click", shuffleImages);
document.getElementById("play_button").addEventListener("click", resetBoard);

let image_tiles = document.getElementsByClassName("image_tile");
for (let image_tile of image_tiles) {
  image_tile.addEventListener("click", function() {
    image_tile.classList.toggle("is_flipped");
    image_tile.classList.toggle("is_picked");
    }
  );

  image_tile.addEventListener("click", checkForMatch);
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

  // Reset header text
  document.getElementById("header").innerHTML = "Welcome to Memory Match!";

  num_matches = 0;
}

/** 
 * Checks whether the picked image tiles are a match.
*/
function checkForMatch() {
  let picked_tiles = document.getElementsByClassName("is_picked");

  if (picked_tiles.length == 2) {
    // If the picked image tiles match
    if (picked_tiles[0].children[1].src == picked_tiles[1].children[1].src) {
      num_matches++;

      picked_tiles[1].classList.remove("is_picked");
      picked_tiles[0].classList.remove("is_picked");
      
      // Check if all matches are found
      if (num_matches == 6) {
        document.getElementById("header").innerHTML = "Congratulations!";
      }
    }

    // If the picked image tiles do not match
    else {
      // Flip the image tiles back over
      setTimeout(function() {
        let picked_tiles = document.getElementsByClassName("is_picked");
        
        picked_tiles[0].classList.add("is_flipped");
        picked_tiles[1].classList.add("is_flipped");

        picked_tiles[1].classList.remove("is_picked");
        picked_tiles[0].classList.remove("is_picked");
      }, 1000);
    }
  }
}