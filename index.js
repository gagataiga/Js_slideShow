(function () {
  "use strict";

  let imageCount = 0;
  let myImages = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];

  let container = document.getElementById("content");
  let nextBtn = document.getElementById("next");
  let preBtn = document.getElementById("previous");
  // event
  nextBtn.addEventListener("click", function (e) {
      e.preventDefault();
      imageCount++;

      if (imageCount > (myImages.length - 1)) {
          imageCount = 0;
      }

       swapImage();
  });

  preBtn.addEventListener("click",function(){
      imageCount--;
      if(imageCount < 0){
          imageCount = myImages.length - 1;
      }

     swapImage();
      
  });

  function swapImage(){
      let newline = document.createElement("img");
      newline.src = `slides/${myImages[imageCount]}`;
      newline.className = "fadeinimg";
      container.appendChild(newline);

      if (container.children.length > 2) {
          container.removeChild(container.children[0]);
      }
  }
})();