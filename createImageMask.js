//from https://www.geeksforgeeks.org/p5-js-image-mask-method/

function preload() {
    img_orig =
      loadImage("sample-image.png");
    img_mask =
      loadImage("image-mask.png");
}
  
function setup() {
    createCanvas(500, 500);
    textSize(20);
  
    btnBlur =
      createButton("Add a mask to the image");
    btnBlur.position(30, 420);
    btnBlur.mousePressed(applyMask);
}
  
function draw() {
    clear();
  
    text("Click on the button to add " +
         "a mask to the image", 20, 20);
    text('Image:', 20, 60);
    image(img_orig, 20, 80, 200, 100);
  
    text("Mask:", 20, 220);
    image(img_mask, 20, 220, 180, 180);
}
  
function applyMask()
{
    // Apply the given mask to the image
    img_orig.mask(img_mask);
}
