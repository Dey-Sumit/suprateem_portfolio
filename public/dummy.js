// function getImg() {
//   console.log("clicked");
// }
function getImg(imgwidth, imgheight) {

  //for gray scale image
  var gray = false;
  var checkBox = document.getElementById("myCheck");
  if (checkBox.checked == true) {
    gray = true
  }

  //modify the fetch API url
  var fetch_url = ''
  if (gray)
    fetch_url = `https://picsum.photos/${imgwidth}/${imgheight}/?grayscale`
  else
    fetch_url = `https://picsum.photos/${imgwidth}/${imgheight}/?random`

  var img = null;
  fetch(fetch_url)
    .then(response => {
      //create a new image and set the src
      img = new Image();
      img.src = response.url;
      console.log("image loaded");

      let node = document.getElementById("img-holder");
      node.appendChild(img);

    })
    .catch(err => console.log(err))
}